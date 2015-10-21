DROP TABLE IF EXISTS `ast_IndividualRegDetail_T`;

CREATE TABLE `ast_IndividualRegDetail_T` ( `customerId` VARCHAR(256) NULL DEFAULT NULL, `residenceTypeId` VARCHAR(256) NOT NULL, `nationalityId` VARCHAR(256) NOT NULL, `documentId` VARCHAR(256) NOT NULL, `idProofValue` VARCHAR(50) NOT NULL, `expiryDate` DATE NOT NULL, `mapId` VARCHAR(256) NOT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` DATE NULL DEFAULT '1900-01-01', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` DATE NULL DEFAULT '1900-01-01', `versionId` INT(11) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(11) NULL DEFAULT NULL, PRIMARY KEY (`mapId`));

