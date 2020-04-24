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
-- Table structure for table `track_shops`
--

CREATE TABLE `track_shops` (
  `id` int(12) NOT NULL,
  `uid` int(12) NOT NULL,
  `name` varchar(32) NOT NULL,
  `type` varchar(32) NOT NULL,
  `open_time` varchar(32) NOT NULL,
  `open_hours` varchar(32) NOT NULL,
  `times` varchar(32) NOT NULL,
  `dates` varchar(32) NOT NULL,
  `img` varchar(128) NOT NULL,
  `description` text NOT NULL,
  `date_create` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `track_shops`
--

INSERT INTO `track_shops` (`id`, `uid`, `name`, `type`, `open_time`, `open_hours`, `times`, `dates`, `img`, `description`, `date_create`) VALUES
(1, 7, 'Telepark', 'Architecture', '12:00:00', '8', '1', '2018/11/1', 'https://via.placeholder.com/400/980/fff/?text=Telepark', 'Culpa aliqua duis sint nisi. Veniam ipsum et excepteur sint exercitation duis. Est dolor nulla ut ea dolore cillum dolore cupidatat sunt ad. Officia est laboris tempor eu.', '2020-04-02 11:53:48'),
(2, 1, 'Netility', 'Food', '10:00:00', '8', '6', '2018/7/19', 'https://via.placeholder.com/400/847/fff/?text=Netility', 'Ullamco mollit fugiat aliquip laborum nostrud sit et ea incididunt aliquip sit nulla. Velit fugiat sint ullamco adipisicing et deserunt Lorem aliqua consequat. Ea esse ea veniam laboris eiusmod velit aliquip commodo do laboris sit fugiat amet. Voluptate fugiat eu aute voluptate quis adipisicing cupidatat tempor ut.', '2020-04-02 11:53:48'),
(3, 5, 'Kog', 'Fashion', '11:00:00', '8', '0', '2019/10/11', 'https://via.placeholder.com/400/735/fff/?text=Kog', 'Non laboris ut dolor in eiusmod nostrud consequat amet nisi consectetur deserunt. Amet est nulla non proident commodo commodo tempor laboris. Veniam officia adipisicing incididunt amet Lorem excepteur do dolor nostrud. Sit pariatur sint irure cupidatat reprehenderit ipsum ad reprehenderit excepteur irure tempor.', '2020-04-02 11:53:48'),
(4, 6, 'Immunics', 'Art', '9:00:00', '8', '5', '2020/8/1', 'https://via.placeholder.com/400/892/fff/?text=Immunics', 'Cupidatat Lorem irure fugiat est reprehenderit. Aliqua quis laboris exercitation eiusmod tempor aliquip id anim sit. Eu labore ea qui ea id nisi reprehenderit ea reprehenderit nisi minim laborum est. Nulla fugiat officia aute cillum occaecat labore do nisi in aliqua laborum voluptate consectetur.', '2020-04-02 11:53:48'),
(5, 8, 'Exotechno', 'Architecture', '9:00:00', '8', '8', '2018/8/13', 'https://via.placeholder.com/400/982/fff/?text=Exotechno', 'Reprehenderit ullamco ad aliquip eiusmod veniam exercitation dolore. Nulla voluptate id minim non deserunt ea aliqua voluptate incididunt. Proident esse laborum pariatur minim voluptate dolore id id deserunt cupidatat. Esse incididunt reprehenderit dolore anim deserunt anim sit ex consequat incididunt proident.', '2020-04-02 11:53:48'),
(6, 9, 'Manglo', 'Fashion', '9:00:00', '8', '3', '2019/9/19', 'https://via.placeholder.com/400/803/fff/?text=Manglo', 'Dolor occaecat nisi veniam exercitation sunt consequat occaecat aliquip commodo quis fugiat exercitation elit. Dolore cillum anim laboris aute elit commodo ullamco ullamco non pariatur aliquip aliquip ea in. Voluptate deserunt nulla nostrud mollit exercitation culpa ad aute nostrud nisi laborum amet. Dolore nostrud irure ex dolore enim qui ut id officia irure.', '2020-04-02 11:53:48'),
(7, 6, 'Exospace', 'Food', '9:00:00', '8', '8', '2019/10/15', 'https://via.placeholder.com/400/973/fff/?text=Exospace', 'Proident consectetur nulla minim labore ea esse nulla. Nulla incididunt cupidatat occaecat labore consectetur amet exercitation excepteur ut. Cillum cupidatat veniam irure quis proident anim Lorem minim mollit deserunt non ipsum. Voluptate sunt dolor labore nulla elit aute do commodo magna adipisicing aliqua pariatur est.', '2020-04-02 11:53:48'),
(8, 8, 'Isologia', 'Food', '8:00:00', '8', '3', '2020/7/26', 'https://via.placeholder.com/400/893/fff/?text=Isologia', 'Esse pariatur deserunt velit culpa. Cupidatat commodo in non laborum duis minim. Ut culpa labore nostrud dolore eu reprehenderit. Velit sit veniam in ad ex ut.', '2020-04-02 11:53:48'),
(9, 7, 'Tripsch', 'Architecture', '9:00:00', '8', '1', '2018/8/17', 'https://via.placeholder.com/400/756/fff/?text=Tripsch', 'Duis officia laboris cillum est dolor amet voluptate commodo aute sunt ad. Ea ut consequat cillum occaecat dolore voluptate dolore deserunt exercitation minim culpa eu. Proident ea ullamco reprehenderit commodo dolore non aliquip ea. Laborum veniam est eiusmod exercitation occaecat cillum ex.', '2020-04-02 11:53:48'),
(10, 2, 'Polaria', 'Fashion', '9:00:00', '8', '2', '2020/7/5', 'https://via.placeholder.com/400/831/fff/?text=Polaria', 'Est excepteur excepteur nisi Lorem dolor eu reprehenderit officia qui non consequat. Cillum mollit pariatur consequat labore occaecat cillum anim esse commodo esse dolore. Dolore dolor exercitation non ullamco do aute cupidatat Lorem aute aliqua. Ea dolore non amet reprehenderit incididunt.', '2020-04-02 11:53:48');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
