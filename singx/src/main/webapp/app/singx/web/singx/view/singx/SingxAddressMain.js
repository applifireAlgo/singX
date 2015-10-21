Ext.define('Buzzor.singx.web.singx.view.singx.SingxAddressMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "SingxAddressMainController",
     "restURL": "/SingxAddress",
     "defaults": {
          "split": true
     },
     "requires": ["Buzzor.singx.shared.singx.model.singx.SingxAddressModel", "Buzzor.singx.web.singx.controller.singx.SingxAddressMainController", "Buzzor.singx.shared.singx.model.singx.SingxContactsModel", "Buzzor.singx.shared.singx.model.location.CityModel", "Buzzor.singx.shared.singx.model.location.DistrictModel", "Buzzor.singx.shared.singx.model.location.StateModel", "Buzzor.singx.shared.singx.model.location.CountryModel", "Buzzor.singx.shared.singx.viewmodel.singx.SingxAddressViewModel", "Ext.form.field.CustomDateField"],
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
               "displayName": "singxAddress",
               "name": "SingxAddressTreeContainer",
               "itemId": "SingxAddressTreeContainer",
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
                    "itemId": "SingxAddressTree",
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
                         "name": "addressId",
                         "itemId": "addressId",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "addressId",
                         "margin": "5 5 5 5",
                         "fieldLabel": "addressId",
                         "fieldId": "3845B711-823E-4A1A-A32B-F2CDFF9EF687",
                         "hidden": true,
                         "value": ""
                    }, {
                         "name": "contactId",
                         "itemId": "contactId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "contactId",
                         "margin": "5 5 5 5",
                         "fieldLabel": "contactId",
                         "fieldId": "DD4861DA-1FFE-4A62-BFED-98FB56FC1681",
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
                    "displayName": "singxAddress",
                    "name": "SingxAddress",
                    "itemId": "SingxAddressForm",
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
                                   "fieldId": "DD4861DA-1FFE-4A62-BFED-98FB56FC1681",
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
                                   "name": "addressLabel",
                                   "itemId": "addressLabel",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Address label",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Address label<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "EC5A9D9E-C608-4FFC-8FC1-D2222A0DE34B",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "bind": "{addressLabel}"
                              }, {
                                   "name": "line1",
                                   "itemId": "line1",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "line1",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "line1<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "D5211BBA-10C9-49AB-B92B-06B90DB3D927",
                                   "minLength": "0",
                                   "maxLength": "50",
                                   "bind": "{line1}"
                              }, {
                                   "name": "line2",
                                   "itemId": "line2",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "line2",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "line2<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "96A3AE6D-139A-4E91-B8C3-C085EFDF0086",
                                   "minLength": "0",
                                   "maxLength": "50",
                                   "bind": "{line2}"
                              }, {
                                   "name": "line3",
                                   "itemId": "line3",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "line3",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "line3",
                                   "fieldId": "72BA1D7F-6699-4CBE-9395-823B4B0F7B2E",
                                   "minLength": "0",
                                   "maxLength": "50",
                                   "bind": "{line3}"
                              }, {
                                   "name": "line4",
                                   "itemId": "line4",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "line4",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "line4",
                                   "fieldId": "3A4B01BE-497A-4931-A242-D60A68C33CB7",
                                   "minLength": "0",
                                   "maxLength": "50",
                                   "bind": "{line4}"
                              }, {
                                   "name": "line5",
                                   "itemId": "line5",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "line5",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "line5",
                                   "fieldId": "3DBF05C9-AADF-4B35-8269-A52280EFFF64",
                                   "minLength": "0",
                                   "maxLength": "50",
                                   "bind": "{line5}"
                              }, {
                                   "name": "line6",
                                   "itemId": "line6",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "line6",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "line6",
                                   "fieldId": "DA0A9CB1-2F15-4A16-AFBE-0B9589095766",
                                   "minLength": "0",
                                   "maxLength": "50",
                                   "bind": "{line6}"
                              }, {
                                   "name": "line7",
                                   "itemId": "line7",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "line7",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "line7",
                                   "fieldId": "C1B0D4B8-D0BA-4EC4-BA63-5EA58670BE87",
                                   "minLength": "0",
                                   "maxLength": "50",
                                   "bind": "{line7}"
                              }, {
                                   "name": "line8",
                                   "itemId": "line8",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "line8",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "line8",
                                   "fieldId": "100C48CE-A92E-489E-AE65-FFC60D8A1E44",
                                   "minLength": "0",
                                   "maxLength": "50",
                                   "bind": "{line8}"
                              }, {
                                   "name": "city",
                                   "itemId": "city",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "City",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "City",
                                   "fieldId": "1EE0D518-EF82-4719-A5AD-D0F965599BAE",
                                   "restURL": "City",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "store": {
                                        "data": [],
                                        "model": "Buzzor.singx.shared.singx.model.location.CityModel"
                                   },
                                   "bind": "{city}"
                              }, {
                                   "name": "district",
                                   "itemId": "district",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "district",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "district",
                                   "fieldId": "CBA5235C-8365-4279-BFA6-7128C790D1ED",
                                   "restURL": "District",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "store": {
                                        "data": [],
                                        "model": "Buzzor.singx.shared.singx.model.location.DistrictModel"
                                   },
                                   "bind": "{district}"
                              }, {
                                   "name": "state",
                                   "itemId": "state",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "state",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "state",
                                   "fieldId": "EE51E858-E973-4A18-9853-EBAE0FF64383",
                                   "restURL": "State",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "store": {
                                        "data": [],
                                        "model": "Buzzor.singx.shared.singx.model.location.StateModel"
                                   },
                                   "bind": "{state}"
                              }, {
                                   "name": "country",
                                   "itemId": "country",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "country",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "country<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "7ABEFF4B-F0B1-4A51-AEF5-DD6F1CDDE71D",
                                   "restURL": "Country",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "store": {
                                        "data": [],
                                        "model": "Buzzor.singx.shared.singx.model.location.CountryModel"
                                   },
                                   "forceSelection": true,
                                   "bind": "{country}"
                              }, {
                                   "name": "postalCode",
                                   "itemId": "postalCode",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Postal Code",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Postal Code",
                                   "fieldId": "A9AB060D-6C7B-4A83-9624-9D6A966D63CB",
                                   "minLength": "0",
                                   "maxLength": "10",
                                   "bind": "{postalCode}"
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
                    "viewModel": "SingxAddressViewModel",
                    "listeners": {},
                    "extend": "Ext.form.Panel",
                    "region": "center",
                    "customWidgetType": "vdCardLayout"
               }, {
                    "xtype": "grid",
                    "customWidgetType": "vdGrid",
                    "displayName": "singxAddress",
                    "title": "Details Grid",
                    "name": "SingxAddressGrid",
                    "itemId": "SingxAddressGrid",
                    "store": [],
                    "bodyPadding": 10,
                    "requires": [],
                    "columns": [{
                         "header": "addressId",
                         "dataIndex": "addressId",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "primaryKey",
                         "dataIndex": "primaryKey",
                         "hidden": true
                    }, {
                         "header": "contactId",
                         "dataIndex": "contactId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Address label",
                         "dataIndex": "addressLabel",
                         "flex": 1
                    }, {
                         "header": "line1",
                         "dataIndex": "line1",
                         "flex": 1
                    }, {
                         "header": "line2",
                         "dataIndex": "line2",
                         "flex": 1
                    }, {
                         "header": "line3",
                         "dataIndex": "line3",
                         "flex": 1
                    }, {
                         "header": "line4",
                         "dataIndex": "line4",
                         "flex": 1
                    }, {
                         "header": "line5",
                         "dataIndex": "line5",
                         "flex": 1
                    }, {
                         "header": "line6",
                         "dataIndex": "line6",
                         "flex": 1
                    }, {
                         "header": "line7",
                         "dataIndex": "line7",
                         "flex": 1
                    }, {
                         "header": "line8",
                         "dataIndex": "line8",
                         "flex": 1
                    }, {
                         "header": "City",
                         "dataIndex": "city",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "district",
                         "dataIndex": "district",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "state",
                         "dataIndex": "state",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "country",
                         "dataIndex": "country",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Postal Code",
                         "dataIndex": "postalCode",
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
               "displayName": "singxAddress",
               "name": "SingxAddress",
               "itemId": "SingxAddressForm",
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
                              "fieldId": "DD4861DA-1FFE-4A62-BFED-98FB56FC1681",
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
                              "name": "addressLabel",
                              "itemId": "addressLabel",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Address label",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Address label<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "EC5A9D9E-C608-4FFC-8FC1-D2222A0DE34B",
                              "minLength": "0",
                              "maxLength": "256",
                              "bind": "{addressLabel}"
                         }, {
                              "name": "line1",
                              "itemId": "line1",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "line1",
                              "margin": "5 5 5 5",
                              "fieldLabel": "line1<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "D5211BBA-10C9-49AB-B92B-06B90DB3D927",
                              "minLength": "0",
                              "maxLength": "50",
                              "bind": "{line1}"
                         }, {
                              "name": "line2",
                              "itemId": "line2",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "line2",
                              "margin": "5 5 5 5",
                              "fieldLabel": "line2<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "96A3AE6D-139A-4E91-B8C3-C085EFDF0086",
                              "minLength": "0",
                              "maxLength": "50",
                              "bind": "{line2}"
                         }, {
                              "name": "line3",
                              "itemId": "line3",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "line3",
                              "margin": "5 5 5 5",
                              "fieldLabel": "line3",
                              "fieldId": "72BA1D7F-6699-4CBE-9395-823B4B0F7B2E",
                              "minLength": "0",
                              "maxLength": "50",
                              "bind": "{line3}"
                         }, {
                              "name": "line4",
                              "itemId": "line4",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "line4",
                              "margin": "5 5 5 5",
                              "fieldLabel": "line4",
                              "fieldId": "3A4B01BE-497A-4931-A242-D60A68C33CB7",
                              "minLength": "0",
                              "maxLength": "50",
                              "bind": "{line4}"
                         }, {
                              "name": "line5",
                              "itemId": "line5",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "line5",
                              "margin": "5 5 5 5",
                              "fieldLabel": "line5",
                              "fieldId": "3DBF05C9-AADF-4B35-8269-A52280EFFF64",
                              "minLength": "0",
                              "maxLength": "50",
                              "bind": "{line5}"
                         }, {
                              "name": "line6",
                              "itemId": "line6",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "line6",
                              "margin": "5 5 5 5",
                              "fieldLabel": "line6",
                              "fieldId": "DA0A9CB1-2F15-4A16-AFBE-0B9589095766",
                              "minLength": "0",
                              "maxLength": "50",
                              "bind": "{line6}"
                         }, {
                              "name": "line7",
                              "itemId": "line7",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "line7",
                              "margin": "5 5 5 5",
                              "fieldLabel": "line7",
                              "fieldId": "C1B0D4B8-D0BA-4EC4-BA63-5EA58670BE87",
                              "minLength": "0",
                              "maxLength": "50",
                              "bind": "{line7}"
                         }, {
                              "name": "line8",
                              "itemId": "line8",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "line8",
                              "margin": "5 5 5 5",
                              "fieldLabel": "line8",
                              "fieldId": "100C48CE-A92E-489E-AE65-FFC60D8A1E44",
                              "minLength": "0",
                              "maxLength": "50",
                              "bind": "{line8}"
                         }, {
                              "name": "city",
                              "itemId": "city",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "City",
                              "margin": "5 5 5 5",
                              "fieldLabel": "City",
                              "fieldId": "1EE0D518-EF82-4719-A5AD-D0F965599BAE",
                              "restURL": "City",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "store": {
                                   "data": [],
                                   "model": "Buzzor.singx.shared.singx.model.location.CityModel"
                              },
                              "bind": "{city}"
                         }, {
                              "name": "district",
                              "itemId": "district",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "district",
                              "margin": "5 5 5 5",
                              "fieldLabel": "district",
                              "fieldId": "CBA5235C-8365-4279-BFA6-7128C790D1ED",
                              "restURL": "District",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "store": {
                                   "data": [],
                                   "model": "Buzzor.singx.shared.singx.model.location.DistrictModel"
                              },
                              "bind": "{district}"
                         }, {
                              "name": "state",
                              "itemId": "state",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "state",
                              "margin": "5 5 5 5",
                              "fieldLabel": "state",
                              "fieldId": "EE51E858-E973-4A18-9853-EBAE0FF64383",
                              "restURL": "State",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "store": {
                                   "data": [],
                                   "model": "Buzzor.singx.shared.singx.model.location.StateModel"
                              },
                              "bind": "{state}"
                         }, {
                              "name": "country",
                              "itemId": "country",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "country",
                              "margin": "5 5 5 5",
                              "fieldLabel": "country<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "7ABEFF4B-F0B1-4A51-AEF5-DD6F1CDDE71D",
                              "restURL": "Country",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "store": {
                                   "data": [],
                                   "model": "Buzzor.singx.shared.singx.model.location.CountryModel"
                              },
                              "forceSelection": true,
                              "bind": "{country}"
                         }, {
                              "name": "postalCode",
                              "itemId": "postalCode",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Postal Code",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Postal Code",
                              "fieldId": "A9AB060D-6C7B-4A83-9624-9D6A966D63CB",
                              "minLength": "0",
                              "maxLength": "10",
                              "bind": "{postalCode}"
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
               "viewModel": "SingxAddressViewModel",
               "listeners": {},
               "extend": "Ext.form.Panel",
               "region": "center",
               "customWidgetType": "vdCardLayout"
          }]
     }]
});