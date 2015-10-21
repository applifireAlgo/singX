Ext.define('Buzzor.singx.web.singx.view.singx.CfgMasterAddressMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "CfgMasterAddressMainController",
     "restURL": "/CfgMasterAddress",
     "defaults": {
          "split": true
     },
     "requires": ["Buzzor.singx.shared.singx.model.singx.CfgMasterAddressModel", "Buzzor.singx.web.singx.controller.singx.CfgMasterAddressMainController", "Buzzor.singx.shared.singx.model.singx.InputDataTypeModel", "Buzzor.singx.shared.singx.viewmodel.singx.CfgMasterAddressViewModel", "Ext.form.field.CustomDateField"],
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
               "displayName": "cfgMasterAddress",
               "name": "CfgMasterAddressTreeContainer",
               "itemId": "CfgMasterAddressTreeContainer",
               "restURL": "/CfgMasterAddress",
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
                    "itemId": "CfgMasterAddressTree",
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
                         "name": "addressId",
                         "itemId": "addressId",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "addressid",
                         "margin": "5 5 5 5",
                         "fieldLabel": "addressid",
                         "fieldId": "135526D2-1D30-4443-89EC-4324C62D29EB",
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
                    "viewModel": "CfgMasterAddressViewModel",
                    "xtype": "form",
                    "displayName": "cfgMasterAddress",
                    "title": "cfgMasterAddress",
                    "name": "CfgMasterAddress",
                    "itemId": "CfgMasterAddress",
                    "bodyPadding": 10,
                    "items": [{
                         "name": "displayName",
                         "itemId": "displayName",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Display Name",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Display Name<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "3813494C-424C-40CE-991F-3CC3C6B03EBE",
                         "minLength": "0",
                         "maxLength": "50",
                         "bind": "{displayName}",
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
                         "fieldId": "2A3A7BC1-A7B0-45BE-AF39-1DCCABA2B821",
                         "bind": "{isMandatory}",
                         "columnWidth": 0.5
                    }, {
                         "name": "maxLength",
                         "itemId": "maxLength",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Max Length",
                         "margin": "5 5 5 5",
                         "value": "100",
                         "fieldLabel": "Max Length<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "75129514-0C7E-4D11-A8B8-C3C3F1272CFB",
                         "minValue": "-2147483648",
                         "maxValue": "2147483647",
                         "bind": "{maxLength}",
                         "columnWidth": 0.5
                    }, {
                         "name": "inputTypeId",
                         "itemId": "inputTypeId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Input Data Type",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Input Data Type<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "4DC65569-99B5-489E-BD3E-9EEA3B3BBBD0",
                         "restURL": "InputDataType",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "store": {
                              "data": [],
                              "model": "Buzzor.singx.shared.singx.model.singx.InputDataTypeModel"
                         },
                         "forceSelection": true,
                         "bind": "{inputTypeId}",
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
                         "fieldId": "DE0D8C37-31B2-4F5D-A0D0-2B947A87329C",
                         "minValue": "-2147483648",
                         "maxValue": "2147483647",
                         "bind": "{displaySeq}",
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
                         "customId": 984,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "parentId": 984,
                              "customId": 772
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "parentId": 984,
                              "customId": 773,
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
                              "parentId": 984,
                              "customId": 774,
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
                    "displayName": "cfgMasterAddress",
                    "title": "Details Grid",
                    "name": "CfgMasterAddressGrid",
                    "itemId": "CfgMasterAddressGrid",
                    "restURL": "/CfgMasterAddress",
                    "store": [],
                    "bodyPadding": 10,
                    "columns": [{
                         "header": "addressid",
                         "dataIndex": "addressId",
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
                         "header": "Display Name",
                         "dataIndex": "displayName",
                         "flex": 1
                    }, {
                         "header": "Mandatory",
                         "dataIndex": "isMandatory",
                         "flex": 1
                    }, {
                         "header": "Max Length",
                         "dataIndex": "maxLength",
                         "flex": 1
                    }, {
                         "header": "Input Data Type",
                         "dataIndex": "inputTypeId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Display Seq",
                         "dataIndex": "displaySeq",
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
               "viewModel": "CfgMasterAddressViewModel",
               "xtype": "form",
               "displayName": "cfgMasterAddress",
               "title": "cfgMasterAddress",
               "name": "CfgMasterAddress",
               "itemId": "CfgMasterAddress",
               "bodyPadding": 10,
               "items": [{
                    "name": "displayName",
                    "itemId": "displayName",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Display Name",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Display Name<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "3813494C-424C-40CE-991F-3CC3C6B03EBE",
                    "minLength": "0",
                    "maxLength": "50",
                    "bind": "{displayName}",
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
                    "fieldId": "2A3A7BC1-A7B0-45BE-AF39-1DCCABA2B821",
                    "bind": "{isMandatory}",
                    "columnWidth": 0.5
               }, {
                    "name": "maxLength",
                    "itemId": "maxLength",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Max Length",
                    "margin": "5 5 5 5",
                    "value": "100",
                    "fieldLabel": "Max Length<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "75129514-0C7E-4D11-A8B8-C3C3F1272CFB",
                    "minValue": "-2147483648",
                    "maxValue": "2147483647",
                    "bind": "{maxLength}",
                    "columnWidth": 0.5
               }, {
                    "name": "inputTypeId",
                    "itemId": "inputTypeId",
                    "xtype": "combo",
                    "customWidgetType": "vdCombo",
                    "displayName": "Input Data Type",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Input Data Type<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "4DC65569-99B5-489E-BD3E-9EEA3B3BBBD0",
                    "restURL": "InputDataType",
                    "displayField": "primaryDisplay",
                    "valueField": "primaryKey",
                    "store": {
                         "data": [],
                         "model": "Buzzor.singx.shared.singx.model.singx.InputDataTypeModel"
                    },
                    "forceSelection": true,
                    "bind": "{inputTypeId}",
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
                    "fieldId": "DE0D8C37-31B2-4F5D-A0D0-2B947A87329C",
                    "minValue": "-2147483648",
                    "maxValue": "2147483647",
                    "bind": "{displaySeq}",
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
                    "customId": 984,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill",
                         "parentId": 984,
                         "customId": 772
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "parentId": 984,
                         "customId": 773,
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
                         "parentId": 984,
                         "customId": 774,
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