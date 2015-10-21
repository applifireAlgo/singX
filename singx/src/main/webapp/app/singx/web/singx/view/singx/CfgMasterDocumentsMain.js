Ext.define('Buzzor.singx.web.singx.view.singx.CfgMasterDocumentsMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "CfgMasterDocumentsMainController",
     "restURL": "/CfgMasterDocuments",
     "defaults": {
          "split": true
     },
     "requires": ["Buzzor.singx.shared.singx.model.singx.CfgMasterDocumentsModel", "Buzzor.singx.web.singx.controller.singx.CfgMasterDocumentsMainController", "Buzzor.singx.shared.singx.viewmodel.singx.CfgMasterDocumentsViewModel", "Ext.form.field.CustomDateField"],
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
               "displayName": "cfgMasterDocuments",
               "name": "CfgMasterDocumentsTreeContainer",
               "itemId": "CfgMasterDocumentsTreeContainer",
               "restURL": "/CfgMasterDocuments",
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
                    "itemId": "CfgMasterDocumentsTree",
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
                         "name": "documentID",
                         "itemId": "documentID",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "DocumentID",
                         "margin": "5 5 5 5",
                         "fieldLabel": "DocumentID",
                         "fieldId": "911AF5D4-3400-4656-A82E-E94AF83E3FC7",
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
                    "viewModel": "CfgMasterDocumentsViewModel",
                    "xtype": "form",
                    "displayName": "cfgMasterDocuments",
                    "title": "cfgMasterDocuments",
                    "name": "CfgMasterDocuments",
                    "itemId": "CfgMasterDocuments",
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
                         "fieldId": "6BEE377C-D8F4-451B-864F-F0170B582A4C",
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
                         "fieldId": "61C0DFF8-98F4-431E-AB0A-FAF27FE31BD0",
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
                         "fieldId": "47BEC7E2-D3A0-486C-93D4-871D9E5493CE",
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
                         "fieldId": "2DC5B162-0164-4B0F-9B79-4F75FC1D68B5",
                         "bind": "{isExpiryDateReqd}",
                         "columnWidth": 0.5
                    }, {
                         "name": "remarks",
                         "itemId": "remarks",
                         "xtype": "textareafield",
                         "customWidgetType": "vdTextareafield",
                         "displayName": "Remarks",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Remarks",
                         "fieldId": "DFA763C4-F735-4D41-B944-03041D267D74",
                         "bind": "{remarks}",
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
                         "customId": 218,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "parentId": 218,
                              "customId": 594
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "parentId": 218,
                              "customId": 595,
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
                              "parentId": 218,
                              "customId": 596,
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
                    "displayName": "cfgMasterDocuments",
                    "title": "Details Grid",
                    "name": "CfgMasterDocumentsGrid",
                    "itemId": "CfgMasterDocumentsGrid",
                    "restURL": "/CfgMasterDocuments",
                    "store": [],
                    "bodyPadding": 10,
                    "columns": [{
                         "header": "DocumentID",
                         "dataIndex": "documentID",
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
               "viewModel": "CfgMasterDocumentsViewModel",
               "xtype": "form",
               "displayName": "cfgMasterDocuments",
               "title": "cfgMasterDocuments",
               "name": "CfgMasterDocuments",
               "itemId": "CfgMasterDocuments",
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
                    "fieldId": "6BEE377C-D8F4-451B-864F-F0170B582A4C",
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
                    "fieldId": "61C0DFF8-98F4-431E-AB0A-FAF27FE31BD0",
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
                    "fieldId": "47BEC7E2-D3A0-486C-93D4-871D9E5493CE",
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
                    "fieldId": "2DC5B162-0164-4B0F-9B79-4F75FC1D68B5",
                    "bind": "{isExpiryDateReqd}",
                    "columnWidth": 0.5
               }, {
                    "name": "remarks",
                    "itemId": "remarks",
                    "xtype": "textareafield",
                    "customWidgetType": "vdTextareafield",
                    "displayName": "Remarks",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Remarks",
                    "fieldId": "DFA763C4-F735-4D41-B944-03041D267D74",
                    "bind": "{remarks}",
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
                    "customId": 218,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill",
                         "parentId": 218,
                         "customId": 594
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "parentId": 218,
                         "customId": 595,
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
                         "parentId": 218,
                         "customId": 596,
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