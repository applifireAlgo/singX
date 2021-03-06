Ext.define('Buzzor.singx.shared.singx.model.singx.CustomerDocumentModel', {
     "extend": "Ext.data.Model",
     "fields": [{
          "name": "contactid",
          "reference": "SingxContacts",
          "defaultValue": ""
     }, {
          "name": "documentid",
          "reference": "CfgDocIndividual",
          "defaultValue": ""
     }, {
          "name": "primaryKey",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "mapId",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "referenceNo",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "issueDate",
          "type": "date",
          "defaultValue": ""
     }, {
          "name": "expiryDate",
          "type": "date",
          "defaultValue": ""
     }, {
          "name": "remarks",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "docFile",
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