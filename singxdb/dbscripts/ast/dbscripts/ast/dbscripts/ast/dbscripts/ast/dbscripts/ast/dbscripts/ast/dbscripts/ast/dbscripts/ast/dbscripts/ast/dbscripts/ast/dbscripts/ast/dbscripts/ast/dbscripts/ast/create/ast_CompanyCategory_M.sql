DROP TABLE IF EXISTS `ast_CompanyCategory_M`;

CREATE TABLE `ast_CompanyCategory_M` ( `companyCategoryId` VARCHAR(256) NOT NULL, `companyCategoryName` VARCHAR(256) NOT NULL, `countryId` VARCHAR(64) NOT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` DATE NULL DEFAULT '1900-01-01', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` DATE NULL DEFAULT '1900-01-01', `versionId` INT(11) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(11) NULL DEFAULT NULL, PRIMARY KEY (`companyCategoryId`));

