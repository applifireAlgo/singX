Ext.define('Buzzor.singx.shared.singx.model.singx.SingxAddressModel', {
     "extend": "Ext.data.Model",
     "fields": [{
          "name": "primaryKey",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "addressId",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "contactid",
          "reference": "SingxContacts",
          "defaultValue": ""
     }, {
          "name": "addressLabel",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "line1",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "line2",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "line3",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "line4",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "line5",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "line6",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "line7",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "line8",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "city",
          "reference": "City",
          "defaultValue": ""
     }, {
          "name": "district",
          "reference": "District",
          "defaultValue": ""
     }, {
          "name": "state",
          "reference": "State",
          "defaultValue": ""
     }, {
          "name": "country",
          "reference": "Country",
          "defaultValue": ""
     }, {
          "name": "postalCode",
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