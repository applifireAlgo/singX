

ALTER TABLE `ast_CfgDocCntIndividual_M` ADD CONSTRAINT FOREIGN KEY (`countryId`) REFERENCES `ast_Country_M`(`countryId`);



ALTER TABLE `ast_CfgDocCntIndividual_M` ADD CONSTRAINT FOREIGN KEY (`residenceTypeId`) REFERENCES `ast_ResidenceType_M`(`residencTypeId`);

