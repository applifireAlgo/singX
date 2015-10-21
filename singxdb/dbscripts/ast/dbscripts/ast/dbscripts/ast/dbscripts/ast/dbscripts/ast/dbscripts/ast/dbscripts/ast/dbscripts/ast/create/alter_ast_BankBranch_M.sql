

ALTER TABLE `ast_BankBranch_M` ADD CONSTRAINT FOREIGN KEY (`bankId`) REFERENCES `ast_Bank_T`(`bankId`);



ALTER TABLE `ast_BankBranch_M` ADD CONSTRAINT FOREIGN KEY (`countryId`) REFERENCES `ast_Country_M`(`countryId`);

