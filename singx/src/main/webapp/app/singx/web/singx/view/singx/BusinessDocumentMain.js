Ext.define('Buzzor.singx.web.singx.view.singx.BusinessDocumentMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "BusinessDocumentMainController",
     "restURL": "/BusinessDocument",
     "defaults": {
          "split": true
     },
     "requires": ["Buzzor.singx.shared.singx.model.singx.BusinessDocumentModel", "Buzzor.singx.web.singx.controller.singx.BusinessDocumentMainController", "Buzzor.singx.shared.singx.model.singx.SingxContactsModel", "Buzzor.singx.shared.singx.model.singx.CfgDocCorporateModel", "Buzzor.singx.shared.singx.viewmodel.singx.BusinessDocumentViewModel", "Ext.form.field.CustomDateField"],
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
               "displayName": "businessDocument",
               "name": "BusinessDocumentTreeContainer",
               "itemId": "BusinessDocumentTreeContainer",
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
                    "itemId": "BusinessDocumentTree",
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
                         "displayName": "Conatct",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Conatct",
                         "fieldId": "5F3801CF-96C6-42A2-ADEF-CE8099D77C2D",
                         "restURL": "SingxContacts",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "store": {
                              "data": [],
                              "model": "Buzzor.singx.shared.singx.model.singx.SingxContactsModel"
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
                    "displayName": "businessDocument",
                    "name": "BusinessDocument",
                    "itemId": "BusinessDocumentForm",
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
                                   "displayName": "Conatct",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Conatct<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "5F3801CF-96C6-42A2-ADEF-CE8099D77C2D",
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
                                   "displayName": "Document",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Document<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "799EA5D4-4B9C-422B-BC7A-E670A47EDAA7",
                                   "restURL": "CfgDocCorporate",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "store": {
                                        "data": [],
                                        "model": "Buzzor.singx.shared.singx.model.singx.CfgDocCorporateModel"
                                   },
                                   "forceSelection": true,
                                   "bind": "{documentId}"
                              }, {
                                   "name": "referenceNo",
                                   "itemId": "referenceNo",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Document No",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Document No",
                                   "fieldId": "63A4A381-E2C9-40CB-BC88-143D6EEC7E60",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "bind": "{referenceNo}"
                              }, {
                                   "name": "issueDate",
                                   "itemId": "issueDate",
                                   "xtype": "customDateField",
                                   "customWidgetType": "vdDatefield",
                                   "displayName": "Issue Date",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Issue Date",
                                   "fieldId": "3B592686-C425-4592-BEFB-7BCC33DFA52E",
                                   "bind": "{issueDate}"
                              }, {
                                   "name": "expiryDate",
                                   "itemId": "expiryDate",
                                   "xtype": "customDateField",
                                   "customWidgetType": "vdDatefield",
                                   "displayName": "Expiry Date",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Expiry Date",
                                   "fieldId": "7ACC734B-D335-4D38-BF57-AE626FF87B66",
                                   "bind": "{expiryDate}"
                              }, {
                                   "name": "remarks",
                                   "itemId": "remarks",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Remarks",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Remarks",
                                   "fieldId": "491DCE11-6FD0-47CC-9C4E-FED589E34D07",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "bind": "{remarks}"
                              }, {
                                   "name": "docFile",
                                   "itemId": "docFile",
                                   "xtype": "textareafield",
                                   "customWidgetType": "vdTextareafield",
                                   "displayName": "File",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "File<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "9C3C008E-F239-4267-94EE-28F83FA81442",
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
                    "viewModel": "BusinessDocumentViewModel",
                    "listeners": {},
                    "extend": "Ext.form.Panel",
                    "region": "center",
                    "customWidgetType": "vdCardLayout"
               }, {
                    "xtype": "grid",
                    "customWidgetType": "vdGrid",
                    "displayName": "businessDocument",
                    "title": "Details Grid",
                    "name": "BusinessDocumentGrid",
                    "itemId": "BusinessDocumentGrid",
                    "store": [],
                    "bodyPadding": 10,
                    "requires": [],
                    "columns": [{
                         "header": "mapId",
                         "dataIndex": "mapId",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "primaryKey",
                         "dataIndex": "primaryKey",
                         "hidden": true
                    }, {
                         "header": "Conatct",
                         "dataIndex": "contactId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Document",
                         "dataIndex": "documentId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Document No",
                         "dataIndex": "referenceNo",
                         "flex": 1
                    }, {
                         "header": "Issue Date",
                         "dataIndex": "issueDate",
                         "flex": 1
                    }, {
                         "header": "Expiry Date",
                         "dataIndex": "expiryDate",
                         "flex": 1
                    }, {
                         "header": "Remarks",
                         "dataIndex": "remarks",
                         "flex": 1
                    }, {
                         "header": "File",
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
               "displayName": "businessDocument",
               "name": "BusinessDocument",
               "itemId": "BusinessDocumentForm",
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
                              "displayName": "Conatct",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Conatct<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "5F3801CF-96C6-42A2-ADEF-CE8099D77C2D",
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
                              "displayName": "Document",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Document<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "799EA5D4-4B9C-422B-BC7A-E670A47EDAA7",
                              "restURL": "CfgDocCorporate",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "store": {
                                   "data": [],
                                   "model": "Buzzor.singx.shared.singx.model.singx.CfgDocCorporateModel"
                              },
                              "forceSelection": true,
                              "bind": "{documentId}"
                         }, {
                              "name": "referenceNo",
                              "itemId": "referenceNo",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Document No",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Document No",
                              "fieldId": "63A4A381-E2C9-40CB-BC88-143D6EEC7E60",
                              "minLength": "0",
                              "maxLength": "256",
                              "bind": "{referenceNo}"
                         }, {
                              "name": "issueDate",
                              "itemId": "issueDate",
                              "xtype": "customDateField",
                              "customWidgetType": "vdDatefield",
                              "displayName": "Issue Date",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Issue Date",
                              "fieldId": "3B592686-C425-4592-BEFB-7BCC33DFA52E",
                              "bind": "{issueDate}"
                         }, {
                              "name": "expiryDate",
                              "itemId": "expiryDate",
                              "xtype": "customDateField",
                              "customWidgetType": "vdDatefield",
                              "displayName": "Expiry Date",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Expiry Date",
                              "fieldId": "7ACC734B-D335-4D38-BF57-AE626FF87B66",
                              "bind": "{expiryDate}"
                         }, {
                              "name": "remarks",
                              "itemId": "remarks",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Remarks",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Remarks",
                              "fieldId": "491DCE11-6FD0-47CC-9C4E-FED589E34D07",
                              "minLength": "0",
                              "maxLength": "256",
                              "bind": "{remarks}"
                         }, {
                              "name": "docFile",
                              "itemId": "docFile",
                              "xtype": "textareafield",
                              "customWidgetType": "vdTextareafield",
                              "displayName": "File",
                              "margin": "5 5 5 5",
                              "fieldLabel": "File<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "9C3C008E-F239-4267-94EE-28F83FA81442",
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
               "viewModel": "BusinessDocumentViewModel",
               "listeners": {},
               "extend": "Ext.form.Panel",
               "region": "center",
               "customWidgetType": "vdCardLayout"
          }]
     }]
});