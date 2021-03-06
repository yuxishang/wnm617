<?php


function makeConn() {
	$host = "localhost";
	$user = "yshang";
	$pass = "YuxiBobo1019!";
	$dbname = "yshang";
	$c = new mysqli($host,$user,$pass,$dbname);
	if($c->connect_errno) die($c->connect_error);
	$c->set_charset('utf8');
	return $c;
}


function fetchAll($r) {
	$a = [];
	while($row = $r->fetch_assoc())
		$a[] = $row;
	return $a;
}

function makeUpload($file,$folder) {
	$filename = microtime(true) . "_" .
		$_FILES[$file]['name'];

	if(@move_uploaded_file(
		$_FILES[$file]['tmp_name'],
		$folder . $filename
	)) return ["result"=>$filename];
	else return [
		"error"=>"File Upload Failed",
		"_FILES"=>$_FILES,
		"filename"=>$filename
	];
}


// $c = connection, $ps = prepared statement, $st = statement type, $p = parameters
function makeQuery($c,$ps,$st,$p) {
	if($st!="" && $statement = @$c->prepare($ps)){
		if(
			@$statement->bind_param($st, ...$p) &&
			@$statement->execute()
		) {
			$r = substr($ps,0,6)=="SELECT" ?
				fetchAll($statement->get_result()):
				[];
			return [
				"params"=>$p,
				"qry"=>$ps,
				"result"=>$r
			];
		}
	} else {
		$r = $c->query($ps);
		if(!$c->errno) return [
			"qry"=>$ps,
			"result"=>fetchAll($r)
		];
	}
	return [
		"qry"=>$ps,
		"error"=>$c->error
	];
}



function makeStatement($c,$t,$p) {
	switch($t) {
		case "check_login":
			return makeQuery($c,"SELECT id FROM `track_users` WHERE username = ? AND password = md5(?)","ss",$p);
		case "users_all":
			return makeQuery($c,"SELECT * FROM `track_users`","",$p);
		case "shops_all":
			return makeQuery($c,"SELECT * FROM `track_shops`","",$p);
		case "locations_all":
			return makeQuery($c,"SELECT * FROM `track_locations`","",$p);

		/*
		SELECT * FROM table WHERE id=? AND price=? AND category =?
		ids
		67,59.99,'fruit'
		*/
		case "shops_from_user":
			return makeQuery($c,"SELECT * FROM `track_shops` WHERE uid = ?","i",$p);

		case "locations_from_shops":
			return makeQuery($c,"SELECT * FROM `track_locations` WHERE sid = ?","i",$p);

		case "user_by_id":
			return makeQuery($c,"SELECT * FROM `track_users` WHERE id = ?","i",$p);
		case "shop_by_id":
			return makeQuery($c,"SELECT * FROM `track_shops` WHERE id = ?","i",$p);
		case "location_by_id":
			return makeQuery($c,"SELECT * FROM `track_locations` WHERE id = ?","i",$p);

		case "recent_shop_locations":
			return makeQuery($c,"SELECT
				s.*, l.*
				FROM `track_shops` AS s
				LEFT JOIN (
					SELECT sid,lat,lng,icon
					FROM `track_locations`
					ORDER BY `date_create` DESC
				) AS l
				ON s.id = l.sid
				WHERE s.uid = ?
				GROUP BY l.sid
				","i",$p);

		
		// INSERT STATEMENTS

		case "insert_user":
			// Check for existing username or email
			$r = makeQuery($c,"SELECT id FROM `track_users` WHERE `username`=? OR `email`=?","ss",[$p[0],$p[1]]);
			if(count($r['result'])) return ["error"=>"Username or Email exists"];

			$r = makeQuery($c,"INSERT INTO
				`track_users`
				(`username`,`email`,`password`,`date_create`)
				VALUES
				(?,?,md5(?),NOW())
				","sss",$p);
			return ["result"=>"success"];

		case "insert_shop":
			$r = makeQuery($c,"INSERT INTO
				`track_shops`
				(`uid`,`name`,`type`,`open_time`,`close_time`,`date_create`)
				VALUES
				(?,?,?,?,?,NOW())
				","issss",$p);
			return ["result"=>"success"];

		case "insert_location":
			$r = makeQuery($c,"INSERT INTO
				`track_locations`
				(`sid`,`lat`,`lng`,`description`,`icon`,`date_create`)
				VALUES
				(?,?,?,?,'https://via.placeholder.com/100/888/fff/?text=ICON',NOW())
				","idds",$p);
			return ["result"=>"success"];



		// UPDATE STATEMENTS

		case "edit_user":
			$r = makeQuery($c,"UPDATE
				`track_users`
				SET
				`name`=?,
				`email`=?,
				`favoritestore`=?
				WHERE id=?
				","sssi",$p);
			return ["result"=>"success"];

		case "edit_user_password":
			$r = makeQuery($c,"UPDATE
				`track_users`
				SET
				`password`=?
				WHERE id=?
				","si",$p);
			return ["result"=>"success"];

		case "edit_shop":
			$r = makeQuery($c,"UPDATE
				`track_shops`
				SET
				`name`=?,
				`type`=?,
				`open_time`=?,
				`close_time`=?,
				`description`=?
				WHERE id=?
				","sssssi",$p);
			return ["result"=>"success"];

		case "edit_shop_image":
			$r = makeQuery($c,"UPDATE `track_shops` SET `img`=? WHERE id=?
				","si",$p);
			return ["result"=>"success"];

// DELETE STATEMENTS

		case "delete_user":
			$r = makeQuery($c,"DELETE FROM `track_users` WHERE id=?","i",$p);
			return ["result"=>"success"];
		case "delete_shop":
			$r = makeQuery($c,"DELETE FROM `track_shops` WHERE id=?","i",$p);
			return ["result"=>"success"];
		case "delete_location":
			$r = makeQuery($c,"DELETE FROM `track_locations` WHERE id=?","i",$p);
			return ["result"=>"success"];

		case "search_shops":
			$search = "%$p[0]%";
			return makeQuery($c,"SELECT
				*
				FROM `track_shopss`
				WHERE (
					`name` LIKE ? OR
					`type` LIKE ? OR
					`description` LIKE ?
				) AND uid = ?
				","sssi",[$search,$search,$search,$p[1]]);


	}
}

if(!empty($_FILES)) {
	$r = makeUpload("image","../../uploads/");
	die(json_encode($r));
}



// POST AND GET DUMP
$data = json_decode(file_get_contents("php://input"));

echo json_encode(
	makeStatement(
		makeConn(),
		@$data->type,
		@$data->params
	),
	JSON_NUMERIC_CHECK
);