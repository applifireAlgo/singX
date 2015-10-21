Ext.define('Buzzor.singx.web.singx.view.singx.SingxContactsMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "SingxContactsMainController",
     "restURL": "/SingxContacts",
     "defaults": {
          "split": true
     },
     "requires": ["Buzzor.singx.shared.singx.model.singx.SingxContactsModel", "Buzzor.singx.web.singx.controller.singx.SingxContactsMainController", "Buzzor.singx.shared.singx.model.singx.SingxPrefixModel", "Buzzor.singx.shared.singx.model.contacts.GenderModel", "Buzzor.singx.shared.singx.model.singx.CallingCodeModel", "Buzzor.singx.shared.singx.model.location.CountryModel", "Buzzor.singx.shared.singx.viewmodel.singx.SingxContactsViewModel", "Ext.form.field.CustomDateField"],
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
               "displayName": "singxContacts",
               "name": "SingxContactsTreeContainer",
               "itemId": "SingxContactsTreeContainer",
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
                    "itemId": "SingxContactsTree",
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
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "contactId",
                         "margin": "5 5 5 5",
                         "fieldLabel": "contactId",
                         "fieldId": "5C8CB94F-BA15-47C0-A25B-9DD81E5FEAD6",
                         "minLength": "0",
                         "maxLength": "256",
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
                         "fieldId": "B3285D37-BCF5-4077-A32F-6412E94668A9",
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
                    "xtype": "form",
                    "displayName": "singxContacts",
                    "name": "SingxContacts",
                    "itemId": "SingxContactsForm",
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
                                   "name": "prefixId",
                                   "itemId": "prefixId",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Prefix",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Prefix<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "AFC38DD3-7422-4EED-A45E-C705B38B5961",
                                   "restURL": "SingxPrefix",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "store": {
                                        "data": [],
                                        "model": "Buzzor.singx.shared.singx.model.singx.SingxPrefixModel"
                                   },
                                   "forceSelection": true,
                                   "bind": "{prefixId}"
                              }, {
                                   "name": "firstName",
                                   "itemId": "firstName",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "First Name",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "First Name<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "738BA2D4-7A23-4201-A4D0-CEB8B411A002",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "bind": "{firstName}"
                              }, {
                                   "name": "middleName",
                                   "itemId": "middleName",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Middle Name",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Middle Name",
                                   "fieldId": "78EA401A-A66D-4BF1-80D2-B79A89909947",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "bind": "{middleName}"
                              }, {
                                   "name": "lastName",
                                   "itemId": "lastName",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Last Name",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Last Name<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "791CD659-91F2-4C02-B6BB-07C20F944BD0",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "bind": "{lastName}"
                              }, {
                                   "name": "genderId",
                                   "itemId": "genderId",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Gender",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Gender<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "C0491338-E491-491C-91F1-90A66AD3E5A4",
                                   "restURL": "Gender",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "store": {
                                        "data": [],
                                        "model": "Buzzor.singx.shared.singx.model.contacts.GenderModel"
                                   },
                                   "forceSelection": true,
                                   "bind": "{genderId}"
                              }, {
                                   "name": "dateOfBirth",
                                   "itemId": "dateOfBirth",
                                   "xtype": "customDateField",
                                   "customWidgetType": "vdDatefield",
                                   "displayName": "DOB",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "DOB<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "93769FD1-4CCB-4762-A315-D66EDE21782E",
                                   "bind": "{dateOfBirth}"
                              }, {
                                   "name": "emailId",
                                   "itemId": "emailId",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Email",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Email",
                                   "fieldId": "3D7DD2D0-A0FB-4CFB-A07D-8F9014E8E595",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "bind": "{emailId}"
                              }, {
                                   "name": "phoneCountryCode",
                                   "itemId": "phoneCountryCode",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Calling Code",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Calling Code<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "EA2CB7F0-61C5-4B0F-A15E-C3357FAE3C99",
                                   "restURL": "CallingCode",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "store": {
                                        "data": [],
                                        "model": "Buzzor.singx.shared.singx.model.singx.CallingCodeModel"
                                   },
                                   "forceSelection": true,
                                   "bind": "{phoneCountryCode}"
                              }, {
                                   "name": "phoneNumber",
                                   "itemId": "phoneNumber",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "Phone Number",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Phone Number<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "0FB0512D-75B1-4441-868B-2EEE236C3679",
                                   "minValue": "-2147483648",
                                   "maxValue": "2147483647",
                                   "bind": "{phoneNumber}"
                              }, {
                                   "name": "countryId",
                                   "itemId": "countryId",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Country",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Country<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "B3285D37-BCF5-4077-A32F-6412E94668A9",
                                   "restURL": "Country",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "store": {
                                        "data": [],
                                        "model": "Buzzor.singx.shared.singx.model.location.CountryModel"
                                   },
                                   "forceSelection": true,
                                   "bind": "{countryId}",
                                   "listeners": {
                                        "change": "onCountryIdChange"
                                   }
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
                    "viewModel": "SingxContactsViewModel",
                    "listeners": {},
                    "extend": "Ext.form.Panel",
                    "region": "center",
                    "customWidgetType": "vdCardLayout"
               }, {
                    "xtype": "grid",
                    "customWidgetType": "vdGrid",
                    "displayName": "singxContacts",
                    "title": "Details Grid",
                    "name": "SingxContactsGrid",
                    "itemId": "SingxContactsGrid",
                    "store": [],
                    "bodyPadding": 10,
                    "requires": [],
                    "columns": [{
                         "header": "contactId",
                         "dataIndex": "contactId",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "primaryKey",
                         "dataIndex": "primaryKey",
                         "hidden": true
                    }, {
                         "header": "Prefix",
                         "dataIndex": "prefixId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "First Name",
                         "dataIndex": "firstName",
                         "flex": 1
                    }, {
                         "header": "Middle Name",
                         "dataIndex": "middleName",
                         "flex": 1
                    }, {
                         "header": "Last Name",
                         "dataIndex": "lastName",
                         "flex": 1
                    }, {
                         "header": "Gender",
                         "dataIndex": "genderId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "DOB",
                         "dataIndex": "dateOfBirth",
                         "flex": 1
                    }, {
                         "header": "Email",
                         "dataIndex": "emailId",
                         "flex": 1
                    }, {
                         "header": "Calling Code",
                         "dataIndex": "phoneCountryCode",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Phone Number",
                         "dataIndex": "phoneNumber",
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
               "xtype": "form",
               "displayName": "singxContacts",
               "name": "SingxContacts",
               "itemId": "SingxContactsForm",
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
                              "name": "prefixId",
                              "itemId": "prefixId",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "Prefix",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Prefix<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "AFC38DD3-7422-4EED-A45E-C705B38B5961",
                              "restURL": "SingxPrefix",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "store": {
                                   "data": [],
                                   "model": "Buzzor.singx.shared.singx.model.singx.SingxPrefixModel"
                              },
                              "forceSelection": true,
                              "bind": "{prefixId}"
                         }, {
                              "name": "firstName",
                              "itemId": "firstName",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "First Name",
                              "margin": "5 5 5 5",
                              "fieldLabel": "First Name<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "738BA2D4-7A23-4201-A4D0-CEB8B411A002",
                              "minLength": "0",
                              "maxLength": "256",
                              "bind": "{firstName}"
                         }, {
                              "name": "middleName",
                              "itemId": "middleName",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Middle Name",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Middle Name",
                              "fieldId": "78EA401A-A66D-4BF1-80D2-B79A89909947",
                              "minLength": "0",
                              "maxLength": "256",
                              "bind": "{middleName}"
                         }, {
                              "name": "lastName",
                              "itemId": "lastName",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Last Name",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Last Name<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "791CD659-91F2-4C02-B6BB-07C20F944BD0",
                              "minLength": "0",
                              "maxLength": "256",
                              "bind": "{lastName}"
                         }, {
                              "name": "genderId",
                              "itemId": "genderId",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "Gender",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Gender<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "C0491338-E491-491C-91F1-90A66AD3E5A4",
                              "restURL": "Gender",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "store": {
                                   "data": [],
                                   "model": "Buzzor.singx.shared.singx.model.contacts.GenderModel"
                              },
                              "forceSelection": true,
                              "bind": "{genderId}"
                         }, {
                              "name": "dateOfBirth",
                              "itemId": "dateOfBirth",
                              "xtype": "customDateField",
                              "customWidgetType": "vdDatefield",
                              "displayName": "DOB",
                              "margin": "5 5 5 5",
                              "fieldLabel": "DOB<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "93769FD1-4CCB-4762-A315-D66EDE21782E",
                              "bind": "{dateOfBirth}"
                         }, {
                              "name": "emailId",
                              "itemId": "emailId",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Email",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Email",
                              "fieldId": "3D7DD2D0-A0FB-4CFB-A07D-8F9014E8E595",
                              "minLength": "0",
                              "maxLength": "256",
                              "bind": "{emailId}"
                         }, {
                              "name": "phoneCountryCode",
                              "itemId": "phoneCountryCode",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "Calling Code",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Calling Code<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "EA2CB7F0-61C5-4B0F-A15E-C3357FAE3C99",
                              "restURL": "CallingCode",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "store": {
                                   "data": [],
                                   "model": "Buzzor.singx.shared.singx.model.singx.CallingCodeModel"
                              },
                              "forceSelection": true,
                              "bind": "{phoneCountryCode}"
                         }, {
                              "name": "phoneNumber",
                              "itemId": "phoneNumber",
                              "xtype": "numberfield",
                              "customWidgetType": "vdNumberfield",
                              "displayName": "Phone Number",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Phone Number<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "0FB0512D-75B1-4441-868B-2EEE236C3679",
                              "minValue": "-2147483648",
                              "maxValue": "2147483647",
                              "bind": "{phoneNumber}"
                         }, {
                              "name": "countryId",
                              "itemId": "countryId",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "Country",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Country<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "B3285D37-BCF5-4077-A32F-6412E94668A9",
                              "restURL": "Country",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "store": {
                                   "data": [],
                                   "model": "Buzzor.singx.shared.singx.model.location.CountryModel"
                              },
                              "forceSelection": true,
                              "bind": "{countryId}",
                              "listeners": {
                                   "change": "onCountryIdChange"
                              }
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
               "viewModel": "SingxContactsViewModel",
               "listeners": {},
               "extend": "Ext.form.Panel",
               "region": "center",
               "customWidgetType": "vdCardLayout"
          }]
     }]
});