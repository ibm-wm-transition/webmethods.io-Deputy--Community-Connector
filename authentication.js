module.exports = {
  label: "Connect to Deputy",
  mock_input: {},
  input: {
    type: "object",
    properties: {
      // fields schema
      // eg:
       access_token: {
         type: "string",
         minLength: 1,
         label: "Acess Token"
       },
	    subdom: {
         type: "string",
         minLength: 1,
         label: "Sub domain",
		 description: " When you log into Deputy you will see the browser url (eg mycompany.na.deputy.com)"
       }
    }
  },
  validate: function (input, output) {
    // auth data will be available in input.auth
    // like var username = input.auth.username
    // callback pattern
    // output(error, success)
    output(null, true);
  }
}