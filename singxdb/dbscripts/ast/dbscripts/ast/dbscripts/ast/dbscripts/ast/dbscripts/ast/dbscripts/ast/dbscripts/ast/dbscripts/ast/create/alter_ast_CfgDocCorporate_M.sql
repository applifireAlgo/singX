

ALTER TABLE `ast_CfgDocCorporate_M` ADD CONSTRAINT FOREIGN KEY (`countryId`) REFERENCES `ast_Country_M`(`countryId`);



ALTER TABLE `ast_CfgDocCorporate_M` ADD CONSTRAINT FOREIGN KEY (`companyType`) REFERENCES `ast_CompanyType_M`(`companyTypeId`);



ALTER TABLE `ast_CfgDocCorporate_M` ADD CONSTRAINT FOREIGN KEY (`companyCategory`) REFERENCES `ast_CompanyCategory_M`(`companyCategoryId`);

