Ext.define('Buzzor.singx.web.singx.view.singx.CfgDocCntCorporateMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "CfgDocCntCorporateMainController",
     "restURL": "/CfgDocCntCorporate",
     "defaults": {
          "split": true
     },
     "requires": ["Buzzor.singx.shared.singx.model.singx.CfgDocCntCorporateModel", "Buzzor.singx.web.singx.controller.singx.CfgDocCntCorporateMainController", "Buzzor.singx.shared.singx.model.location.CountryModel", "Buzzor.singx.shared.singx.model.singx.CompanyTypeModel", "Buzzor.singx.shared.singx.model.singx.CompanyCategoryModel", "Buzzor.singx.shared.singx.viewmodel.singx.CfgDocCntCorporateViewModel", "Ext.form.field.CustomDateField"],
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
               "displayName": "cfgDocCntCorporate",
               "name": "CfgDocCntCorporateTreeContainer",
               "itemId": "CfgDocCntCorporateTreeContainer",
               "restURL": "/CfgDocCntCorporate",
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
                    "itemId": "CfgDocCntCorporateTree",
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
                         "name": "countryId",
                         "itemId": "countryId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Country",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Country",
                         "fieldId": "5989B500-393B-4E79-AE8D-D4C9E0F27EA9",
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
                    "viewModel": "CfgDocCntCorporateViewModel",
                    "xtype": "form",
                    "displayName": "cfgDocCntCorporate",
                    "title": "cfgDocCntCorporate",
                    "name": "CfgDocCntCorporate",
                    "itemId": "CfgDocCntCorporate",
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
                         "fieldId": "5989B500-393B-4E79-AE8D-D4C9E0F27EA9",
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
                         "name": "companyTypeId",
                         "itemId": "companyTypeId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Company Type",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Company Type<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "7C6DFB45-376A-4A77-9B10-A1FAD248ACA1",
                         "restURL": "CompanyType",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "store": {
                              "data": [],
                              "model": "Buzzor.singx.shared.singx.model.singx.CompanyTypeModel"
                         },
                         "forceSelection": true,
                         "bind": "{companyTypeId}",
                         "columnWidth": 0.5
                    }, {
                         "name": "companyCategoryId",
                         "itemId": "companyCategoryId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Company Category",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Company Category<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "4E218A66-7968-4605-9452-1B5CEEF3BA30",
                         "restURL": "CompanyCategory",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "store": {
                              "data": [],
                              "model": "Buzzor.singx.shared.singx.model.singx.CompanyCategoryModel"
                         },
                         "forceSelection": true,
                         "bind": "{companyCategoryId}",
                         "columnWidth": 0.5
                    }, {
                         "name": "mandatoryDocCount",
                         "itemId": "mandatoryDocCount",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "No of Mandatory Doc",
                         "margin": "5 5 5 5",
                         "fieldLabel": "No of Mandatory Doc<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "E4C09EC4-3735-4E4C-9406-E9074E4B6BE6",
                         "minValue": "-2147483648",
                         "maxValue": "2147483647",
                         "bind": "{mandatoryDocCount}",
                         "columnWidth": 0.5
                    }, {
                         "name": "otherDocCount",
                         "itemId": "otherDocCount",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "No of Other Doc",
                         "margin": "5 5 5 5",
                         "fieldLabel": "No of Other Doc<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "AE969747-C69A-47C3-BE6F-28418F546F76",
                         "minValue": "-2147483648",
                         "maxValue": "2147483647",
                         "bind": "{otherDocCount}",
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
                         "customId": 369,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "parentId": 369,
                              "customId": 600
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "parentId": 369,
                              "customId": 601,
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
                              "parentId": 369,
                              "customId": 602,
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
                    "displayName": "cfgDocCntCorporate",
                    "title": "Details Grid",
                    "name": "CfgDocCntCorporateGrid",
                    "itemId": "CfgDocCntCorporateGrid",
                    "restURL": "/CfgDocCntCorporate",
                    "store": [],
                    "bodyPadding": 10,
                    "columns": [{
                         "header": "cfgDocId",
                         "dataIndex": "cfgDocId",
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
                         "dataIndex": "companyTypeId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Company Category",
                         "dataIndex": "companyCategoryId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "No of Mandatory Doc",
                         "dataIndex": "mandatoryDocCount",
                         "flex": 1
                    }, {
                         "header": "No of Other Doc",
                         "dataIndex": "otherDocCount",
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
               "viewModel": "CfgDocCntCorporateViewModel",
               "xtype": "form",
               "displayName": "cfgDocCntCorporate",
               "title": "cfgDocCntCorporate",
               "name": "CfgDocCntCorporate",
               "itemId": "CfgDocCntCorporate",
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
                    "fieldId": "5989B500-393B-4E79-AE8D-D4C9E0F27EA9",
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
                    "name": "companyTypeId",
                    "itemId": "companyTypeId",
                    "xtype": "combo",
                    "customWidgetType": "vdCombo",
                    "displayName": "Company Type",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Company Type<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "7C6DFB45-376A-4A77-9B10-A1FAD248ACA1",
                    "restURL": "CompanyType",
                    "displayField": "primaryDisplay",
                    "valueField": "primaryKey",
                    "store": {
                         "data": [],
                         "model": "Buzzor.singx.shared.singx.model.singx.CompanyTypeModel"
                    },
                    "forceSelection": true,
                    "bind": "{companyTypeId}",
                    "columnWidth": 0.5
               }, {
                    "name": "companyCategoryId",
                    "itemId": "companyCategoryId",
                    "xtype": "combo",
                    "customWidgetType": "vdCombo",
                    "displayName": "Company Category",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Company Category<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "4E218A66-7968-4605-9452-1B5CEEF3BA30",
                    "restURL": "CompanyCategory",
                    "displayField": "primaryDisplay",
                    "valueField": "primaryKey",
                    "store": {
                         "data": [],
                         "model": "Buzzor.singx.shared.singx.model.singx.CompanyCategoryModel"
                    },
                    "forceSelection": true,
                    "bind": "{companyCategoryId}",
                    "columnWidth": 0.5
               }, {
                    "name": "mandatoryDocCount",
                    "itemId": "mandatoryDocCount",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "No of Mandatory Doc",
                    "margin": "5 5 5 5",
                    "fieldLabel": "No of Mandatory Doc<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "E4C09EC4-3735-4E4C-9406-E9074E4B6BE6",
                    "minValue": "-2147483648",
                    "maxValue": "2147483647",
                    "bind": "{mandatoryDocCount}",
                    "columnWidth": 0.5
               }, {
                    "name": "otherDocCount",
                    "itemId": "otherDocCount",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "No of Other Doc",
                    "margin": "5 5 5 5",
                    "fieldLabel": "No of Other Doc<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "AE969747-C69A-47C3-BE6F-28418F546F76",
                    "minValue": "-2147483648",
                    "maxValue": "2147483647",
                    "bind": "{otherDocCount}",
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
                    "customId": 369,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill",
                         "parentId": 369,
                         "customId": 600
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "parentId": 369,
                         "customId": 601,
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
                         "parentId": 369,
                         "customId": 602,
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