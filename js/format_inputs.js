/*
	@RobertC 2019
	
	Library to format inputs:
		* Social security number
		* Money 
		* Name (starts with capital letter)
	
*/
(function(window){
	function format_inputs(){
		/* Properties on library objects. */
		
		// For ssn formating (000-00-0000)
		formatLibrary.ssn = function(format_ssn){

			 format_ssn = format_ssn.split(/\D+/g).join("");
			 format_ssn = format_ssn.match(/(\d{1,3})(?:(\d{1,2})(\d{1,4})?)?/);
			 if (format_ssn) {
				 format_ssn.shift();
				 format_ssn = format_ssn.filter(Boolean).join("-");
			 }

			return format_ssn;
		};
		
		// For money/currency formating (0.00)
		formatLibrary.money = function(format_money){
			
			format_money = parseFloat(format_money);
			format_money = format_money.toFixed(2);
			// If user enters a none numeric value!
			if(isNaN(format_money)){
				format_money = "";
			}
			else{
				return format_money;
			}
			
			return format_money;
		};
		
		// For name format (starts with capital letter)
		formatLibrary.name = function(format_name){
			
			format_name = format_name.substr(0, 1).toUpperCase() + format_name.substr(1);
			
			return format_name;
		};
		
		// For date format ()
		formatLibrary.date = function(format_date){
			
			/*
				Still working on this!
			 	might do a custom logic based on a switch statement approach
			*/
			
			return format_date;
		};

		
		// Return library objects
		return formatLibrary;
		
	}
	
	// Making the library global so it can be save in the window!
	if(typeof(window.formatInputs) === "undefined"){
	window.formatInputs = format_inputs();
	}
	
})(window); 
