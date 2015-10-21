Ext.define('Buzzor.singx.web.singx.view.singx.CfgCountryAddressMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "CfgCountryAddressMainController",
     "restURL": "/CfgCountryAddress",
     "defaults": {
          "split": true
     },
     "requires": ["Buzzor.singx.shared.singx.model.singx.CfgCountryAddressModel", "Buzzor.singx.web.singx.controller.singx.CfgCountryAddressMainController", "Buzzor.singx.shared.singx.model.singx.InputDataTypeModel", "Buzzor.singx.shared.singx.model.location.CountryModel", "Buzzor.singx.shared.singx.viewmodel.singx.CfgCountryAddressViewModel", "Ext.form.field.CustomDateField"],
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
               "displayName": "cfgCountryAddress",
               "name": "CfgCountryAddressTreeContainer",
               "itemId": "CfgCountryAddressTreeContainer",
               "restURL": "/CfgCountryAddress",
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
                    "itemId": "CfgCountryAddressTree",
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
                         "displayName": "Address",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Address",
                         "fieldId": "90474C41-EFFB-4BC0-BDEB-821C91A97A02",
                         "hidden": true,
                         "value": ""
                    }, {
                         "name": "countryId",
                         "itemId": "countryId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Country",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Country",
                         "fieldId": "72526F3C-E4B6-4B53-A419-B898F06B946F",
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
                    "viewModel": "CfgCountryAddressViewModel",
                    "xtype": "form",
                    "displayName": "cfgCountryAddress",
                    "title": "cfgCountryAddress",
                    "name": "CfgCountryAddress",
                    "itemId": "CfgCountryAddress",
                    "bodyPadding": 10,
                    "items": [{
                         "name": "displayName",
                         "itemId": "displayName",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "DisplayName",
                         "margin": "5 5 5 5",
                         "fieldLabel": "DisplayName<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "F37BB98F-2FE4-4F4F-9A72-B855D43FE6A3",
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
                         "inputValue": true,
                         "fieldLabel": "Mandatory<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "DDB193B0-1F1D-4510-BF04-8E794C8C1A05",
                         "bind": "{isMandatory}",
                         "columnWidth": 0.5
                    }, {
                         "name": "maxLength",
                         "itemId": "maxLength",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "Max Length",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Max Length<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "D1C895DC-D6D8-46B7-AA66-5716541D5CC6",
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
                         "fieldId": "CC2B77E8-614E-4F9C-B539-C875732D874B",
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
                         "fieldId": "EDBB5EBA-620F-429D-BC1B-977BB946B3EB",
                         "minValue": "-2147483648",
                         "maxValue": "2147483647",
                         "bind": "{displaySeq}",
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
                         "fieldId": "72526F3C-E4B6-4B53-A419-B898F06B946F",
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
                         "customId": 845,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "parentId": 845,
                              "customId": 516
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "parentId": 845,
                              "customId": 517,
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
                              "parentId": 845,
                              "customId": 518,
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
                    "displayName": "cfgCountryAddress",
                    "title": "Details Grid",
                    "name": "CfgCountryAddressGrid",
                    "itemId": "CfgCountryAddressGrid",
                    "restURL": "/CfgCountryAddress",
                    "store": [],
                    "bodyPadding": 10,
                    "columns": [{
                         "header": "Address",
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
                         "header": "DisplayName",
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
               "viewModel": "CfgCountryAddressViewModel",
               "xtype": "form",
               "displayName": "cfgCountryAddress",
               "title": "cfgCountryAddress",
               "name": "CfgCountryAddress",
               "itemId": "CfgCountryAddress",
               "bodyPadding": 10,
               "items": [{
                    "name": "displayName",
                    "itemId": "displayName",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "DisplayName",
                    "margin": "5 5 5 5",
                    "fieldLabel": "DisplayName<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "F37BB98F-2FE4-4F4F-9A72-B855D43FE6A3",
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
                    "inputValue": true,
                    "fieldLabel": "Mandatory<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "DDB193B0-1F1D-4510-BF04-8E794C8C1A05",
                    "bind": "{isMandatory}",
                    "columnWidth": 0.5
               }, {
                    "name": "maxLength",
                    "itemId": "maxLength",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "Max Length",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Max Length<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "D1C895DC-D6D8-46B7-AA66-5716541D5CC6",
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
                    "fieldId": "CC2B77E8-614E-4F9C-B539-C875732D874B",
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
                    "fieldId": "EDBB5EBA-620F-429D-BC1B-977BB946B3EB",
                    "minValue": "-2147483648",
                    "maxValue": "2147483647",
                    "bind": "{displaySeq}",
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
                    "fieldId": "72526F3C-E4B6-4B53-A419-B898F06B946F",
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
                    "customId": 845,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill",
                         "parentId": 845,
                         "customId": 516
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "parentId": 845,
                         "customId": 517,
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
                         "parentId": 845,
                         "customId": 518,
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