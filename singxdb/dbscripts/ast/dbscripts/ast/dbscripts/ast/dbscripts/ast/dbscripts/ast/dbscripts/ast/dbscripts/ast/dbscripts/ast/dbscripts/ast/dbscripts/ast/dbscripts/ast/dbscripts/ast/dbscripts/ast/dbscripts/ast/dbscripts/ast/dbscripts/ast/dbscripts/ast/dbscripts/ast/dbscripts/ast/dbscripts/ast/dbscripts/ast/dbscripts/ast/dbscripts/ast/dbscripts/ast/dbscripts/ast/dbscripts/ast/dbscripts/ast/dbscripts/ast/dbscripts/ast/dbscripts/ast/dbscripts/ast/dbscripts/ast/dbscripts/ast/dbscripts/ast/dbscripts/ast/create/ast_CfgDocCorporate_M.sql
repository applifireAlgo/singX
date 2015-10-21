DROP TABLE IF EXISTS `ast_CfgDocCorporate_M`;

CREATE TABLE `ast_CfgDocCorporate_M` ( `documentId` VARCHAR(256) NOT NULL, `countryId` VARCHAR(64) NOT NULL, `companyType` INT(10) NOT NULL, `companyCategory` INT(10) NOT NULL, `isReferenceNoReqd` TINYINT(1) NOT NULL, `isIssueDateReqd` TINYINT(1) NOT NULL, `isExpiryDateReqd` TINYINT(1) NOT NULL, `isRemarksReqd` TINYINT(1) NOT NULL, `isMandatory` TINYINT(1) NOT NULL, `displaySeq` INT(10) NOT NULL, `maxSize` INT(10) NOT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` DATE NULL DEFAULT '1900-01-01', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` DATE NULL DEFAULT '1900-01-01', `versionId` INT(11) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(11) NULL DEFAULT NULL, PRIMARY KEY (`documentId`));

