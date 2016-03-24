sap.ui.controller("sapux05_1.JSView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf sapux05_1.JSView
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf sapux05_1.JSView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf sapux05_1.JSView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf sapux05_1.JSView
*/
//	onExit: function() {
//
//	}

	onPress: function(evt) {
		jQuery.sap.require("sap.m.MessageToast");
		/* Within event handlers and formatters, only when using JSView type, the 'this' points to the control object itself.
		 * In our case, it would point to the Button and the command this.getView().getId() would not work.
         * You have to call the function in the controller using a jQuery.proxy so that the 'this' in the controller points in 
         * fact to the controller itself and not to the object (button).
        */ 
		console.log("this", this);
	    var viewId = this.getView().getId();
		sap.m.MessageToast.show("View id is: " + this.getView().getId() + "\n" + "Button: " + sap.ui.getCore().byId("JSVIEW_BTN").getText() + " pressed");
	}

});