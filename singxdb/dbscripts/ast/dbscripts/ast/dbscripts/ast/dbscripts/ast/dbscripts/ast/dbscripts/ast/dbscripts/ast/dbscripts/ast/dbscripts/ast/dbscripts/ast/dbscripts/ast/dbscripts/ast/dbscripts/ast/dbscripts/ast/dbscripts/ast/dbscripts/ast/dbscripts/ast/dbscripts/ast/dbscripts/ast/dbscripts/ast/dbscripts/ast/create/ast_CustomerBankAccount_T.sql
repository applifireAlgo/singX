DROP TABLE IF EXISTS `ast_CustomerBankAccount_T`;

CREATE TABLE `ast_CustomerBankAccount_T` ( `mapId` VARCHAR(256) NOT NULL, `contactId` VARCHAR(256) NOT NULL, `firstName` VARCHAR(50) NOT NULL, `middleName` VARCHAR(50) NULL DEFAULT NULL, `lastName` VARCHAR(50) NOT NULL, `accountNumber` VARCHAR(256) NOT NULL, `wireTransferModeId` VARCHAR(256) NOT NULL, `bankId` VARCHAR(256) NOT NULL, `branchId` VARCHAR(256) NOT NULL, `jointAccHolderName` VARCHAR(50) NULL DEFAULT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` DATE NULL DEFAULT '1900-01-01', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` DATE NULL DEFAULT '1900-01-01', `versionId` INT(11) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(11) NULL DEFAULT NULL, PRIMARY KEY (`mapId`));

