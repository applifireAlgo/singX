DROP TABLE IF EXISTS `ast_CorporateRegDetail_T`;

CREATE TABLE `ast_CorporateRegDetail_T` ( `mapId` VARCHAR(256) NOT NULL, `customerId` VARCHAR(256) NOT NULL, `companyTypeId` VARCHAR(256) NOT NULL, `companyCategoryId` VARCHAR(256) NOT NULL, `companyName` VARCHAR(100) NOT NULL, `registrationNumber` VARCHAR(256) NOT NULL, `headOffice` VARCHAR(256) NOT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` DATE NULL DEFAULT '1900-01-01', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` DATE NULL DEFAULT '1900-01-01', `versionId` INT(11) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(11) NULL DEFAULT NULL, PRIMARY KEY (`mapId`));

