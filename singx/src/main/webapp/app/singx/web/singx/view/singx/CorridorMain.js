Ext.define('Buzzor.singx.web.singx.view.singx.CorridorMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "CorridorMainController",
     "restURL": "/Corridor",
     "defaults": {
          "split": true
     },
     "requires": ["Buzzor.singx.shared.singx.model.singx.CorridorModel", "Buzzor.singx.web.singx.controller.singx.CorridorMainController", "Buzzor.singx.shared.singx.model.location.CountryModel", "Buzzor.singx.shared.singx.model.location.CountryModel", "Buzzor.singx.shared.singx.viewmodel.singx.CorridorViewModel", "Ext.form.field.CustomDateField"],
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
               "displayName": "corridor",
               "name": "CorridorTreeContainer",
               "itemId": "CorridorTreeContainer",
               "restURL": "/Corridor",
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
                    "itemId": "CorridorTree",
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
                         "name": "corridorId",
                         "itemId": "corridorId",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "corridorId",
                         "margin": "5 5 5 5",
                         "fieldLabel": "corridorId",
                         "fieldId": "31A495F8-6ACB-4482-92C4-20F91049B40E",
                         "hidden": true,
                         "value": ""
                    }, {
                         "name": "toCountryId",
                         "itemId": "toCountryId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Corridor to Country",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Corridor to Country",
                         "fieldId": "DA0689C7-AB7F-4538-8613-AEEEEC8005BB",
                         "restURL": "Country",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "store": {
                              "data": [],
                              "model": "Buzzor.singx.shared.singx.model.location.CountryModel"
                         }
                    }, {
                         "name": "countryId",
                         "itemId": "countryId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Country",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Country",
                         "fieldId": "14DAC9FC-97CA-459F-B70B-66FD0A2CE738",
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
                    "viewModel": "CorridorViewModel",
                    "xtype": "form",
                    "displayName": "corridor",
                    "title": "corridor",
                    "name": "Corridor",
                    "itemId": "Corridor",
                    "bodyPadding": 10,
                    "items": [{
                         "name": "corridorName",
                         "itemId": "corridorName",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Corridor Name",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Corridor Name<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "21D3B346-CB51-445E-B597-F10BE3E6F62B",
                         "minLength": "0",
                         "maxLength": "50",
                         "bind": "{corridorName}",
                         "columnWidth": 0.5
                    }, {
                         "name": "toCountryId",
                         "itemId": "toCountryId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Corridor to Country",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Corridor to Country<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "DA0689C7-AB7F-4538-8613-AEEEEC8005BB",
                         "restURL": "Country",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "store": {
                              "data": [],
                              "model": "Buzzor.singx.shared.singx.model.location.CountryModel"
                         },
                         "forceSelection": true,
                         "bind": "{toCountryId}",
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
                         "fieldId": "14DAC9FC-97CA-459F-B70B-66FD0A2CE738",
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
                    }, {
                         "name": "applySingXFee",
                         "itemId": "applySingXFee",
                         "xtype": "checkbox",
                         "customWidgetType": "vdCheckbox",
                         "displayName": "Apply SingX Fee",
                         "margin": "5 5 5 5",
                         "inputValue": true,
                         "fieldLabel": "Apply SingX Fee",
                         "fieldId": "75203916-F4D4-4D26-914A-9A596531257C",
                         "bind": "{applySingXFee}",
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
                         "customId": 311,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "parentId": 311,
                              "customId": 329
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "parentId": 311,
                              "customId": 330,
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
                              "parentId": 311,
                              "customId": 331,
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
                    "displayName": "corridor",
                    "title": "Details Grid",
                    "name": "CorridorGrid",
                    "itemId": "CorridorGrid",
                    "restURL": "/Corridor",
                    "store": [],
                    "bodyPadding": 10,
                    "columns": [{
                         "header": "corridorId",
                         "dataIndex": "corridorId",
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
                         "header": "Corridor Name",
                         "dataIndex": "corridorName",
                         "flex": 1
                    }, {
                         "header": "Corridor to Country",
                         "dataIndex": "toCountryId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Country",
                         "dataIndex": "countryId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Apply SingX Fee",
                         "dataIndex": "applySingXFee",
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
               "viewModel": "CorridorViewModel",
               "xtype": "form",
               "displayName": "corridor",
               "title": "corridor",
               "name": "Corridor",
               "itemId": "Corridor",
               "bodyPadding": 10,
               "items": [{
                    "name": "corridorName",
                    "itemId": "corridorName",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Corridor Name",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Corridor Name<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "21D3B346-CB51-445E-B597-F10BE3E6F62B",
                    "minLength": "0",
                    "maxLength": "50",
                    "bind": "{corridorName}",
                    "columnWidth": 0.5
               }, {
                    "name": "toCountryId",
                    "itemId": "toCountryId",
                    "xtype": "combo",
                    "customWidgetType": "vdCombo",
                    "displayName": "Corridor to Country",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Corridor to Country<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "DA0689C7-AB7F-4538-8613-AEEEEC8005BB",
                    "restURL": "Country",
                    "displayField": "primaryDisplay",
                    "valueField": "primaryKey",
                    "store": {
                         "data": [],
                         "model": "Buzzor.singx.shared.singx.model.location.CountryModel"
                    },
                    "forceSelection": true,
                    "bind": "{toCountryId}",
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
                    "fieldId": "14DAC9FC-97CA-459F-B70B-66FD0A2CE738",
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
               }, {
                    "name": "applySingXFee",
                    "itemId": "applySingXFee",
                    "xtype": "checkbox",
                    "customWidgetType": "vdCheckbox",
                    "displayName": "Apply SingX Fee",
                    "margin": "5 5 5 5",
                    "inputValue": true,
                    "fieldLabel": "Apply SingX Fee",
                    "fieldId": "75203916-F4D4-4D26-914A-9A596531257C",
                    "bind": "{applySingXFee}",
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
                    "customId": 311,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill",
                         "parentId": 311,
                         "customId": 329
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "parentId": 311,
                         "customId": 330,
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
                         "parentId": 311,
                         "customId": 331,
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