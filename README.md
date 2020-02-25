# webmethods.io-Deputy--Community-Connector
This is a Webmethods.io community connector for [Deputy](https://www.deputy.com/), a platform which allows you to Manage your workday from any device with Deputy's flexible scheduling software & time clock app designed for any type of workforce. The connector uses the [Deputy REST API](https://www.deputy.com/api-doc/API) to make HTTP requests to access or modify a resource. The actions supported by this community connector are:
#### 1. [Active An Employee](https://www.deputy.com/api-doc/API/Employee_Management_Calls)
#### 2. [Add A Employee](https://www.deputy.com/api-doc/API/Employee_Management_Calls)
#### 3. [Archive A Location In Deputy](https://www.deputy.com/api-doc/API/Location_Management_Calls)
#### 4. [Create A Journal](https://www.deputy.com/api-doc/API)
#### 5. [Current Payroll Status](https://www.deputy.com/api-doc/API/Enterprise_Payroll)
#### 6. [Delete An Employee](https://www.deputy.com/api-doc/API/Employee_Management_Calls)
#### 7. [Get Details About The User](https://www.deputy.com/api-doc/API/It_is_All_About_Me)
#### 8. [Get Employee Details](https://www.deputy.com/api-doc/API/Employee_Management_Calls)
#### 9. [Get Time](https://www.deputy.com/api-doc/API/Utility_Methods)
#### 10. [Invite An Employee To Deputy](https://www.deputy.com/api-doc/API/Employee_Management_Calls)
#### 11. [List System Roster Template](https://www.deputy.com/api-doc/API/Roster_Management_Calls)
#### 12. [Start Given Employee's Timesheet](https://developer.bigcommerce.com/api-reference/store-management/shipping-api)
#### 13. [Terminate An Employee](https://www.deputy.com/api-doc/API/Employee_Management_Calls)
#### 14. [Update An Employee](https://www.deputy.com/api-doc/API/Employee_Management_Calls)
Learn about other supported actions [here](https://www.deputy.com/api-doc/API/Getting_Started).
## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
This connector requires any [Node](https://nodejs.org/dist/) version between 8.14.0 and 10.14.2.

Note: If you have installed any other Node version on your system, you can:
1. Use tools to switch between different versions of Node

  - For Windows, use [nvm-windows](https://github.com/coreybutler/nvm-windows#installation--upgrades).
  
  - For Mac, use [homebrew](https://brew.sh/).
2. Build your app using your existing Node version and then transpile your code using a transpiler like [Babel](https://babeljs.io/).

The connector has been built with [wmiocli](https://docs.webmethods.io/integration/developer_guide/connector_builder/#gsc.tab=0), webmethod.io's iPaaS Connector Builder CLI tool, which must be installed.
### Getting the Access token , Store Hash and Client Secret 
Steps:
  Login to Deputy
  Go to your account
  Change the URL path to /exec/devapp/oauth_clients . E.g https://{your subdomain}.deputy.com/exec/devapp/oauth_clients
  Create a dummy client of yours and get an Access Token from there. Use anything (e.g. http://localhost for the redirect URI. It won't be used.)
  You can use this access token as you like! Please note that this token will stop working if you as a user/employee gets de-activated from Deputy.
### Installing
1. Clone the repo `https://github.com/yuvanmytri/webmethods.io-Deputy--Community-Connector.git`.
2. Run `npm install -g @webmethodsio/wmiocli`.
3. Login to your webmethods.io tenant using `wmio login`.
4. Execute `wmio init` to get started.
5. Finally, execute `wmio deploy` to deploy this connector to your tenant.

Once deployed, it’ll be automatically registered with webMethods.io Integration and will be available to you locally in the Connectors panel under the Services tab.

## Running the tests
To test, you can execute `wmio test`.

## Deployment
Execute `wmio deploy` to deploy this connector to your webmethods.io tenant. And `wmio unpublish` to unpublish the published connector app along with triggers and actions associated with the app.

![Deputy Connector](https://user-images.githubusercontent.com/20556391/75240942-31a43e80-57eb-11ea-849e-e4c25bf43321.PNG)


## Built With
Node v8.14.0 and [wmiocli](https://docs.webmethods.io/integration/developer_guide/connector_builder/#gsc.tab=0), webmethod.io's iPaaS Connector Builder CLI.

## Contributors
[Anshuman Saikia](https://github.com/anshu96788) |
[Dipankar Dutta](https://github.com/DipankarDDUT) |
[Nawajish Laskar](https://github.com/Nawajish)

## License
This project is licensed under the Apache 2.0 License - see the [LICENSE.md](https://github.com/SoftwareAG/webmethods-microservicesruntime-samples/blob/master/LICENSE) file for details
