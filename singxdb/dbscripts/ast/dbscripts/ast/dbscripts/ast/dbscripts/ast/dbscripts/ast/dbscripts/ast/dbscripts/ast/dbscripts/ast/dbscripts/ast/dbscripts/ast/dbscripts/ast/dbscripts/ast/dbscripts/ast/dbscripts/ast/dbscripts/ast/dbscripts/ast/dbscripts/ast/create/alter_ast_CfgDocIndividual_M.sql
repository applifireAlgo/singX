

ALTER TABLE `ast_CfgDocIndividual_M` ADD CONSTRAINT FOREIGN KEY (`residenceTypeId`) REFERENCES `ast_ResidenceType_M`(`residencTypeId`);



ALTER TABLE `ast_CfgDocIndividual_M` ADD CONSTRAINT FOREIGN KEY (`countryId`) REFERENCES `ast_Country_M`(`countryId`);

