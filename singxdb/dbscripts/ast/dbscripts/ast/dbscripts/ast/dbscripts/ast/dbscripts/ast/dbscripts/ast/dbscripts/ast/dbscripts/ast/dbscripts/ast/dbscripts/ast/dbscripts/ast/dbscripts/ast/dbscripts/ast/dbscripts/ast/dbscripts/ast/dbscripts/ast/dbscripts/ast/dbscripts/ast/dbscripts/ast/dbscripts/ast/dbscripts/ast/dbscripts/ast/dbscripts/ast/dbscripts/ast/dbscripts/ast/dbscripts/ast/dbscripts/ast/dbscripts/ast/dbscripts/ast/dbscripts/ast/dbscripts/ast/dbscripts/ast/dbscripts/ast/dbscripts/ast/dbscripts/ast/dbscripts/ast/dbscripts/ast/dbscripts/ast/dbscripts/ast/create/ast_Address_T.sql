DROP TABLE IF EXISTS `ast_Address_T`;

CREATE TABLE `ast_Address_T` ( `addressId` VARCHAR(64) NOT NULL, `addressTypeId` VARCHAR(64) NOT NULL, `addressLabel` VARCHAR(11) NULL DEFAULT NULL, `address1` VARCHAR(256) NULL DEFAULT NULL, `address2` VARCHAR(256) NULL DEFAULT NULL, `address3` VARCHAR(256) NULL DEFAULT NULL, `countryId` VARCHAR(64) NOT NULL, `stateId` VARCHAR(64) NOT NULL, `cityId` VARCHAR(64) NOT NULL, `zipcode` VARCHAR(6) NOT NULL, `latitude` VARCHAR(64) NULL DEFAULT NULL, `longitude` VARCHAR(64) NULL DEFAULT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` DATE NULL DEFAULT '1900-01-01', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` DATE NULL DEFAULT '1900-01-01', `versionId` INT(11) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(11) NULL DEFAULT NULL, PRIMARY KEY (`addressId`));

