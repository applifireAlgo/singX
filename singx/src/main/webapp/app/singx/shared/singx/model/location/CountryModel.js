Ext.define('Buzzor.singx.shared.singx.model.location.CountryModel', {
     "extend": "Ext.data.Model",
     "fields": [{
          "name": "primaryKey",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "countryId",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "countryName",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "countryCode1",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "countryCode2",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "countryFlag",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "capital",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "currencyCode",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "currencyName",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "currencySymbol",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "capitalLatitude",
          "type": "int",
          "defaultValue": ""
     }, {
          "name": "capitalLongitude",
          "type": "int",
          "defaultValue": ""
     }, {
          "name": "isoNumeric",
          "type": "int",
          "defaultValue": ""
     }, {
          "name": "versionId",
          "type": "int",
          "defaultValue": ""
     }, {
          "name": "entityAudit",
          "reference": "EntityAudit"
     }, {
          "name": "primaryDisplay",
          "type": "string",
          "defaultValue": ""
     }]
});