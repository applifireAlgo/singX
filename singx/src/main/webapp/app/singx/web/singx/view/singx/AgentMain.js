Ext.define('Buzzor.singx.web.singx.view.singx.AgentMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "AgentMainController",
     "restURL": "/Agent",
     "defaults": {
          "split": true
     },
     "requires": ["Buzzor.singx.shared.singx.model.singx.AgentModel", "Buzzor.singx.web.singx.controller.singx.AgentMainController", "Buzzor.singx.shared.singx.model.location.CountryModel", "Buzzor.singx.shared.singx.model.contacts.TitleModel", "Buzzor.singx.shared.singx.model.location.LanguageModel", "Buzzor.singx.shared.singx.model.contacts.GenderModel", "Buzzor.singx.shared.singx.model.location.TimezoneModel", "Buzzor.singx.shared.singx.model.contacts.CommunicationGroupModel", "Buzzor.singx.shared.singx.model.contacts.CommunicationTypeModel", "Buzzor.singx.shared.singx.model.location.AddressTypeModel", "Buzzor.singx.shared.singx.model.location.CountryModel", "Buzzor.singx.shared.singx.model.location.StateModel", "Buzzor.singx.shared.singx.model.location.CityModel", "Buzzor.singx.shared.singx.viewmodel.singx.AgentViewModel", "Ext.form.field.CustomDateField"],
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
               "displayName": "agent",
               "name": "AgentTreeContainer",
               "itemId": "AgentTreeContainer",
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
                    "itemId": "AgentTree",
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
                         "name": "agentId",
                         "itemId": "agentId",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Agent ID",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Agent ID",
                         "fieldId": "55CE4650-E479-46B7-9B53-3202BCB98519",
                         "hidden": true,
                         "value": ""
                    }, {
                         "name": "agentCode",
                         "itemId": "agentCode",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Agent Code",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Agent Code",
                         "fieldId": "7A3ECF18-9AF4-4A5D-8710-C088F1572F9A",
                         "minLength": "0",
                         "maxLength": "50"
                    }, {
                         "name": "agentName",
                         "itemId": "agentName",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Agent Name",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Agent Name",
                         "fieldId": "FA80DCEB-9B14-46FC-BF68-D6B3690B0593",
                         "minLength": "0",
                         "maxLength": "50"
                    }, {
                         "name": "agencyName",
                         "itemId": "agencyName",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Agency Name",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Agency Name",
                         "fieldId": "4482767A-5059-427C-9726-49237BB17988",
                         "minLength": "0",
                         "maxLength": "50"
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
                    "displayName": "agent",
                    "name": "Agent",
                    "itemId": "AgentForm",
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
                                   "name": "agentCode",
                                   "itemId": "agentCode",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Agent Code",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Agent Code<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "7A3ECF18-9AF4-4A5D-8710-C088F1572F9A",
                                   "minLength": "0",
                                   "maxLength": "50",
                                   "bind": "{agentCode}"
                              }, {
                                   "name": "agentName",
                                   "itemId": "agentName",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Agent Name",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Agent Name<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "FA80DCEB-9B14-46FC-BF68-D6B3690B0593",
                                   "minLength": "0",
                                   "maxLength": "50",
                                   "bind": "{agentName}"
                              }, {
                                   "name": "agencyName",
                                   "itemId": "agencyName",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Agency Name",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Agency Name<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "4482767A-5059-427C-9726-49237BB17988",
                                   "minLength": "0",
                                   "maxLength": "50",
                                   "bind": "{agencyName}"
                              }, {
                                   "name": "countryId",
                                   "itemId": "countryId",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Country",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Country<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "CCB7881D-EA90-40E1-8CE7-F1C2A56ACBD4",
                                   "restURL": "Country",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "store": {
                                        "data": [],
                                        "model": "Buzzor.singx.shared.singx.model.location.CountryModel"
                                   },
                                   "forceSelection": true,
                                   "bind": "{countryId}"
                              }]
                         }]
                    }, {
                         "xtype": "form",
                         "displayName": "Core Contacts",
                         "title": "Core Contacts",
                         "name": "CoreContacts",
                         "itemId": "CoreContactsForm",
                         "bodyPadding": 10,
                         "items": [{
                              "xtype": "form",
                              "itemId": "form1",
                              "customWidgetType": "vdAnchorLayout",
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
                                        "name": "titleId",
                                        "itemId": "titleId",
                                        "xtype": "combo",
                                        "customWidgetType": "vdCombo",
                                        "displayName": "Title",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Title<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "719FA0FC-B0F1-4F4A-89DD-F5BE010E3FEF",
                                        "errorMessage": "Please enter title",
                                        "restURL": "Title",
                                        "displayField": "primaryDisplay",
                                        "valueField": "primaryKey",
                                        "store": {
                                             "data": [],
                                             "model": "Buzzor.singx.shared.singx.model.contacts.TitleModel"
                                        },
                                        "forceSelection": true,
                                        "bind": "{coreContacts.titleId}"
                                   }, {
                                        "name": "firstName",
                                        "itemId": "firstName",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "First Name",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "First Name<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "D7F9BE92-3A95-4E68-A688-07421A550733",
                                        "minLength": "0",
                                        "maxLength": "256",
                                        "errorMessage": "Please enter First Name",
                                        "bind": "{coreContacts.firstName}"
                                   }, {
                                        "name": "middleName",
                                        "itemId": "middleName",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Middle Name",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Middle Name",
                                        "fieldId": "5E5C3AFE-8A65-4833-BEB1-4A47D4D77305",
                                        "minLength": "0",
                                        "maxLength": "256",
                                        "bind": "{coreContacts.middleName}"
                                   }, {
                                        "name": "lastName",
                                        "itemId": "lastName",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Last Name",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Last Name<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "22DEF495-D225-424E-8A97-30C1A385584B",
                                        "minLength": "0",
                                        "maxLength": "256",
                                        "errorMessage": "Please enter Last Name",
                                        "bind": "{coreContacts.lastName}"
                                   }, {
                                        "name": "nativeLanguageCode",
                                        "itemId": "nativeLanguageCode",
                                        "xtype": "combo",
                                        "customWidgetType": "vdCombo",
                                        "displayName": "Native Language Code",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Native Language Code",
                                        "fieldId": "F70B3B7B-4C1A-4F7C-B5C8-E235CAF05371",
                                        "errorMessage": "Please enter gender",
                                        "restURL": "Language",
                                        "displayField": "primaryDisplay",
                                        "valueField": "primaryKey",
                                        "store": {
                                             "data": [],
                                             "model": "Buzzor.singx.shared.singx.model.location.LanguageModel"
                                        },
                                        "bind": "{coreContacts.nativeLanguageCode}"
                                   }, {
                                        "name": "nativeTitle",
                                        "itemId": "nativeTitle",
                                        "xtype": "combo",
                                        "customWidgetType": "vdCombo",
                                        "displayName": "Native Title",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Native Title",
                                        "fieldId": "1B44B982-0934-4F96-8DAB-D2063F031D07",
                                        "displayField": "primaryDisplay",
                                        "valueField": "primaryKey",
                                        "bind": "{coreContacts.nativeTitle}"
                                   }, {
                                        "name": "nativeFirstName",
                                        "itemId": "nativeFirstName",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Native First Name",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Native First Name",
                                        "fieldId": "6D633638-DC31-413B-B280-343E1315AC5A",
                                        "minLength": "0",
                                        "maxLength": "256",
                                        "bind": "{coreContacts.nativeFirstName}"
                                   }, {
                                        "name": "nativeMiddleName",
                                        "itemId": "nativeMiddleName",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Native Middle Name",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Native Middle Name",
                                        "fieldId": "9A473BEC-DD4D-435B-9304-8E55A3BF2D26",
                                        "minLength": "0",
                                        "maxLength": "256",
                                        "bind": "{coreContacts.nativeMiddleName}"
                                   }, {
                                        "name": "nativeLastName",
                                        "itemId": "nativeLastName",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Native LastName",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Native LastName",
                                        "fieldId": "519BFF44-8015-4E66-869E-B6E5894D8C93",
                                        "minLength": "0",
                                        "maxLength": "256",
                                        "bind": "{coreContacts.nativeLastName}"
                                   }, {
                                        "name": "genderId",
                                        "itemId": "genderId",
                                        "xtype": "combo",
                                        "customWidgetType": "vdCombo",
                                        "displayName": "Gender",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Gender<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "ABFDD239-6FF9-41D2-AD1F-E4C4CD235711",
                                        "errorMessage": "Please enter gender",
                                        "restURL": "Gender",
                                        "displayField": "primaryDisplay",
                                        "valueField": "primaryKey",
                                        "store": {
                                             "data": [],
                                             "model": "Buzzor.singx.shared.singx.model.contacts.GenderModel"
                                        },
                                        "forceSelection": true,
                                        "bind": "{coreContacts.genderId}"
                                   }, {
                                        "name": "dateofbirth",
                                        "itemId": "dateofbirth",
                                        "xtype": "customDateField",
                                        "customWidgetType": "vdDatefield",
                                        "displayName": "DOB",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "DOB",
                                        "fieldId": "A435A62B-16FC-4C2D-B9C5-D566AD5A83A4",
                                        "errorMessage": "Please enter Date of birth",
                                        "bind": "{coreContacts.dateofbirth}"
                                   }, {
                                        "name": "age",
                                        "itemId": "age",
                                        "xtype": "numberfield",
                                        "customWidgetType": "vdNumberfield",
                                        "displayName": "Age",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Age",
                                        "fieldId": "BBF51EC8-11A5-4FFD-BE92-E83E6FEB1257",
                                        "minValue": "0",
                                        "maxValue": "125",
                                        "bind": "{coreContacts.age}"
                                   }, {
                                        "name": "approximateDOB",
                                        "itemId": "approximateDOB",
                                        "xtype": "customDateField",
                                        "customWidgetType": "vdDatefield",
                                        "displayName": "Approx DOB",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Approx DOB",
                                        "fieldId": "4FA9D708-CB86-4C34-BEB7-F2D6D725BC24",
                                        "bind": "{coreContacts.approximateDOB}"
                                   }, {
                                        "name": "emailId",
                                        "itemId": "emailId",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Email ID",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Email ID<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "B3E7D367-FF83-40DB-92A1-056C5ACCE146",
                                        "minLength": "0",
                                        "maxLength": "256",
                                        "errorMessage": "Please enter Email ID",
                                        "bind": "{coreContacts.emailId}"
                                   }, {
                                        "name": "phoneNumber",
                                        "itemId": "phoneNumber",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Phone Number",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Phone Number<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "329F2513-9644-4447-AD08-8E698CF0EAAA",
                                        "minLength": "0",
                                        "maxLength": "20",
                                        "errorMessage": "Please enter Phone Number",
                                        "bind": "{coreContacts.phoneNumber}"
                                   }, {
                                        "name": "timeZone",
                                        "itemId": "timeZone",
                                        "xtype": "combo",
                                        "customWidgetType": "vdCombo",
                                        "displayName": "Time Zone",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Time Zone",
                                        "fieldId": "D9DB1D31-91E3-432D-BCDC-A4B713908D75",
                                        "errorMessage": "Please enter time zone",
                                        "restURL": "Timezone",
                                        "displayField": "primaryDisplay",
                                        "valueField": "primaryKey",
                                        "store": {
                                             "data": [],
                                             "model": "Buzzor.singx.shared.singx.model.location.TimezoneModel"
                                        },
                                        "bind": "{coreContacts.timeZone}"
                                   }]
                              }]
                         }, {
                              "xtype": "form",
                              "displayName": "Communication Data",
                              "title": "Communication Data",
                              "name": "CommunicationData",
                              "itemId": "CommunicationDataForm",
                              "bodyPadding": 10,
                              "items": [{
                                   "xtype": "form",
                                   "itemId": "form2",
                                   "customWidgetType": "vdAnchorLayout",
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
                                             "name": "commGroupId",
                                             "itemId": "commGroupId",
                                             "xtype": "combo",
                                             "customWidgetType": "vdCombo",
                                             "displayName": "Communication Group",
                                             "margin": "5 5 5 5",
                                             "fieldLabel": "Communication Group<font color='red'> *<\/font>",
                                             "allowBlank": false,
                                             "fieldId": "3CF3A9BB-76BB-4FE5-B9C8-FC7F3AA6895E",
                                             "restURL": "CommunicationGroup",
                                             "displayField": "primaryDisplay",
                                             "valueField": "primaryKey",
                                             "store": {
                                                  "data": [],
                                                  "model": "Buzzor.singx.shared.singx.model.contacts.CommunicationGroupModel"
                                             },
                                             "forceSelection": true,
                                             "listeners": {
                                                  "change": "onCommGroupIdChange"
                                             }
                                        }, {
                                             "name": "commType",
                                             "itemId": "commType",
                                             "xtype": "combo",
                                             "customWidgetType": "vdCombo",
                                             "displayName": "Communication Type",
                                             "margin": "5 5 5 5",
                                             "fieldLabel": "Communication Type<font color='red'> *<\/font>",
                                             "allowBlank": false,
                                             "fieldId": "8F2A56DA-C7FD-4C2E-B4E1-C22B2C3EE56C",
                                             "restURL": "CommunicationType",
                                             "displayField": "primaryDisplay",
                                             "valueField": "primaryKey",
                                             "store": {
                                                  "data": [],
                                                  "model": "Buzzor.singx.shared.singx.model.contacts.CommunicationTypeModel"
                                             },
                                             "forceSelection": true
                                        }, {
                                             "name": "commData",
                                             "itemId": "commData",
                                             "xtype": "textfield",
                                             "customWidgetType": "vdTextfield",
                                             "displayName": "Communication Data",
                                             "margin": "5 5 5 5",
                                             "fieldLabel": "Communication Data<font color='red'> *<\/font>",
                                             "allowBlank": false,
                                             "fieldId": "C9434412-E07E-45FA-8B57-FE43C963CCA9",
                                             "minLength": "0",
                                             "errorMessage": "please enter communication details"
                                        }]
                                   }]
                              }, {
                                   "columnWidth": 1,
                                   "xtype": "button",
                                   "customWidgetType": "vdButton",
                                   "maxWidth": 242,
                                   "text": "Add CommunicationData",
                                   "handler": "addCommunicationData"
                              }, {
                                   "xtype": "grid",
                                   "customWidgetType": "vdGrid",
                                   "title": "CommunicationData",
                                   "columnWidth": 1,
                                   "itemId": "CommunicationDataGrid",
                                   "fieldLabel": "List",
                                   "bindLevel": "coreContacts.communicationData",
                                   "listeners": {
                                        "select": "onCommunicationDataGridItemClick"
                                   },
                                   "store": {
                                        "fields": [],
                                        "data": []
                                   },
                                   "columns": [{
                                        "header": "commType",
                                        "text": "commType",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "commDataId",
                                        "hidden": true,
                                        "flex": 1
                                   }, {
                                        "header": "Communication Group",
                                        "text": "Communication Group",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "commGroupId",
                                        "renderer": "renderFormValue",
                                        "flex": 1
                                   }, {
                                        "header": "Communication Type",
                                        "text": "Communication Type",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "commType",
                                        "renderer": "renderFormValue",
                                        "flex": 1
                                   }, {
                                        "header": "Communication Data",
                                        "text": "Communication Data",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "commData",
                                        "flex": 1
                                   }, {
                                        "header": "createdBy",
                                        "text": "createdBy",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "createdBy",
                                        "hidden": true,
                                        "flex": 1
                                   }, {
                                        "header": "createdDate",
                                        "text": "createdDate",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "createdDate",
                                        "hidden": true,
                                        "flex": 1
                                   }, {
                                        "header": "updatedBy",
                                        "text": "updatedBy",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "updatedBy",
                                        "hidden": true,
                                        "flex": 1
                                   }, {
                                        "header": "updatedDate",
                                        "text": "updatedDate",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "updatedDate",
                                        "hidden": true,
                                        "flex": 1
                                   }, {
                                        "header": "versionId",
                                        "text": "versionId",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "versionId",
                                        "hidden": true,
                                        "flex": 1
                                   }, {
                                        "header": "activeStatus",
                                        "text": "activeStatus",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "activeStatus",
                                        "hidden": true,
                                        "flex": 1
                                   }, {
                                        "header": "txnAccessCode",
                                        "text": "txnAccessCode",
                                        "customWidgetType": "vdGridColumn",
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
                                             "handler": "onDeleteActionColumnClick"
                                        }]
                                   }]
                              }],
                              "customWidgetType": "vdCard"
                         }, {
                              "xtype": "form",
                              "displayName": "Address",
                              "title": "Address",
                              "name": "Address",
                              "itemId": "AddressForm",
                              "bodyPadding": 10,
                              "items": [{
                                   "xtype": "form",
                                   "itemId": "form2",
                                   "customWidgetType": "vdAnchorLayout",
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
                                             "name": "addressTypeId",
                                             "itemId": "addressTypeId",
                                             "xtype": "combo",
                                             "customWidgetType": "vdCombo",
                                             "displayName": "Address Type",
                                             "margin": "5 5 5 5",
                                             "fieldLabel": "Address Type<font color='red'> *<\/font>",
                                             "allowBlank": false,
                                             "fieldId": "6F366B04-0934-4A02-88AD-B285C464DB62",
                                             "errorMessage": "Please enter valid Address type",
                                             "restURL": "AddressType",
                                             "displayField": "primaryDisplay",
                                             "valueField": "primaryKey",
                                             "store": {
                                                  "data": [],
                                                  "model": "Buzzor.singx.shared.singx.model.location.AddressTypeModel"
                                             },
                                             "forceSelection": true
                                        }, {
                                             "name": "addressLabel",
                                             "itemId": "addressLabel",
                                             "xtype": "textfield",
                                             "customWidgetType": "vdTextfield",
                                             "displayName": "Address Label",
                                             "margin": "5 5 5 5",
                                             "fieldLabel": "Address Label",
                                             "fieldId": "A4F38F84-D7AE-4B89-BD87-82DC52FA5C9A",
                                             "minLength": "0",
                                             "maxLength": "11"
                                        }, {
                                             "name": "address1",
                                             "itemId": "address1",
                                             "xtype": "textareafield",
                                             "customWidgetType": "vdTextareafield",
                                             "displayName": "Address1",
                                             "margin": "5 5 5 5",
                                             "fieldLabel": "Address1",
                                             "fieldId": "78CA6C61-6D27-438D-87D1-13A8B6827D3D"
                                        }, {
                                             "name": "address2",
                                             "itemId": "address2",
                                             "xtype": "textareafield",
                                             "customWidgetType": "vdTextareafield",
                                             "displayName": "Address2",
                                             "margin": "5 5 5 5",
                                             "fieldLabel": "Address2",
                                             "fieldId": "906C537D-6E10-43EF-BEF5-8E48BA31DB59"
                                        }, {
                                             "name": "address3",
                                             "itemId": "address3",
                                             "xtype": "textareafield",
                                             "customWidgetType": "vdTextareafield",
                                             "displayName": "Address3",
                                             "margin": "5 5 5 5",
                                             "fieldLabel": "Address3",
                                             "fieldId": "D2514C9E-A274-4616-B48C-C85D0F87EFDC"
                                        }, {
                                             "name": "countryId",
                                             "itemId": "countryId",
                                             "xtype": "combo",
                                             "customWidgetType": "vdCombo",
                                             "displayName": "Country",
                                             "margin": "5 5 5 5",
                                             "fieldLabel": "Country<font color='red'> *<\/font>",
                                             "allowBlank": false,
                                             "fieldId": "3DA199B8-F3EC-411E-BECF-BC3537D4D78B",
                                             "errorMessage": "Please enter Country",
                                             "restURL": "Country",
                                             "displayField": "primaryDisplay",
                                             "valueField": "primaryKey",
                                             "store": {
                                                  "data": [],
                                                  "model": "Buzzor.singx.shared.singx.model.location.CountryModel"
                                             },
                                             "forceSelection": true,
                                             "listeners": {
                                                  "change": "onCountryIdChange"
                                             }
                                        }, {
                                             "name": "stateId",
                                             "itemId": "stateId",
                                             "xtype": "combo",
                                             "customWidgetType": "vdCombo",
                                             "displayName": "State",
                                             "margin": "5 5 5 5",
                                             "fieldLabel": "State<font color='red'> *<\/font>",
                                             "allowBlank": false,
                                             "fieldId": "D4F26D5A-F7C3-40E8-BF15-C7D9AA4C37C5",
                                             "errorMessage": "Please enter State",
                                             "restURL": "State",
                                             "displayField": "primaryDisplay",
                                             "valueField": "primaryKey",
                                             "store": {
                                                  "data": [],
                                                  "model": "Buzzor.singx.shared.singx.model.location.StateModel"
                                             },
                                             "forceSelection": true,
                                             "listeners": {
                                                  "change": "onStateIdChange"
                                             }
                                        }, {
                                             "name": "cityId",
                                             "itemId": "cityId",
                                             "xtype": "combo",
                                             "customWidgetType": "vdCombo",
                                             "displayName": "City",
                                             "margin": "5 5 5 5",
                                             "fieldLabel": "City<font color='red'> *<\/font>",
                                             "allowBlank": false,
                                             "fieldId": "97FD7570-510D-4D4B-9A49-A6A0DB04312A",
                                             "errorMessage": "Please enter City",
                                             "restURL": "City",
                                             "displayField": "primaryDisplay",
                                             "valueField": "primaryKey",
                                             "store": {
                                                  "data": [],
                                                  "model": "Buzzor.singx.shared.singx.model.location.CityModel"
                                             },
                                             "forceSelection": true
                                        }, {
                                             "name": "zipcode",
                                             "itemId": "zipcode",
                                             "xtype": "textfield",
                                             "customWidgetType": "vdTextfield",
                                             "displayName": "Postal Code",
                                             "margin": "5 5 5 5",
                                             "fieldLabel": "Postal Code<font color='red'> *<\/font>",
                                             "allowBlank": false,
                                             "fieldId": "077AC8C5-CDCE-4E76-8675-366BB02B1D1A",
                                             "minLength": "0",
                                             "maxLength": "6",
                                             "errorMessage": "Please enter postal code"
                                        }, {
                                             "name": "latitude",
                                             "itemId": "latitude",
                                             "xtype": "textfield",
                                             "customWidgetType": "vdTextfield",
                                             "displayName": "Latitude",
                                             "margin": "5 5 5 5",
                                             "fieldLabel": "Latitude",
                                             "fieldId": "423326C3-99C6-46D6-A81F-82C3ACB15089",
                                             "minLength": "0",
                                             "maxLength": "64"
                                        }, {
                                             "name": "longitude",
                                             "itemId": "longitude",
                                             "xtype": "textfield",
                                             "customWidgetType": "vdTextfield",
                                             "displayName": "Longitude",
                                             "margin": "5 5 5 5",
                                             "fieldLabel": "Longitude",
                                             "fieldId": "F0993227-475F-493B-935D-961E783D105A",
                                             "minLength": "0",
                                             "maxLength": "64"
                                        }]
                                   }]
                              }, {
                                   "columnWidth": 1,
                                   "xtype": "button",
                                   "customWidgetType": "vdButton",
                                   "maxWidth": 132,
                                   "text": "Add Address",
                                   "handler": "addAddress"
                              }, {
                                   "xtype": "grid",
                                   "customWidgetType": "vdGrid",
                                   "title": "Address",
                                   "columnWidth": 1,
                                   "itemId": "AddressGrid",
                                   "fieldLabel": "List",
                                   "bindLevel": "coreContacts.address",
                                   "listeners": {
                                        "select": "onAddressGridItemClick"
                                   },
                                   "store": {
                                        "fields": [],
                                        "data": []
                                   },
                                   "columns": [{
                                        "header": "Address Id",
                                        "text": "Address Id",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "addressId",
                                        "hidden": true,
                                        "flex": 1
                                   }, {
                                        "header": "Address Type",
                                        "text": "Address Type",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "addressTypeId",
                                        "renderer": "renderFormValue",
                                        "flex": 1
                                   }, {
                                        "header": "Address Label",
                                        "text": "Address Label",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "addressLabel",
                                        "flex": 1
                                   }, {
                                        "header": "Address1",
                                        "text": "Address1",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "address1",
                                        "flex": 1
                                   }, {
                                        "header": "Address2",
                                        "text": "Address2",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "address2",
                                        "flex": 1
                                   }, {
                                        "header": "Address3",
                                        "text": "Address3",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "address3",
                                        "flex": 1
                                   }, {
                                        "header": "Country",
                                        "text": "Country",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "countryId",
                                        "renderer": "renderFormValue",
                                        "flex": 1
                                   }, {
                                        "header": "State",
                                        "text": "State",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "stateId",
                                        "renderer": "renderFormValue",
                                        "flex": 1
                                   }, {
                                        "header": "City",
                                        "text": "City",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "cityId",
                                        "renderer": "renderFormValue",
                                        "flex": 1
                                   }, {
                                        "header": "Postal Code",
                                        "text": "Postal Code",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "zipcode",
                                        "flex": 1
                                   }, {
                                        "header": "Latitude",
                                        "text": "Latitude",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "latitude",
                                        "flex": 1
                                   }, {
                                        "header": "Longitude",
                                        "text": "Longitude",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "longitude",
                                        "flex": 1
                                   }, {
                                        "header": "createdBy",
                                        "text": "createdBy",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "createdBy",
                                        "hidden": true,
                                        "flex": 1
                                   }, {
                                        "header": "createdDate",
                                        "text": "createdDate",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "createdDate",
                                        "hidden": true,
                                        "flex": 1
                                   }, {
                                        "header": "updatedBy",
                                        "text": "updatedBy",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "updatedBy",
                                        "hidden": true,
                                        "flex": 1
                                   }, {
                                        "header": "updatedDate",
                                        "text": "updatedDate",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "updatedDate",
                                        "hidden": true,
                                        "flex": 1
                                   }, {
                                        "header": "versionId",
                                        "text": "versionId",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "versionId",
                                        "hidden": true,
                                        "flex": 1
                                   }, {
                                        "header": "activeStatus",
                                        "text": "activeStatus",
                                        "customWidgetType": "vdGridColumn",
                                        "dataIndex": "activeStatus",
                                        "hidden": true,
                                        "flex": 1
                                   }, {
                                        "header": "txnAccessCode",
                                        "text": "txnAccessCode",
                                        "customWidgetType": "vdGridColumn",
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
                                             "handler": "onDeleteActionColumnClick"
                                        }]
                                   }]
                              }],
                              "customWidgetType": "vdCard"
                         }],
                         "customWidgetType": "vdCard"
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
                    "viewModel": "AgentViewModel",
                    "listeners": {},
                    "extend": "Ext.form.Panel",
                    "region": "center",
                    "customWidgetType": "vdCardLayout"
               }, {
                    "xtype": "grid",
                    "customWidgetType": "vdGrid",
                    "displayName": "agent",
                    "title": "Details Grid",
                    "name": "AgentGrid",
                    "itemId": "AgentGrid",
                    "store": [],
                    "bodyPadding": 10,
                    "requires": [],
                    "columns": [{
                         "header": "Agent ID",
                         "dataIndex": "agentId",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "primaryKey",
                         "dataIndex": "primaryKey",
                         "hidden": true
                    }, {
                         "header": "Agent Code",
                         "dataIndex": "agentCode",
                         "flex": 1
                    }, {
                         "header": "Agent Name",
                         "dataIndex": "agentName",
                         "flex": 1
                    }, {
                         "header": "Agency Name",
                         "dataIndex": "agencyName",
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
               "displayName": "agent",
               "name": "Agent",
               "itemId": "AgentForm",
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
                              "name": "agentCode",
                              "itemId": "agentCode",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Agent Code",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Agent Code<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "7A3ECF18-9AF4-4A5D-8710-C088F1572F9A",
                              "minLength": "0",
                              "maxLength": "50",
                              "bind": "{agentCode}"
                         }, {
                              "name": "agentName",
                              "itemId": "agentName",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Agent Name",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Agent Name<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "FA80DCEB-9B14-46FC-BF68-D6B3690B0593",
                              "minLength": "0",
                              "maxLength": "50",
                              "bind": "{agentName}"
                         }, {
                              "name": "agencyName",
                              "itemId": "agencyName",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Agency Name",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Agency Name<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "4482767A-5059-427C-9726-49237BB17988",
                              "minLength": "0",
                              "maxLength": "50",
                              "bind": "{agencyName}"
                         }, {
                              "name": "countryId",
                              "itemId": "countryId",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "Country",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Country<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "CCB7881D-EA90-40E1-8CE7-F1C2A56ACBD4",
                              "restURL": "Country",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "store": {
                                   "data": [],
                                   "model": "Buzzor.singx.shared.singx.model.location.CountryModel"
                              },
                              "forceSelection": true,
                              "bind": "{countryId}"
                         }]
                    }]
               }, {
                    "xtype": "form",
                    "displayName": "Core Contacts",
                    "title": "Core Contacts",
                    "name": "CoreContacts",
                    "itemId": "CoreContactsForm",
                    "bodyPadding": 10,
                    "items": [{
                         "xtype": "form",
                         "itemId": "form1",
                         "customWidgetType": "vdAnchorLayout",
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
                                   "name": "titleId",
                                   "itemId": "titleId",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Title",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Title<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "719FA0FC-B0F1-4F4A-89DD-F5BE010E3FEF",
                                   "errorMessage": "Please enter title",
                                   "restURL": "Title",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "store": {
                                        "data": [],
                                        "model": "Buzzor.singx.shared.singx.model.contacts.TitleModel"
                                   },
                                   "forceSelection": true,
                                   "bind": "{coreContacts.titleId}"
                              }, {
                                   "name": "firstName",
                                   "itemId": "firstName",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "First Name",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "First Name<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "D7F9BE92-3A95-4E68-A688-07421A550733",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "errorMessage": "Please enter First Name",
                                   "bind": "{coreContacts.firstName}"
                              }, {
                                   "name": "middleName",
                                   "itemId": "middleName",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Middle Name",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Middle Name",
                                   "fieldId": "5E5C3AFE-8A65-4833-BEB1-4A47D4D77305",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "bind": "{coreContacts.middleName}"
                              }, {
                                   "name": "lastName",
                                   "itemId": "lastName",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Last Name",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Last Name<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "22DEF495-D225-424E-8A97-30C1A385584B",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "errorMessage": "Please enter Last Name",
                                   "bind": "{coreContacts.lastName}"
                              }, {
                                   "name": "nativeLanguageCode",
                                   "itemId": "nativeLanguageCode",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Native Language Code",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Native Language Code",
                                   "fieldId": "F70B3B7B-4C1A-4F7C-B5C8-E235CAF05371",
                                   "errorMessage": "Please enter gender",
                                   "restURL": "Language",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "store": {
                                        "data": [],
                                        "model": "Buzzor.singx.shared.singx.model.location.LanguageModel"
                                   },
                                   "bind": "{coreContacts.nativeLanguageCode}"
                              }, {
                                   "name": "nativeTitle",
                                   "itemId": "nativeTitle",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Native Title",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Native Title",
                                   "fieldId": "1B44B982-0934-4F96-8DAB-D2063F031D07",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "bind": "{coreContacts.nativeTitle}"
                              }, {
                                   "name": "nativeFirstName",
                                   "itemId": "nativeFirstName",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Native First Name",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Native First Name",
                                   "fieldId": "6D633638-DC31-413B-B280-343E1315AC5A",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "bind": "{coreContacts.nativeFirstName}"
                              }, {
                                   "name": "nativeMiddleName",
                                   "itemId": "nativeMiddleName",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Native Middle Name",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Native Middle Name",
                                   "fieldId": "9A473BEC-DD4D-435B-9304-8E55A3BF2D26",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "bind": "{coreContacts.nativeMiddleName}"
                              }, {
                                   "name": "nativeLastName",
                                   "itemId": "nativeLastName",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Native LastName",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Native LastName",
                                   "fieldId": "519BFF44-8015-4E66-869E-B6E5894D8C93",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "bind": "{coreContacts.nativeLastName}"
                              }, {
                                   "name": "genderId",
                                   "itemId": "genderId",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Gender",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Gender<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "ABFDD239-6FF9-41D2-AD1F-E4C4CD235711",
                                   "errorMessage": "Please enter gender",
                                   "restURL": "Gender",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "store": {
                                        "data": [],
                                        "model": "Buzzor.singx.shared.singx.model.contacts.GenderModel"
                                   },
                                   "forceSelection": true,
                                   "bind": "{coreContacts.genderId}"
                              }, {
                                   "name": "dateofbirth",
                                   "itemId": "dateofbirth",
                                   "xtype": "customDateField",
                                   "customWidgetType": "vdDatefield",
                                   "displayName": "DOB",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "DOB",
                                   "fieldId": "A435A62B-16FC-4C2D-B9C5-D566AD5A83A4",
                                   "errorMessage": "Please enter Date of birth",
                                   "bind": "{coreContacts.dateofbirth}"
                              }, {
                                   "name": "age",
                                   "itemId": "age",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "Age",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Age",
                                   "fieldId": "BBF51EC8-11A5-4FFD-BE92-E83E6FEB1257",
                                   "minValue": "0",
                                   "maxValue": "125",
                                   "bind": "{coreContacts.age}"
                              }, {
                                   "name": "approximateDOB",
                                   "itemId": "approximateDOB",
                                   "xtype": "customDateField",
                                   "customWidgetType": "vdDatefield",
                                   "displayName": "Approx DOB",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Approx DOB",
                                   "fieldId": "4FA9D708-CB86-4C34-BEB7-F2D6D725BC24",
                                   "bind": "{coreContacts.approximateDOB}"
                              }, {
                                   "name": "emailId",
                                   "itemId": "emailId",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Email ID",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Email ID<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "B3E7D367-FF83-40DB-92A1-056C5ACCE146",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "errorMessage": "Please enter Email ID",
                                   "bind": "{coreContacts.emailId}"
                              }, {
                                   "name": "phoneNumber",
                                   "itemId": "phoneNumber",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Phone Number",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Phone Number<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "329F2513-9644-4447-AD08-8E698CF0EAAA",
                                   "minLength": "0",
                                   "maxLength": "20",
                                   "errorMessage": "Please enter Phone Number",
                                   "bind": "{coreContacts.phoneNumber}"
                              }, {
                                   "name": "timeZone",
                                   "itemId": "timeZone",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Time Zone",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Time Zone",
                                   "fieldId": "D9DB1D31-91E3-432D-BCDC-A4B713908D75",
                                   "errorMessage": "Please enter time zone",
                                   "restURL": "Timezone",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "store": {
                                        "data": [],
                                        "model": "Buzzor.singx.shared.singx.model.location.TimezoneModel"
                                   },
                                   "bind": "{coreContacts.timeZone}"
                              }]
                         }]
                    }, {
                         "xtype": "form",
                         "displayName": "Communication Data",
                         "title": "Communication Data",
                         "name": "CommunicationData",
                         "itemId": "CommunicationDataForm",
                         "bodyPadding": 10,
                         "items": [{
                              "xtype": "form",
                              "itemId": "form2",
                              "customWidgetType": "vdAnchorLayout",
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
                                        "name": "commGroupId",
                                        "itemId": "commGroupId",
                                        "xtype": "combo",
                                        "customWidgetType": "vdCombo",
                                        "displayName": "Communication Group",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Communication Group<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "3CF3A9BB-76BB-4FE5-B9C8-FC7F3AA6895E",
                                        "restURL": "CommunicationGroup",
                                        "displayField": "primaryDisplay",
                                        "valueField": "primaryKey",
                                        "store": {
                                             "data": [],
                                             "model": "Buzzor.singx.shared.singx.model.contacts.CommunicationGroupModel"
                                        },
                                        "forceSelection": true,
                                        "listeners": {
                                             "change": "onCommGroupIdChange"
                                        }
                                   }, {
                                        "name": "commType",
                                        "itemId": "commType",
                                        "xtype": "combo",
                                        "customWidgetType": "vdCombo",
                                        "displayName": "Communication Type",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Communication Type<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "8F2A56DA-C7FD-4C2E-B4E1-C22B2C3EE56C",
                                        "restURL": "CommunicationType",
                                        "displayField": "primaryDisplay",
                                        "valueField": "primaryKey",
                                        "store": {
                                             "data": [],
                                             "model": "Buzzor.singx.shared.singx.model.contacts.CommunicationTypeModel"
                                        },
                                        "forceSelection": true
                                   }, {
                                        "name": "commData",
                                        "itemId": "commData",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Communication Data",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Communication Data<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "C9434412-E07E-45FA-8B57-FE43C963CCA9",
                                        "minLength": "0",
                                        "errorMessage": "please enter communication details"
                                   }]
                              }]
                         }, {
                              "columnWidth": 1,
                              "xtype": "button",
                              "customWidgetType": "vdButton",
                              "maxWidth": 242,
                              "text": "Add CommunicationData",
                              "handler": "addCommunicationData"
                         }, {
                              "xtype": "grid",
                              "customWidgetType": "vdGrid",
                              "title": "CommunicationData",
                              "columnWidth": 1,
                              "itemId": "CommunicationDataGrid",
                              "fieldLabel": "List",
                              "bindLevel": "coreContacts.communicationData",
                              "listeners": {
                                   "select": "onCommunicationDataGridItemClick"
                              },
                              "store": {
                                   "fields": [],
                                   "data": []
                              },
                              "columns": [{
                                   "header": "commType",
                                   "text": "commType",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "commDataId",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "Communication Group",
                                   "text": "Communication Group",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "commGroupId",
                                   "renderer": "renderFormValue",
                                   "flex": 1
                              }, {
                                   "header": "Communication Type",
                                   "text": "Communication Type",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "commType",
                                   "renderer": "renderFormValue",
                                   "flex": 1
                              }, {
                                   "header": "Communication Data",
                                   "text": "Communication Data",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "commData",
                                   "flex": 1
                              }, {
                                   "header": "createdBy",
                                   "text": "createdBy",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "createdBy",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "createdDate",
                                   "text": "createdDate",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "createdDate",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "updatedBy",
                                   "text": "updatedBy",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "updatedBy",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "updatedDate",
                                   "text": "updatedDate",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "updatedDate",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "versionId",
                                   "text": "versionId",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "versionId",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "activeStatus",
                                   "text": "activeStatus",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "activeStatus",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "txnAccessCode",
                                   "text": "txnAccessCode",
                                   "customWidgetType": "vdGridColumn",
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
                                        "handler": "onDeleteActionColumnClick"
                                   }]
                              }]
                         }],
                         "customWidgetType": "vdCard"
                    }, {
                         "xtype": "form",
                         "displayName": "Address",
                         "title": "Address",
                         "name": "Address",
                         "itemId": "AddressForm",
                         "bodyPadding": 10,
                         "items": [{
                              "xtype": "form",
                              "itemId": "form2",
                              "customWidgetType": "vdAnchorLayout",
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
                                        "name": "addressTypeId",
                                        "itemId": "addressTypeId",
                                        "xtype": "combo",
                                        "customWidgetType": "vdCombo",
                                        "displayName": "Address Type",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Address Type<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "6F366B04-0934-4A02-88AD-B285C464DB62",
                                        "errorMessage": "Please enter valid Address type",
                                        "restURL": "AddressType",
                                        "displayField": "primaryDisplay",
                                        "valueField": "primaryKey",
                                        "store": {
                                             "data": [],
                                             "model": "Buzzor.singx.shared.singx.model.location.AddressTypeModel"
                                        },
                                        "forceSelection": true
                                   }, {
                                        "name": "addressLabel",
                                        "itemId": "addressLabel",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Address Label",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Address Label",
                                        "fieldId": "A4F38F84-D7AE-4B89-BD87-82DC52FA5C9A",
                                        "minLength": "0",
                                        "maxLength": "11"
                                   }, {
                                        "name": "address1",
                                        "itemId": "address1",
                                        "xtype": "textareafield",
                                        "customWidgetType": "vdTextareafield",
                                        "displayName": "Address1",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Address1",
                                        "fieldId": "78CA6C61-6D27-438D-87D1-13A8B6827D3D"
                                   }, {
                                        "name": "address2",
                                        "itemId": "address2",
                                        "xtype": "textareafield",
                                        "customWidgetType": "vdTextareafield",
                                        "displayName": "Address2",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Address2",
                                        "fieldId": "906C537D-6E10-43EF-BEF5-8E48BA31DB59"
                                   }, {
                                        "name": "address3",
                                        "itemId": "address3",
                                        "xtype": "textareafield",
                                        "customWidgetType": "vdTextareafield",
                                        "displayName": "Address3",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Address3",
                                        "fieldId": "D2514C9E-A274-4616-B48C-C85D0F87EFDC"
                                   }, {
                                        "name": "countryId",
                                        "itemId": "countryId",
                                        "xtype": "combo",
                                        "customWidgetType": "vdCombo",
                                        "displayName": "Country",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Country<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "3DA199B8-F3EC-411E-BECF-BC3537D4D78B",
                                        "errorMessage": "Please enter Country",
                                        "restURL": "Country",
                                        "displayField": "primaryDisplay",
                                        "valueField": "primaryKey",
                                        "store": {
                                             "data": [],
                                             "model": "Buzzor.singx.shared.singx.model.location.CountryModel"
                                        },
                                        "forceSelection": true,
                                        "listeners": {
                                             "change": "onCountryIdChange"
                                        }
                                   }, {
                                        "name": "stateId",
                                        "itemId": "stateId",
                                        "xtype": "combo",
                                        "customWidgetType": "vdCombo",
                                        "displayName": "State",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "State<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "D4F26D5A-F7C3-40E8-BF15-C7D9AA4C37C5",
                                        "errorMessage": "Please enter State",
                                        "restURL": "State",
                                        "displayField": "primaryDisplay",
                                        "valueField": "primaryKey",
                                        "store": {
                                             "data": [],
                                             "model": "Buzzor.singx.shared.singx.model.location.StateModel"
                                        },
                                        "forceSelection": true,
                                        "listeners": {
                                             "change": "onStateIdChange"
                                        }
                                   }, {
                                        "name": "cityId",
                                        "itemId": "cityId",
                                        "xtype": "combo",
                                        "customWidgetType": "vdCombo",
                                        "displayName": "City",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "City<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "97FD7570-510D-4D4B-9A49-A6A0DB04312A",
                                        "errorMessage": "Please enter City",
                                        "restURL": "City",
                                        "displayField": "primaryDisplay",
                                        "valueField": "primaryKey",
                                        "store": {
                                             "data": [],
                                             "model": "Buzzor.singx.shared.singx.model.location.CityModel"
                                        },
                                        "forceSelection": true
                                   }, {
                                        "name": "zipcode",
                                        "itemId": "zipcode",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Postal Code",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Postal Code<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "077AC8C5-CDCE-4E76-8675-366BB02B1D1A",
                                        "minLength": "0",
                                        "maxLength": "6",
                                        "errorMessage": "Please enter postal code"
                                   }, {
                                        "name": "latitude",
                                        "itemId": "latitude",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Latitude",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Latitude",
                                        "fieldId": "423326C3-99C6-46D6-A81F-82C3ACB15089",
                                        "minLength": "0",
                                        "maxLength": "64"
                                   }, {
                                        "name": "longitude",
                                        "itemId": "longitude",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Longitude",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Longitude",
                                        "fieldId": "F0993227-475F-493B-935D-961E783D105A",
                                        "minLength": "0",
                                        "maxLength": "64"
                                   }]
                              }]
                         }, {
                              "columnWidth": 1,
                              "xtype": "button",
                              "customWidgetType": "vdButton",
                              "maxWidth": 132,
                              "text": "Add Address",
                              "handler": "addAddress"
                         }, {
                              "xtype": "grid",
                              "customWidgetType": "vdGrid",
                              "title": "Address",
                              "columnWidth": 1,
                              "itemId": "AddressGrid",
                              "fieldLabel": "List",
                              "bindLevel": "coreContacts.address",
                              "listeners": {
                                   "select": "onAddressGridItemClick"
                              },
                              "store": {
                                   "fields": [],
                                   "data": []
                              },
                              "columns": [{
                                   "header": "Address Id",
                                   "text": "Address Id",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "addressId",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "Address Type",
                                   "text": "Address Type",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "addressTypeId",
                                   "renderer": "renderFormValue",
                                   "flex": 1
                              }, {
                                   "header": "Address Label",
                                   "text": "Address Label",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "addressLabel",
                                   "flex": 1
                              }, {
                                   "header": "Address1",
                                   "text": "Address1",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "address1",
                                   "flex": 1
                              }, {
                                   "header": "Address2",
                                   "text": "Address2",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "address2",
                                   "flex": 1
                              }, {
                                   "header": "Address3",
                                   "text": "Address3",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "address3",
                                   "flex": 1
                              }, {
                                   "header": "Country",
                                   "text": "Country",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "countryId",
                                   "renderer": "renderFormValue",
                                   "flex": 1
                              }, {
                                   "header": "State",
                                   "text": "State",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "stateId",
                                   "renderer": "renderFormValue",
                                   "flex": 1
                              }, {
                                   "header": "City",
                                   "text": "City",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "cityId",
                                   "renderer": "renderFormValue",
                                   "flex": 1
                              }, {
                                   "header": "Postal Code",
                                   "text": "Postal Code",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "zipcode",
                                   "flex": 1
                              }, {
                                   "header": "Latitude",
                                   "text": "Latitude",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "latitude",
                                   "flex": 1
                              }, {
                                   "header": "Longitude",
                                   "text": "Longitude",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "longitude",
                                   "flex": 1
                              }, {
                                   "header": "createdBy",
                                   "text": "createdBy",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "createdBy",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "createdDate",
                                   "text": "createdDate",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "createdDate",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "updatedBy",
                                   "text": "updatedBy",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "updatedBy",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "updatedDate",
                                   "text": "updatedDate",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "updatedDate",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "versionId",
                                   "text": "versionId",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "versionId",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "activeStatus",
                                   "text": "activeStatus",
                                   "customWidgetType": "vdGridColumn",
                                   "dataIndex": "activeStatus",
                                   "hidden": true,
                                   "flex": 1
                              }, {
                                   "header": "txnAccessCode",
                                   "text": "txnAccessCode",
                                   "customWidgetType": "vdGridColumn",
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
                                        "handler": "onDeleteActionColumnClick"
                                   }]
                              }]
                         }],
                         "customWidgetType": "vdCard"
                    }],
                    "customWidgetType": "vdCard"
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
               "viewModel": "AgentViewModel",
               "listeners": {},
               "extend": "Ext.form.Panel",
               "region": "center",
               "customWidgetType": "vdCardLayout"
          }]
     }]
});