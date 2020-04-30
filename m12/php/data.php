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


// $c = connection, $ps = prepared statement, $st = statement type, $p = parameters
function makeQuery($c,$ps,$st,$p) {
	if($st!="" && $statement = @$c->prepare($ps)){
		if(
			@$statement->bind_param($st, ...$p) &&
			@$statement->execute()
		) {
			$r = fetchAll($statement->get_result());
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
				
  				(`uid`,`name`,`type`,`open_time`,`close_time`,`description`,`date_create` )
				VALUES
				(?,?,?,?,?,?,NOW())
				","isssss",$p);
			return ["result"=>"success"];
		case "insert_location":
			$r = makeQuery($c,"INSERT INTO
				`track_locations`
				(`sid`,`lat`,`lng`,`description`,`date_create`)
				VALUES
				(?,?,?,?,NOW())
				","idds",$p);
			return ["result"=>"success"];





	}
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