sap.ui.controller("sapux05_1.XMLView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf sapux05_1.XMLView
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf sapux05_1.XMLView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf sapux05_1.XMLView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf sapux05_1.XMLView
*/
//	onExit: function() {
//
//	}
xmlBtnPress: function() {
	jQuery.sap.require("sap.m.MessageToast");
	/* for XML views and controllers, the this variable inside the controller points to the view **/
	var viewId = this.getView().getId();
	sap.m.MessageToast.show("Id of the view is: " + viewId + "\n" + "Button pressed:  " + sap.ui.getCore().byId(viewId + "--" + "xmlButton").getText());
}
});