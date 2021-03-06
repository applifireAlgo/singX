Ext.define('Buzzor.singx.shared.singx.model.singx.CustomerBankAccountModel', {
     "extend": "Ext.data.Model",
     "fields": [{
          "name": "primaryKey",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "mapId",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "contactid",
          "reference": "SingxContacts",
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
          "name": "accountNumber",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "wiretransfermodeid",
          "reference": "WireTransferMode",
          "defaultValue": ""
     }, {
          "name": "bankid",
          "reference": "Bank",
          "defaultValue": ""
     }, {
          "name": "branchid",
          "reference": "BankBranch",
          "defaultValue": ""
     }, {
          "name": "jointAccHolderName",
          "type": "string",
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