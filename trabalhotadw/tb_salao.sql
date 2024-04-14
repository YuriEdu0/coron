-- Adminer 4.8.1 MySQL 5.5.5-10.5.20-MariaDB-1:10.5.20+maria~ubu2004 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP DATABASE IF EXISTS `salaodebeleza`;
CREATE DATABASE `salaodebeleza` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `salaodebeleza`;

DROP TABLE IF EXISTS `tb_salao`;
CREATE TABLE `tb_salao` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(30) NOT NULL,
  `sobrenome` varchar(30) NOT NULL,
  `idade` varchar(30) NOT NULL,
  `endereco` varchar(30) NOT NULL,
  `telefone` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `senha` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


-- 2024-04-14 02:28:23
