DROP TABLE IF EXISTS `ast_SingxPrefix_M`;

CREATE TABLE `ast_SingxPrefix_M` ( `prefixId` VARCHAR(256) NOT NULL, `prefixName` VARCHAR(50) NOT NULL, `countryId` VARCHAR(64) NOT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` DATE NULL DEFAULT '1900-01-01', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` DATE NULL DEFAULT '1900-01-01', `versionId` INT(11) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(11) NULL DEFAULT NULL, PRIMARY KEY (`prefixId`));

