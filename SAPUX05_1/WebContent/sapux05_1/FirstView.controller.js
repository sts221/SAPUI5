sap.ui.controller("sapux05_1.FirstView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf sapux05_1.FirstView
*/
	onInit: function() {
            
		var oModel = new sap.ui.model.json.JSONModel(
		                 {
		                   date: new Date(),
		                   names: [
		                           {fname: "a1",
		                        	lname: "a1a1",
		                        	contact: {
		                        		      email: "a1.a1a1@abc.com",
		                        		      phone: "613-111-1111"
		                        		
		                        	}},
		                           {fname: "a2",
		                            lname:"a2a2",
		                            contact: {
		                            	      email: "a2.a2a2@abc.com",
		                            	      phone: "613-222-2222"
		                            }},
		                           {fname: "a3",
		                            lname: "a3a3",
		                            contact: {
		                            	      email: "a3.a3a3@abc.com",
		                            	      phone: "613-333-3333"
		                            }}
		                           ]
		                 });
		   // debugger;
		   console.log("This: " + this);
		   console.log(this.getView().getId());
		   
		   var pan = sap.ui.getCore().byId("Panel_1");
		   pan.setModel(oModel);
		   
		   //this.getView().setModel(oModel);
		   
		   
		   // Set the model to the combo box in panel 3 - aggregation binding
		   var model3 = new sap.ui.model.json.JSONModel({
			            selection: "Please select first name",
			            data: [
			                   {text: "John", key: "John"},
			                   {text: "Sarah", key: "Sarah"},
			                   {text: "Roger", key: "Federer"}]
		   });
		   
		   var combo = sap.ui.getCore().byId("ComboBox");
		   combo.setModel(model3);
		   combo.bindValue("/selection");
           		   
		   sap.ui.getCore().attachValidationError( function (evt){
            	    var control = evt.getParameter("element");
            	    if (control && control.setValueState) {
            	    	    control.setValueState("Error");
            	    }
            });
            
            sap.ui.getCore().attachValidationSuccess( function (evt) {
            	    var control = evt.getParameter("element");
            	    if (control && control.setValueState) {
            	    	     control.setValueState("None");
            	    }
            })
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf sapux05_1.FirstView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf sapux05_1.FirstView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf sapux05_1.FirstView
*/
//	onExit: function() {
//
//	}
	
	testPressButton: function(idx) {
	    alert("Coming from the view: " + idx);	
	},

    onPress: function(evt) {
    	// var oButton = sap.ui.getCore().byId("ButtonSubmit").getText();
    	//    	   alert("onPress: " + evt.getSource().getId() + "- " + oButton);
    	
    	jQuery.sap.require("sap.m.MessageToast");
    	var canContinue = true;
    	
    	
    	var firstName = sap.ui.getCore().byId("Field1");
    	if (!firstName.getValue()) {
    		firstName.setValueState("Error");
    	} else {
    		firstName.setValueState("Success");
    	}
    	
    	var email = sap.ui.getCore().byId("Field3");
    	var emailValue = email.getValue();
    	var mailregex = /^\w+[\w-+\.]*\@\w+([-\.]\w+)*\.[a-zA-Z]{2,}$/;
    	if (!emailValue.match(mailregex)) {
    		email.setValueState("Error");	
    	} else {
    		email.setValueState("Success");
    	}
    	
    	if (firstName.getValueState() === "Error" || email.getValueState() === "Error") {
    		canContinue = false;
    	}
    	
    	if (canContinue) {
    		debugger;
    		sap.m.MessageToast.show("Input is correct. You can continue");
    		var txt = sap.ui.getCore().byId("Field1").getValue();
    		debugger;
    		oModel.setData({"{names/0/fname}": txt});
    		
    	} else {
    		sap.m.MessageToast.show("Please correct yoour input", {
    			duration: 3000 
    		})
    		   }
    	
    	// alert("CONTROLLER \n" + "onpress  : " + lastName.getValue());
    }, 
    
    onPressViews: function(evt) {
    	
    	/* You can access another view by knowing its id **/
    	var viewId = sap.ui.getCore().byId("js2");
    	alert("View id: " + viewId);
    	/* You can access another control in another view by knowing its ID: 
    	 * Be careful to access the control as viewID--controlId
    	 */
    	var oBtn = sap.ui.getCore().byId("js2--xmlButton").getText();
    	alert("Button: " + oBtn);
    },
    
    onPressModel: function(evt) {
    	var pan = sap.ui.getCore().byId("Panel_1");
		var _model = pan.getModel();
		_modelData = _model.getData();
		var str = inspect(_modelData,4);
		console.log(str);
		function inspect(obj, maxLevels, level) {
	    	  var str = '', type, msg;

	    	    // Start Input Validations
	    	    // Don't touch, we start iterating at level zero
	    	    if(level == null)  level = 0;

	    	    // At least you want to show the first level
	    	    if(maxLevels == null) maxLevels = 1;
	    	    if(maxLevels < 1)     
	    	        return '<font color="red">Error: Levels number must be > 0</font>';

	    	    // We start with a non null object
	    	    if(obj == null)
	    	    return '<font color="red">Error: Object <b>NULL</b></font>';
	    	    // End Input Validations

	    	    // Each Iteration must be indented
	    	    str += '<ul>';

	    	    // Start iterations for all objects in obj
	    	    for(property in obj)
	    	    {
	    	      try
	    	      {
	    	          // Show "property" and "type property"
	    	          type =  typeof(obj[property]);
	    	          str += '<li>(' + type + ') ' + property + 
	    	                 ( (obj[property]==null)?(': <b>null</b>'):('')) + "->" + obj[property] + '</li>';

	    	          // We keep iterating if this property is an Object, non null
	    	          // and we are inside the required number of levels
	    	          if((type == 'object') && (obj[property] != null) && (level+1 < maxLevels))
	    	          str += inspect(obj[property], maxLevels, level+1);
	    	      }
	    	      catch(err)
	    	      {
	    	        // Is there some properties in obj we can't access? Print it red.
	    	        if(typeof(err) == 'string') msg = err;
	    	        else if(err.message)        msg = err.message;
	    	        else if(err.description)    msg = err.description;
	    	        else                        msg = 'Unknown';

	    	        str += '<li><font color="red">(Error) ' + property + ': ' + msg +'</font></li>';
	    	      }
	    	    }

	    	      // Close indent
	    	      str += '</ul>';

	    	    return str;
	    	}
    },
    
    
    upperCase: function(sVal) {
    	if (!sVal) return;
    	return sVal.toUpperCase();
    }, 
    
    inspect: function(obj, maxLevels, level) {
    	  var str = '', type, msg;

    	    // Start Input Validations
    	    // Don't touch, we start iterating at level zero
    	    if(level == null)  level = 0;

    	    // At least you want to show the first level
    	    if(maxLevels == null) maxLevels = 1;
    	    if(maxLevels < 1)     
    	        return '<font color="red">Error: Levels number must be > 0</font>';

    	    // We start with a non null object
    	    if(obj == null)
    	    return '<font color="red">Error: Object <b>NULL</b></font>';
    	    // End Input Validations

    	    // Each Iteration must be indented
    	    str += '<ul>';

    	    // Start iterations for all objects in obj
    	    for(property in obj)
    	    {
    	      try
    	      {
    	          // Show "property" and "type property"
    	          type =  typeof(obj[property]);
    	          str += '<li>(' + type + ') ' + property + 
    	                 ( (obj[property]==null)?(': <b>null</b>'):('')) + '</li>';

    	          // We keep iterating if this property is an Object, non null
    	          // and we are inside the required number of levels
    	          if((type == 'object') && (obj[property] != null) && (level+1 < maxLevels))
    	          str += inspect(obj[property], maxLevels, level+1);
    	      }
    	      catch(err)
    	      {
    	        // Is there some properties in obj we can't access? Print it red.
    	        if(typeof(err) == 'string') msg = err;
    	        else if(err.message)        msg = err.message;
    	        else if(err.description)    msg = err.description;
    	        else                        msg = 'Unknown';

    	        str += '<li><font color="red">(Error) ' + property + ': ' + msg +'</font></li>';
    	      }
    	    }

    	      // Close indent
    	      str += '</ul>';

    	    return str;
    	}
});