DROP TABLE IF EXISTS `ast_AppCustomer_M`;

CREATE TABLE `ast_AppCustomer_M` ( `appCustomerId` VARCHAR(64) NOT NULL, `customerName` VARCHAR(256) NOT NULL, `contactId` VARCHAR(64) NOT NULL, `appCustomerType` VARCHAR(64) NOT NULL, `appCustomerCategory` VARCHAR(64) NOT NULL, `deploymentModel` TINYINT(1) NOT NULL DEFAULT '1', `customerStatus` INT(10) NOT NULL DEFAULT '1', `userRequested` INT(10) NOT NULL DEFAULT '1', `evalTimePeriod` INT(10) NOT NULL DEFAULT '60', `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` DATE NULL DEFAULT '1900-01-01', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` DATE NULL DEFAULT '1900-01-01', `versionId` INT(11) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(11) NULL DEFAULT NULL, PRIMARY KEY (`appCustomerId`));

