Ext.define('Buzzor.singx.singx.view.backoffice.singx.CustomerContaDTO', {
     "parentId": "03015c26-50e8-4ef2-8420-8c661d3d0930",
     "customId": "8fc16bd6-b7ec-469b-abe6-ba0211422210",
     "uniqueId": "a5e8cc78-6551-4e0b-863c-10a90c387a51",
     "title": "",
     "name": "CustomerContaDTO",
     "xtype": "CustomerContaDTO",
     "extend": "Ext.form.Panel",
     "customWidgetType": "vdColumnLayout",
     "itemId": "CustomerContaDTO",
     "bodyPadding": 10,
     "layout": "column",
     "defaults": {
          "columnWidth": 0.5,
          "labelAlign": "left",
          "labelWidth": 200,
          "margin": "5 5 5 5"
     },
     "autoScroll": true,
     "requires": ["Buzzor.singx.singx.viewmodel.backoffice.singx.CustomerContaDTOViewModel", "Buzzor.singx.singx.controller.backoffice.singx.CustomerContaDTOController", "Buzzor.singx.singx.model.backoffice.singx.CustomerContaDTOModel"],
     "controller": "CustomerContaDTOController",
     "viewModel": "CustomerContaDTOViewModel",
     "items": [{
          "parentId": "8fc16bd6-b7ec-469b-abe6-ba0211422210",
          "customId": "4af850d5-fcaa-49e7-bc01-cfa22052cbe7",
          "uniqueId": "c045f3b1-b10f-4c33-b055-993388e96d9b",
          "name": "customerId",
          "itemId": "customerId",
          "xtype": "textfield",
          "customWidgetType": "vdTextfield",
          "fieldLabel": "customerId",
          "allowBlank": false,
          "bind": "{customerId}",
          "errorMessage": ""
     }, {
          "parentId": "8fc16bd6-b7ec-469b-abe6-ba0211422210",
          "customId": "7be3430f-fd12-4c73-9cda-9d44fb54a130",
          "uniqueId": "13d2e66e-670b-48e2-8dae-e3b70b6f5464",
          "name": "countryId",
          "itemId": "countryId",
          "xtype": "textfield",
          "customWidgetType": "vdTextfield",
          "fieldLabel": "countryId",
          "allowBlank": false,
          "bind": "{countryId}",
          "errorMessage": ""
     }, {
          "parentId": "8fc16bd6-b7ec-469b-abe6-ba0211422210",
          "customId": "7cedbff6-8abe-48e0-8ebe-3e9b0ffbfc55",
          "uniqueId": "3776e58e-4065-4274-9dae-42823747c0d6",
          "name": "customerTypeId",
          "itemId": "customerTypeId",
          "xtype": "textfield",
          "customWidgetType": "vdTextfield",
          "fieldLabel": "customerTypeId",
          "allowBlank": false,
          "bind": "{customerTypeId}",
          "errorMessage": ""
     }, {
          "parentId": "8fc16bd6-b7ec-469b-abe6-ba0211422210",
          "customId": "de968f41-affe-407e-ac24-3956f3fecef1",
          "uniqueId": "b0a5af5a-07d0-4882-993c-2b4e4aa7f483",
          "name": "emailId",
          "itemId": "emailId",
          "xtype": "textfield",
          "customWidgetType": "vdTextfield",
          "fieldLabel": "emailId",
          "allowBlank": false,
          "bind": "{emailId}",
          "errorMessage": ""
     }, {
          "parentId": "8fc16bd6-b7ec-469b-abe6-ba0211422210",
          "customId": "a8227c42-6707-4eb0-9cd2-8503bd8712c1",
          "uniqueId": "26fbe407-6072-4013-ab95-22998634662f",
          "name": "residenceTypeId",
          "itemId": "residenceTypeId",
          "xtype": "textfield",
          "customWidgetType": "vdTextfield",
          "fieldLabel": "residenceTypeId",
          "allowBlank": false,
          "bind": "{residenceTypeId}",
          "errorMessage": ""
     }, {
          "parentId": "8fc16bd6-b7ec-469b-abe6-ba0211422210",
          "customId": "6dfab1d5-b9d4-4712-89d1-07c050d28b52",
          "uniqueId": "cde6f00b-9267-487b-9e59-fb29f3efacc8",
          "name": "nationalityId",
          "itemId": "nationalityId",
          "xtype": "textfield",
          "customWidgetType": "vdTextfield",
          "fieldLabel": "nationalityId",
          "allowBlank": false,
          "bind": "{nationalityId}",
          "errorMessage": ""
     }, {
          "parentId": "8fc16bd6-b7ec-469b-abe6-ba0211422210",
          "customId": "d92f5e7d-090b-4205-8f7f-5e858a517432",
          "uniqueId": "bf4c89f7-f49e-4923-807f-48e55b65afd8",
          "name": "documentId",
          "itemId": "documentId",
          "xtype": "textfield",
          "customWidgetType": "vdTextfield",
          "fieldLabel": "documentId",
          "allowBlank": false,
          "bind": "{documentId}",
          "errorMessage": ""
     }, {
          "parentId": "8fc16bd6-b7ec-469b-abe6-ba0211422210",
          "customId": "f3c663ae-1dca-467f-83e2-6fe4a28507dd",
          "uniqueId": "8ccbc4b1-24fe-406a-87bb-45553c25d2d6",
          "name": "idProofValue",
          "itemId": "idProofValue",
          "xtype": "textfield",
          "customWidgetType": "vdTextfield",
          "fieldLabel": "idProofValue",
          "allowBlank": false,
          "bind": "{idProofValue}",
          "errorMessage": ""
     }, {
          "parentId": "8fc16bd6-b7ec-469b-abe6-ba0211422210",
          "customId": "78672642-d112-4d96-b59a-7f2d9349866c",
          "uniqueId": "f99f88a7-b3aa-455f-ae68-550a6e307ec8",
          "name": "expiryDate",
          "itemId": "expiryDate",
          "xtype": "datefield",
          "customWidgetType": "vdDatefield",
          "fieldLabel": "expiryDate",
          "allowBlank": false,
          "bind": "{expiryDate}",
          "errorMessage": ""
     }, {
          "parentId": "8fc16bd6-b7ec-469b-abe6-ba0211422210",
          "customId": "ed95670d-687b-4845-9f5d-181e4774c84a",
          "uniqueId": "f1642a79-33d6-40a0-819b-188635bbd601",
          "name": "mapId",
          "itemId": "mapId",
          "xtype": "textfield",
          "customWidgetType": "vdTextfield",
          "fieldLabel": "mapId",
          "allowBlank": false,
          "bind": "{mapId}",
          "errorMessage": ""
     }, {
          "parentId": "8fc16bd6-b7ec-469b-abe6-ba0211422210",
          "customId": "629f3080-05ed-486b-a574-8d1f67321cf9",
          "uniqueId": "3a18b114-e233-42fd-bc20-db9d994bac34",
          "name": "companyTypeId",
          "itemId": "companyTypeId",
          "xtype": "textfield",
          "customWidgetType": "vdTextfield",
          "fieldLabel": "companyTypeId",
          "allowBlank": false,
          "bind": "{companyTypeId}",
          "errorMessage": ""
     }, {
          "parentId": "8fc16bd6-b7ec-469b-abe6-ba0211422210",
          "customId": "d1a0bc97-0651-46ad-933b-0fcf69bddb92",
          "uniqueId": "2478ecb5-1b6e-4e41-a60d-53103b8be554",
          "name": "companyCategoryId",
          "itemId": "companyCategoryId",
          "xtype": "textfield",
          "customWidgetType": "vdTextfield",
          "fieldLabel": "companyCategoryId",
          "allowBlank": false,
          "bind": "{companyCategoryId}",
          "errorMessage": ""
     }, {
          "parentId": "8fc16bd6-b7ec-469b-abe6-ba0211422210",
          "customId": "00fa0b22-b1d1-4fd6-8c4f-f815bb156435",
          "uniqueId": "33685f34-494c-4e69-92a0-99163d0fc4d2",
          "name": "companyName",
          "itemId": "companyName",
          "xtype": "textfield",
          "customWidgetType": "vdTextfield",
          "fieldLabel": "companyName",
          "allowBlank": false,
          "bind": "{companyName}",
          "errorMessage": ""
     }, {
          "parentId": "8fc16bd6-b7ec-469b-abe6-ba0211422210",
          "customId": "547c8dd8-1c88-4e44-a410-8851d919871b",
          "uniqueId": "1d1a3c0c-c3ee-45f6-8ea3-e66b4507ad9b",
          "name": "registrationNumber",
          "itemId": "registrationNumber",
          "xtype": "textfield",
          "customWidgetType": "vdTextfield",
          "fieldLabel": "registrationNumber",
          "allowBlank": false,
          "bind": "{registrationNumber}",
          "errorMessage": ""
     }, {
          "parentId": "8fc16bd6-b7ec-469b-abe6-ba0211422210",
          "customId": "36f8f49e-ab44-4521-bd32-86bc3ba792a6",
          "uniqueId": "d1d92871-82aa-46cd-90ff-cb019045a354",
          "name": "headOffice",
          "itemId": "headOffice",
          "xtype": "textfield",
          "customWidgetType": "vdTextfield",
          "fieldLabel": "headOffice",
          "allowBlank": false,
          "bind": "{headOffice}",
          "errorMessage": ""
     }, {
          "parentId": "8fc16bd6-b7ec-469b-abe6-ba0211422210",
          "customId": "9d264d4d-d409-4df3-91be-e5d75d0880c1",
          "uniqueId": "fceda0c4-3dd4-4b05-b914-680d2eefb99b",
          "name": "contactId",
          "itemId": "contactId",
          "xtype": "textfield",
          "customWidgetType": "vdTextfield",
          "fieldLabel": "contactId",
          "allowBlank": false,
          "bind": "{contactId}",
          "errorMessage": ""
     }, {
          "parentId": "8fc16bd6-b7ec-469b-abe6-ba0211422210",
          "customId": "16129b13-b51b-4b74-891f-ab36c8a8afab",
          "uniqueId": "b32ff132-0831-4038-a7aa-80c37632f5d2",
          "name": "phoneNumber",
          "itemId": "phoneNumber",
          "xtype": "numberfield",
          "customWidgetType": "vdNumberfield",
          "fieldLabel": "phoneNumber",
          "allowBlank": false,
          "bind": "{phoneNumber}",
          "errorMessage": ""
     }, {
          "parentId": "8fc16bd6-b7ec-469b-abe6-ba0211422210",
          "customId": "5540170c-8fa9-4dda-bfb0-7a23cce3e30f",
          "uniqueId": "731a33eb-f676-409c-be5a-d0293672ea3e",
          "name": "prefixId",
          "itemId": "prefixId",
          "xtype": "textfield",
          "customWidgetType": "vdTextfield",
          "fieldLabel": "prefixId",
          "allowBlank": false,
          "bind": "{prefixId}",
          "errorMessage": ""
     }, {
          "parentId": "8fc16bd6-b7ec-469b-abe6-ba0211422210",
          "customId": "6f9deb8c-3377-4377-8d5d-16ed184e60d3",
          "uniqueId": "2061b208-e7dd-40ec-9025-11d2787c5910",
          "name": "firstName",
          "itemId": "firstName",
          "xtype": "textfield",
          "customWidgetType": "vdTextfield",
          "fieldLabel": "firstName",
          "allowBlank": false,
          "bind": "{firstName}",
          "errorMessage": ""
     }, {
          "parentId": "8fc16bd6-b7ec-469b-abe6-ba0211422210",
          "customId": "5ec85704-26d5-4688-b044-d7ef35438f9a",
          "uniqueId": "4de57f64-0591-4108-a35c-6c81b9e17e2a",
          "name": "middleName",
          "itemId": "middleName",
          "xtype": "textfield",
          "customWidgetType": "vdTextfield",
          "fieldLabel": "middleName",
          "allowBlank": false,
          "bind": "{middleName}",
          "errorMessage": ""
     }, {
          "parentId": "8fc16bd6-b7ec-469b-abe6-ba0211422210",
          "customId": "195b4d64-8069-4e94-bc9c-b78063e3990c",
          "uniqueId": "529b7401-0305-4662-a6a3-19002e9e2e4c",
          "name": "lastName",
          "itemId": "lastName",
          "xtype": "textfield",
          "customWidgetType": "vdTextfield",
          "fieldLabel": "lastName",
          "allowBlank": false,
          "bind": "{lastName}",
          "errorMessage": ""
     }, {
          "parentId": "8fc16bd6-b7ec-469b-abe6-ba0211422210",
          "customId": "e984ce84-dedd-4d6d-bbd9-f41190280581",
          "uniqueId": "b4555a79-799c-4ae7-b4b8-a81e578095d9",
          "name": "genderId",
          "itemId": "genderId",
          "xtype": "textfield",
          "customWidgetType": "vdTextfield",
          "fieldLabel": "genderId",
          "allowBlank": false,
          "bind": "{genderId}",
          "errorMessage": ""
     }, {
          "parentId": "8fc16bd6-b7ec-469b-abe6-ba0211422210",
          "customId": "a9a9f0d1-21a2-4bfe-85ad-4338bfb47a5b",
          "uniqueId": "0cbe5609-3635-456c-87e7-4b63c1536628",
          "name": "dateOfBirth",
          "itemId": "dateOfBirth",
          "xtype": "datefield",
          "customWidgetType": "vdDatefield",
          "fieldLabel": "dateOfBirth",
          "allowBlank": false,
          "bind": "{dateOfBirth}",
          "errorMessage": ""
     }, {
          "parentId": "8fc16bd6-b7ec-469b-abe6-ba0211422210",
          "customId": "290292ef-557b-4e6a-a8bc-91e390262048",
          "uniqueId": "80aeb545-0d7d-4d2b-8d48-03e111c5d89b",
          "name": "phoneCountryCode",
          "itemId": "phoneCountryCode",
          "xtype": "textfield",
          "customWidgetType": "vdTextfield",
          "fieldLabel": "phoneCountryCode",
          "allowBlank": false,
          "bind": "{phoneCountryCode}",
          "errorMessage": ""
     }],
     "dockedItems": [{
          "parentId": "8fc16bd6-b7ec-469b-abe6-ba0211422210",
          "customId": "833f33a2-d767-491f-8482-de1d09368417",
          "uniqueId": "d5ca6f76-1712-4f62-b9c8-72d6fe533f87",
          "xtype ": "toolbar",
          "customWidgetType": "vdBBar",
          "dock": "bottom",
          "ui": "footer",
          "isDockedItem": true,
          "items": [{
               "parentId": "833f33a2-d767-491f-8482-de1d09368417",
               "customId": "0104e836-6b07-439f-9702-378c9b87f596",
               "uniqueId": "bb5a8f81-4ee3-49bb-a968-d1d945577354",
               "xtype": "tbfill",
               "customWidgetType": "vdTbFill"
          }, {
               "parentId": "833f33a2-d767-491f-8482-de1d09368417",
               "customId": "c99e2fdd-856b-4487-9bec-4ef1877837b7",
               "uniqueId": "8525cf4f-f63e-4569-a2cc-f96ffb0fe1df",
               "customWidgetType": "vdButton",
               "xtype": "button",
               "margin": "0 5 0 5",
               "text": "Save",
               "hiddenName": "button",
               "canHaveParent": false,
               "itemId": "saveFormButton",
               "listeners": {
                    "click": "saveForm"
               }
          }, {
               "parentId": "833f33a2-d767-491f-8482-de1d09368417",
               "customId": "4774f90b-3c89-463d-9266-82196b8db579",
               "uniqueId": "fcfe81ee-f863-419b-a500-d94d43b94726",
               "customWidgetType": "vdButton",
               "xtype": "button",
               "margin": "0 5 0 5",
               "text": "Reset",
               "hiddenName": "button",
               "canHaveParent": false,
               "itemId": "resetFormButton",
               "listeners": {
                    "click": "resetForm"
               }
          }],
          "defaults": {}
     }]
});