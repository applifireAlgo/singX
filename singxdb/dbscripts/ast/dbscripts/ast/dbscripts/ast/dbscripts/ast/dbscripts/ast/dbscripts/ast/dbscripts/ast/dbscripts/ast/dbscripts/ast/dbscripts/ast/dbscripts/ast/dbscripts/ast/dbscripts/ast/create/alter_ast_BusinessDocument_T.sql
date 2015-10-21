

ALTER TABLE `ast_BusinessDocument_T` ADD CONSTRAINT FOREIGN KEY (`contactId`) REFERENCES `ast_SingxContacts_T`(`contactId`);



ALTER TABLE `ast_BusinessDocument_T` ADD CONSTRAINT FOREIGN KEY (`documentId`) REFERENCES `ast_CfgDocCorporate_M`(`documentId`);

