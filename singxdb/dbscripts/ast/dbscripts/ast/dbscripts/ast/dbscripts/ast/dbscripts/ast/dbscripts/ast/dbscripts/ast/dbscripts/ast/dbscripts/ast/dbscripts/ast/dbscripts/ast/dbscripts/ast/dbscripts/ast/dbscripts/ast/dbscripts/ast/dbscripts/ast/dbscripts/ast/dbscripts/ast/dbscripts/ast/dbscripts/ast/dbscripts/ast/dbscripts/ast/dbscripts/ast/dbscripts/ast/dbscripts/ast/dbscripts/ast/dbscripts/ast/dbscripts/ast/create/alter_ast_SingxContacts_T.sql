

ALTER TABLE `ast_SingxContacts_T` ADD CONSTRAINT FOREIGN KEY (`prefixId`) REFERENCES `ast_SingxPrefix_M`(`prefixId`);



ALTER TABLE `ast_SingxContacts_T` ADD CONSTRAINT FOREIGN KEY (`genderId`) REFERENCES `ast_Gender_M`(`genderId`);

