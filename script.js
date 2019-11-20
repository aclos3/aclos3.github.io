//  Author:  Andrew Clos
//  Date:  
//  Title: 
//  Description: 




document.addEventListener('DOMContentLoaded', getWx(97365));

function getWx(zipCode)
{
    document.getElementById("sub").addEventListener("click", function(event)
    {
        var zip = document.getElementById("zipCity").value;
        //error checking to make sure the zipcode is valid.
        if(zip.length === 5 && zip >= 0 && zip <= 99999)
        {
            getWx(zip);
        }
        else
        {
            alert("Invalid Zipcode!");
        }
        event.preventDefault();
    });

    //my API key from the signup at OpenWeather
    var myApiKey = "&APPID=bf08546c47c5648f711263e65706b5a9";
    var zipOrCity = zipCode;
    var newWx = new XMLHttpRequest();
    //variable that will receive the contents of what comes back from Open Weather
    var returnWx = "";
    var printWx  = "";
    var sendForWx = "https://api.openweathermap.org/data/2.5/weather?zip=" + zipOrCity + ",us" + myApiKey; 
    
    //perform the asynchronous GET to OpenWeather
    newWx.open("GET", sendForWx, true);
    newWx.addEventListener('load', function()
    {
        if(newWx.status < 400 && newWx.status >= 200)
        {
            returnWx = JSON.parse(newWx.responseText);
            printWx = JSON.stringify(newWx.responseText);

            document.getElementById("rcvd").textContent = "Current Weather In " + returnWx.name + ":";
            document.getElementById("legend").textContent = "(lat: " + returnWx.coord.lat + " lon: " + returnWx.coord.lon + ")";
            document.getElementById("currTemp").textContent = ((returnWx.main.temp - 273.15) * 9/5 + 32).toFixed(1);
            document.getElementById("highTemp").textContent = ((returnWx.main.temp_max - 273.15) * 9/5 + 32).toFixed(1);
            document.getElementById("lowTemp").textContent = ((returnWx.main.temp_min - 273.15) * 9/5 + 32).toFixed(1);
            document.getElementById("humid").textContent = returnWx.main.humidity;
            document.getElementById("wind").textContent = (returnWx.wind.speed * 2.237).toFixed(1);
            
            //these if statements prevent "NaN" from being printed if there has been no rainfall
            if(returnWx.rain === undefined)
            {
                document.getElementById("rainHr").textContent = "0";
                document.getElementById("rain3").textContent = "0";
            }
            else
            {
                if(returnWx.rain['1h'] != null)
                {
                    document.getElementById("rainHr").textContent = ((returnWx.rain['1h']) / 25.4).toFixed(2);
                }
                else
                {
                    document.getElementById("rainHr").textContent = "0";
                }
                if(returnWx.rain['3h'] != null)
                {
                    document.getElementById("rain3").textContent = ((returnWx.rain['3h']) / 25.4).toFixed(2);
                }
                else
                {
                    document.getElementById("rain3").textContent = "0";
                }
            }
            
            //source cited for help with converting UTC unix timestamp to standard format: 
            //https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript
            var sunrise = new Date(returnWx.sys.sunrise * 1000);
            var hrFix = sunrise.getHours() + ((sunrise.getTimezoneOffset() / 60) - (returnWx.timezone / -3600));
            if(hrFix >= 24)
            {
                hrFix = hrFix - 24;
            }
            document.getElementById("sunrise").textContent = (hrFix + ':' + ("0" + sunrise.getMinutes()).substr(-2) + ':' + ("0" + sunrise.getSeconds()).substr(-2));

            var sunset = new Date(returnWx.sys.sunset * 1000);
            hrFix = sunset.getHours() + ((sunset.getTimezoneOffset() / 60) - (returnWx.timezone / -3600));
            if(hrFix >= 24)
            {
                hrFix = hrFix - 24;
            }
            document.getElementById("sunset").textContent = (hrFix + ':' + ("0" + sunset.getMinutes()).substr(-2) + ':' + ("0" + sunset.getSeconds()).substr(-2));
        
        }
        else
        {
            alert("An error has occurred: status not 200-300");
        }
    });

    newWx.send();
    

}



