// Add your function in module.exports

module.exports = {

  "name":"get_employee",

  "label":"Get Employee",
	// add input data lookup will depend on for
	// eg: if auth is oauth so add access_token inside auth object
	// you can also add other input properties which are mentioned in action/trigger
	"mock_input": {
		"auth": { }
	},
	"search": true,
  "execute": function (input, options, output){
     var request = require("request");
 var request = require("request");
 var x="https://"+input.auth.subdom+"/api/v1/supervise/employee";
 var y= "Bearer "+input.auth.access_token;
    var options = {
      "method": "GET",
      "url": x,
      "headers": {
          "Accept": "application/json",
		  "Content-Type": "application/json",
        "Authorization": y 
      }
	 
     }
	 
	 	 let lookupResult={
		results :[],
		next_page:false,
	}

	let arr =[]
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
            return output("there is an error in the construction of the request. The body of the response will contain more detail of the problem.");
        }
		if (response.statusCode === 404) {
            return output(" the requested record could not be found. This may also occur if the user does not have access to the requested record");
        }
        if (response.statusCode !== 200) {
            return output(body.status.errorDetails);
        }
		 if (response.statusCode === 200) {
            body.forEach(element => {
				  if (element) {
					  arr.push({
						  "id": String(element.Id),
						  "value": String(element.FirstName || element.Id )
					  })
				  }
			  });
			  lookupResult.results = arr
					  return output(null, lookupResult)
          
        }
        output(body);
		
});
  }

}