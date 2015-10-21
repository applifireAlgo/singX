Ext.define('Buzzor.singx.web.singx.view.singx.CustomerDocumentMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "CustomerDocumentMainController",
     "restURL": "/CustomerDocument",
     "defaults": {
          "split": true
     },
     "requires": ["Buzzor.singx.shared.singx.model.singx.CustomerDocumentModel", "Buzzor.singx.web.singx.controller.singx.CustomerDocumentMainController", "Buzzor.singx.shared.singx.model.singx.SingxContactsModel", "Buzzor.singx.shared.singx.model.singx.CfgDocIndividualModel", "Buzzor.singx.shared.singx.viewmodel.singx.CustomerDocumentViewModel", "Ext.form.field.CustomDateField"],
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
               "displayName": "customerDocument",
               "name": "CustomerDocumentTreeContainer",
               "itemId": "CustomerDocumentTreeContainer",
               "margin": "5 0 5 5",
               "autoScroll": false,
               "collapsible": true,
               "titleCollapse": true,
               "collapseMode": "header",
               "collapsed": false,
               "items": [{
                    "xtype": "treepanel",
                    "customWidgetType": "vdTree",
                    "useArrows": true,
                    "title": "Browse",
                    "rootVisible": false,
                    "itemId": "CustomerDocumentTree",
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
                    "layout": "fit",
                    "autoScroll": false,
                    "itemId": "queryPanel",
                    "buttons": [{
                         "text": "Filter",
                         "handler": "onFilterClick"
                    }],
                    "items": [{
                         "name": "contactId",
                         "itemId": "contactId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "contactId",
                         "margin": "5 5 5 5",
                         "fieldLabel": "contactId",
                         "fieldId": "C85CF388-2F06-4426-87B1-F97A6DF2E9D3",
                         "restURL": "SingxContacts",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "store": {
                              "data": [],
                              "model": "Buzzor.singx.shared.singx.model.singx.SingxContactsModel"
                         }
                    }, {
                         "name": "documentId",
                         "itemId": "documentId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "documentId",
                         "margin": "5 5 5 5",
                         "fieldLabel": "documentId",
                         "fieldId": "6A442D22-1E31-466E-B4BC-42BD8A7665F1",
                         "restURL": "CfgDocIndividual",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "store": {
                              "data": [],
                              "model": "Buzzor.singx.shared.singx.model.singx.CfgDocIndividualModel"
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
                    "xtype": "form",
                    "displayName": "customerDocument",
                    "name": "CustomerDocument",
                    "itemId": "CustomerDocumentForm",
                    "bodyPadding": 10,
                    "items": [{
                         "xtype": "form",
                         "itemId": "form0",
                         "customWidgetType": "vdCard",
                         "header": {
                              "hidden": true
                         },
                         "items": [{
                              "layout": "column",
                              "customWidgetType": "vdColumnLayout",
                              "header": {
                                   "hidden": true
                              },
                              "xtype": "panel",
                              "items": [{
                                   "name": "contactId",
                                   "itemId": "contactId",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "contactId",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "contactId<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "C85CF388-2F06-4426-87B1-F97A6DF2E9D3",
                                   "restURL": "SingxContacts",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "store": {
                                        "data": [],
                                        "model": "Buzzor.singx.shared.singx.model.singx.SingxContactsModel"
                                   },
                                   "forceSelection": true,
                                   "bind": "{contactId}"
                              }, {
                                   "name": "documentId",
                                   "itemId": "documentId",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "documentId",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "documentId<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "6A442D22-1E31-466E-B4BC-42BD8A7665F1",
                                   "restURL": "CfgDocIndividual",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "store": {
                                        "data": [],
                                        "model": "Buzzor.singx.shared.singx.model.singx.CfgDocIndividualModel"
                                   },
                                   "forceSelection": true,
                                   "bind": "{documentId}"
                              }, {
                                   "name": "referenceNo",
                                   "itemId": "referenceNo",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "referenceNo",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "referenceNo",
                                   "fieldId": "5639910D-B390-435B-B42B-19333D85ADE4",
                                   "minLength": "0",
                                   "maxLength": "50",
                                   "bind": "{referenceNo}"
                              }, {
                                   "name": "issueDate",
                                   "itemId": "issueDate",
                                   "xtype": "customDateField",
                                   "customWidgetType": "vdDatefield",
                                   "displayName": "issueDate",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "issueDate",
                                   "fieldId": "0D93836E-5CA2-4C74-A24B-663B76A8774F",
                                   "bind": "{issueDate}"
                              }, {
                                   "name": "expiryDate",
                                   "itemId": "expiryDate",
                                   "xtype": "customDateField",
                                   "customWidgetType": "vdDatefield",
                                   "displayName": "expiryDate",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "expiryDate",
                                   "fieldId": "AA39FE5D-5E28-4F81-BA49-72C75FBEC7A5",
                                   "bind": "{expiryDate}"
                              }, {
                                   "name": "remarks",
                                   "itemId": "remarks",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "remarks",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "remarks",
                                   "fieldId": "8D31AA6B-AA1D-4FC0-812C-34A5D9084A11",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "bind": "{remarks}"
                              }, {
                                   "name": "docFile",
                                   "itemId": "docFile",
                                   "xtype": "textareafield",
                                   "customWidgetType": "vdTextareafield",
                                   "displayName": "docFile",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "docFile<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "04120084-C652-4F20-9CC9-B32B691CB8FE",
                                   "bind": "{docFile}"
                              }]
                         }]
                    }],
                    "tools": [{
                         "type": "help",
                         "tooltip": "Get Console",
                         "handler": "onConsoleClick"
                    }],
                    "layout": "card",
                    "defaults": {
                         "autoScroll": true
                    },
                    "autoScroll": true,
                    "dockedItems": [{
                         "xtype ": "toolbar",
                         "customWidgetType": "vdBBar",
                         "dock": "bottom",
                         "margin": 0,
                         "isDockedItem": true,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill"
                         }, {
                              "xtype": "button",
                              "customWidgetType": "vdButton",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "listeners": {
                                   "click": "saveForm"
                              }
                         }, {
                              "xtype": "button",
                              "customWidgetType": "vdButton",
                              "margin": "0 5 0 5",
                              "text": "Reset",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "resetFormButton",
                              "listeners": {
                                   "click": "resetForm"
                              }
                         }],
                         "defaults": {
                              "margin": "0 5 0 5"
                         }
                    }, {
                         "xtype": "toolbar",
                         "customWidgetType": "vdTBar",
                         "defaults": {
                              "margin": "0 5 0 5"
                         },
                         "isDockedItem": true,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill"
                         }, {
                              "xtype": "button",
                              "customWidgetType": "vdButton",
                              "itemId": "cardPrev",
                              "text": "&laquo; Previous",
                              "handler": "showPreviousCard",
                              "disabled": true,
                              "margin": "0 5 0 5"
                         }, {
                              "xtype": "button",
                              "customWidgetType": "vdButton",
                              "itemId": "cardNext",
                              "text": "Next &raquo;",
                              "handler": "showNextCard",
                              "margin": "0 5 0 5"
                         }]
                    }],
                    "viewModel": "CustomerDocumentViewModel",
                    "listeners": {},
                    "extend": "Ext.form.Panel",
                    "region": "center",
                    "customWidgetType": "vdCardLayout"
               }, {
                    "xtype": "grid",
                    "customWidgetType": "vdGrid",
                    "displayName": "customerDocument",
                    "title": "Details Grid",
                    "name": "CustomerDocumentGrid",
                    "itemId": "CustomerDocumentGrid",
                    "store": [],
                    "bodyPadding": 10,
                    "requires": [],
                    "columns": [{
                         "header": "contactId",
                         "dataIndex": "contactId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "documentId",
                         "dataIndex": "documentId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "mapid",
                         "dataIndex": "mapId",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "primaryKey",
                         "dataIndex": "primaryKey",
                         "hidden": true
                    }, {
                         "header": "referenceNo",
                         "dataIndex": "referenceNo",
                         "flex": 1
                    }, {
                         "header": "issueDate",
                         "dataIndex": "issueDate",
                         "flex": 1
                    }, {
                         "header": "expiryDate",
                         "dataIndex": "expiryDate",
                         "flex": 1
                    }, {
                         "header": "remarks",
                         "dataIndex": "remarks",
                         "flex": 1
                    }, {
                         "header": "docFile",
                         "dataIndex": "docFile",
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
               "xtype": "form",
               "displayName": "customerDocument",
               "name": "CustomerDocument",
               "itemId": "CustomerDocumentForm",
               "bodyPadding": 10,
               "items": [{
                    "xtype": "form",
                    "itemId": "form0",
                    "customWidgetType": "vdCard",
                    "header": {
                         "hidden": true
                    },
                    "items": [{
                         "layout": "column",
                         "customWidgetType": "vdColumnLayout",
                         "header": {
                              "hidden": true
                         },
                         "xtype": "panel",
                         "items": [{
                              "name": "contactId",
                              "itemId": "contactId",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "contactId",
                              "margin": "5 5 5 5",
                              "fieldLabel": "contactId<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "C85CF388-2F06-4426-87B1-F97A6DF2E9D3",
                              "restURL": "SingxContacts",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "store": {
                                   "data": [],
                                   "model": "Buzzor.singx.shared.singx.model.singx.SingxContactsModel"
                              },
                              "forceSelection": true,
                              "bind": "{contactId}"
                         }, {
                              "name": "documentId",
                              "itemId": "documentId",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "documentId",
                              "margin": "5 5 5 5",
                              "fieldLabel": "documentId<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "6A442D22-1E31-466E-B4BC-42BD8A7665F1",
                              "restURL": "CfgDocIndividual",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "store": {
                                   "data": [],
                                   "model": "Buzzor.singx.shared.singx.model.singx.CfgDocIndividualModel"
                              },
                              "forceSelection": true,
                              "bind": "{documentId}"
                         }, {
                              "name": "referenceNo",
                              "itemId": "referenceNo",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "referenceNo",
                              "margin": "5 5 5 5",
                              "fieldLabel": "referenceNo",
                              "fieldId": "5639910D-B390-435B-B42B-19333D85ADE4",
                              "minLength": "0",
                              "maxLength": "50",
                              "bind": "{referenceNo}"
                         }, {
                              "name": "issueDate",
                              "itemId": "issueDate",
                              "xtype": "customDateField",
                              "customWidgetType": "vdDatefield",
                              "displayName": "issueDate",
                              "margin": "5 5 5 5",
                              "fieldLabel": "issueDate",
                              "fieldId": "0D93836E-5CA2-4C74-A24B-663B76A8774F",
                              "bind": "{issueDate}"
                         }, {
                              "name": "expiryDate",
                              "itemId": "expiryDate",
                              "xtype": "customDateField",
                              "customWidgetType": "vdDatefield",
                              "displayName": "expiryDate",
                              "margin": "5 5 5 5",
                              "fieldLabel": "expiryDate",
                              "fieldId": "AA39FE5D-5E28-4F81-BA49-72C75FBEC7A5",
                              "bind": "{expiryDate}"
                         }, {
                              "name": "remarks",
                              "itemId": "remarks",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "remarks",
                              "margin": "5 5 5 5",
                              "fieldLabel": "remarks",
                              "fieldId": "8D31AA6B-AA1D-4FC0-812C-34A5D9084A11",
                              "minLength": "0",
                              "maxLength": "256",
                              "bind": "{remarks}"
                         }, {
                              "name": "docFile",
                              "itemId": "docFile",
                              "xtype": "textareafield",
                              "customWidgetType": "vdTextareafield",
                              "displayName": "docFile",
                              "margin": "5 5 5 5",
                              "fieldLabel": "docFile<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "04120084-C652-4F20-9CC9-B32B691CB8FE",
                              "bind": "{docFile}"
                         }]
                    }]
               }],
               "tools": [{
                    "type": "help",
                    "tooltip": "Get Console",
                    "handler": "onConsoleClick"
               }],
               "layout": "card",
               "defaults": {
                    "autoScroll": true
               },
               "autoScroll": true,
               "dockedItems": [{
                    "xtype ": "toolbar",
                    "customWidgetType": "vdBBar",
                    "dock": "bottom",
                    "margin": 0,
                    "isDockedItem": true,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill"
                    }, {
                         "xtype": "button",
                         "customWidgetType": "vdButton",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "listeners": {
                              "click": "saveForm"
                         }
                    }, {
                         "xtype": "button",
                         "customWidgetType": "vdButton",
                         "margin": "0 5 0 5",
                         "text": "Reset",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "resetFormButton",
                         "listeners": {
                              "click": "resetForm"
                         }
                    }],
                    "defaults": {
                         "margin": "0 5 0 5"
                    }
               }, {
                    "xtype": "toolbar",
                    "customWidgetType": "vdTBar",
                    "defaults": {
                         "margin": "0 5 0 5"
                    },
                    "isDockedItem": true,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill"
                    }, {
                         "xtype": "button",
                         "customWidgetType": "vdButton",
                         "itemId": "cardPrev",
                         "text": "&laquo; Previous",
                         "handler": "showPreviousCard",
                         "disabled": true,
                         "margin": "0 5 0 5"
                    }, {
                         "xtype": "button",
                         "customWidgetType": "vdButton",
                         "itemId": "cardNext",
                         "text": "Next &raquo;",
                         "handler": "showNextCard",
                         "margin": "0 5 0 5"
                    }]
               }],
               "viewModel": "CustomerDocumentViewModel",
               "listeners": {},
               "extend": "Ext.form.Panel",
               "region": "center",
               "customWidgetType": "vdCardLayout"
          }]
     }]
});