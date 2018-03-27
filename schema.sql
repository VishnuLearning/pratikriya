-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema pratikriya
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema pratikriya
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `pratikriya` DEFAULT CHARACTER SET utf8 ;
USE `pratikriya` ;

-- -----------------------------------------------------
-- Table `pratikriya`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pratikriya`.`roles` (
  `ID` INT(11) NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(30) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`),
  INDEX `roleindex` (`ID` ASC))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `pratikriya`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pratikriya`.`users` (
  `ID` INT(11) NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(20) NOT NULL,
  `roleid` INT(11) NULL DEFAULT NULL,
  `designation` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(200) NOT NULL,
  `Oid` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`),
  INDEX `fk_role` (`roleid` ASC),
  CONSTRAINT `users_ibfk_1`
    FOREIGN KEY (`roleid`)
    REFERENCES `pratikriya`.`roles` (`ID`))
ENGINE = InnoDB
AUTO_INCREMENT = 21
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `pratikriya`.`organizations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pratikriya`.`organizations` (
  `ID` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `address` VARCHAR(255) NOT NULL,
  `city` VARCHAR(100) NOT NULL,
  `country` VARCHAR(100) NOT NULL,
  `zip` VARCHAR(10) NOT NULL,
  `adminid` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`),
  INDEX `fk_admin` (`adminid` ASC),
  CONSTRAINT `organizations_ibfk_1`
    FOREIGN KEY (`adminid`)
    REFERENCES `pratikriya`.`users` (`ID`))
ENGINE = InnoDB
AUTO_INCREMENT = 13
DEFAULT CHARACTER SET = latin1;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
