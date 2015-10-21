

ALTER TABLE `ast_CustomerBankAccount_T` ADD CONSTRAINT FOREIGN KEY (`contactId`) REFERENCES `ast_SingxContacts_T`(`contactId`);



ALTER TABLE `ast_CustomerBankAccount_T` ADD CONSTRAINT FOREIGN KEY (`wireTransferModeId`) REFERENCES `ast_WireTransferMode_T`(`wireTransferModeId`);



ALTER TABLE `ast_CustomerBankAccount_T` ADD CONSTRAINT FOREIGN KEY (`bankId`) REFERENCES `ast_Bank_T`(`bankId`);



ALTER TABLE `ast_CustomerBankAccount_T` ADD CONSTRAINT FOREIGN KEY (`branchId`) REFERENCES `ast_BankBranch_M`(`branchId`);

