-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 05, 2020 at 08:19 AM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `works`
--

DROP TABLE IF EXISTS `works`;
CREATE TABLE IF NOT EXISTS `works` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `smaller_img` varchar(80) COLLATE utf16_swedish_ci NOT NULL,
  `bigger_img` varchar(80) COLLATE utf16_swedish_ci NOT NULL,
  `title` varchar(100) COLLATE utf16_swedish_ci NOT NULL,
  `description` text COLLATE utf16_swedish_ci NOT NULL,
  `date` varchar(40) COLLATE utf16_swedish_ci NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf16 COLLATE=utf16_swedish_ci;

--
-- Dumping data for table `works`
--

INSERT INTO `works` (`ID`, `smaller_img`, `bigger_img`, `title`, `description`, `date`) VALUES
(1, 'images/seven-smaller.jpg', 'images/seven-smaller.jpg', '\"Seven Cosmetics\" Branding Assignment', 'Given just the name of a fictional cosmetics company - \"seven\" - I created the Seven Cosmetics brand identity. I designed a logo, a 13-page brand document, and a 2-page magazine spread featuring my idea of the brand\'s packaging design on some 3D mockups.', '2020'),
(2, 'images/twitch.gif', 'images/twitch.gif', 'Twitch/Youtube Channel Branding', 'It\'s 2020, and the streaming industry is more popular now than ever! In 2018, I decided to try my hand at designing logos for gaming channels especially, beginning with Riz3n180\'s first logo. Later, in 2019, I was asked by the same client to create some emotes for a Twitch chat. Since then, I have been exploring the many different styles of Twitch assets and offering my design & illustration services to clients interested in having a fun & creative brand for their streaming channel.  ', '2018-2020'),
(3, 'images/blm_smaller.jpg', 'images/blm_smaller.jpg', 'Black Lives Matter Handouts ', 'Around when plans for the June Black Lives Matter rally were floating around, I noticed that there was a severe lack of general knowledge about the subject, specifically about how one can continue their support after they\'ve left the rally. I decided to create some free mini flyers to hand out at the rally, featuring a quote on the front and important information on the back, as well as links to helpful & informational resources. This was completely not-for-profit as well as a new challenge for me as I\'d never designed for print before. ', '2020'),
(4, 'images/db_smaller.jpg', 'images/db_smaller.jpg\r\n', '\"DB Development\" Branding Assignment', 'For this assignment, I developed a fictional brand based around a person - my father, to be exact. The process involved creating a logo, a brand identity, and a thorough brand guidelines document. ', '2020'),
(5, 'images/hyatt_smaller.jpg', 'images/hyatt_smaller.jpg', '\"Hyatt Hotel\" 3D Room Design Assignment', 'Using Cinema 4D, I created a hotel room scene meant to help redesign a room at the Hyatt hotel. ', '2020'),
(6, 'images/coors_smaller.jpg', 'images/coors_smaller.jpg', '\"Coors + Scotch Rainbow Duct Tape\" Combining Brands Assignment (3D Modeling and Video Editing)', 'To further explore the world of branding & design, I was required to combine the content & concept of one brand (Coors) and apply to it the styling of a completely unrelated brand (Scotch Rainbow Duct Tape). I worked on this project with a partner - they designed the logo and branding, and I created promotional images using 3D assets I created in Cinema 4D as well as Photoshop. I combined 3D animation with other animation techniques in After Effects  to create our promotional trailer. ', ''),
(7, 'images/abba_smaller.jpg', 'images/abba_smaller.jpg', '\"Abba-Zaba\" Rebranding Exercise ', 'For this assignment, I was required to take a pre-existing brand (Abba-Zaba) and design a look for it that was slightly more modern. I created an advertisement for this new brand identity and edited it into a bus shelter mockup. ', '2019'),
(8, 'images/bees_smaller.jpg', 'images/bees_smaller.jpg', '192 Bees ', 'As a submission to a contest of sorts, I designed a logo for a company that sells organic honey. ', '2019');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
