Ext.define('Buzzor.singx.shared.singx.model.singx.BankTransferModeMapModel', {
     "extend": "Ext.data.Model",
     "fields": [{
          "name": "primaryKey",
          "type": "int",
          "defaultValue": ""
     }, {
          "name": "banktransfermodemapPkey",
          "type": "int",
          "defaultValue": ""
     }, {
          "name": "bankid",
          "reference": "Bank",
          "defaultValue": ""
     }, {
          "name": "wiretransfermodeid",
          "reference": "WireTransferMode",
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