# TemperatureConverter
Follow the steps below to run the application (Temperature Converter):
Make sure that both the API and the Angular application are running. 
First, for the Angular application, go to the command prompt and navigate to application root folder then execute the command "ng serve --open".
This will run the application and open the browser with a url of http://localhost:4200
The for the API which is in a separate repository "TemperatureConverterApi", open the solution using Visual Studio 2022 as it's using .Net Core 6.0 then press Cntrl + F5 to run the application, it should also open the browser on the following URL: https://localhost:7210/api/history, you should see an empty array but as soon the user started converting temperatures, then you should be able to see it on the api browser. Please note that I didn't add any authentication (users) and perhaps also the date of entry but it can be easily added in the model of both application.
