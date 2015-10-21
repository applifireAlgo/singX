

ALTER TABLE `ast_Bank_M` ADD CONSTRAINT FOREIGN KEY (`countryId`) REFERENCES `ast_Country_M`(`countryId`);



ALTER TABLE `ast_Bank_M` ADD CONSTRAINT FOREIGN KEY (`wireTransferMode`) REFERENCES `ast_WireTransferMode_M`(`wireTransferModeId`);

