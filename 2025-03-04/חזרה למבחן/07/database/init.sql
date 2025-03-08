-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Mar 05, 2025 at 05:15 PM
-- Server version: 9.2.0
-- PHP Version: 8.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `employess`
--
CREATE DATABASE IF NOT EXISTS `employess` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `employess`;

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `job_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `employment_date` datetime NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `job_id`, `first_name`, `last_name`, `address`, `employment_date`, `created_at`, `updated_at`) VALUES
('739414ff-f9e5-11ef-a910-0242ac110002', '0e0ce9d5-f9e5-11ef-a910-0242ac110002', 'mishel', 'donde', 'eilat', '2025-03-28 19:14:16', '2025-03-05 17:12:48', '2025-03-05 17:12:48'),
('73941c0e-f9e5-11ef-a910-0242ac110002', '0e0ce22c-f9e5-11ef-a910-0242ac110002', 'ilam ', 'attal', 'natanyia', '2025-03-05 17:12:48', '2025-03-05 17:12:48', '2025-03-05 17:12:48'),
('739420ec-f9e5-11ef-a910-0242ac110002', '0e0ce9d5-f9e5-11ef-a910-0242ac110002', 'israel', 'isareli', 'haifa', '2017-03-16 19:13:19', '2025-03-05 17:12:48', '2025-03-05 17:12:48'),
('73942525-f9e5-11ef-a910-0242ac110002', '0e0ce9d5-f9e5-11ef-a910-0242ac110002', 'tamir', 'dwek', 'tlv', '2021-03-30 19:13:46', '2025-03-05 17:12:48', '2025-03-05 17:12:48'),
('7394293b-f9e5-11ef-a910-0242ac110002', '0e0ce9d5-f9e5-11ef-a910-0242ac110002', 'ariel', 'yaniv', 'herzelia', '2025-03-24 19:14:16', '2025-03-05 17:12:48', '2025-03-05 17:12:48');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`id`, `name`, `created_at`, `updated_at`) VALUES
('0e0ce22c-f9e5-11ef-a910-0242ac110002', 'salesman', '2025-03-05 17:11:47', '2025-03-05 17:11:47'),
('0e0ce9d5-f9e5-11ef-a910-0242ac110002', 'saleswoman', '2025-03-05 17:11:47', '2025-03-05 17:11:47'),
('0e0cee42-f9e5-11ef-a910-0242ac110002', 'fullstack developer', '2025-03-05 17:11:47', '2025-03-05 17:11:47');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`),
  ADD KEY `job_id` (`job_id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `employees`
--
ALTER TABLE `employees`
  ADD CONSTRAINT `employees_ibfk_1` FOREIGN KEY (`job_id`) REFERENCES `jobs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
