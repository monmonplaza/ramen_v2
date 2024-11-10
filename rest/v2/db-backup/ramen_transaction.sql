-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 10, 2024 at 03:32 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.2

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
-- Table structure for table `ramen_transaction`
--

CREATE TABLE `ramen_transaction` (
  `transaction_aid` int(11) NOT NULL,
  `transaction_cart_dessertCart` text NOT NULL,
  `transaction_cart_drinks` text NOT NULL,
  `transaction_cart_ramen` text NOT NULL,
  `transaction_cart_toppings` text NOT NULL,
  `transaction_change` int(10) NOT NULL,
  `transaction_mop` varchar(20) NOT NULL,
  `transaction_payment` int(10) NOT NULL,
  `transaction_subtotal` int(10) NOT NULL,
  `transaction_finaltotal` int(10) NOT NULL,
  `transaction_is_active` tinyint(1) NOT NULL,
  `transaction_datetime` varchar(20) NOT NULL,
  `transaction_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ramen_transaction`
--

INSERT INTO `ramen_transaction` (`transaction_aid`, `transaction_cart_dessertCart`, `transaction_cart_drinks`, `transaction_cart_ramen`, `transaction_cart_toppings`, `transaction_change`, `transaction_mop`, `transaction_payment`, `transaction_subtotal`, `transaction_finaltotal`, `transaction_is_active`, `transaction_datetime`, `transaction_created`) VALUES
(1, '[{\"sidesdessert_aid\":6,\"sidesdessert_title\":\"dddd aaaa\",\"sidesdessert_price\":\"100\",\"sidesdessert_description\":\"wewewe\",\"sidesdessert_is_active\":1,\"sidesdessert_datetime\":\"2024-11-10 14:01:59\",\"sidesdessert_created\":\"2024-11-08 10:44:46\",\"quantity\":1}]', '[{\"drinks_aid\":1,\"drinks_title\":\"Redhorse 1\",\"drinks_price\":\"150\",\"drinks_description\":\"Extra Strong\",\"drinks_category\":\"Beer\",\"drinks_is_active\":1,\"drinks_datetime\":\"2024-11-07 16:00:38\",\"drinks_created\":\"2024-11-07 10:25:57\",\"quantity\":1}]', '[{\"ramen_aid\":1,\"ramen_title\":\"Ramenaruto\",\"ramen_price\":\"500\",\"ramen_description\":\"awesome\",\"ramen_category\":\"Special\",\"ramen_photo\":\"onepiece.webp\",\"ramen_is_active\":1,\"ramen_datetime\":\"2024-11-07 15:18:41\",\"ramen_created\":\"2024-11-07 14:06:53\",\"quantity\":1}]', '[{\"toppings_aid\":3,\"toppings_title\":\"Ajutama\",\"toppings_price\":\"300\",\"toppings_description\":\"testing description\",\"toppings_is_active\":1,\"toppings_datetime\":\"2024-11-07 15:53:08\",\"toppings_created\":\"2024-11-07 12:20:04\",\"quantity\":1}]', 929, 'ccccc', 2000, 1050, 1071, 1, '2024-11-10 22:30:31', '2024-11-10 22:30:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ramen_transaction`
--
ALTER TABLE `ramen_transaction`
  ADD PRIMARY KEY (`transaction_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ramen_transaction`
--
ALTER TABLE `ramen_transaction`
  MODIFY `transaction_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
