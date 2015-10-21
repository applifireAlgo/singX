

ALTER TABLE `ast_SingxAddress_T` ADD CONSTRAINT FOREIGN KEY (`contactId`) REFERENCES `ast_SingxContacts_T`(`contactId`);



ALTER TABLE `ast_SingxAddress_T` ADD CONSTRAINT FOREIGN KEY (`city`) REFERENCES `ast_City_M`(`cityId`);



ALTER TABLE `ast_SingxAddress_T` ADD CONSTRAINT FOREIGN KEY (`district`) REFERENCES `ast_District_M`(`districtId`);



ALTER TABLE `ast_SingxAddress_T` ADD CONSTRAINT FOREIGN KEY (`state`) REFERENCES `ast_State_M`(`stateId`);



ALTER TABLE `ast_SingxAddress_T` ADD CONSTRAINT FOREIGN KEY (`country`) REFERENCES `ast_Country_M`(`countryId`);

