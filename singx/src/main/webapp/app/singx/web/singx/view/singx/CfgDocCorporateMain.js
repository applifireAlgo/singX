Ext.define('Buzzor.singx.web.singx.view.singx.CfgDocCorporateMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "CfgDocCorporateMainController",
     "restURL": "/CfgDocCorporate",
     "defaults": {
          "split": true
     },
     "requires": ["Buzzor.singx.shared.singx.model.singx.CfgDocCorporateModel", "Buzzor.singx.web.singx.controller.singx.CfgDocCorporateMainController", "Buzzor.singx.shared.singx.model.location.CountryModel", "Buzzor.singx.shared.singx.model.singx.CompanyTypeModel", "Buzzor.singx.shared.singx.model.singx.CompanyCategoryModel", "Buzzor.singx.shared.singx.viewmodel.singx.CfgDocCorporateViewModel", "Ext.form.field.CustomDateField"],
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
               "displayName": "cfgDocCorporate",
               "name": "CfgDocCorporateTreeContainer",
               "itemId": "CfgDocCorporateTreeContainer",
               "restURL": "/CfgDocCorporate",
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
                    "itemId": "CfgDocCorporateTree",
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
                         "fieldId": "F472C9E9-3B0F-4DFD-83A5-A0C50E817B68",
                         "hidden": true,
                         "value": ""
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
                    "viewModel": "CfgDocCorporateViewModel",
                    "xtype": "form",
                    "displayName": "cfgDocCorporate",
                    "title": "cfgDocCorporate",
                    "name": "CfgDocCorporate",
                    "itemId": "CfgDocCorporate",
                    "bodyPadding": 10,
                    "items": [{
                         "name": "countryId",
                         "itemId": "countryId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Country",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Country<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "C52FA1E1-D1F3-41B5-A4C4-73C1BBDB4F10",
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
                    }, {
                         "name": "companyType",
                         "itemId": "companyType",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Company Type",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Company Type<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "0AD9A50D-CCDA-4086-B8E1-89FC4E2B9398",
                         "restURL": "CompanyType",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "store": {
                              "data": [],
                              "model": "Buzzor.singx.shared.singx.model.singx.CompanyTypeModel"
                         },
                         "forceSelection": true,
                         "bind": "{companyType}",
                         "columnWidth": 0.5
                    }, {
                         "name": "companyCategory",
                         "itemId": "companyCategory",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Company Category",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Company Category<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "BF587224-F853-4CC1-9C2F-6C2C04858828",
                         "restURL": "CompanyCategory",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "store": {
                              "data": [],
                              "model": "Buzzor.singx.shared.singx.model.singx.CompanyCategoryModel"
                         },
                         "forceSelection": true,
                         "bind": "{companyCategory}",
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
                         "fieldId": "349A65A2-CAE1-46FD-80B9-111B6EE6B347",
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
                         "fieldId": "CB6B4663-ECBF-401A-9DC2-75E9CA66F87F",
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
                         "fieldId": "8CA8D598-E90A-430C-B964-7B77B6186874",
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
                         "fieldId": "45EB3869-B490-451B-A1E6-2238C21E2C6B",
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
                         "fieldId": "57FBA332-9382-4E83-A7E6-E7F037609E91",
                         "bind": "{isMandatory}",
                         "columnWidth": 0.5
                    }, {
                         "name": "displaySeq",
                         "itemId": "displaySeq",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "DisplaySeq",
                         "margin": "5 5 5 5",
                         "fieldLabel": "DisplaySeq<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "D4A7DD9E-5453-462E-A503-279B3C142A25",
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
                         "fieldId": "A98F1FD0-B465-4642-94C7-C2558222EEE7",
                         "minValue": "-2147483648",
                         "maxValue": "2147483647",
                         "bind": "{maxSize}",
                         "columnWidth": 0.5
                    }, {
                         "name": "documentname",
                         "itemId": "documentname",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Document Name",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Document Name<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "A44CD229-91EA-4DC7-8AAC-C647E7609AFA",
                         "minLength": "0",
                         "maxLength": "50",
                         "bind": "{documentname}",
                         "columnWidth": 0.5
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
                         "customId": 62,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "parentId": 62,
                              "customId": 901
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "parentId": 62,
                              "customId": 902,
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
                              "parentId": 62,
                              "customId": 903,
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
                    "displayName": "cfgDocCorporate",
                    "title": "Details Grid",
                    "name": "CfgDocCorporateGrid",
                    "itemId": "CfgDocCorporateGrid",
                    "restURL": "/CfgDocCorporate",
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
                         "header": "Country",
                         "dataIndex": "countryId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Company Type",
                         "dataIndex": "companyType",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Company Category",
                         "dataIndex": "companyCategory",
                         "renderer": "renderFormValue",
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
                         "header": "DisplaySeq",
                         "dataIndex": "displaySeq",
                         "flex": 1
                    }, {
                         "header": "Max Size",
                         "dataIndex": "maxSize",
                         "flex": 1
                    }, {
                         "header": "Document Name",
                         "dataIndex": "documentname",
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
               "viewModel": "CfgDocCorporateViewModel",
               "xtype": "form",
               "displayName": "cfgDocCorporate",
               "title": "cfgDocCorporate",
               "name": "CfgDocCorporate",
               "itemId": "CfgDocCorporate",
               "bodyPadding": 10,
               "items": [{
                    "name": "countryId",
                    "itemId": "countryId",
                    "xtype": "combo",
                    "customWidgetType": "vdCombo",
                    "displayName": "Country",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Country<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "C52FA1E1-D1F3-41B5-A4C4-73C1BBDB4F10",
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
               }, {
                    "name": "companyType",
                    "itemId": "companyType",
                    "xtype": "combo",
                    "customWidgetType": "vdCombo",
                    "displayName": "Company Type",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Company Type<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "0AD9A50D-CCDA-4086-B8E1-89FC4E2B9398",
                    "restURL": "CompanyType",
                    "displayField": "primaryDisplay",
                    "valueField": "primaryKey",
                    "store": {
                         "data": [],
                         "model": "Buzzor.singx.shared.singx.model.singx.CompanyTypeModel"
                    },
                    "forceSelection": true,
                    "bind": "{companyType}",
                    "columnWidth": 0.5
               }, {
                    "name": "companyCategory",
                    "itemId": "companyCategory",
                    "xtype": "combo",
                    "customWidgetType": "vdCombo",
                    "displayName": "Company Category",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Company Category<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "BF587224-F853-4CC1-9C2F-6C2C04858828",
                    "restURL": "CompanyCategory",
                    "displayField": "primaryDisplay",
                    "valueField": "primaryKey",
                    "store": {
                         "data": [],
                         "model": "Buzzor.singx.shared.singx.model.singx.CompanyCategoryModel"
                    },
                    "forceSelection": true,
                    "bind": "{companyCategory}",
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
                    "fieldId": "349A65A2-CAE1-46FD-80B9-111B6EE6B347",
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
                    "fieldId": "CB6B4663-ECBF-401A-9DC2-75E9CA66F87F",
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
                    "fieldId": "8CA8D598-E90A-430C-B964-7B77B6186874",
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
                    "fieldId": "45EB3869-B490-451B-A1E6-2238C21E2C6B",
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
                    "fieldId": "57FBA332-9382-4E83-A7E6-E7F037609E91",
                    "bind": "{isMandatory}",
                    "columnWidth": 0.5
               }, {
                    "name": "displaySeq",
                    "itemId": "displaySeq",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "DisplaySeq",
                    "margin": "5 5 5 5",
                    "fieldLabel": "DisplaySeq<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "D4A7DD9E-5453-462E-A503-279B3C142A25",
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
                    "fieldId": "A98F1FD0-B465-4642-94C7-C2558222EEE7",
                    "minValue": "-2147483648",
                    "maxValue": "2147483647",
                    "bind": "{maxSize}",
                    "columnWidth": 0.5
               }, {
                    "name": "documentname",
                    "itemId": "documentname",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Document Name",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Document Name<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "A44CD229-91EA-4DC7-8AAC-C647E7609AFA",
                    "minLength": "0",
                    "maxLength": "50",
                    "bind": "{documentname}",
                    "columnWidth": 0.5
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
                    "customId": 62,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill",
                         "parentId": 62,
                         "customId": 901
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "parentId": 62,
                         "customId": 902,
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
                         "parentId": 62,
                         "customId": 903,
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