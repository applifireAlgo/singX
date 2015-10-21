DROP TABLE IF EXISTS `ast_BankTransferModeMap_B`;

CREATE TABLE `ast_BankTransferModeMap_B` ( `banktransfermodemapPkey` INT(11) NOT NULL AUTO_INCREMENT, `bankId` VARCHAR(256) NOT NULL, `wireTransferModeId` VARCHAR(256) NOT NULL, PRIMARY KEY (`banktransfermodemapPkey`));

