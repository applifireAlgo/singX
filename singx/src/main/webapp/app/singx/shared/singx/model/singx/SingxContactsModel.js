Ext.define('Buzzor.singx.shared.singx.model.singx.SingxContactsModel', {
     "extend": "Ext.data.Model",
     "fields": [{
          "name": "primaryKey",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "contactId",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "prefixid",
          "reference": "SingxPrefix",
          "defaultValue": ""
     }, {
          "name": "firstName",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "middleName",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "lastName",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "genderid",
          "reference": "Gender",
          "defaultValue": ""
     }, {
          "name": "dateOfBirth",
          "type": "date",
          "defaultValue": ""
     }, {
          "name": "emailId",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "phonecountrycode",
          "reference": "CallingCode",
          "defaultValue": ""
     }, {
          "name": "phoneNumber",
          "type": "int",
          "defaultValue": ""
     }, {
          "name": "countryid",
          "reference": "Country",
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