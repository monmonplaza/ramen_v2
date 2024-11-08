-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 08, 2024 at 06:18 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ramen_v2`
--

-- --------------------------------------------------------

--
-- Table structure for table `ramen_drinks`
--

CREATE TABLE `ramen_drinks` (
  `drinks_aid` int(11) NOT NULL,
  `drinks_title` varchar(50) NOT NULL,
  `drinks_price` varchar(20) NOT NULL,
  `drinks_description` text NOT NULL,
  `drinks_category` varchar(10) NOT NULL,
  `drinks_is_active` tinyint(1) NOT NULL,
  `drinks_datetime` varchar(20) NOT NULL,
  `drinks_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ramen_drinks`
--

INSERT INTO `ramen_drinks` (`drinks_aid`, `drinks_title`, `drinks_price`, `drinks_description`, `drinks_category`, `drinks_is_active`, `drinks_datetime`, `drinks_created`) VALUES
(1, 'Redhorse 1', '150', 'Extra Strong', 'Beer', 1, '2024-11-07 16:00:38', '2024-11-07 10:25:57'),
(2, 'Platinum', '300', 'asdfasdfas', 'Wine', 1, '2024-11-07 16:03:34', '2024-11-07 16:00:55'),
(3, 'Tea ito', '100', 'etaeatdasfasd asdfasdf', 'Tea', 1, '2024-11-08 07:37:08', '2024-11-08 07:37:08'),
(4, 'Sake 2', '200', 'asdfasdfasdf', 'Sake', 1, '2024-11-08 07:37:25', '2024-11-08 07:37:25');

-- --------------------------------------------------------

--
-- Table structure for table `ramen_ramen`
--

CREATE TABLE `ramen_ramen` (
  `ramen_aid` int(11) NOT NULL,
  `ramen_title` varchar(50) NOT NULL,
  `ramen_price` varchar(20) NOT NULL,
  `ramen_description` text NOT NULL,
  `ramen_category` varchar(50) NOT NULL,
  `ramen_photo` varchar(50) NOT NULL,
  `ramen_is_active` tinyint(1) NOT NULL,
  `ramen_datetime` varchar(20) NOT NULL,
  `ramen_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ramen_ramen`
--

INSERT INTO `ramen_ramen` (`ramen_aid`, `ramen_title`, `ramen_price`, `ramen_description`, `ramen_category`, `ramen_photo`, `ramen_is_active`, `ramen_datetime`, `ramen_created`) VALUES
(1, 'Ramenaruto', '500', 'awesome', 'Special', 'onepiece.webp', 1, '2024-11-07 15:18:41', '2024-11-07 14:06:53'),
(2, 'Sopas Ramen', '200', 'testing lang ito 123!', 'May sabaw', 'menu-7.webp', 1, '2024-11-07 15:18:17', '2024-11-07 15:18:17');

-- --------------------------------------------------------

--
-- Table structure for table `ramen_settings_category`
--

CREATE TABLE `ramen_settings_category` (
  `category_aid` int(11) NOT NULL,
  `category_title` varchar(50) NOT NULL,
  `category_is_active` tinyint(1) NOT NULL,
  `category_datetime` varchar(20) NOT NULL,
  `category_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ramen_settings_category`
--

INSERT INTO `ramen_settings_category` (`category_aid`, `category_title`, `category_is_active`, `category_datetime`, `category_created`) VALUES
(2, 'Ramen 1', 1, '2024-11-06 13:57:31', '2024-11-06 13:57:31'),
(3, 'Reamn2', 1, '2024-11-06 13:59:12', '2024-11-06 13:59:12'),
(4, 'sdfgdsfg', 1, '2024-11-06 14:32:33', '2024-11-06 13:59:18'),
(5, 'asdf', 1, '2024-11-06 13:59:29', '2024-11-06 13:59:29');

-- --------------------------------------------------------

--
-- Table structure for table `ramen_settings_mop`
--

CREATE TABLE `ramen_settings_mop` (
  `mop_aid` int(11) NOT NULL,
  `mop_title` varchar(50) NOT NULL,
  `mop_is_active` tinyint(1) NOT NULL,
  `mop_datetime` varchar(20) NOT NULL,
  `mop_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ramen_settings_mop`
--

INSERT INTO `ramen_settings_mop` (`mop_aid`, `mop_title`, `mop_is_active`, `mop_datetime`, `mop_created`) VALUES
(2, 'ccccc', 1, '2024-11-06 12:12:34', '2024-11-06 10:05:12');

-- --------------------------------------------------------

--
-- Table structure for table `ramen_settings_promo`
--

CREATE TABLE `ramen_settings_promo` (
  `promo_aid` int(11) NOT NULL,
  `promo_title` varchar(50) NOT NULL,
  `promo_is_active` tinyint(1) NOT NULL,
  `promo_datetime` varchar(20) NOT NULL,
  `promo_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ramen_sidesdessert`
--

CREATE TABLE `ramen_sidesdessert` (
  `sidesdessert_aid` int(11) NOT NULL,
  `sidesdessert_title` varchar(50) NOT NULL,
  `sidesdessert_price` varchar(20) NOT NULL,
  `sidesdessert_description` text NOT NULL,
  `sidesdessert_is_active` tinyint(1) NOT NULL,
  `sidesdessert_datetime` varchar(20) NOT NULL,
  `sidesdessert_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ramen_sidesdessert`
--

INSERT INTO `ramen_sidesdessert` (`sidesdessert_aid`, `sidesdessert_title`, `sidesdessert_price`, `sidesdessert_description`, `sidesdessert_is_active`, `sidesdessert_datetime`, `sidesdessert_created`) VALUES
(3, 'gfgfgf keyword', 'wewewe', 'wewewe', 1, '2024-11-08 10:44:38', '2024-11-08 10:44:38'),
(4, 'gfgfgf keywxxxord', 'wewewe', 'wewewe', 1, '2024-11-08 10:44:42', '2024-11-08 10:44:42'),
(5, 'gfgfgf aaaa', 'wewewe', 'wewewe', 1, '2024-11-08 10:44:44', '2024-11-08 10:44:44'),
(6, 'dddd aaaa', 'wewewe', 'wewewe', 1, '2024-11-08 10:44:46', '2024-11-08 10:44:46'),
(7, 'xxcx', 'wewewe', 'wewewe', 1, '2024-11-08 10:44:51', '2024-11-08 10:44:51');

-- --------------------------------------------------------

--
-- Table structure for table `ramen_toppings`
--

CREATE TABLE `ramen_toppings` (
  `toppings_aid` int(11) NOT NULL,
  `toppings_title` varchar(50) NOT NULL,
  `toppings_price` varchar(20) NOT NULL,
  `toppings_description` text NOT NULL,
  `toppings_is_active` tinyint(1) NOT NULL,
  `toppings_datetime` varchar(20) NOT NULL,
  `toppings_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ramen_toppings`
--

INSERT INTO `ramen_toppings` (`toppings_aid`, `toppings_title`, `toppings_price`, `toppings_description`, `toppings_is_active`, `toppings_datetime`, `toppings_created`) VALUES
(2, 'Mix Vegetables', '20', 'Corn, Carrots, Peas', 1, '2024-11-07 15:54:10', '2024-11-07 12:20:00'),
(3, 'Ajutama', '300', 'testing description', 1, '2024-11-07 15:53:08', '2024-11-07 12:20:04'),
(4, 'Boiled Egg', '10', 'Hard boiled egg', 1, '2024-11-07 15:53:33', '2024-11-07 12:20:07');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ramen_drinks`
--
ALTER TABLE `ramen_drinks`
  ADD PRIMARY KEY (`drinks_aid`);

--
-- Indexes for table `ramen_ramen`
--
ALTER TABLE `ramen_ramen`
  ADD PRIMARY KEY (`ramen_aid`);

--
-- Indexes for table `ramen_settings_category`
--
ALTER TABLE `ramen_settings_category`
  ADD PRIMARY KEY (`category_aid`);

--
-- Indexes for table `ramen_settings_mop`
--
ALTER TABLE `ramen_settings_mop`
  ADD PRIMARY KEY (`mop_aid`);

--
-- Indexes for table `ramen_settings_promo`
--
ALTER TABLE `ramen_settings_promo`
  ADD PRIMARY KEY (`promo_aid`);

--
-- Indexes for table `ramen_sidesdessert`
--
ALTER TABLE `ramen_sidesdessert`
  ADD PRIMARY KEY (`sidesdessert_aid`);

--
-- Indexes for table `ramen_toppings`
--
ALTER TABLE `ramen_toppings`
  ADD PRIMARY KEY (`toppings_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ramen_drinks`
--
ALTER TABLE `ramen_drinks`
  MODIFY `drinks_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `ramen_ramen`
--
ALTER TABLE `ramen_ramen`
  MODIFY `ramen_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `ramen_settings_category`
--
ALTER TABLE `ramen_settings_category`
  MODIFY `category_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `ramen_settings_mop`
--
ALTER TABLE `ramen_settings_mop`
  MODIFY `mop_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `ramen_settings_promo`
--
ALTER TABLE `ramen_settings_promo`
  MODIFY `promo_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `ramen_sidesdessert`
--
ALTER TABLE `ramen_sidesdessert`
  MODIFY `sidesdessert_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `ramen_toppings`
--
ALTER TABLE `ramen_toppings`
  MODIFY `toppings_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
