# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.25)
# Database: nodemysql
# Generation Time: 2019-03-22 13:55:40 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table posts
# ------------------------------------------------------------

DROP TABLE IF EXISTS `posts`;

CREATE TABLE `posts` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `thumb` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='CREATE TABLE IF NOT EXISTS nodemysql.posts (\nid INT(6) AUTO_INCREMENT PRIMARY KEY, \ntitle VARCHAR(255), \ndescription VARCHAR(255), \nthumb VARCHAR(255), \nauthor VARCHAR(255), \nFOREIGN KEY (id) REFERENCES nodemysql.users(id))';

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;

INSERT INTO `posts` (`id`, `title`, `description`, `thumb`, `author`)
VALUES
	(1,'test','tset','cover-1553107801285.png','1'),
	(3,'etst2','test2','cover-1553107842588.png','1'),
	(9,'testse test 2','tets','cover-1553122367115.png','5'),
	(10,'new post 3','post 3','cover-1553122778424.png','5'),
	(12,'user post','Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eum voluptates pariatur iste quidem cum numquam nam. Voluptatum recusandae maiores voluptas non in aperiam ex tempora deleniti, error laboriosam hic.','cover-1553171145544.png','6'),
	(13,'user post next','Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eum voluptates pariatur iste quidem cum numquam nam. Voluptatum recusandae maiores voluptas non in aperiam ex tempora deleniti, error laboriosam hic.','cover-1553171349977.png','6'),
	(14,'user post 3','Lorem ipsum dolor sit amet consectetur adipisicing elit. ','cover-1553172183406.jpg','6'),
	(15,'user2 post new','Lorem ipsum dolor sit amet consectetur adipisicing elit. search keywords','cover-1553172285097.jpg','7'),
	(16,'simon post 3','search keywords lorem ipsum','cover-1553172372922.jpg','3'),
	(17,'simon post 4 title search keywords','lorem impusm ','cover-1553172427473.jpg','3'),
	(18,'simon post 5 title search keywords','lorem impsym ','cover-1553172575187.jpg','3'),
	(19,'test post authMiddleware','Lorem Ipsum','cover-1553179333911.jpg','3');

/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
