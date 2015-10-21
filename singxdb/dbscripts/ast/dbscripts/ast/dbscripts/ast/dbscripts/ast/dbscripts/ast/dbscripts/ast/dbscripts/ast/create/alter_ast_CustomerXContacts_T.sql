

ALTER TABLE `ast_CustomerXContacts_T` ADD CONSTRAINT FOREIGN KEY (`contactId`) REFERENCES `ast_SingxContacts_T`(`contactId`);



ALTER TABLE `ast_CustomerXContacts_T` ADD CONSTRAINT FOREIGN KEY (`customerId`) REFERENCES `ast_SingXCustomer_T`(`customerId`);

