

ALTER TABLE `ast_SingXCustomer_T` ADD CONSTRAINT FOREIGN KEY (`countryId`) REFERENCES `ast_Country_M`(`countryId`);



ALTER TABLE `ast_SingXCustomer_T` ADD CONSTRAINT FOREIGN KEY (`customerTypeId`) REFERENCES `ast_CustomerType_M`(`customerTypeId`);

