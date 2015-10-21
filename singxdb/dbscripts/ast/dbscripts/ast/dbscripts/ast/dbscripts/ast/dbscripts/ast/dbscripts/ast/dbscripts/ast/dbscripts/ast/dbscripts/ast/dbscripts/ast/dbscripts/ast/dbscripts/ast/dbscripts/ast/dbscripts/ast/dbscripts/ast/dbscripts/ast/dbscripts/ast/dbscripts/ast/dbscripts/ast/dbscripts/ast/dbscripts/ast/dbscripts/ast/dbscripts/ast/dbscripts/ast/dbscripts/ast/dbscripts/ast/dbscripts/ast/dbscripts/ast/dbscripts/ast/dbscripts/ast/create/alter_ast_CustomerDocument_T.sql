

ALTER TABLE `ast_CustomerDocument_T` ADD CONSTRAINT FOREIGN KEY (`contactId`) REFERENCES `ast_SingxContacts_T`(`contactId`);



ALTER TABLE `ast_CustomerDocument_T` ADD CONSTRAINT FOREIGN KEY (`documentId`) REFERENCES `ast_CfgDocument_M`(`documentId`);

