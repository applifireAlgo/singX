

ALTER TABLE `ast_CorporateRegDetail_M` ADD CONSTRAINT FOREIGN KEY (`customerId`) REFERENCES `ast_SingXCustomer_T`(`customerId`);



ALTER TABLE `ast_CorporateRegDetail_M` ADD CONSTRAINT FOREIGN KEY (`companyTypeId`) REFERENCES `ast_CompanyType_M`(`companyTypeId`);



ALTER TABLE `ast_CorporateRegDetail_M` ADD CONSTRAINT FOREIGN KEY (`companyCategoryId`) REFERENCES `ast_CompanyCategory_M`(`companyCategoryId`);

