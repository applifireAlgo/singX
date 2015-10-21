Ext.define('Buzzor.singx.web.singx.view.singx.GeneralRegistrationRuleMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "GeneralRegistrationRuleMainController",
     "restURL": "/GeneralRegistrationRule",
     "defaults": {
          "split": true
     },
     "requires": ["Buzzor.singx.shared.singx.model.singx.GeneralRegistrationRuleModel", "Buzzor.singx.web.singx.controller.singx.GeneralRegistrationRuleMainController", "Buzzor.singx.shared.singx.model.location.CountryModel", "Buzzor.singx.shared.singx.viewmodel.singx.GeneralRegistrationRuleViewModel", "Ext.form.field.CustomDateField"],
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
               "displayName": "General Registration Rule",
               "name": "GeneralRegistrationRuleTreeContainer",
               "itemId": "GeneralRegistrationRuleTreeContainer",
               "restURL": "/GeneralRegistrationRule",
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
                    "itemId": "GeneralRegistrationRuleTree",
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
                         "fieldId": "B7C9A749-51A7-467C-8E23-27BF8564B9AD",
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
                    "viewModel": "GeneralRegistrationRuleViewModel",
                    "xtype": "form",
                    "displayName": "General Registration Rule",
                    "title": "General Registration Rule",
                    "name": "GeneralRegistrationRule",
                    "itemId": "GeneralRegistrationRule",
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
                         "fieldId": "B7C9A749-51A7-467C-8E23-27BF8564B9AD",
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
                    }, {
                         "name": "minShareHoldingPer",
                         "itemId": "minShareHoldingPer",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Min Share Holding %",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Min Share Holding %<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "EB8DEA3E-84B7-4C09-B101-B4F984297BF1",
                         "minValue": "1",
                         "maxValue": "100",
                         "bind": "{minShareHoldingPer}",
                         "columnWidth": 0.5
                    }, {
                         "name": "maxAccAllowed",
                         "itemId": "maxAccAllowed",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Max Account Allowed",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Max Account Allowed<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "7EC9C01D-A4A9-492B-A76D-147EFA386DAF",
                         "minValue": "0",
                         "maxValue": "99",
                         "bind": "{maxAccAllowed}",
                         "columnWidth": 0.5
                    }, {
                         "name": "dailyMaxTransferLimit",
                         "itemId": "dailyMaxTransferLimit",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Daily Max Transfer Limit",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Daily Max Transfer Limit<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "D606E704-53FD-496C-A7AF-F46CC7A8F546",
                         "minValue": "1",
                         "maxValue": "9223372036854776000",
                         "bind": "{dailyMaxTransferLimit}",
                         "columnWidth": 0.5
                    }, {
                         "name": "dailyTransferEnhancedLimit",
                         "itemId": "dailyTransferEnhancedLimit",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Daily Transfer Enhanced Limit",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Daily Transfer Enhanced Limit<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "F23D877B-8FD3-43F9-A5BC-82972BB20126",
                         "minValue": "1",
                         "maxValue": "9223372036854776000",
                         "bind": "{dailyTransferEnhancedLimit}",
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
                         "customId": 133,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "parentId": 133,
                              "customId": 720
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "parentId": 133,
                              "customId": 721,
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
                              "parentId": 133,
                              "customId": 722,
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
                    "displayName": "General Registration Rule",
                    "title": "Details Grid",
                    "name": "GeneralRegistrationRuleGrid",
                    "itemId": "GeneralRegistrationRuleGrid",
                    "restURL": "/GeneralRegistrationRule",
                    "store": [],
                    "bodyPadding": 10,
                    "columns": [{
                         "header": "config",
                         "dataIndex": "configId",
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
                         "header": "Min Share Holding %",
                         "dataIndex": "minShareHoldingPer",
                         "flex": 1
                    }, {
                         "header": "Max Account Allowed",
                         "dataIndex": "maxAccAllowed",
                         "flex": 1
                    }, {
                         "header": "Daily Max Transfer Limit",
                         "dataIndex": "dailyMaxTransferLimit",
                         "flex": 1
                    }, {
                         "header": "Daily Transfer Enhanced Limit",
                         "dataIndex": "dailyTransferEnhancedLimit",
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
               "viewModel": "GeneralRegistrationRuleViewModel",
               "xtype": "form",
               "displayName": "General Registration Rule",
               "title": "General Registration Rule",
               "name": "GeneralRegistrationRule",
               "itemId": "GeneralRegistrationRule",
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
                    "fieldId": "B7C9A749-51A7-467C-8E23-27BF8564B9AD",
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
               }, {
                    "name": "minShareHoldingPer",
                    "itemId": "minShareHoldingPer",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Min Share Holding %",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Min Share Holding %<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "EB8DEA3E-84B7-4C09-B101-B4F984297BF1",
                    "minValue": "1",
                    "maxValue": "100",
                    "bind": "{minShareHoldingPer}",
                    "columnWidth": 0.5
               }, {
                    "name": "maxAccAllowed",
                    "itemId": "maxAccAllowed",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Max Account Allowed",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Max Account Allowed<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "7EC9C01D-A4A9-492B-A76D-147EFA386DAF",
                    "minValue": "0",
                    "maxValue": "99",
                    "bind": "{maxAccAllowed}",
                    "columnWidth": 0.5
               }, {
                    "name": "dailyMaxTransferLimit",
                    "itemId": "dailyMaxTransferLimit",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Daily Max Transfer Limit",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Daily Max Transfer Limit<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "D606E704-53FD-496C-A7AF-F46CC7A8F546",
                    "minValue": "1",
                    "maxValue": "9223372036854776000",
                    "bind": "{dailyMaxTransferLimit}",
                    "columnWidth": 0.5
               }, {
                    "name": "dailyTransferEnhancedLimit",
                    "itemId": "dailyTransferEnhancedLimit",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Daily Transfer Enhanced Limit",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Daily Transfer Enhanced Limit<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "F23D877B-8FD3-43F9-A5BC-82972BB20126",
                    "minValue": "1",
                    "maxValue": "9223372036854776000",
                    "bind": "{dailyTransferEnhancedLimit}",
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
                    "customId": 133,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill",
                         "parentId": 133,
                         "customId": 720
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "parentId": 133,
                         "customId": 721,
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
                         "parentId": 133,
                         "customId": 722,
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