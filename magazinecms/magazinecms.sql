-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 03, 2016 at 05:35 PM
-- Server version: 10.1.10-MariaDB
-- PHP Version: 5.5.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `magazinecms`
--
CREATE DATABASE IF NOT EXISTS `magazinecms` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `magazinecms`;

-- --------------------------------------------------------

--
-- Table structure for table `academyyear`
--

CREATE TABLE `academyyear` (
  `aid` int(11) NOT NULL,
  `year` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `academyyear`
--

INSERT INTO `academyyear` (`aid`, `year`) VALUES
(1, 2012),
(2, 2016),
(3, 2014),
(8, 2015),
(9, 2017);

-- --------------------------------------------------------

--
-- Table structure for table `article`
--

CREATE TABLE `article` (
  `atid` int(11) NOT NULL,
  `title` varchar(50) DEFAULT NULL,
  `description` varchar(150) DEFAULT NULL,
  `file_source` varchar(100) DEFAULT NULL,
  `img_source` varchar(100) DEFAULT NULL,
  `date_submit` date DEFAULT NULL,
  `STATUS` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `article`
--

INSERT INTO `article` (`atid`, `title`, `description`, `file_source`, `img_source`, `date_submit`, `STATUS`) VALUES
(14, 'New article', 'This is desciption', 'doc-bxeO8bbQu2LE44zVfLHT.docx', 'image-PH9YXimsLKICAxlFhEOk.jpg', '2016-10-27', 'submited'),
(15, 'Truyen cuoi hai huoc', 'Duoi day la mot cau truyen hai vcl cac ban hay doc trong file dinh kem nha hihihihhi', 'doc-0wJogKzsBY271OSLXkhc.docx', 'image-dHZh2iUVCrnXpdBfnck6.jpg', '2016-10-28', 'approved'),
(16, 'Truyen ngon lu', 'day la truyen ngon lu', 'doc-NZVEmvhzY4xcITxwaHC0.docx', 'image-dq3Uvv5hR1i0TI1AFN7Z.jpg', '2016-10-29', 'uploaded'),
(17, '9gag article', 'day la cai des cmn ription hihihih', 'doc-yF8ur37uER9X32RAY3kB.docx', 'image-BPu2Yew5XHatUHvrEc8I.jpg', '2016-10-29', 'rejected'),
(18, 'Bai tho cua em', 'Day la cai tho cua em', 'doc-1KQMGhlgMAWKvwAPAoMA.docx', 'image-l5NIGVRzROGXA6JY3DXd.jpg', '2016-10-30', 'submited');

-- --------------------------------------------------------

--
-- Table structure for table `article_magazine`
--

CREATE TABLE `article_magazine` (
  `atid` int(11) NOT NULL,
  `mid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `article_magazine`
--

INSERT INTO `article_magazine` (`atid`, `mid`) VALUES
(14, 2),
(15, 2),
(16, 2),
(17, 2),
(18, 2);

-- --------------------------------------------------------

--
-- Table structure for table `article_student`
--

CREATE TABLE `article_student` (
  `atid` int(11) NOT NULL,
  `uid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `article_student`
--

INSERT INTO `article_student` (`atid`, `uid`) VALUES
(14, 54),
(15, 54),
(16, 32),
(17, 57),
(18, 34);

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `cmid` int(11) NOT NULL,
  `uid` int(11) DEFAULT NULL,
  `atid` int(11) DEFAULT NULL,
  `COMMENT` varchar(200) DEFAULT NULL,
  `comment_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`cmid`, `uid`, `atid`, `COMMENT`, `comment_date`) VALUES
(1, 44, 15, 'hay vcl', '2016-10-28'),
(2, 44, 15, 'tao se submit luon cho may', '2016-10-28'),
(3, 44, 17, 'ok check it', '2016-10-29'),
(4, 41, 18, 'nhu cac nhung van submit', '2016-10-30'),
(5, 44, 14, 'ok', '2016-11-03');

-- --------------------------------------------------------

--
-- Table structure for table `faculties`
--

CREATE TABLE `faculties` (
  `fid` int(11) NOT NULL,
  `falcuties_name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `faculties`
--

INSERT INTO `faculties` (`fid`, `falcuties_name`) VALUES
(1, 'Software IT'),
(2, 'Mathematics'),
(3, 'Networking'),
(4, 'FSB');

-- --------------------------------------------------------

--
-- Table structure for table `guest_faculties`
--

CREATE TABLE `guest_faculties` (
  `uid` int(11) NOT NULL,
  `fid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `guest_faculties`
--

INSERT INTO `guest_faculties` (`uid`, `fid`) VALUES
(52, 4),
(56, 2);

-- --------------------------------------------------------

--
-- Table structure for table `magazine`
--

CREATE TABLE `magazine` (
  `mid` int(11) NOT NULL,
  `magazine_name` varchar(100) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `magazine`
--

INSERT INTO `magazine` (`mid`, `magazine_name`, `start_date`, `end_date`) VALUES
(2, 'Coc Doc 2016', '2016-01-01', '2016-12-01');

-- --------------------------------------------------------

--
-- Table structure for table `magazine_academy`
--

CREATE TABLE `magazine_academy` (
  `mid` int(11) NOT NULL,
  `aid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `magazine_academy`
--

INSERT INTO `magazine_academy` (`mid`, `aid`) VALUES
(2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `mc_faculties`
--

CREATE TABLE `mc_faculties` (
  `uid` int(11) NOT NULL,
  `fid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mc_faculties`
--

INSERT INTO `mc_faculties` (`uid`, `fid`) VALUES
(39, 4),
(41, 2),
(42, 3),
(43, 1),
(44, 1);

-- --------------------------------------------------------

--
-- Table structure for table `mc_submit_article`
--

CREATE TABLE `mc_submit_article` (
  `uid` int(11) NOT NULL,
  `atid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mc_submit_article`
--

INSERT INTO `mc_submit_article` (`uid`, `atid`) VALUES
(41, 18),
(44, 14),
(44, 15),
(44, 17);

-- --------------------------------------------------------

--
-- Table structure for table `mm_approve_article`
--

CREATE TABLE `mm_approve_article` (
  `uid` int(11) NOT NULL,
  `atid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mm_approve_article`
--

INSERT INTO `mm_approve_article` (`uid`, `atid`) VALUES
(37, 15);

-- --------------------------------------------------------

--
-- Table structure for table `mm_reject_article`
--

CREATE TABLE `mm_reject_article` (
  `uid` int(11) NOT NULL,
  `atid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mm_reject_article`
--

INSERT INTO `mm_reject_article` (`uid`, `atid`) VALUES
(37, 17);

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `rid` int(11) NOT NULL,
  `role_name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`rid`, `role_name`) VALUES
(1, 'Admin'),
(2, 'MM'),
(3, 'MC'),
(4, 'Student'),
(5, 'Guest'),
(6, 'oldMM'),
(7, 'oldMC');

-- --------------------------------------------------------

--
-- Table structure for table `students_faculties`
--

CREATE TABLE `students_faculties` (
  `uid` int(11) NOT NULL,
  `fid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `students_faculties`
--

INSERT INTO `students_faculties` (`uid`, `fid`) VALUES
(32, 2),
(33, 3),
(34, 2),
(35, 4),
(54, 1),
(57, 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `uid` int(11) NOT NULL,
  `full_name` varchar(50) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `gender` varchar(6) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`uid`, `full_name`, `dob`, `gender`, `email`, `password`, `phone`) VALUES
(11, 'admin', NULL, 'male', 'admin@gmail.com', '202cb962ac59075b964b07152d234b70', 1676564864),
(32, 'Tran Thanh Tung', '0000-00-00', 'Male', 'tungtran@gmail.comm', 'd41d8cd98f00b204e9800998ecf8427e', 123),
(33, 'Tran Minh Phuong', '1994-02-01', 'Male', 'phuongtran@gmail.comm', '202cb962ac59075b964b07152d234b70', 123),
(34, 'Pham Duc Long', '1994-02-12', 'Male', 'longpd@gmail.comm', '202cb962ac59075b964b07152d234b70', 123),
(35, 'Nguyen Minh Tam', '1994-07-20', 'Female', 'tamntm@gmail.comm', '81dc9bdb52d04dc20036dbd8313ed055', 123),
(37, 'Dam Quang Minh', '1780-04-12', 'Male', 'thinhnd16@fsoft.com.vn', '202cb962ac59075b964b07152d234b70', 123),
(38, 'Magazine MM', '1980-01-08', 'Male', 'magazinemm@gmail.com', '202cb962ac59075b964b07152d234b70', 123),
(39, 'Nguyen Van Hoang', '1980-02-01', 'Male', 'hoang@gmail.com', '202cb962ac59075b964b07152d234b70', 123),
(41, 'Nguyen Ngoc Anh', '1994-01-12', 'Female', 'ngocanh@gmail.com', '202cb962ac59075b964b07152d234b70', 123),
(42, 'Pham Tuan Anh', '1989-10-02', 'Male', 'tuananh@gmail.com', '202cb962ac59075b964b07152d234b70', 123),
(43, 'Do Van Phuk', '1984-01-02', 'Male', 'phucdv@gmail.com', 'd41d8cd98f00b204e9800998ecf8427e', 1234),
(44, 'Do Van Duc', '1980-08-09', 'Male', 'thinhndgc00458@fpt.edu.vn', '202cb962ac59075b964b07152d234b70', 123),
(52, 'Guest account', '1990-01-01', 'Male', 'fsb-hn@gmail.com', '202cb962ac59075b964b07152d234b70', 0),
(54, 'Thinh Nguyen', '1994-10-09', 'Male', 'thinhnd@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', 123),
(56, 'Guest account', '1990-01-01', 'Male', 'mathematic@gmail.com', '202cb962ac59075b964b07152d234b70', 0),
(57, 'Nguyen Viet Ha', '1994-01-01', 'Male', 'ndthinh94@live.com', '202cb962ac59075b964b07152d234b70', 123);

-- --------------------------------------------------------

--
-- Table structure for table `user_role`
--

CREATE TABLE `user_role` (
  `uid` int(11) NOT NULL,
  `rid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_role`
--

INSERT INTO `user_role` (`uid`, `rid`) VALUES
(11, 1),
(32, 4),
(33, 4),
(34, 4),
(35, 4),
(37, 2),
(38, 6),
(39, 3),
(41, 3),
(42, 3),
(43, 7),
(44, 3),
(52, 5),
(54, 4),
(56, 5),
(57, 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `academyyear`
--
ALTER TABLE `academyyear`
  ADD PRIMARY KEY (`aid`);

--
-- Indexes for table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`atid`);

--
-- Indexes for table `article_magazine`
--
ALTER TABLE `article_magazine`
  ADD PRIMARY KEY (`atid`,`mid`),
  ADD KEY `fk_magazine_2` (`mid`);

--
-- Indexes for table `article_student`
--
ALTER TABLE `article_student`
  ADD PRIMARY KEY (`atid`,`uid`),
  ADD KEY `fk_student_3` (`uid`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`cmid`),
  ADD KEY `fk_user_2` (`uid`),
  ADD KEY `fk_article_2` (`atid`);

--
-- Indexes for table `faculties`
--
ALTER TABLE `faculties`
  ADD PRIMARY KEY (`fid`);

--
-- Indexes for table `guest_faculties`
--
ALTER TABLE `guest_faculties`
  ADD PRIMARY KEY (`uid`,`fid`),
  ADD KEY `fk_faculties_6` (`fid`);

--
-- Indexes for table `magazine`
--
ALTER TABLE `magazine`
  ADD PRIMARY KEY (`mid`);

--
-- Indexes for table `magazine_academy`
--
ALTER TABLE `magazine_academy`
  ADD PRIMARY KEY (`mid`,`aid`),
  ADD KEY `fk_academy_1` (`aid`);

--
-- Indexes for table `mc_faculties`
--
ALTER TABLE `mc_faculties`
  ADD PRIMARY KEY (`uid`,`fid`),
  ADD KEY `fk_faculties_5` (`fid`);

--
-- Indexes for table `mc_submit_article`
--
ALTER TABLE `mc_submit_article`
  ADD PRIMARY KEY (`uid`,`atid`),
  ADD KEY `fk_atc_a` (`atid`);

--
-- Indexes for table `mm_approve_article`
--
ALTER TABLE `mm_approve_article`
  ADD PRIMARY KEY (`uid`,`atid`),
  ADD KEY `fk_atid_approve` (`atid`);

--
-- Indexes for table `mm_reject_article`
--
ALTER TABLE `mm_reject_article`
  ADD PRIMARY KEY (`uid`,`atid`),
  ADD KEY `fk_atid_reject` (`atid`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`rid`);

--
-- Indexes for table `students_faculties`
--
ALTER TABLE `students_faculties`
  ADD PRIMARY KEY (`uid`,`fid`),
  ADD KEY `fk_faculties_4` (`fid`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`uid`);

--
-- Indexes for table `user_role`
--
ALTER TABLE `user_role`
  ADD PRIMARY KEY (`uid`,`rid`),
  ADD KEY `fk_role_1` (`rid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `academyyear`
--
ALTER TABLE `academyyear`
  MODIFY `aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `article`
--
ALTER TABLE `article`
  MODIFY `atid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `cmid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `faculties`
--
ALTER TABLE `faculties`
  MODIFY `fid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `magazine`
--
ALTER TABLE `magazine`
  MODIFY `mid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `rid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `article_magazine`
--
ALTER TABLE `article_magazine`
  ADD CONSTRAINT `fk_article_1` FOREIGN KEY (`atid`) REFERENCES `article` (`atid`),
  ADD CONSTRAINT `fk_magazine_2` FOREIGN KEY (`mid`) REFERENCES `magazine` (`mid`);

--
-- Constraints for table `article_student`
--
ALTER TABLE `article_student`
  ADD CONSTRAINT `fk_article_3` FOREIGN KEY (`atid`) REFERENCES `article` (`atid`),
  ADD CONSTRAINT `fk_student_3` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`);

--
-- Constraints for table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `fk_article_2` FOREIGN KEY (`atid`) REFERENCES `article` (`atid`),
  ADD CONSTRAINT `fk_user_2` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`);

--
-- Constraints for table `guest_faculties`
--
ALTER TABLE `guest_faculties`
  ADD CONSTRAINT `fk_faculties_6` FOREIGN KEY (`fid`) REFERENCES `faculties` (`fid`),
  ADD CONSTRAINT `fk_guest_1` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`);

--
-- Constraints for table `magazine_academy`
--
ALTER TABLE `magazine_academy`
  ADD CONSTRAINT `fk_academy_1` FOREIGN KEY (`aid`) REFERENCES `academyyear` (`aid`),
  ADD CONSTRAINT `fk_magazine_1` FOREIGN KEY (`mid`) REFERENCES `magazine` (`mid`);

--
-- Constraints for table `mc_faculties`
--
ALTER TABLE `mc_faculties`
  ADD CONSTRAINT `fk_faculties_5` FOREIGN KEY (`fid`) REFERENCES `faculties` (`fid`),
  ADD CONSTRAINT `fk_mc_1` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`);

--
-- Constraints for table `mc_submit_article`
--
ALTER TABLE `mc_submit_article`
  ADD CONSTRAINT `fk_atc_a` FOREIGN KEY (`atid`) REFERENCES `article` (`atid`),
  ADD CONSTRAINT `fk_mc_a` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`);

--
-- Constraints for table `mm_approve_article`
--
ALTER TABLE `mm_approve_article`
  ADD CONSTRAINT `fk_atid_approve` FOREIGN KEY (`atid`) REFERENCES `article` (`atid`),
  ADD CONSTRAINT `fk_uid_approve` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`);

--
-- Constraints for table `mm_reject_article`
--
ALTER TABLE `mm_reject_article`
  ADD CONSTRAINT `fk_atid_reject` FOREIGN KEY (`atid`) REFERENCES `article` (`atid`),
  ADD CONSTRAINT `fk_uid_reject` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`);

--
-- Constraints for table `students_faculties`
--
ALTER TABLE `students_faculties`
  ADD CONSTRAINT `fk_faculties_4` FOREIGN KEY (`fid`) REFERENCES `faculties` (`fid`),
  ADD CONSTRAINT `fk_student_4` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`);

--
-- Constraints for table `user_role`
--
ALTER TABLE `user_role`
  ADD CONSTRAINT `fk_role_1` FOREIGN KEY (`rid`) REFERENCES `role` (`rid`),
  ADD CONSTRAINT `fk_user_1` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
