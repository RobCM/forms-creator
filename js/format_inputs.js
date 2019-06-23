/*
	@RobertC 2019
	
	Library to format inputs:
		* Social security number
		* Money 
		* Name (starts with capital letter)
		* Date
		* and others...
	
*/
(function(window){
	function format_inputs(){
		
		
	}
	
	// Making the library global so it can be save in the window!
	if(typeof(window.formatInputs) === "undefined"){
	window.formatInputs = format_inputs();
	}
	
})(window); 
