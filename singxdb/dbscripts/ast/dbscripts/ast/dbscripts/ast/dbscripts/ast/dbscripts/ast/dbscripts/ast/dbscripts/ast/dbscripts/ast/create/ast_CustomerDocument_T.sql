DROP TABLE IF EXISTS `ast_CustomerDocument_T`;

CREATE TABLE `ast_CustomerDocument_T` ( `contactId` VARCHAR(256) NOT NULL, `documentId` VARCHAR(256) NOT NULL, `mapId` VARCHAR(256) NOT NULL, `referenceNo` VARCHAR(50) NULL DEFAULT NULL, `issueDate` DATE NULL DEFAULT NULL, `expiryDate` DATE NULL DEFAULT NULL, `remarks` VARCHAR(256) NULL DEFAULT NULL, `docFile` TEXT NOT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` DATE NULL DEFAULT '1900-01-01', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` DATE NULL DEFAULT '1900-01-01', `versionId` INT(11) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(11) NULL DEFAULT NULL, PRIMARY KEY (`mapId`));

