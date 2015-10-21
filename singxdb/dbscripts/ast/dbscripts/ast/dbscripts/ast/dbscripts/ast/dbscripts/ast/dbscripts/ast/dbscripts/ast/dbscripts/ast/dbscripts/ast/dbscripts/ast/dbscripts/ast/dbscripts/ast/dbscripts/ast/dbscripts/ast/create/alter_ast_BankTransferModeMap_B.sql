

ALTER TABLE `ast_BankTransferModeMap_B` ADD CONSTRAINT FOREIGN KEY (`bankId`) REFERENCES `ast_Bank_T`(`bankId`);



ALTER TABLE `ast_BankTransferModeMap_B` ADD CONSTRAINT FOREIGN KEY (`wireTransferModeId`) REFERENCES `ast_WireTransferMode_T`(`wireTransferModeId`);

