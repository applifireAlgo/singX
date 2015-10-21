Ext.define('Buzzor.singx.web.singx.view.singx.CfgDocIndividualMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "CfgDocIndividualMainController",
     "restURL": "/CfgDocIndividual",
     "defaults": {
          "split": true
     },
     "requires": ["Buzzor.singx.shared.singx.model.singx.CfgDocIndividualModel", "Buzzor.singx.web.singx.controller.singx.CfgDocIndividualMainController", "Buzzor.singx.shared.singx.model.singx.ResidenceTypeModel", "Buzzor.singx.shared.singx.model.location.CountryModel", "Buzzor.singx.shared.singx.viewmodel.singx.CfgDocIndividualViewModel", "Ext.form.field.CustomDateField"],
     "communicationLog": [],
     "tabPosition": "bottom",
     "items": [{
          "title": "Data Browser",
          "layout": "border",
          "defaults": {
               "split": true
          },
          "autoScroll": false,
          "customWidgetType": "vdBorderLayout",
          "items": [{
               "xtype": "tabpanel",
               "customWidgetType": "vdTabLayout",
               "margin": "5 0 5 5",
               "border": 1,
               "style": {
                    "borderColor": "#f6f6f6",
                    "borderStyle": "solid",
                    "borderWidth": "1px"
               },
               "displayName": "cfgDocIndividual",
               "name": "CfgDocIndividualTreeContainer",
               "itemId": "CfgDocIndividualTreeContainer",
               "restURL": "/CfgDocIndividual",
               "autoScroll": false,
               "collapsible": true,
               "titleCollapse": true,
               "collapseMode": "header",
               "collapsed": false,
               "items": [{
                    "xtype": "treepanel",
                    "customWidgetType": "vdTree",
                    "title": "Browse",
                    "useArrows": true,
                    "rootVisible": false,
                    "itemId": "CfgDocIndividualTree",
                    "listeners": {
                         "select": "treeClick"
                    },
                    "tbar": [{
                         "xtype": "triggerfield",
                         "customWidgetType": "vdTriggerField",
                         "emptyText": "Search",
                         "triggerCls": "",
                         "listeners": {
                              "change": "onTriggerfieldChange",
                              "buffer": 250
                         }
                    }, "->", {
                         "xtype": "tool",
                         "type": "refresh",
                         "tooltip": "Refresh Tree Data",
                         "handler": "onTreeRefreshClick"
                    }]
               }, {
                    "title": "Advance Search",
                    "xtype": "form",
                    "customWidgetType": "vdFormpanel",
                    "itemId": "queryPanel",
                    "dockedItems": [{
                         "xtype ": "toolbar",
                         "customWidgetType": "vdBBar",
                         "dock": "bottom",
                         "isDockedItem": true,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill"
                         }, {
                              "xtype": "button",
                              "customWidgetType": "vdButton",
                              "text": "Filter",
                              "handler": "onFilterClick"
                         }]
                    }],
                    "items": [{
                         "name": "documentId",
                         "itemId": "documentId",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "documentId",
                         "margin": "5 5 5 5",
                         "fieldLabel": "documentId",
                         "fieldId": "6B83CA93-F789-46FF-A60C-1D04D75A4B27",
                         "hidden": true,
                         "value": ""
                    }, {
                         "name": "residenceTypeId",
                         "itemId": "residenceTypeId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Residence Type",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Residence Type",
                         "fieldId": "781FF7F4-120F-47AE-915D-10CDA0420098",
                         "restURL": "ResidenceType",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "store": {
                              "data": [],
                              "model": "Buzzor.singx.shared.singx.model.singx.ResidenceTypeModel"
                         }
                    }, {
                         "name": "countryId",
                         "itemId": "countryId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Country",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Country",
                         "fieldId": "DC2E7B69-44A1-4A06-B1FA-097566084374",
                         "restURL": "Country",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "store": {
                              "data": [],
                              "model": "Buzzor.singx.shared.singx.model.location.CountryModel"
                         }
                    }]
               }],
               "region": "west",
               "width": "20%"
          }, {
               "region": "center",
               "layout": "border",
               "defaults": {
                    "split": true
               },
               "customWidgetType": "vdBorderLayout",
               "items": [{
                    "customWidgetType": "vdFormpanel",
                    "viewModel": "CfgDocIndividualViewModel",
                    "xtype": "form",
                    "displayName": "cfgDocIndividual",
                    "title": "cfgDocIndividual",
                    "name": "CfgDocIndividual",
                    "itemId": "CfgDocIndividual",
                    "bodyPadding": 10,
                    "items": [{
                         "name": "documentName",
                         "itemId": "documentName",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Document Name",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Document Name<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "7235CB09-5461-49F4-8391-4284EDFCC166",
                         "minLength": "0",
                         "maxLength": "256",
                         "bind": "{documentName}",
                         "columnWidth": 0.5
                    }, {
                         "name": "isReferenceNoReqd",
                         "itemId": "isReferenceNoReqd",
                         "xtype": "checkbox",
                         "customWidgetType": "vdCheckbox",
                         "displayName": "Reference No Reqd?",
                         "margin": "5 5 5 5",
                         "value": "0",
                         "inputValue": true,
                         "fieldLabel": "Reference No Reqd?",
                         "fieldId": "60435ED4-52C4-433C-BDE0-EF14A7EF5E03",
                         "bind": "{isReferenceNoReqd}",
                         "columnWidth": 0.5
                    }, {
                         "name": "isIssueDateReqd",
                         "itemId": "isIssueDateReqd",
                         "xtype": "checkbox",
                         "customWidgetType": "vdCheckbox",
                         "displayName": "Issue Date Reqd?",
                         "margin": "5 5 5 5",
                         "value": "0",
                         "inputValue": true,
                         "fieldLabel": "Issue Date Reqd?",
                         "fieldId": "2E1F6CF6-45B2-4691-9665-4B36A7F7A9A2",
                         "bind": "{isIssueDateReqd}",
                         "columnWidth": 0.5
                    }, {
                         "name": "isExpiryDateReqd",
                         "itemId": "isExpiryDateReqd",
                         "xtype": "checkbox",
                         "customWidgetType": "vdCheckbox",
                         "displayName": "Expiry Date Reqd?",
                         "margin": "5 5 5 5",
                         "value": "0",
                         "inputValue": true,
                         "fieldLabel": "Expiry Date Reqd?",
                         "fieldId": "61CC98FD-1714-4529-AB10-AED507879B92",
                         "bind": "{isExpiryDateReqd}",
                         "columnWidth": 0.5
                    }, {
                         "name": "remarks",
                         "itemId": "remarks",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Remarks",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Remarks",
                         "fieldId": "618ED755-9ED1-4AFF-B4F2-03B50DB13608",
                         "minLength": "0",
                         "maxLength": "256",
                         "bind": "{remarks}",
                         "columnWidth": 0.5
                    }, {
                         "name": "isMandatory",
                         "itemId": "isMandatory",
                         "xtype": "checkbox",
                         "customWidgetType": "vdCheckbox",
                         "displayName": "Mandatory?",
                         "margin": "5 5 5 5",
                         "value": "0",
                         "inputValue": true,
                         "fieldLabel": "Mandatory?",
                         "fieldId": "3DFBD1F8-5BC8-4A19-8F16-B11317FDC2EA",
                         "bind": "{isMandatory}",
                         "columnWidth": 0.5
                    }, {
                         "name": "displaySeq",
                         "itemId": "displaySeq",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Display Seq",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Display Seq<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "3A28EE6F-E5D7-4DD7-BE49-92FCCB23D6F3",
                         "minValue": "-2147483648",
                         "maxValue": "2147483647",
                         "bind": "{displaySeq}",
                         "columnWidth": 0.5
                    }, {
                         "name": "maxSize",
                         "itemId": "maxSize",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Max Size",
                         "margin": "5 5 5 5",
                         "value": "500",
                         "fieldLabel": "Max Size<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "BF42A581-6584-419B-8A42-8BF605D5652E",
                         "minValue": "-2147483648",
                         "maxValue": "2147483647",
                         "bind": "{maxSize}",
                         "columnWidth": 0.5
                    }, {
                         "name": "residenceTypeId",
                         "itemId": "residenceTypeId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Residence Type",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Residence Type<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "781FF7F4-120F-47AE-915D-10CDA0420098",
                         "restURL": "ResidenceType",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "store": {
                              "data": [],
                              "model": "Buzzor.singx.shared.singx.model.singx.ResidenceTypeModel"
                         },
                         "forceSelection": true,
                         "bind": "{residenceTypeId}",
                         "columnWidth": 0.5
                    }, {
                         "name": "countryId",
                         "itemId": "countryId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Country",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Country<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "DC2E7B69-44A1-4A06-B1FA-097566084374",
                         "restURL": "Country",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "store": {
                              "data": [],
                              "model": "Buzzor.singx.shared.singx.model.location.CountryModel"
                         },
                         "forceSelection": true,
                         "bind": "{countryId}",
                         "columnWidth": 0.5,
                         "listeners": {
                              "change": "onCountryIdChange"
                         }
                    }],
                    "layout": "column",
                    "defaults": {
                         "columnWidth": 0.5,
                         "labelAlign": "left",
                         "labelWidth": 200
                    },
                    "autoScroll": true,
                    "dockedItems": [{
                         "xtype ": "toolbar",
                         "customWidgetType": "vdBBar",
                         "dock": "bottom",
                         "ui": "footer",
                         "isDockedItem": true,
                         "parentId": 1,
                         "customId": 971,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "parentId": 971,
                              "customId": 407
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "parentId": 971,
                              "customId": 408,
                              "listeners": {
                                   "click": "saveForm"
                              }
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Reset",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "resetFormButton",
                              "parentId": 971,
                              "customId": 409,
                              "listeners": {
                                   "click": "resetForm"
                              }
                         }],
                         "defaults": {}
                    }],
                    "listeners": {
                         "scope": "controller"
                    },
                    "tools": [{
                         "type": "help",
                         "tooltip": "Console",
                         "handler": "onConsoleClick"
                    }],
                    "extend": "Ext.form.Panel",
                    "region": "center"
               }, {
                    "xtype": "gridpanel",
                    "customWidgetType": "vdGrid",
                    "displayName": "cfgDocIndividual",
                    "title": "Details Grid",
                    "name": "CfgDocIndividualGrid",
                    "itemId": "CfgDocIndividualGrid",
                    "restURL": "/CfgDocIndividual",
                    "store": [],
                    "bodyPadding": 10,
                    "columns": [{
                         "header": "documentId",
                         "dataIndex": "documentId",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "primaryDisplay",
                         "dataIndex": "primaryDisplay",
                         "hidden": true
                    }, {
                         "header": "primaryKey",
                         "dataIndex": "primaryKey",
                         "hidden": true
                    }, {
                         "header": "Document Name",
                         "dataIndex": "documentName",
                         "flex": 1
                    }, {
                         "header": "Reference No Reqd?",
                         "dataIndex": "isReferenceNoReqd",
                         "flex": 1
                    }, {
                         "header": "Issue Date Reqd?",
                         "dataIndex": "isIssueDateReqd",
                         "flex": 1
                    }, {
                         "header": "Expiry Date Reqd?",
                         "dataIndex": "isExpiryDateReqd",
                         "flex": 1
                    }, {
                         "header": "Remarks",
                         "dataIndex": "remarks",
                         "flex": 1
                    }, {
                         "header": "Mandatory?",
                         "dataIndex": "isMandatory",
                         "flex": 1
                    }, {
                         "header": "Display Seq",
                         "dataIndex": "displaySeq",
                         "flex": 1
                    }, {
                         "header": "Max Size",
                         "dataIndex": "maxSize",
                         "flex": 1
                    }, {
                         "header": "Residence Type",
                         "dataIndex": "residenceTypeId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Country",
                         "dataIndex": "countryId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "createdBy",
                         "dataIndex": "createdBy",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "createdDate",
                         "dataIndex": "createdDate",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "updatedBy",
                         "dataIndex": "updatedBy",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "updatedDate",
                         "dataIndex": "updatedDate",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "versionId",
                         "dataIndex": "versionId",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "activeStatus",
                         "dataIndex": "activeStatus",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "txnAccessCode",
                         "dataIndex": "txnAccessCode",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "xtype": "actioncolumn",
                         "customWidgetType": "vdActionColumn",
                         "width": 30,
                         "sortable": false,
                         "menuDisable": true,
                         "items": [{
                              "icon": "images/delete.gif",
                              "tooltip": "Delete Record",
                              "handler": "onDeleteActionColumnClickMainGrid"
                         }]
                    }],
                    "listeners": {
                         "itemclick": "onGridItemClick"
                    },
                    "tools": [{
                         "type": "refresh",
                         "tooltip": "Refresh Grid Data",
                         "handler": "onGridRefreshClick"
                    }],
                    "collapsible": true,
                    "titleCollapse": true,
                    "collapseMode": "header",
                    "region": "south",
                    "height": "40%"
               }]
          }]
     }, {
          "title": "Add New",
          "itemId": "addNewForm",
          "layout": "border",
          "customWidgetType": "vdBorderLayout",
          "autoScroll": false,
          "items": [{
               "customWidgetType": "vdFormpanel",
               "viewModel": "CfgDocIndividualViewModel",
               "xtype": "form",
               "displayName": "cfgDocIndividual",
               "title": "cfgDocIndividual",
               "name": "CfgDocIndividual",
               "itemId": "CfgDocIndividual",
               "bodyPadding": 10,
               "items": [{
                    "name": "documentName",
                    "itemId": "documentName",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Document Name",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Document Name<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "7235CB09-5461-49F4-8391-4284EDFCC166",
                    "minLength": "0",
                    "maxLength": "256",
                    "bind": "{documentName}",
                    "columnWidth": 0.5
               }, {
                    "name": "isReferenceNoReqd",
                    "itemId": "isReferenceNoReqd",
                    "xtype": "checkbox",
                    "customWidgetType": "vdCheckbox",
                    "displayName": "Reference No Reqd?",
                    "margin": "5 5 5 5",
                    "value": "0",
                    "inputValue": true,
                    "fieldLabel": "Reference No Reqd?",
                    "fieldId": "60435ED4-52C4-433C-BDE0-EF14A7EF5E03",
                    "bind": "{isReferenceNoReqd}",
                    "columnWidth": 0.5
               }, {
                    "name": "isIssueDateReqd",
                    "itemId": "isIssueDateReqd",
                    "xtype": "checkbox",
                    "customWidgetType": "vdCheckbox",
                    "displayName": "Issue Date Reqd?",
                    "margin": "5 5 5 5",
                    "value": "0",
                    "inputValue": true,
                    "fieldLabel": "Issue Date Reqd?",
                    "fieldId": "2E1F6CF6-45B2-4691-9665-4B36A7F7A9A2",
                    "bind": "{isIssueDateReqd}",
                    "columnWidth": 0.5
               }, {
                    "name": "isExpiryDateReqd",
                    "itemId": "isExpiryDateReqd",
                    "xtype": "checkbox",
                    "customWidgetType": "vdCheckbox",
                    "displayName": "Expiry Date Reqd?",
                    "margin": "5 5 5 5",
                    "value": "0",
                    "inputValue": true,
                    "fieldLabel": "Expiry Date Reqd?",
                    "fieldId": "61CC98FD-1714-4529-AB10-AED507879B92",
                    "bind": "{isExpiryDateReqd}",
                    "columnWidth": 0.5
               }, {
                    "name": "remarks",
                    "itemId": "remarks",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Remarks",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Remarks",
                    "fieldId": "618ED755-9ED1-4AFF-B4F2-03B50DB13608",
                    "minLength": "0",
                    "maxLength": "256",
                    "bind": "{remarks}",
                    "columnWidth": 0.5
               }, {
                    "name": "isMandatory",
                    "itemId": "isMandatory",
                    "xtype": "checkbox",
                    "customWidgetType": "vdCheckbox",
                    "displayName": "Mandatory?",
                    "margin": "5 5 5 5",
                    "value": "0",
                    "inputValue": true,
                    "fieldLabel": "Mandatory?",
                    "fieldId": "3DFBD1F8-5BC8-4A19-8F16-B11317FDC2EA",
                    "bind": "{isMandatory}",
                    "columnWidth": 0.5
               }, {
                    "name": "displaySeq",
                    "itemId": "displaySeq",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Display Seq",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Display Seq<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "3A28EE6F-E5D7-4DD7-BE49-92FCCB23D6F3",
                    "minValue": "-2147483648",
                    "maxValue": "2147483647",
                    "bind": "{displaySeq}",
                    "columnWidth": 0.5
               }, {
                    "name": "maxSize",
                    "itemId": "maxSize",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Max Size",
                    "margin": "5 5 5 5",
                    "value": "500",
                    "fieldLabel": "Max Size<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "BF42A581-6584-419B-8A42-8BF605D5652E",
                    "minValue": "-2147483648",
                    "maxValue": "2147483647",
                    "bind": "{maxSize}",
                    "columnWidth": 0.5
               }, {
                    "name": "residenceTypeId",
                    "itemId": "residenceTypeId",
                    "xtype": "combo",
                    "customWidgetType": "vdCombo",
                    "displayName": "Residence Type",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Residence Type<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "781FF7F4-120F-47AE-915D-10CDA0420098",
                    "restURL": "ResidenceType",
                    "displayField": "primaryDisplay",
                    "valueField": "primaryKey",
                    "store": {
                         "data": [],
                         "model": "Buzzor.singx.shared.singx.model.singx.ResidenceTypeModel"
                    },
                    "forceSelection": true,
                    "bind": "{residenceTypeId}",
                    "columnWidth": 0.5
               }, {
                    "name": "countryId",
                    "itemId": "countryId",
                    "xtype": "combo",
                    "customWidgetType": "vdCombo",
                    "displayName": "Country",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Country<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "DC2E7B69-44A1-4A06-B1FA-097566084374",
                    "restURL": "Country",
                    "displayField": "primaryDisplay",
                    "valueField": "primaryKey",
                    "store": {
                         "data": [],
                         "model": "Buzzor.singx.shared.singx.model.location.CountryModel"
                    },
                    "forceSelection": true,
                    "bind": "{countryId}",
                    "columnWidth": 0.5,
                    "listeners": {
                         "change": "onCountryIdChange"
                    }
               }],
               "layout": "column",
               "defaults": {
                    "columnWidth": 0.5,
                    "labelAlign": "left",
                    "labelWidth": 200
               },
               "autoScroll": true,
               "dockedItems": [{
                    "xtype ": "toolbar",
                    "customWidgetType": "vdBBar",
                    "dock": "bottom",
                    "ui": "footer",
                    "isDockedItem": true,
                    "parentId": 1,
                    "customId": 971,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill",
                         "parentId": 971,
                         "customId": 407
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "parentId": 971,
                         "customId": 408,
                         "listeners": {
                              "click": "saveForm"
                         }
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Reset",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "resetFormButton",
                         "parentId": 971,
                         "customId": 409,
                         "listeners": {
                              "click": "resetForm"
                         }
                    }],
                    "defaults": {}
               }],
               "listeners": {
                    "scope": "controller"
               },
               "tools": [{
                    "type": "help",
                    "tooltip": "Console",
                    "handler": "onConsoleClick"
               }],
               "extend": "Ext.form.Panel",
               "region": "center"
          }]
     }]
});