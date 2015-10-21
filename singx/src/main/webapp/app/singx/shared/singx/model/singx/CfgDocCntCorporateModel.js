Ext.define('Buzzor.singx.shared.singx.model.singx.CfgDocCntCorporateModel', {
     "extend": "Ext.data.Model",
     "fields": [{
          "name": "primaryKey",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "cfgDocId",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "countryid",
          "reference": "Country",
          "defaultValue": ""
     }, {
          "name": "companytypeid",
          "reference": "CompanyType",
          "defaultValue": ""
     }, {
          "name": "companycategoryid",
          "reference": "CompanyCategory",
          "defaultValue": ""
     }, {
          "name": "mandatoryDocCount",
          "type": "int",
          "defaultValue": ""
     }, {
          "name": "otherDocCount",
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