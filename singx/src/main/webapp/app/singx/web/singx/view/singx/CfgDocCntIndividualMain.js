Ext.define('Buzzor.singx.web.singx.view.singx.CfgDocCntIndividualMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "CfgDocCntIndividualMainController",
     "restURL": "/CfgDocCntIndividual",
     "defaults": {
          "split": true
     },
     "requires": ["Buzzor.singx.shared.singx.model.singx.CfgDocCntIndividualModel", "Buzzor.singx.web.singx.controller.singx.CfgDocCntIndividualMainController", "Buzzor.singx.shared.singx.model.location.CountryModel", "Buzzor.singx.shared.singx.model.singx.ResidenceTypeModel", "Buzzor.singx.shared.singx.viewmodel.singx.CfgDocCntIndividualViewModel", "Ext.form.field.CustomDateField"],
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
               "displayName": "cfgDocCntIndividual",
               "name": "CfgDocCntIndividualTreeContainer",
               "itemId": "CfgDocCntIndividualTreeContainer",
               "restURL": "/CfgDocCntIndividual",
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
                    "itemId": "CfgDocCntIndividualTree",
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
                         "fieldId": "18FC29B0-FC78-42B1-B58F-967760FBE5F3",
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
                    "viewModel": "CfgDocCntIndividualViewModel",
                    "xtype": "form",
                    "displayName": "cfgDocCntIndividual",
                    "title": "cfgDocCntIndividual",
                    "name": "CfgDocCntIndividual",
                    "itemId": "CfgDocCntIndividual",
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
                         "fieldId": "18FC29B0-FC78-42B1-B58F-967760FBE5F3",
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
                         "name": "residenceTypeId",
                         "itemId": "residenceTypeId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Residence Type",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Residence Type<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "981A8D4B-5C3B-4400-8D54-0973FD2DB191",
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
                         "name": "mandatoryDocCount",
                         "itemId": "mandatoryDocCount",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "No. of Mandatory Doc",
                         "margin": "5 5 5 5",
                         "fieldLabel": "No. of Mandatory Doc<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "F9AC25A0-9E89-4CAB-A315-BE54D3865194",
                         "minValue": "-2147483648",
                         "maxValue": "2147483647",
                         "bind": "{mandatoryDocCount}",
                         "columnWidth": 0.5
                    }, {
                         "name": "otherDocCount",
                         "itemId": "otherDocCount",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "No. of Other Doc",
                         "margin": "5 5 5 5",
                         "fieldLabel": "No. of Other Doc<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "E9027CA7-892E-440F-9A98-330358FB2F4E",
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
                         "customId": 420,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "parentId": 420,
                              "customId": 316
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "parentId": 420,
                              "customId": 317,
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
                              "parentId": 420,
                              "customId": 318,
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
                    "displayName": "cfgDocCntIndividual",
                    "title": "Details Grid",
                    "name": "CfgDocCntIndividualGrid",
                    "itemId": "CfgDocCntIndividualGrid",
                    "restURL": "/CfgDocCntIndividual",
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
                         "header": "Residence Type",
                         "dataIndex": "residenceTypeId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "No. of Mandatory Doc",
                         "dataIndex": "mandatoryDocCount",
                         "flex": 1
                    }, {
                         "header": "No. of Other Doc",
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
               "viewModel": "CfgDocCntIndividualViewModel",
               "xtype": "form",
               "displayName": "cfgDocCntIndividual",
               "title": "cfgDocCntIndividual",
               "name": "CfgDocCntIndividual",
               "itemId": "CfgDocCntIndividual",
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
                    "fieldId": "18FC29B0-FC78-42B1-B58F-967760FBE5F3",
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
                    "name": "residenceTypeId",
                    "itemId": "residenceTypeId",
                    "xtype": "combo",
                    "customWidgetType": "vdCombo",
                    "displayName": "Residence Type",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Residence Type<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "981A8D4B-5C3B-4400-8D54-0973FD2DB191",
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
                    "name": "mandatoryDocCount",
                    "itemId": "mandatoryDocCount",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "No. of Mandatory Doc",
                    "margin": "5 5 5 5",
                    "fieldLabel": "No. of Mandatory Doc<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "F9AC25A0-9E89-4CAB-A315-BE54D3865194",
                    "minValue": "-2147483648",
                    "maxValue": "2147483647",
                    "bind": "{mandatoryDocCount}",
                    "columnWidth": 0.5
               }, {
                    "name": "otherDocCount",
                    "itemId": "otherDocCount",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "No. of Other Doc",
                    "margin": "5 5 5 5",
                    "fieldLabel": "No. of Other Doc<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "E9027CA7-892E-440F-9A98-330358FB2F4E",
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
                    "customId": 420,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill",
                         "parentId": 420,
                         "customId": 316
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "parentId": 420,
                         "customId": 317,
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
                         "parentId": 420,
                         "customId": 318,
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