Ext.define('Buzzor.singx.shared.singx.model.singx.AgentModel', {
     "extend": "Ext.data.Model",
     "fields": [{
          "name": "primaryKey",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "agentId",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "agentCode",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "agentName",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "agencyName",
          "type": "string",
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
          "name": "CoreContacts",
          "reference": "CoreContactsModel"
     }, {
          "name": "entityAudit",
          "reference": "EntityAudit"
     }, {
          "name": "primaryDisplay",
          "type": "string",
          "defaultValue": ""
     }]
});