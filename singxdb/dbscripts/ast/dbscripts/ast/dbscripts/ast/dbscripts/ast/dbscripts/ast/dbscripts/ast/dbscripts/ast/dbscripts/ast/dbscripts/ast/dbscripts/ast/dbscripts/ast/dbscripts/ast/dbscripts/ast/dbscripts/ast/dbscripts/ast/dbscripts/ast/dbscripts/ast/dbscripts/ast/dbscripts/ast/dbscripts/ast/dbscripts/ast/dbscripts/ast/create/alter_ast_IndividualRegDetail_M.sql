

ALTER TABLE `ast_IndividualRegDetail_M` ADD CONSTRAINT FOREIGN KEY (`customerId`) REFERENCES `ast_SingXCustomer_T`(`customerId`);



ALTER TABLE `ast_IndividualRegDetail_M` ADD CONSTRAINT FOREIGN KEY (`residenceTypeId`) REFERENCES `ast_ResidenceType_M`(`residencTypeId`);



ALTER TABLE `ast_IndividualRegDetail_M` ADD CONSTRAINT FOREIGN KEY (`documentId`) REFERENCES `ast_CfgDocIndividual_M`(`documentId`);

