-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 02, 2020 at 12:37 PM
-- Server version: 5.6.47-cll-lve
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `yshang`
--

-- --------------------------------------------------------

--
-- Table structure for table `track_locations`
--

CREATE TABLE `track_locations` (
  `id` int(12) NOT NULL,
  `aid` int(12) NOT NULL,
  `lat` decimal(10,8) NOT NULL,
  `lng` decimal(11,8) NOT NULL,
  `description` text NOT NULL,
  `photo` varchar(128) NOT NULL,
  `icon` varchar(128) NOT NULL,
  `date_create` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `track_locations`
--

INSERT INTO `track_locations` (`id`, `aid`, `lat`, `lng`, `description`, `photo`, `icon`, `date_create`) VALUES
(1, 30, '37.34123000', '-122.07711600', 'Do est qui deserunt aute. Irure dolore irure deserunt ad officia enim sint non pariatur cillum adipisicing labore. Sit do nisi sit proident. Anim labore ex veniam ex nisi proident sunt in nostrud anim irure tempor.', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON', '2020-04-02 11:11:56'),
(2, 50, '37.30919000', '-122.01516000', 'Labore sit duis aute adipisicing reprehenderit non duis velit nisi enim Lorem aliquip ipsum aute. Ut amet ea reprehenderit aliqua in mollit consequat id voluptate. Commodo cillum eu tempor officia enim cillum. Eiusmod est enim commodo sint excepteur sit sint sunt incididunt fugiat irure consequat id incididunt.', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON', '2020-04-02 11:11:56'),
(3, 23, '37.44196000', '-121.96430300', 'Ullamco mollit pariatur non do veniam velit qui excepteur. Adipisicing commodo esse id deserunt qui. Sunt ullamco esse sunt id sint veniam laborum pariatur dolore et esse aute tempor irure. Quis ad ullamco consequat aute enim officia anim nulla.', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON', '2020-04-02 11:11:56'),
(4, 27, '37.36971000', '-122.05791700', 'Excepteur cupidatat quis mollit ea laborum magna nisi proident eiusmod occaecat cupidatat deserunt ipsum irure. Deserunt consequat minim aliquip ipsum nulla esse elit cillum ex irure velit. Pariatur dolore culpa occaecat aliquip elit. Et duis magna occaecat pariatur incididunt officia exercitation voluptate sit sit adipisicing ea.', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON', '2020-04-02 11:11:56'),
(5, 16, '37.46209000', '-122.04539800', 'Laboris consequat veniam cupidatat ea laborum deserunt laborum ea culpa mollit voluptate pariatur commodo ea. Nisi anim qui sint laborum amet aliquip. Nostrud aliquip fugiat ullamco aliqua tempor sit eiusmod. Ad cupidatat irure excepteur exercitation minim non esse.', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON', '2020-04-02 11:11:56'),
(6, 40, '37.40443000', '-121.98051000', 'Adipisicing ut velit pariatur cillum nostrud Lorem nostrud ea laborum. Do adipisicing tempor laborum fugiat. Minim deserunt laborum velit ex id ea excepteur fugiat laboris consectetur. Veniam aliqua voluptate nisi sunt officia amet cillum occaecat ullamco eu id reprehenderit eiusmod est.', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON', '2020-04-02 11:11:56'),
(7, 39, '37.45557000', '-121.96181100', 'Do anim proident est cillum esse magna adipisicing commodo officia ut. Nisi dolore laborum mollit cupidatat amet aute amet laborum culpa non et qui aliquip ex. Esse dolore est culpa velit tempor eiusmod cupidatat eiusmod. Ipsum ullamco officia laboris elit nostrud est laboris dolor velit sint ea dolor.', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON', '2020-04-02 11:11:56'),
(8, 19, '37.45063000', '-122.02006100', 'Occaecat minim et irure deserunt labore cillum culpa dolor fugiat nostrud sit pariatur exercitation. Fugiat cupidatat aute nisi aliqua ullamco reprehenderit labore duis esse aliquip eiusmod. Nisi enim voluptate ut nulla dolor sunt fugiat proident fugiat ex sint reprehenderit velit dolor. Voluptate voluptate proident non in.', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON', '2020-04-02 11:11:56'),
(9, 46, '37.31560000', '-122.07167800', 'Ullamco culpa labore qui nostrud ipsum velit nisi est mollit adipisicing aute irure in anim. Consectetur nisi pariatur ex ut reprehenderit amet do culpa fugiat sit nisi. Officia aliquip deserunt ullamco sit id anim sit deserunt ullamco. Labore incididunt veniam elit cupidatat do excepteur ullamco pariatur ex amet elit adipisicing ad deserunt.', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON', '2020-04-02 11:11:56'),
(10, 6, '37.34455000', '-122.01601000', 'Sint ullamco Lorem dolore aliqua pariatur ea. Amet ad nisi et duis consequat enim nostrud. Minim tempor elit fugiat aute veniam quis ut mollit mollit. Cupidatat excepteur est voluptate irure fugiat mollit sint ea culpa.', 'https://via.placeholder.com/400/', 'https://via.placeholder.com/100/888/fff/?text=ICON', '2020-04-02 11:11:56');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
