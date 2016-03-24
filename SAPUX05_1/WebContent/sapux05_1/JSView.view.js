sap.ui.jsview("sapux05_1.JSView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf sapux05_1.JSView
	*/ 
	getControllerName : function() {
		return "sapux05_1.JSView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf sapux05_1.JSView
	*/ 
	createContent : function(oController) {
		var oButton = new sap.ui.commons.Button("JSVIEW_BTN", {
			              text: "JS View Button",
			              press: $.proxy(oController.onPress, oController)
			              //press: oController.onPress
			              /* Within event handlers and formatters, only when using JSView type, the 'this' points to the control object itself.
			      		 * In our case, it would point to the Button and the command this.getView().getId() would not work.
			               * You have to call the function in the controller using a jQuery.proxy so that the 'this' in the controller points in 
			               * fact to the controller itself and not to the object (button).
			              */ 
		});
		return oButton;
	}
});
