

ALTER TABLE `ast_CfgDocCntCorporate_M` ADD CONSTRAINT FOREIGN KEY (`countryId`) REFERENCES `ast_Country_M`(`countryId`);



ALTER TABLE `ast_CfgDocCntCorporate_M` ADD CONSTRAINT FOREIGN KEY (`companyTypeId`) REFERENCES `ast_CompanyType_M`(`companyTypeId`);



ALTER TABLE `ast_CfgDocCntCorporate_M` ADD CONSTRAINT FOREIGN KEY (`companyCategoryId`) REFERENCES `ast_CompanyCategory_M`(`companyCategoryId`);

