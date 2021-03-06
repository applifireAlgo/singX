DROP TABLE IF EXISTS `ast_CfgDocument_M`;

CREATE TABLE `ast_CfgDocument_M` ( `documentId` VARCHAR(256) NOT NULL, `documentName` VARCHAR(50) NOT NULL, `isReferenceNoReqd` TINYINT(1) NOT NULL, `isIssueDateReqd` TINYINT(1) NOT NULL, `isExpiryDateReqd` TINYINT(1) NOT NULL, `isRemarksReqd` TINYINT(1) NOT NULL, `isMandatory` TINYINT(1) NOT NULL, `customerType` VARCHAR(256) NOT NULL, `displaySeq` INT(10) NOT NULL, `maxSize` INT(10) NOT NULL DEFAULT '500', `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` DATE NULL DEFAULT '1900-01-01', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` DATE NULL DEFAULT '1900-01-01', `versionId` INT(11) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(11) NULL DEFAULT NULL, PRIMARY KEY (`documentId`));

