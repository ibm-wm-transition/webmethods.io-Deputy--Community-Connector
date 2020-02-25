module.exports = {

  name: "add_a_employee",

  title: "Add A Employee",

  description: "",
  version: "v1",

  input:{
    title: "Add A Employee",
    type: "object",
    properties: {
  strFirstName: {
        title: "FirstName",
        type: "string",
        minLength: 1
      },	  strLastName: {
        title: "LastName",
        type: "string",
        minLength: 1
      },
	  intCompanyId: {
        title: "CompanyId",
        type: "string",
        minLength: 1
      },strDob: {
        title: "Dob",
        type: "string",
        minLength: 1,
		description: "Date of birth in YYYY-MM-DD eg 2020-02-25T00:00:00+01:00"
      },strStartDate: {
        title: "StartDate",
        type: "string",
        minLength: 1,
		description: "StartDate in YYYY-MM-DD eg 2020-02-25T00:00:00+01:00"
      },strEmail: {
        title: "Email",
        type: "string",
        minLength: 1
      },strMobilePhone: {
        title: "MobilePhone",
        type: "string",
        minLength: 1
      },strPostCode: {
        title: "PostCode",
        type: "string",
        minLength: 1
      },intGender: {
        title: "Gender",
        type: "number",
        minLength: 1,
		enum:[0,1,2],
		description: "0 - no declare, 1- Male, 2-Female"
      },strState: {
        title: "State",
        type: "string",
        minLength: 1
      },strCity: {
        title: "City",
        type: "string",
        minLength: 1
      }
    }
  },

  output: {
    title: "output",
  	type: "object",
  	properties: {

    }
  },

  mock_input:{},

  execute: function(input, output){
   var request = require("request");
var x="https://"+input.auth.subdom+"/api/v1/supervise/employee";
 var y= "Bearer "+input.auth.access_token;
  
    var options = {
      "method": "POST",
      "url": x,
      "headers": {
          "Accept": "application/json",
		  "Content-Type": "application/json",
         "Authorization": y 
      },
	  "body":{"strFirstName" :input.strFirstName  ,
"strLastName" :input.strLastName ,
"intCompanyId": input.intCompanyId,
"strDob":input.strDob ,
"strStartDate":input.strStartDate ,
"strEmail":input.strEmail ,
"strMobilePhone":input.strMobilePhone ,
"strPostCode": input.strPostCode,
"intGender": input.intGender,
"strState":input.strState ,
"strCity": input.strCity
},
	  "json": true
	 
     }
	 
	 
	 request(options, function (error, response, body) {
  try {
            if (body && typeof(body) === "string") {
                body = JSON.parse(body);
            }
        } catch (e) {
            return output(body);
        };
		
		  if (response.statusCode === 403) {
            return output("the authentication information is incorrect.");
        }
		 if (response.statusCode === 400) {
            return output("Employee cannot be deleted");
        }
		if (response.statusCode === 404) {
            return output(" the requested record could not be found. This may also occur if the user does not have access to the requested record");
        }
        if (response.statusCode !== 200) {
            return output(body.status.errorDetails);
        }
		 if (response.statusCode === 200) {
            return output(null, {
				data: body
			});
          
        }
        output(body);
		
});
  }

}
