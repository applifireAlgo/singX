

ALTER TABLE `ast_CfgCountryAddress_M` ADD CONSTRAINT FOREIGN KEY (`inputTypeId`) REFERENCES `ast_InputDataType_M`(`inputTypeId`);



ALTER TABLE `ast_CfgCountryAddress_M` ADD CONSTRAINT FOREIGN KEY (`countryId`) REFERENCES `ast_Country_M`(`countryId`);

