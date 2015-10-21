Ext.define('Buzzor.singx.web.singx.view.singx.IndividualRegDetailMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "IndividualRegDetailMainController",
     "restURL": "/IndividualRegDetail",
     "defaults": {
          "split": true
     },
     "requires": ["Buzzor.singx.shared.singx.model.singx.IndividualRegDetailModel", "Buzzor.singx.web.singx.controller.singx.IndividualRegDetailMainController", "Buzzor.singx.shared.singx.model.singx.SingXCustomerModel", "Buzzor.singx.shared.singx.model.singx.ResidenceTypeModel", "Buzzor.singx.shared.singx.model.singx.CfgDocIndividualModel", "Buzzor.singx.shared.singx.viewmodel.singx.IndividualRegDetailViewModel", "Ext.form.field.CustomDateField"],
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
               "displayName": "individualRegDetail",
               "name": "IndividualRegDetailTreeContainer",
               "itemId": "IndividualRegDetailTreeContainer",
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
                    "itemId": "IndividualRegDetailTree",
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
                         "name": "customerId",
                         "itemId": "customerId",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "customerId",
                         "margin": "5 5 5 5",
                         "fieldLabel": "customerId",
                         "fieldId": "B1F56881-C5DE-48AF-B2A0-E66A7D669438",
                         "restURL": "SingXCustomer",
                         "hidden": true,
                         "value": ""
                    }, {
                         "name": "residenceTypeId",
                         "itemId": "residenceTypeId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Residence Type",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Residence Type",
                         "fieldId": "7E4AACDD-F04E-4FBE-B7F7-FEBC865924E6",
                         "restURL": "ResidenceType",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "store": {
                              "data": [],
                              "model": "Buzzor.singx.shared.singx.model.singx.ResidenceTypeModel"
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
                    "displayName": "individualRegDetail",
                    "name": "IndividualRegDetail",
                    "itemId": "IndividualRegDetailForm",
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
                                   "name": "customerId",
                                   "itemId": "customerId",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "customerId",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "customerId",
                                   "fieldId": "B1F56881-C5DE-48AF-B2A0-E66A7D669438",
                                   "restURL": "SingXCustomer",
                                   "hidden": true,
                                   "value": "",
                                   "bind": "{customerId}"
                              }, {
                                   "name": "residenceTypeId",
                                   "itemId": "residenceTypeId",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Residence Type",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Residence Type<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "7E4AACDD-F04E-4FBE-B7F7-FEBC865924E6",
                                   "restURL": "ResidenceType",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "store": {
                                        "data": [],
                                        "model": "Buzzor.singx.shared.singx.model.singx.ResidenceTypeModel"
                                   },
                                   "forceSelection": true,
                                   "bind": "{residenceTypeId}",
                                   "listeners": {
                                        "change": "onResidenceTypeIdChange"
                                   }
                              }, {
                                   "name": "nationalityId",
                                   "itemId": "nationalityId",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Nationality",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Nationality<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "9EE2132F-31A1-4A1E-8160-225CFD465DC0",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "bind": "{nationalityId}"
                              }, {
                                   "name": "documentId",
                                   "itemId": "documentId",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Document",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Document<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "D276E060-F9EE-46A4-823D-6CA8B4BFAAF3",
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
                                   "name": "idProofValue",
                                   "itemId": "idProofValue",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "ID Proof Value",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "ID Proof Value<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "32125E0B-6788-4AC4-BF58-0E4103D872DA",
                                   "minLength": "0",
                                   "maxLength": "50",
                                   "bind": "{idProofValue}"
                              }, {
                                   "name": "expiryDate",
                                   "itemId": "expiryDate",
                                   "xtype": "customDateField",
                                   "customWidgetType": "vdDatefield",
                                   "displayName": "Expiry Date",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Expiry Date<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "83598672-E1F4-4BF9-8825-3C8059C2FDD4",
                                   "bind": "{expiryDate}"
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
                    "viewModel": "IndividualRegDetailViewModel",
                    "listeners": {},
                    "extend": "Ext.form.Panel",
                    "region": "center",
                    "customWidgetType": "vdCardLayout"
               }, {
                    "xtype": "grid",
                    "customWidgetType": "vdGrid",
                    "displayName": "individualRegDetail",
                    "title": "Details Grid",
                    "name": "IndividualRegDetailGrid",
                    "itemId": "IndividualRegDetailGrid",
                    "store": [],
                    "bodyPadding": 10,
                    "requires": [],
                    "columns": [{
                         "header": "customerId",
                         "dataIndex": "customerId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Residence Type",
                         "dataIndex": "residenceTypeId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Nationality",
                         "dataIndex": "nationalityId",
                         "flex": 1
                    }, {
                         "header": "Document",
                         "dataIndex": "documentId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "ID Proof Value",
                         "dataIndex": "idProofValue",
                         "flex": 1
                    }, {
                         "header": "Expiry Date",
                         "dataIndex": "expiryDate",
                         "flex": 1
                    }, {
                         "header": "mapId",
                         "dataIndex": "mapId",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "primaryKey",
                         "dataIndex": "primaryKey",
                         "hidden": true
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
               "displayName": "individualRegDetail",
               "name": "IndividualRegDetail",
               "itemId": "IndividualRegDetailForm",
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
                              "name": "customerId",
                              "itemId": "customerId",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "customerId",
                              "margin": "5 5 5 5",
                              "fieldLabel": "customerId",
                              "fieldId": "B1F56881-C5DE-48AF-B2A0-E66A7D669438",
                              "restURL": "SingXCustomer",
                              "hidden": true,
                              "value": "",
                              "bind": "{customerId}"
                         }, {
                              "name": "residenceTypeId",
                              "itemId": "residenceTypeId",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "Residence Type",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Residence Type<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "7E4AACDD-F04E-4FBE-B7F7-FEBC865924E6",
                              "restURL": "ResidenceType",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "store": {
                                   "data": [],
                                   "model": "Buzzor.singx.shared.singx.model.singx.ResidenceTypeModel"
                              },
                              "forceSelection": true,
                              "bind": "{residenceTypeId}",
                              "listeners": {
                                   "change": "onResidenceTypeIdChange"
                              }
                         }, {
                              "name": "nationalityId",
                              "itemId": "nationalityId",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Nationality",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Nationality<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "9EE2132F-31A1-4A1E-8160-225CFD465DC0",
                              "minLength": "0",
                              "maxLength": "256",
                              "bind": "{nationalityId}"
                         }, {
                              "name": "documentId",
                              "itemId": "documentId",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "Document",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Document<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "D276E060-F9EE-46A4-823D-6CA8B4BFAAF3",
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
                              "name": "idProofValue",
                              "itemId": "idProofValue",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "ID Proof Value",
                              "margin": "5 5 5 5",
                              "fieldLabel": "ID Proof Value<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "32125E0B-6788-4AC4-BF58-0E4103D872DA",
                              "minLength": "0",
                              "maxLength": "50",
                              "bind": "{idProofValue}"
                         }, {
                              "name": "expiryDate",
                              "itemId": "expiryDate",
                              "xtype": "customDateField",
                              "customWidgetType": "vdDatefield",
                              "displayName": "Expiry Date",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Expiry Date<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "83598672-E1F4-4BF9-8825-3C8059C2FDD4",
                              "bind": "{expiryDate}"
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
               "viewModel": "IndividualRegDetailViewModel",
               "listeners": {},
               "extend": "Ext.form.Panel",
               "region": "center",
               "customWidgetType": "vdCardLayout"
          }]
     }]
});