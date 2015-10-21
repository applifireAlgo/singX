Ext.define('Buzzor.singx.web.singx.view.singx.BankBranchMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "BankBranchMainController",
     "restURL": "/BankBranch",
     "defaults": {
          "split": true
     },
     "requires": ["Buzzor.singx.shared.singx.model.singx.BankBranchModel", "Buzzor.singx.web.singx.controller.singx.BankBranchMainController", "Buzzor.singx.shared.singx.model.singx.BankModel", "Buzzor.singx.shared.singx.model.location.CountryModel", "Buzzor.singx.shared.singx.viewmodel.singx.BankBranchViewModel", "Ext.form.field.CustomDateField"],
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
               "displayName": "bankBranch",
               "name": "BankBranchTreeContainer",
               "itemId": "BankBranchTreeContainer",
               "restURL": "/BankBranch",
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
                    "itemId": "BankBranchTree",
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
                         "name": "branchId",
                         "itemId": "branchId",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "branchid",
                         "margin": "5 5 5 5",
                         "fieldLabel": "branchid",
                         "fieldId": "EF655BE1-9FFC-4D8E-A964-6EB27D26E035",
                         "hidden": true,
                         "value": ""
                    }, {
                         "name": "branchCode",
                         "itemId": "branchCode",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Branch Code",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Branch Code",
                         "fieldId": "6C220E39-723E-49CB-A8BF-D4EEEB1B3CAE",
                         "minLength": "0",
                         "maxLength": "50"
                    }, {
                         "name": "bankId",
                         "itemId": "bankId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Bank",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Bank",
                         "fieldId": "ADF01231-79D0-4A89-B1C4-2D661711FFB6",
                         "restURL": "Bank",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "store": {
                              "data": [],
                              "model": "Buzzor.singx.shared.singx.model.singx.BankModel"
                         }
                    }, {
                         "name": "countryId",
                         "itemId": "countryId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Country",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Country",
                         "fieldId": "057C0B56-F5DE-448E-AC73-867B89A09C54",
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
                    "viewModel": "BankBranchViewModel",
                    "xtype": "form",
                    "displayName": "bankBranch",
                    "title": "bankBranch",
                    "name": "BankBranch",
                    "itemId": "BankBranch",
                    "bodyPadding": 10,
                    "items": [{
                         "name": "branchName",
                         "itemId": "branchName",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Branch Name",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Branch Name<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "2ED08F74-1C0C-4BC0-8765-608B1423A7F9",
                         "minLength": "0",
                         "maxLength": "50",
                         "bind": "{branchName}",
                         "columnWidth": 0.5
                    }, {
                         "name": "branchCode",
                         "itemId": "branchCode",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Branch Code",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Branch Code<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "6C220E39-723E-49CB-A8BF-D4EEEB1B3CAE",
                         "minLength": "0",
                         "maxLength": "50",
                         "bind": "{branchCode}",
                         "columnWidth": 0.5
                    }, {
                         "name": "bankId",
                         "itemId": "bankId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Bank",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Bank<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "ADF01231-79D0-4A89-B1C4-2D661711FFB6",
                         "restURL": "Bank",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "store": {
                              "data": [],
                              "model": "Buzzor.singx.shared.singx.model.singx.BankModel"
                         },
                         "forceSelection": true,
                         "bind": "{bankId}",
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
                         "fieldId": "057C0B56-F5DE-448E-AC73-867B89A09C54",
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
                         "customId": 86,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "parentId": 86,
                              "customId": 189
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "parentId": 86,
                              "customId": 190,
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
                              "parentId": 86,
                              "customId": 191,
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
                    "displayName": "bankBranch",
                    "title": "Details Grid",
                    "name": "BankBranchGrid",
                    "itemId": "BankBranchGrid",
                    "restURL": "/BankBranch",
                    "store": [],
                    "bodyPadding": 10,
                    "columns": [{
                         "header": "branchid",
                         "dataIndex": "branchId",
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
                         "header": "Branch Name",
                         "dataIndex": "branchName",
                         "flex": 1
                    }, {
                         "header": "Branch Code",
                         "dataIndex": "branchCode",
                         "flex": 1
                    }, {
                         "header": "Bank",
                         "dataIndex": "bankId",
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
               "viewModel": "BankBranchViewModel",
               "xtype": "form",
               "displayName": "bankBranch",
               "title": "bankBranch",
               "name": "BankBranch",
               "itemId": "BankBranch",
               "bodyPadding": 10,
               "items": [{
                    "name": "branchName",
                    "itemId": "branchName",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Branch Name",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Branch Name<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "2ED08F74-1C0C-4BC0-8765-608B1423A7F9",
                    "minLength": "0",
                    "maxLength": "50",
                    "bind": "{branchName}",
                    "columnWidth": 0.5
               }, {
                    "name": "branchCode",
                    "itemId": "branchCode",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Branch Code",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Branch Code<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "6C220E39-723E-49CB-A8BF-D4EEEB1B3CAE",
                    "minLength": "0",
                    "maxLength": "50",
                    "bind": "{branchCode}",
                    "columnWidth": 0.5
               }, {
                    "name": "bankId",
                    "itemId": "bankId",
                    "xtype": "combo",
                    "customWidgetType": "vdCombo",
                    "displayName": "Bank",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Bank<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "ADF01231-79D0-4A89-B1C4-2D661711FFB6",
                    "restURL": "Bank",
                    "displayField": "primaryDisplay",
                    "valueField": "primaryKey",
                    "store": {
                         "data": [],
                         "model": "Buzzor.singx.shared.singx.model.singx.BankModel"
                    },
                    "forceSelection": true,
                    "bind": "{bankId}",
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
                    "fieldId": "057C0B56-F5DE-448E-AC73-867B89A09C54",
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
                    "customId": 86,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill",
                         "parentId": 86,
                         "customId": 189
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "parentId": 86,
                         "customId": 190,
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
                         "parentId": 86,
                         "customId": 191,
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