

ALTER TABLE `ast_UserContactMap_T` ADD CONSTRAINT FOREIGN KEY (`contactId`) REFERENCES `ast_SingxContacts_T`(`contactId`);

