Ext.define('Buzzor.singx.web.singx.view.singx.CfgDocumentMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "CfgDocumentMainController",
     "restURL": "/CfgDocument",
     "defaults": {
          "split": true
     },
     "requires": ["Buzzor.singx.shared.singx.model.singx.CfgDocumentModel", "Buzzor.singx.web.singx.controller.singx.CfgDocumentMainController", "Buzzor.singx.shared.singx.model.singx.CustomerTypeModel", "Buzzor.singx.shared.singx.model.location.CountryModel", "Buzzor.singx.shared.singx.viewmodel.singx.CfgDocumentViewModel", "Ext.form.field.CustomDateField"],
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
               "displayName": "cfgDocument",
               "name": "CfgDocumentTreeContainer",
               "itemId": "CfgDocumentTreeContainer",
               "restURL": "/CfgDocument",
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
                    "itemId": "CfgDocumentTree",
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
                         "fieldId": "B9243BD2-8A87-439B-B5B8-1950902FF441",
                         "hidden": true,
                         "value": ""
                    }, {
                         "name": "documentName",
                         "itemId": "documentName",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Document Name",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Document Name",
                         "fieldId": "774F0035-EEC2-4239-B3B1-BF6DBE0E00C5",
                         "minLength": "0",
                         "maxLength": "50"
                    }, {
                         "name": "countryId",
                         "itemId": "countryId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Country",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Country",
                         "fieldId": "F944AE4A-47A7-477E-89BC-F60517940116",
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
                    "viewModel": "CfgDocumentViewModel",
                    "xtype": "form",
                    "displayName": "cfgDocument",
                    "title": "cfgDocument",
                    "name": "CfgDocument",
                    "itemId": "CfgDocument",
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
                         "fieldId": "774F0035-EEC2-4239-B3B1-BF6DBE0E00C5",
                         "minLength": "0",
                         "maxLength": "50",
                         "bind": "{documentName}",
                         "columnWidth": 0.5
                    }, {
                         "name": "isReferenceNoReqd",
                         "itemId": "isReferenceNoReqd",
                         "xtype": "checkbox",
                         "customWidgetType": "vdCheckbox",
                         "displayName": "ReferenceNoReqd",
                         "margin": "5 5 5 5",
                         "value": "0",
                         "inputValue": true,
                         "fieldLabel": "ReferenceNoReqd",
                         "fieldId": "A08E73AF-D66B-4148-BC87-028036FB6BB5",
                         "bind": "{isReferenceNoReqd}",
                         "columnWidth": 0.5
                    }, {
                         "name": "isIssueDateReqd",
                         "itemId": "isIssueDateReqd",
                         "xtype": "checkbox",
                         "customWidgetType": "vdCheckbox",
                         "displayName": "IssueDateReqd",
                         "margin": "5 5 5 5",
                         "value": "0",
                         "inputValue": true,
                         "fieldLabel": "IssueDateReqd",
                         "fieldId": "72BE108F-41CA-413C-947B-15ACCC88EB4B",
                         "bind": "{isIssueDateReqd}",
                         "columnWidth": 0.5
                    }, {
                         "name": "isExpiryDateReqd",
                         "itemId": "isExpiryDateReqd",
                         "xtype": "checkbox",
                         "customWidgetType": "vdCheckbox",
                         "displayName": "ExpiryDateReqd",
                         "margin": "5 5 5 5",
                         "value": "0",
                         "inputValue": true,
                         "fieldLabel": "ExpiryDateReqd",
                         "fieldId": "A3642FD0-0605-4B03-AA79-8B54BEF3463A",
                         "bind": "{isExpiryDateReqd}",
                         "columnWidth": 0.5
                    }, {
                         "name": "remarks",
                         "itemId": "remarks",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "RemarksReqd",
                         "margin": "5 5 5 5",
                         "fieldLabel": "RemarksReqd",
                         "fieldId": "CAFF6554-31F6-478C-B6CC-2EDDEBA2F3DF",
                         "minLength": "0",
                         "maxLength": "200",
                         "bind": "{remarks}",
                         "columnWidth": 0.5
                    }, {
                         "name": "isMandatory",
                         "itemId": "isMandatory",
                         "xtype": "checkbox",
                         "customWidgetType": "vdCheckbox",
                         "displayName": "Mandatory",
                         "margin": "5 5 5 5",
                         "value": "0",
                         "inputValue": true,
                         "fieldLabel": "Mandatory",
                         "fieldId": "694D7BB8-CB83-4FB3-A4FA-7B36728C5D81",
                         "bind": "{isMandatory}",
                         "columnWidth": 0.5
                    }, {
                         "name": "customerType",
                         "itemId": "customerType",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "customerType",
                         "margin": "5 5 5 5",
                         "fieldLabel": "customerType<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "BBAA1563-87B0-4E81-AB97-27B3DC05B39C",
                         "restURL": "CustomerType",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "store": {
                              "data": [],
                              "model": "Buzzor.singx.shared.singx.model.singx.CustomerTypeModel"
                         },
                         "forceSelection": true,
                         "bind": "{customerType}",
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
                         "fieldId": "8F97FDCF-319F-4444-9EBB-3648CB19A242",
                         "minValue": "-2147483648",
                         "maxValue": "2147483647",
                         "bind": "{displaySeq}",
                         "columnWidth": 0.5
                    }, {
                         "name": "maxSize",
                         "itemId": "maxSize",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "MaxSize",
                         "margin": "5 5 5 5",
                         "value": "500",
                         "fieldLabel": "MaxSize<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "33A09EF2-CFDB-4126-8AA1-FFF9047EC4D8",
                         "minValue": "-2147483648",
                         "maxValue": "2147483647",
                         "bind": "{maxSize}",
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
                         "fieldId": "F944AE4A-47A7-477E-89BC-F60517940116",
                         "restURL": "Country",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "store": {
                              "data": [],
                              "model": "Buzzor.singx.shared.singx.model.location.CountryModel"
                         },
                         "forceSelection": true,
                         "bind": "{countryId}",
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
                         "customId": 868,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "parentId": 868,
                              "customId": 488
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "parentId": 868,
                              "customId": 489,
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
                              "parentId": 868,
                              "customId": 490,
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
                    "displayName": "cfgDocument",
                    "title": "Details Grid",
                    "name": "CfgDocumentGrid",
                    "itemId": "CfgDocumentGrid",
                    "restURL": "/CfgDocument",
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
                         "header": "ReferenceNoReqd",
                         "dataIndex": "isReferenceNoReqd",
                         "flex": 1
                    }, {
                         "header": "IssueDateReqd",
                         "dataIndex": "isIssueDateReqd",
                         "flex": 1
                    }, {
                         "header": "ExpiryDateReqd",
                         "dataIndex": "isExpiryDateReqd",
                         "flex": 1
                    }, {
                         "header": "RemarksReqd",
                         "dataIndex": "remarks",
                         "flex": 1
                    }, {
                         "header": "Mandatory",
                         "dataIndex": "isMandatory",
                         "flex": 1
                    }, {
                         "header": "customerType",
                         "dataIndex": "customerType",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "DisplaySeq",
                         "dataIndex": "displaySeq",
                         "flex": 1
                    }, {
                         "header": "MaxSize",
                         "dataIndex": "maxSize",
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
               "viewModel": "CfgDocumentViewModel",
               "xtype": "form",
               "displayName": "cfgDocument",
               "title": "cfgDocument",
               "name": "CfgDocument",
               "itemId": "CfgDocument",
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
                    "fieldId": "774F0035-EEC2-4239-B3B1-BF6DBE0E00C5",
                    "minLength": "0",
                    "maxLength": "50",
                    "bind": "{documentName}",
                    "columnWidth": 0.5
               }, {
                    "name": "isReferenceNoReqd",
                    "itemId": "isReferenceNoReqd",
                    "xtype": "checkbox",
                    "customWidgetType": "vdCheckbox",
                    "displayName": "ReferenceNoReqd",
                    "margin": "5 5 5 5",
                    "value": "0",
                    "inputValue": true,
                    "fieldLabel": "ReferenceNoReqd",
                    "fieldId": "A08E73AF-D66B-4148-BC87-028036FB6BB5",
                    "bind": "{isReferenceNoReqd}",
                    "columnWidth": 0.5
               }, {
                    "name": "isIssueDateReqd",
                    "itemId": "isIssueDateReqd",
                    "xtype": "checkbox",
                    "customWidgetType": "vdCheckbox",
                    "displayName": "IssueDateReqd",
                    "margin": "5 5 5 5",
                    "value": "0",
                    "inputValue": true,
                    "fieldLabel": "IssueDateReqd",
                    "fieldId": "72BE108F-41CA-413C-947B-15ACCC88EB4B",
                    "bind": "{isIssueDateReqd}",
                    "columnWidth": 0.5
               }, {
                    "name": "isExpiryDateReqd",
                    "itemId": "isExpiryDateReqd",
                    "xtype": "checkbox",
                    "customWidgetType": "vdCheckbox",
                    "displayName": "ExpiryDateReqd",
                    "margin": "5 5 5 5",
                    "value": "0",
                    "inputValue": true,
                    "fieldLabel": "ExpiryDateReqd",
                    "fieldId": "A3642FD0-0605-4B03-AA79-8B54BEF3463A",
                    "bind": "{isExpiryDateReqd}",
                    "columnWidth": 0.5
               }, {
                    "name": "remarks",
                    "itemId": "remarks",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "RemarksReqd",
                    "margin": "5 5 5 5",
                    "fieldLabel": "RemarksReqd",
                    "fieldId": "CAFF6554-31F6-478C-B6CC-2EDDEBA2F3DF",
                    "minLength": "0",
                    "maxLength": "200",
                    "bind": "{remarks}",
                    "columnWidth": 0.5
               }, {
                    "name": "isMandatory",
                    "itemId": "isMandatory",
                    "xtype": "checkbox",
                    "customWidgetType": "vdCheckbox",
                    "displayName": "Mandatory",
                    "margin": "5 5 5 5",
                    "value": "0",
                    "inputValue": true,
                    "fieldLabel": "Mandatory",
                    "fieldId": "694D7BB8-CB83-4FB3-A4FA-7B36728C5D81",
                    "bind": "{isMandatory}",
                    "columnWidth": 0.5
               }, {
                    "name": "customerType",
                    "itemId": "customerType",
                    "xtype": "combo",
                    "customWidgetType": "vdCombo",
                    "displayName": "customerType",
                    "margin": "5 5 5 5",
                    "fieldLabel": "customerType<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "BBAA1563-87B0-4E81-AB97-27B3DC05B39C",
                    "restURL": "CustomerType",
                    "displayField": "primaryDisplay",
                    "valueField": "primaryKey",
                    "store": {
                         "data": [],
                         "model": "Buzzor.singx.shared.singx.model.singx.CustomerTypeModel"
                    },
                    "forceSelection": true,
                    "bind": "{customerType}",
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
                    "fieldId": "8F97FDCF-319F-4444-9EBB-3648CB19A242",
                    "minValue": "-2147483648",
                    "maxValue": "2147483647",
                    "bind": "{displaySeq}",
                    "columnWidth": 0.5
               }, {
                    "name": "maxSize",
                    "itemId": "maxSize",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "MaxSize",
                    "margin": "5 5 5 5",
                    "value": "500",
                    "fieldLabel": "MaxSize<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "33A09EF2-CFDB-4126-8AA1-FFF9047EC4D8",
                    "minValue": "-2147483648",
                    "maxValue": "2147483647",
                    "bind": "{maxSize}",
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
                    "fieldId": "F944AE4A-47A7-477E-89BC-F60517940116",
                    "restURL": "Country",
                    "displayField": "primaryDisplay",
                    "valueField": "primaryKey",
                    "store": {
                         "data": [],
                         "model": "Buzzor.singx.shared.singx.model.location.CountryModel"
                    },
                    "forceSelection": true,
                    "bind": "{countryId}",
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
                    "customId": 868,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill",
                         "parentId": 868,
                         "customId": 488
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "parentId": 868,
                         "customId": 489,
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
                         "parentId": 868,
                         "customId": 490,
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