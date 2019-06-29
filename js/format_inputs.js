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
				
				var build_date_one = format_date;
			
				// Prepare array from data 
				var build_date_two = build_date_one.split("/");

				// Verify correct syntax is use for input!
				if(build_date_two[0].length > 2 || build_date_two[0].length < 2){
					 console.log("Bad input on xx//");
					 format_date = "Bad input on xx//";
					 return format_date;
				}	
				if(build_date_two[1].length > 2 || build_date_two[1].length < 2){
					 console.log("Bad input on /xx/");
					 format_date = "Bad input on /xx/";
					 return format_date;
				}	
				if(build_date_two[2].length > 4 || build_date_two[2].length < 4){
					 console.log("Bad input on //xxxx");
					 format_date = "Bad input on //xxxx";
					 return format_date;
				}	

				// Construct final and desire date format
				var date_month = build_date_two[0];
				var date_day = "";
				var date_year = "";

				// Validating month
				switch(date_month){
					case "01":
						date_month = "January";
					break;
					case "02":
						date_month = "February";
					break;
					default:
						date_month = "Bad input use 01 format";
					break;
				}
				
				return format_date;
			*/
			
			
		};

		
		// Return library objects
		return formatLibrary;
		
	}
	
	// Making the library global so it can be save in the window!
	if(typeof(window.formatInputs) === "undefined"){
	window.formatInputs = format_inputs();
	}
	
})(window); 
