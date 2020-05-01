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
-- Table structure for table `track_users`
--

CREATE TABLE `track_users` (
  `id` int(12) NOT NULL,
  `name` varchar(32) DEFAULT NULL,
  `username` varchar(32) DEFAULT NULL,
  `email` varchar(128) DEFAULT NULL,
  `password` varchar(32) DEFAULT NULL,
  `date_create` datetime DEFAULT NULL,
  `img` varchar(128) DEFAULT NULL,
  `days` int(12) DEFAULT NULL,
  `favoritestore` varchar(128) DEFAULT NULL,
  `timezone` varchar(128) DEFAULT NULL,
  `places` varchar(128) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `track_users`
--

INSERT INTO `track_users` (`id`, `name`, `username`, `email`, `password`, `date_create`, `img`, `days`, `favoritestore`, `timezone`, `places`) VALUES
(1, 'Rosalyn Jones', 'user1', 'user1@gmail.com', 'md5(\'pass\')', '2020-04-02 12:21:47', 'https://via.placeholder.com/400/949/fff/?text=user1', 44, 'Goop Mrkt', 'Mountain Standard Time(US & Canada)', 'Story, Lowcoast Pescadero, Franci Cakes'),
(2, 'Janine Hurley', 'user2', 'user2@gmail.com', 'md5(\'pass\')', '2020-04-02 12:26:54', 'https://via.placeholder.com/400/783/fff/?text=user2', 1, 'Hem', 'Mountain Standard Time(US & Canada)', 'Franci Cakes,Story,Franci Cakes'),
(3, 'Roy Gould', 'user3', 'user3@gmail.com', 'md5(\'pass\')', '2020-04-02 12:27:40', 'https://via.placeholder.com/400/784/fff/?text=user3', 79, 'Dover', 'Central Time(US & Canada)', 'San Jose Flea Market,San Jose Flea Market,San Jose Flea Market'),
(4, 'Jenifer Schroeder', 'user4', 'user4@gmail.com', 'md5(\'pass\')', '2020-04-02 12:27:40', 'https://via.placeholder.com/400/974/fff/?text=user4', 84, 'Dover', 'Hawaii Time(US & Canada)', 'lowcoast Pescadero,Franci Cakes,Lady M'),
(5, 'Weiss Baldwin', 'user5', 'user5@gmail.com', 'md5(\'pass\')', '2020-04-02 12:27:40', 'https://via.placeholder.com/400/703/fff/?text=user5', 2, 'Hem', 'Pacific Time(US & Canada)', 'lowcoast Pescadero,San Jose Flea Market,The Assembly'),
(6, 'Drake Nichols', 'user6', 'user6@gmail.com', 'md5(\'pass\')', '2020-04-02 12:27:40', 'https://via.placeholder.com/400/907/fff/?text=user6', 51, 'Louis Vuitton', 'Mountain Standard Time(US & Canada)', 'Story,Story,lowcoast Pescadero'),
(7, 'Freida Tanner', 'user7', 'user7@gmail.com', 'md5(\'pass\')', '2020-04-02 12:27:40', 'https://via.placeholder.com/400/776/fff/?text=user7', 43, 'Dover', 'Hawaii Time(US & Canada)', 'Lady M,lowcoast Pescadero,lowcoast Pescadero'),
(8, 'Terri Bell', 'user8', 'user8@gmail.com', 'md5(\'pass\')', '2020-04-02 12:27:40', 'https://via.placeholder.com/400/768/fff/?text=user8', 89, 'Hem', 'Pacific Time(US & Canada)', 'lowcoast Pescadero,Lady M,The Assembly'),
(9, 'Montoya Moon', 'user9', 'user9@gmail.com', 'md5(\'pass\')', '2020-04-02 12:27:40', 'https://via.placeholder.com/400/970/fff/?text=user9', 28, 'Sprinkles Cupcakes', 'Hawaii Time(US & Canada)', 'Story,Story,San Jose Flea Market'),
(10, 'Angelita Mccullough', 'user10', 'user10@gmail.com', 'md5(\'pass\')', '2020-04-02 12:27:40', 'https://via.placeholder.com/400/830/fff/?text=user10', 87, 'Dover', 'Mountain Standard Time(US & Canada)', 'Story,Franci Cakes,Lady M');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
