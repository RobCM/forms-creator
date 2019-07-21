/*
	@RobertC 2019
	
	Library to format inputs:
		* Social security number
		* Money 
		* Name 
		* Date
		* Phone 
		* Credit Card
		* Selection options
	
*/
(function(window){
	function format_inputs(){
		
		var  formatLibrary = {};
		
		/* Properties on library objects. */
		
		// For ssn formating (000-00-0000)
		formatLibrary.ssn = function(format_ssn){

			 format_ssn = format_ssn.split(/\D+/g).join(""); // Block letter and characters as inputs!
			 format_ssn = format_ssn.match(/(\d{1,3})(?:(\d{1,2})(\d{1,4})?)?/);
			 if (format_ssn){
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
		
		// For date format (Month day and year from input 00/00/0000)
		formatLibrary.date = function(format_date){
			
			var build_date_one = format_date;
		
			// Prepare array from data 
			var build_date_two = build_date_one.split("/");
			
			// Verify correct syntax is use for input!
			if(build_date_two[0].length > 2 || build_date_two[0].length < 2){
				 format_date = "Bad input on xx//";
				 return format_date;
			}	
			if(build_date_two[1].length > 2 || build_date_two[1].length < 2){
				 format_date = "Bad input on /xx/";
				 return format_date;
			}	
			if(build_date_two[2].length > 4 || build_date_two[2].length < 4){
				 format_date = "Bad input on //xxxx";
				 return format_date;
			}	
			
			// Construct final and desire date format
			var date_month = build_date_two[0];
			var date_day = build_date_two[1];
			var date_year = build_date_two[2];
			
			// Validating month
			switch(date_month){
				case "01":
					date_month = "January";
				break;
				case "02":
					date_month = "February";
						// This month has 28 days!
						if(date_day > 28){
							date_day = " Bad Input ";
						}
				break;
				case "03":
					date_month = "March";
				break;
				case "04":
					date_month = "April";
						if(date_day > 30){
								date_day = " Bad Input ";
						}
				break;
				case "05":
					date_month = "May";
				break;
				case "06":
					date_month = "June";
						if(date_day > 30){
								date_day = " Bad Input ";
						}
				break;
				case "07":
					date_month = "July";
				break;
				case "08":
					date_month = "August";
				break;
				case "09":
					date_month = "September";
						if(date_day > 30){
								date_day = " Bad Input ";
						}
				break;
				case "10":
					date_month = "October";
				break;
				case "11":
					date_month = "November";
						if(date_day > 30){
								date_day = " Bad Input ";
						}
				break;
				case "12":
					date_month = "December";
				break;
				default:
					date_month = " Bad Input ";
				break;
			}
			
			// Validating day
			if(date_day > 31){
				date_day = " Bad Input ";
			}
			if(date_day == 00){
				date_day = " Bad Input ";
			}
			
			// Validating year (most be on the 1000's and up)
			if( date_year < 1000){
				 date_year = " year is < 1000";
			}
			
			format_date = date_month + " " + date_day + ", " + date_year;	
			return format_date;
		};
		
		// For phone number format (000)000-0000
		formatLibrary.phonenum = function(format_phonenum){	
		
			format_phonenum = format_phonenum.split(/\D+/g).join(""); 
			if(format_phonenum.length = 13){
				format_phonenum = format_phonenum.replace(/(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
			}
			if(format_phonenum.length > 13){
				format_phonenum = "";
			}
			
			return format_phonenum;
		}
		
		// Credit card format 
		formatLibrary.creditcard = function(format_creditcard){	
			
			format_creditcard = format_creditcard.split(/\D+/g).join(""); 
			if(format_creditcard.length = 19){
				format_creditcard = format_creditcard.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1-$2-$3-$4");
			}
			if(format_creditcard.length > 19){
				format_creditcard = "";
			}
		
			return format_creditcard;
		}
		
		// Selection options maker
		formatLibrary.selection = function(selection_title, selection_id, selection_one, selection_two, selection_three){	
			
			var format_selection =  "<label>" + selection_title + ": </label>" +
 									"<select id =\"" + selection_id + "\">" +
										"<option>" + selection_one + "</option>" +
										"<option>" + selection_two + "</option>" +
										"<option>" + selection_three + "</option>" +		 
									"</select>";
		
			return format_selection;
		}

		// Return library objects
		return formatLibrary;
		
	}
	
	// Making the library global so it can be save in the window!
	if(typeof(window.formatInputs) === "undefined"){
		window.formatInputs = format_inputs();
	}
	
})(window); 
  
