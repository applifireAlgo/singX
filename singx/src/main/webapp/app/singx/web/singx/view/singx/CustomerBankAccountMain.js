Ext.define('Buzzor.singx.web.singx.view.singx.CustomerBankAccountMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "CustomerBankAccountMainController",
     "restURL": "/CustomerBankAccount",
     "defaults": {
          "split": true
     },
     "requires": ["Buzzor.singx.shared.singx.model.singx.CustomerBankAccountModel", "Buzzor.singx.web.singx.controller.singx.CustomerBankAccountMainController", "Buzzor.singx.shared.singx.model.singx.SingxContactsModel", "Buzzor.singx.shared.singx.model.singx.WireTransferModeModel", "Buzzor.singx.shared.singx.model.singx.BankModel", "Buzzor.singx.shared.singx.model.singx.BankBranchModel", "Buzzor.singx.shared.singx.viewmodel.singx.CustomerBankAccountViewModel", "Ext.form.field.CustomDateField"],
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
               "displayName": "customerBankAccount",
               "name": "CustomerBankAccountTreeContainer",
               "itemId": "CustomerBankAccountTreeContainer",
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
                    "itemId": "CustomerBankAccountTree",
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
                         "displayName": "contact",
                         "margin": "5 5 5 5",
                         "fieldLabel": "contact",
                         "fieldId": "77F3D394-7FFA-43C9-97A2-8A2AE12EC6C0",
                         "restURL": "SingxContacts",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "store": {
                              "data": [],
                              "model": "Buzzor.singx.shared.singx.model.singx.SingxContactsModel"
                         }
                    }, {
                         "name": "accountNumber",
                         "itemId": "accountNumber",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "accountNumber",
                         "margin": "5 5 5 5",
                         "fieldLabel": "accountNumber",
                         "fieldId": "707F99A4-B983-4C2E-8E82-492495054FD7",
                         "minLength": "0",
                         "maxLength": "256"
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
                    "displayName": "customerBankAccount",
                    "name": "CustomerBankAccount",
                    "itemId": "CustomerBankAccountForm",
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
                                   "displayName": "contact",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "contact<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "77F3D394-7FFA-43C9-97A2-8A2AE12EC6C0",
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
                                   "name": "firstName",
                                   "itemId": "firstName",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "firstName",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "firstName<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "AF0CF3FE-CCAD-48D5-93A5-60E186D2F16E",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "bind": "{firstName}"
                              }, {
                                   "name": "middleName",
                                   "itemId": "middleName",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "middleName",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "middleName",
                                   "fieldId": "94EA4DFF-D0BC-4018-80E1-847A4913984F",
                                   "minLength": "0",
                                   "maxLength": "50",
                                   "bind": "{middleName}"
                              }, {
                                   "name": "lastName",
                                   "itemId": "lastName",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "lastName",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "lastName<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "484A7E65-413B-4080-ABB4-5707AFB6394E",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "bind": "{lastName}"
                              }, {
                                   "name": "accountNumber",
                                   "itemId": "accountNumber",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "accountNumber",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "accountNumber<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "707F99A4-B983-4C2E-8E82-492495054FD7",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "bind": "{accountNumber}"
                              }, {
                                   "name": "wireTransferModeId",
                                   "itemId": "wireTransferModeId",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "wireTransferModeId",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "wireTransferModeId<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "51C13D6E-712A-44C4-A06C-CA526C3E1BC2",
                                   "restURL": "WireTransferMode",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "store": {
                                        "data": [],
                                        "model": "Buzzor.singx.shared.singx.model.singx.WireTransferModeModel"
                                   },
                                   "forceSelection": true,
                                   "bind": "{wireTransferModeId}"
                              }, {
                                   "name": "bankId",
                                   "itemId": "bankId",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "bankId",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "bankId<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "D52F722F-395F-4BA5-B694-2300197CF53F",
                                   "restURL": "Bank",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "store": {
                                        "data": [],
                                        "model": "Buzzor.singx.shared.singx.model.singx.BankModel"
                                   },
                                   "forceSelection": true,
                                   "bind": "{bankId}",
                                   "listeners": {
                                        "change": "onBankIdChange"
                                   }
                              }, {
                                   "name": "branchId",
                                   "itemId": "branchId",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "branchId",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "branchId<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "4B39E2C6-8E5B-47E8-8C6A-96AFE5BE5357",
                                   "restURL": "BankBranch",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "store": {
                                        "data": [],
                                        "model": "Buzzor.singx.shared.singx.model.singx.BankBranchModel"
                                   },
                                   "forceSelection": true,
                                   "bind": "{branchId}"
                              }, {
                                   "name": "jointAccHolderName",
                                   "itemId": "jointAccHolderName",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "jointAccHolderName",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "jointAccHolderName",
                                   "fieldId": "F39B1F4E-98A2-4783-AC07-8769B6157D8E",
                                   "minLength": "0",
                                   "maxLength": "50",
                                   "bind": "{jointAccHolderName}"
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
                    "viewModel": "CustomerBankAccountViewModel",
                    "listeners": {},
                    "extend": "Ext.form.Panel",
                    "region": "center",
                    "customWidgetType": "vdCardLayout"
               }, {
                    "xtype": "grid",
                    "customWidgetType": "vdGrid",
                    "displayName": "customerBankAccount",
                    "title": "Details Grid",
                    "name": "CustomerBankAccountGrid",
                    "itemId": "CustomerBankAccountGrid",
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
                         "header": "contact",
                         "dataIndex": "contactId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "firstName",
                         "dataIndex": "firstName",
                         "flex": 1
                    }, {
                         "header": "middleName",
                         "dataIndex": "middleName",
                         "flex": 1
                    }, {
                         "header": "lastName",
                         "dataIndex": "lastName",
                         "flex": 1
                    }, {
                         "header": "accountNumber",
                         "dataIndex": "accountNumber",
                         "flex": 1
                    }, {
                         "header": "wireTransferModeId",
                         "dataIndex": "wireTransferModeId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "bankId",
                         "dataIndex": "bankId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "branchId",
                         "dataIndex": "branchId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "jointAccHolderName",
                         "dataIndex": "jointAccHolderName",
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
               "displayName": "customerBankAccount",
               "name": "CustomerBankAccount",
               "itemId": "CustomerBankAccountForm",
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
                              "displayName": "contact",
                              "margin": "5 5 5 5",
                              "fieldLabel": "contact<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "77F3D394-7FFA-43C9-97A2-8A2AE12EC6C0",
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
                              "name": "firstName",
                              "itemId": "firstName",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "firstName",
                              "margin": "5 5 5 5",
                              "fieldLabel": "firstName<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "AF0CF3FE-CCAD-48D5-93A5-60E186D2F16E",
                              "minLength": "0",
                              "maxLength": "256",
                              "bind": "{firstName}"
                         }, {
                              "name": "middleName",
                              "itemId": "middleName",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "middleName",
                              "margin": "5 5 5 5",
                              "fieldLabel": "middleName",
                              "fieldId": "94EA4DFF-D0BC-4018-80E1-847A4913984F",
                              "minLength": "0",
                              "maxLength": "50",
                              "bind": "{middleName}"
                         }, {
                              "name": "lastName",
                              "itemId": "lastName",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "lastName",
                              "margin": "5 5 5 5",
                              "fieldLabel": "lastName<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "484A7E65-413B-4080-ABB4-5707AFB6394E",
                              "minLength": "0",
                              "maxLength": "256",
                              "bind": "{lastName}"
                         }, {
                              "name": "accountNumber",
                              "itemId": "accountNumber",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "accountNumber",
                              "margin": "5 5 5 5",
                              "fieldLabel": "accountNumber<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "707F99A4-B983-4C2E-8E82-492495054FD7",
                              "minLength": "0",
                              "maxLength": "256",
                              "bind": "{accountNumber}"
                         }, {
                              "name": "wireTransferModeId",
                              "itemId": "wireTransferModeId",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "wireTransferModeId",
                              "margin": "5 5 5 5",
                              "fieldLabel": "wireTransferModeId<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "51C13D6E-712A-44C4-A06C-CA526C3E1BC2",
                              "restURL": "WireTransferMode",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "store": {
                                   "data": [],
                                   "model": "Buzzor.singx.shared.singx.model.singx.WireTransferModeModel"
                              },
                              "forceSelection": true,
                              "bind": "{wireTransferModeId}"
                         }, {
                              "name": "bankId",
                              "itemId": "bankId",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "bankId",
                              "margin": "5 5 5 5",
                              "fieldLabel": "bankId<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "D52F722F-395F-4BA5-B694-2300197CF53F",
                              "restURL": "Bank",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "store": {
                                   "data": [],
                                   "model": "Buzzor.singx.shared.singx.model.singx.BankModel"
                              },
                              "forceSelection": true,
                              "bind": "{bankId}",
                              "listeners": {
                                   "change": "onBankIdChange"
                              }
                         }, {
                              "name": "branchId",
                              "itemId": "branchId",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "branchId",
                              "margin": "5 5 5 5",
                              "fieldLabel": "branchId<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "4B39E2C6-8E5B-47E8-8C6A-96AFE5BE5357",
                              "restURL": "BankBranch",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "store": {
                                   "data": [],
                                   "model": "Buzzor.singx.shared.singx.model.singx.BankBranchModel"
                              },
                              "forceSelection": true,
                              "bind": "{branchId}"
                         }, {
                              "name": "jointAccHolderName",
                              "itemId": "jointAccHolderName",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "jointAccHolderName",
                              "margin": "5 5 5 5",
                              "fieldLabel": "jointAccHolderName",
                              "fieldId": "F39B1F4E-98A2-4783-AC07-8769B6157D8E",
                              "minLength": "0",
                              "maxLength": "50",
                              "bind": "{jointAccHolderName}"
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
               "viewModel": "CustomerBankAccountViewModel",
               "listeners": {},
               "extend": "Ext.form.Panel",
               "region": "center",
               "customWidgetType": "vdCardLayout"
          }]
     }]
});