DROP TABLE IF EXISTS `ast_Agent_M`;

CREATE TABLE `ast_Agent_M` ( `agentId` VARCHAR(256) NOT NULL, `agentCode` VARCHAR(50) NOT NULL, `agentName` VARCHAR(50) NOT NULL, `agencyName` VARCHAR(50) NOT NULL, `contactId` VARCHAR(64) NOT NULL, `countryId` VARCHAR(64) NOT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` DATE NULL DEFAULT '1900-01-01', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` DATE NULL DEFAULT '1900-01-01', `versionId` INT(11) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(11) NULL DEFAULT NULL, PRIMARY KEY (`agentId`));

