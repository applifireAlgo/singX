

ALTER TABLE `ast_CfgDocument_M` ADD CONSTRAINT FOREIGN KEY (`customerType`) REFERENCES `ast_CustomerType_M`(`customerTypeId`);

