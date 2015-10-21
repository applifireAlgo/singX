DROP TABLE IF EXISTS `ast_CfgMasterDocuments_M`;

CREATE TABLE `ast_CfgMasterDocuments_M` ( `documentID` VARCHAR(256) NOT NULL, `documentName` VARCHAR(50) NOT NULL, `isReferenceNoReqd` TINYINT(1) NULL DEFAULT '0', `isIssueDateReqd` TINYINT(1) NULL DEFAULT '0', `isExpiryDateReqd` TINYINT(1) NULL DEFAULT '0', `remarks` VARCHAR(200) NULL DEFAULT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` DATE NULL DEFAULT '1900-01-01', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` DATE NULL DEFAULT '1900-01-01', `versionId` INT(11) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(11) NULL DEFAULT NULL, PRIMARY KEY (`documentID`));

