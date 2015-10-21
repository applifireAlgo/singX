DROP TABLE IF EXISTS `ast_CustomerContactMap_B`;

CREATE TABLE `ast_CustomerContactMap_B` ( `customercontactmapPkey` INT(10) NOT NULL AUTO_INCREMENT, `customerId` VARCHAR(256) NOT NULL, `contactId` VARCHAR(256) NOT NULL, PRIMARY KEY (`customercontactmapPkey`));

