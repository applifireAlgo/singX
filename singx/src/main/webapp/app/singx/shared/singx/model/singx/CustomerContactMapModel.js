Ext.define('Buzzor.singx.shared.singx.model.singx.CustomerContactMapModel', {
     "extend": "Ext.data.Model",
     "fields": [{
          "name": "primaryKey",
          "type": "int",
          "defaultValue": ""
     }, {
          "name": "customercontactmapPkey",
          "type": "int",
          "defaultValue": ""
     }, {
          "name": "customerId",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "contactId",
          "type": "string",
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