Ext.define('Buzzor.singx.web.singx.view.singx.CorporateRegDetailMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "CorporateRegDetailMainController",
     "restURL": "/CorporateRegDetail",
     "defaults": {
          "split": true
     },
     "requires": ["Buzzor.singx.shared.singx.model.singx.CorporateRegDetailModel", "Buzzor.singx.web.singx.controller.singx.CorporateRegDetailMainController", "Buzzor.singx.shared.singx.model.singx.SingXCustomerModel", "Buzzor.singx.shared.singx.model.singx.CompanyTypeModel", "Buzzor.singx.shared.singx.model.singx.CompanyCategoryModel", "Buzzor.singx.shared.singx.viewmodel.singx.CorporateRegDetailViewModel", "Ext.form.field.CustomDateField"],
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
               "displayName": "corporateRegDetail",
               "name": "CorporateRegDetailTreeContainer",
               "itemId": "CorporateRegDetailTreeContainer",
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
                    "itemId": "CorporateRegDetailTree",
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
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Cusomer",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Cusomer",
                         "fieldId": "BAF34756-FD2A-4BCE-896B-3A5B8B95FEF7",
                         "restURL": "SingXCustomer",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "store": {
                              "data": [],
                              "model": "Buzzor.singx.shared.singx.model.singx.SingXCustomerModel"
                         }
                    }, {
                         "name": "companyTypeId",
                         "itemId": "companyTypeId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Company Type",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Company Type",
                         "fieldId": "06980500-2536-4270-9D92-43DD34CD4E13",
                         "restURL": "CompanyType",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "store": {
                              "data": [],
                              "model": "Buzzor.singx.shared.singx.model.singx.CompanyTypeModel"
                         }
                    }, {
                         "name": "companyCategoryId",
                         "itemId": "companyCategoryId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Company Category",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Company Category",
                         "fieldId": "F3619DBA-C0FB-4350-AFF7-C7D0F3331665",
                         "restURL": "CompanyCategory",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "store": {
                              "data": [],
                              "model": "Buzzor.singx.shared.singx.model.singx.CompanyCategoryModel"
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
                    "displayName": "corporateRegDetail",
                    "name": "CorporateRegDetail",
                    "itemId": "CorporateRegDetailForm",
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
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Cusomer",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Cusomer",
                                   "fieldId": "BAF34756-FD2A-4BCE-896B-3A5B8B95FEF7",
                                   "restURL": "SingXCustomer",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "store": {
                                        "data": [],
                                        "model": "Buzzor.singx.shared.singx.model.singx.SingXCustomerModel"
                                   },
                                   "bind": "{customerId}"
                              }, {
                                   "name": "companyTypeId",
                                   "itemId": "companyTypeId",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Company Type",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Company Type<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "06980500-2536-4270-9D92-43DD34CD4E13",
                                   "restURL": "CompanyType",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "store": {
                                        "data": [],
                                        "model": "Buzzor.singx.shared.singx.model.singx.CompanyTypeModel"
                                   },
                                   "forceSelection": true,
                                   "bind": "{companyTypeId}"
                              }, {
                                   "name": "companyCategoryId",
                                   "itemId": "companyCategoryId",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Company Category",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Company Category<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "F3619DBA-C0FB-4350-AFF7-C7D0F3331665",
                                   "restURL": "CompanyCategory",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "store": {
                                        "data": [],
                                        "model": "Buzzor.singx.shared.singx.model.singx.CompanyCategoryModel"
                                   },
                                   "forceSelection": true,
                                   "bind": "{companyCategoryId}"
                              }, {
                                   "name": "companyName",
                                   "itemId": "companyName",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Company Name",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Company Name<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "06BD5B6C-DB13-4297-A73D-7C6A69796DF3",
                                   "minLength": "0",
                                   "maxLength": "100",
                                   "bind": "{companyName}"
                              }, {
                                   "name": "registrationNumber",
                                   "itemId": "registrationNumber",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Registration No.",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Registration No.<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "4936296C-CD4A-41A0-970B-63D6593F4624",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "bind": "{registrationNumber}"
                              }, {
                                   "name": "headOffice",
                                   "itemId": "headOffice",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Head Office",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Head Office<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "666EB0CF-260F-4082-B038-1DFE82B777DA",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "bind": "{headOffice}"
                              }, {
                                   "name": "annualTurnOver",
                                   "itemId": "annualTurnOver",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "Annual Turn Over in USD MIllion",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Annual Turn Over in USD MIllion",
                                   "fieldId": "234FB782-012B-4124-BF50-6761B7D02540",
                                   "minValue": "-2147483648",
                                   "maxValue": "2147483647",
                                   "bind": "{annualTurnOver}"
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
                    "viewModel": "CorporateRegDetailViewModel",
                    "listeners": {},
                    "extend": "Ext.form.Panel",
                    "region": "center",
                    "customWidgetType": "vdCardLayout"
               }, {
                    "xtype": "grid",
                    "customWidgetType": "vdGrid",
                    "displayName": "corporateRegDetail",
                    "title": "Details Grid",
                    "name": "CorporateRegDetailGrid",
                    "itemId": "CorporateRegDetailGrid",
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
                         "header": "Cusomer",
                         "dataIndex": "customerId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Company Type",
                         "dataIndex": "companyTypeId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Company Category",
                         "dataIndex": "companyCategoryId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Company Name",
                         "dataIndex": "companyName",
                         "flex": 1
                    }, {
                         "header": "Registration No.",
                         "dataIndex": "registrationNumber",
                         "flex": 1
                    }, {
                         "header": "Head Office",
                         "dataIndex": "headOffice",
                         "flex": 1
                    }, {
                         "header": "Annual Turn Over in USD MIllion",
                         "dataIndex": "annualTurnOver",
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
               "displayName": "corporateRegDetail",
               "name": "CorporateRegDetail",
               "itemId": "CorporateRegDetailForm",
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
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "Cusomer",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Cusomer",
                              "fieldId": "BAF34756-FD2A-4BCE-896B-3A5B8B95FEF7",
                              "restURL": "SingXCustomer",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "store": {
                                   "data": [],
                                   "model": "Buzzor.singx.shared.singx.model.singx.SingXCustomerModel"
                              },
                              "bind": "{customerId}"
                         }, {
                              "name": "companyTypeId",
                              "itemId": "companyTypeId",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "Company Type",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Company Type<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "06980500-2536-4270-9D92-43DD34CD4E13",
                              "restURL": "CompanyType",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "store": {
                                   "data": [],
                                   "model": "Buzzor.singx.shared.singx.model.singx.CompanyTypeModel"
                              },
                              "forceSelection": true,
                              "bind": "{companyTypeId}"
                         }, {
                              "name": "companyCategoryId",
                              "itemId": "companyCategoryId",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "Company Category",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Company Category<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "F3619DBA-C0FB-4350-AFF7-C7D0F3331665",
                              "restURL": "CompanyCategory",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "store": {
                                   "data": [],
                                   "model": "Buzzor.singx.shared.singx.model.singx.CompanyCategoryModel"
                              },
                              "forceSelection": true,
                              "bind": "{companyCategoryId}"
                         }, {
                              "name": "companyName",
                              "itemId": "companyName",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Company Name",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Company Name<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "06BD5B6C-DB13-4297-A73D-7C6A69796DF3",
                              "minLength": "0",
                              "maxLength": "100",
                              "bind": "{companyName}"
                         }, {
                              "name": "registrationNumber",
                              "itemId": "registrationNumber",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Registration No.",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Registration No.<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "4936296C-CD4A-41A0-970B-63D6593F4624",
                              "minLength": "0",
                              "maxLength": "256",
                              "bind": "{registrationNumber}"
                         }, {
                              "name": "headOffice",
                              "itemId": "headOffice",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Head Office",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Head Office<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "666EB0CF-260F-4082-B038-1DFE82B777DA",
                              "minLength": "0",
                              "maxLength": "256",
                              "bind": "{headOffice}"
                         }, {
                              "name": "annualTurnOver",
                              "itemId": "annualTurnOver",
                              "xtype": "numberfield",
                              "customWidgetType": "vdNumberfield",
                              "displayName": "Annual Turn Over in USD MIllion",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Annual Turn Over in USD MIllion",
                              "fieldId": "234FB782-012B-4124-BF50-6761B7D02540",
                              "minValue": "-2147483648",
                              "maxValue": "2147483647",
                              "bind": "{annualTurnOver}"
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
               "viewModel": "CorporateRegDetailViewModel",
               "listeners": {},
               "extend": "Ext.form.Panel",
               "region": "center",
               "customWidgetType": "vdCardLayout"
          }]
     }]
});