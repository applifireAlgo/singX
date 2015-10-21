

ALTER TABLE `ast_CfgDocument_M` ADD CONSTRAINT FOREIGN KEY (`customerType`) REFERENCES `ast_CustomerType_M`(`customerTypeId`);



ALTER TABLE `ast_CfgDocument_M` ADD CONSTRAINT FOREIGN KEY (`countryId`) REFERENCES `ast_Country_M`(`countryId`);

