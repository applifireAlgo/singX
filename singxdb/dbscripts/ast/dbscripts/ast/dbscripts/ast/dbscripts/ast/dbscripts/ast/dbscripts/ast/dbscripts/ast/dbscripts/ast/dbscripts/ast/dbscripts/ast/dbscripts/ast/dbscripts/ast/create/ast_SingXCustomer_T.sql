DROP TABLE IF EXISTS `ast_SingXCustomer_T`;

CREATE TABLE `ast_SingXCustomer_T` ( `customerId` VARCHAR(256) NOT NULL, `countryId` VARCHAR(64) NOT NULL, `customerTypeId` VARCHAR(256) NOT NULL, `emailId` VARCHAR(256) NOT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` DATE NULL DEFAULT '1900-01-01', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` DATE NULL DEFAULT '1900-01-01', `versionId` INT(11) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(11) NULL DEFAULT NULL, PRIMARY KEY (`customerId`));

