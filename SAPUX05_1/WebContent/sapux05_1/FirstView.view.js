sap.ui.jsview("sapux05_1.FirstView", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf sapux05_1.FirstView
	 */
	getControllerName : function() {
		return "sapux05_1.FirstView";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf sapux05_1.FirstView
	 */
	createContent : function(oController) {
		
		// Create content for the UI Area 'HEADER'
		var oAppHeader = new sap.ui.commons.ApplicationHeader("appHeader", {
			displayWelcome : false,
			displayLogoff : false,
		});
		oAppHeader.placeAt("header");

		// Create content for the UI Area 'menu'
		var oMenubar = new sap.ui.commons.MenuBar;
		var oMenubarItem1 = new sap.ui.commons.MenuItem("menuitem-1", {
			text : "Menu-Item 1"
		});
		oMenubar.addItem(oMenubarItem1);
		var oMenubarItem2 = new sap.ui.commons.MenuItem("menuitem-2", {
			text : "Menu-Item 2"
		});
		oMenubar.addItem(oMenubarItem2);
		oMenubar.placeAt("menu");
		
		var oPanelDate = new sap.ui.commons.Panel({
		          text: {path: "/date", type: new sap.ui.model.type.Date({pattern: "dd.MM.YYYY"})}	
		})

		// Create content for the UI Area "content"
		// CREATE PANEL FIRST
		var oPanel = new sap.ui.commons.Panel("Panel_1", {
			text : "Enter Data",
			width : "600px"
		});
		
		// CREATE MATRIX LAYOUT
		var oLayout = new sap.ui.commons.layout.MatrixLayout();
        
		var oLabelDate = new sap.ui.commons.Label("labelDate", {
			text: { path: "/date",
				    type: new sap.ui.model.type.Date({pattern: "dd.MM.YYYY"})
		}
		})
		
		// CREATE ELEMENTS OF THE MATRIX LAYOUT
		var oLabel1 = new sap.ui.commons.Label({
			text : "First Name"
		});
		var oTextField1 = new sap.m.Input("Field1", {
			placeholder:  "Enter first name ...",
			valueStateText: "Name must not be empty. Maximum 10 characters.",
            enabled: true,
            /* value: {
            	    path: "/names/0/fname"
            } **/
            /* value: "{/names/0/fname}", **/
            value: {
            	    path: "/names/0/fname",
            	    formatter: oController.upperCase
            }
            
		});

		var oLabel2 = new sap.ui.commons.Label({
			text : "Last Name"
		});
		var oTextField2 = new sap.m.Input("Field2", {
            placeholder: "Enter last name ...",
            valueStateText: "Last name must not be empty",
            enabled: true,
            value: {
            	    path: "/names/0/lname"
            }
        });
		
		var oLabel3 = new sap.ui.commons.Label({
			text: "Email"
		});
		var oTextField3 = new sap.m.Input("Field3", {
		    placeholder: "Enter email",
		    valueStateText: "Email cannot be empty",
		    enabled: true
		})
		

		var oButton = new sap.ui.commons.Button("Button_1", {
			text : "Submit form",
			// press event can be defined as a local function
			// press: function() {}
			press : oController.onPress
		});
        
		var oButtonViews = new sap.ui.commons.Button("Button_2", {
			text: "XML View info",
			press: oController.onPressViews
		});
		
		var oButtonModel = new sap.ui.commons.Button("Button_3", {
			text: "Play with model",
			// press: oController.onPressModel
			press: $.proxy(oController.onPressModel, oController)
		})
		//oButton.attachPress(function() {}

		oLayout.createRow(oLabelDate);
		oLayout.createRow(oLabel1, oTextField1);
		oLayout.createRow(oLabel2, oTextField2);
		oLayout.createRow(oLabel3, oTextField3);
		oLayout.createRow(oButtonViews, oButton, oButtonModel);

		oPanel.addContent(oLayout).placeAt("content");

		// +++++ CREATE A NEW PANEL +++++++++
		var oPanel2 = new sap.ui.commons.Panel("Panel2", {
			text : "Panel 2: View Options"
		});
		// Instantiate the views: id, name=> use the project.view, type
		var jsview = sap.ui.view({
			id : "js1",
			viewName : "sapux05_1.JSView",
			type : sap.ui.core.mvc.ViewType.JS
		});
		var xmlview = sap.ui.view({
			id : "js2",
			viewName : "sapux05_1.XMLView",
			type : sap.ui.core.mvc.ViewType.XML
		});
		var jsonview = sap.ui.view({
			id : "js3",
			viewName : "sapux05_1.JSONView",
			type : sap.ui.core.mvc.ViewType.JSON
		});
		
		
		var oLayout2 = new sap.ui.commons.layout.HorizontalLayout("Layout2", {
			content : [ jsview, xmlview, jsonview ]
		});
		oPanel2.addContent(oLayout2).placeAt("content");
        
		// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		// PANEL 3
		var oPanel3 = new sap.ui.commons.Panel("Panel3", {
			text : "Aggregation binding",
			width : "600px"
		});
		
		// CREATE MATRIX LAYOUT
		var oLayout3 = new sap.ui.commons.layout.MatrixLayout();
		
		var oLabel31 = new sap.ui.commons.Label({
			text : "First Name"
		});
		
		/* var oTextField31 = new sap.m.Input("Field31", {
			value: ""
		}); **/
		
		var oItemTemplate = new sap.ui.core.ListItem("name", {
			text: "{text}",
			key: "{key}"
		});
		
		var oComboBox = new sap.ui.commons.ComboBox("ComboBox", {
		       items: { path: "/data",
		    	        template: oItemTemplate}
		       /* change: function(oEvent){
		    	         sap.ui.getCore().byId("Field31").setValue(oEvent.oSource.getSelectedKey())
		       } **/
		});

		oLayout3.createRow(oLabel31, oComboBox);
		oPanel3.addContent(oLayout3).placeAt("panel3");
		
		
	} // end CreateContent

});
