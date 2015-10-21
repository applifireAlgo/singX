

ALTER TABLE `ast_SingxContacts_T` ADD CONSTRAINT FOREIGN KEY (`prefixId`) REFERENCES `ast_SingxPrefix_M`(`prefixId`);



ALTER TABLE `ast_SingxContacts_T` ADD CONSTRAINT FOREIGN KEY (`genderId`) REFERENCES `ast_Gender_M`(`genderId`);



ALTER TABLE `ast_SingxContacts_T` ADD CONSTRAINT FOREIGN KEY (`phoneCountryCode`) REFERENCES `ast_CallingCode_M`(`mapId`);



ALTER TABLE `ast_SingxContacts_T` ADD CONSTRAINT FOREIGN KEY (`countryId`) REFERENCES `ast_Country_M`(`countryId`);

