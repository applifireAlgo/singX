DROP TABLE IF EXISTS `ast_SingxContacts_T`;

CREATE TABLE `ast_SingxContacts_T` ( `contactId` VARCHAR(256) NOT NULL, `prefixId` VARCHAR(256) NOT NULL, `firstName` VARCHAR(256) NOT NULL, `middleName` VARCHAR(256) NULL DEFAULT NULL, `lastName` VARCHAR(256) NOT NULL, `genderId` VARCHAR(64) NOT NULL, `dateOfBirth` DATE NOT NULL, `emailId` VARCHAR(256) NULL DEFAULT NULL, `phoneCountryCode` VARCHAR(10) NOT NULL, `phoneNumber` INT(10) NOT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` DATE NULL DEFAULT '1900-01-01', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` DATE NULL DEFAULT '1900-01-01', `versionId` INT(11) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(11) NULL DEFAULT NULL, PRIMARY KEY (`contactId`));

