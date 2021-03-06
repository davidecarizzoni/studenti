-- MySQL dump 10.13  Distrib 5.7.33, for Linux (x86_64)
--
-- Host: localhost    Database: studentdb
-- ------------------------------------------------------
-- Server version	5.7.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Studente`
--

DROP TABLE IF EXISTS `Studente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Studente` (
  `Id` VARCHAR(10) NOT NULL ,
  `Nome` varchar(10) NOT NULL,
  `Cognome` varchar(12) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Studente`
--

LOCK TABLES `Studente` WRITE;
/*!40000 ALTER TABLE `Studente` DISABLE KEYS */;
INSERT INTO `Studente` VALUES (1,'Davide','Carizzoni'),(2,'Riccardo','Rizzini'),(3,'Lorenzo','Conti'),(4,'Antonino','Pigolotti');
UNLOCK TABLES;



DROP TABLE IF EXISTS `Aula`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Aula` (
  `Id` int NOT NULL,
  `Name` varchar(20) NOT NULL,
  `MaxSeats` int NOT NULL,
  
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Aula`
--

LOCK TABLES `Aula` WRITE;
/*!40000 ALTER TABLE `Aula` DISABLE KEYS */;
INSERT INTO `Aula` VALUES (1,'Aula 1',20),
                          (2,'Aula 2',20);
UNLOCK TABLES;


DROP TABLE IF EXISTS `Corso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;


CREATE TABLE `Corso` (
  `Id` int NOT NULL,
  `Name` varchar(20) NOT NULL,
  
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Corso`
--

LOCK TABLES `Corso` WRITE;
/*!40000 ALTER TABLE `Corso` DISABLE KEYS */;
INSERT INTO `Corso` VALUES (1,'Matematica'), (2,'Italiano'), (3,'Fisica'), (4,'Chimica');
UNLOCK TABLES;


DROP TABLE IF EXISTS `Classe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Classe` (
  `Id_student` INT NOT NULL,
  `Id_corso` INT NOT NULL,
  PRIMARY KEY (`Id_student`,`Id_corso`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Classe`
--

LOCK TABLES `Classe` WRITE;
/*!40000 ALTER TABLE `Classe` DISABLE KEYS */;
INSERT INTO `Classe` VALUES (1,1),(1,2),(1,3),
                            (2,1),(2,2),
                            (3,2),(3,4),
                            (4,1),(4,2);
UNLOCK TABLES;



