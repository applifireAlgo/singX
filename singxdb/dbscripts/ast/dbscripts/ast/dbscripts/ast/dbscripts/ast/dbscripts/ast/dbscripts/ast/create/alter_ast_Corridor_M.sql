

ALTER TABLE `ast_Corridor_M` ADD CONSTRAINT FOREIGN KEY (`toCountryId`) REFERENCES `ast_Country_M`(`countryId`);



ALTER TABLE `ast_Corridor_M` ADD CONSTRAINT FOREIGN KEY (`countryId`) REFERENCES `ast_Country_M`(`countryId`);

