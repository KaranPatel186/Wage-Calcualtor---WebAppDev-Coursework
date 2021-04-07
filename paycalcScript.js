//function for calculating the user wage based on the chosen time scale
function payCalc() {
    //import data from the html form as varaibles
    var wage = document.getElementById('wage').value;
    var hours = document.getElementById('hours').value;
    var timeScale = document.getElementById('timeScale').value;

    //calculates the yearly wage
    if (timeScale == "Yearly") {
        var wageYearly = wage * 4;
        var wageYearlyRound = wageYearly.toFixed(2);
        document.getElementById("result").innerHTML = "Your Yearly Pay is:" + wageYearlyRound

        //calculates the monthly wage
    } else if (timeScale == "Monthly") {
        var wageMonthly = wage * 4;
        var wageMonthlyRound = wageMonthly.toFixed(2);
        document.getElementById("result").innerHTML = "Your Monthly Pay is:" + wageMonthlyRound

        //calculates the weekly wage
    } else if (timeScale == "Weekly") {
        var wageWeekly = wage * 1;
        var wageWeeklyRound = wageWeekly.toFixed(2);
        document.getElementById("result").innerHTML = "Your Weekly Pay is:" + wageWeeklyRound

        //calculates the hourly wage
    } else if (timeScale == "Hourly") {
        var wageHourly = wage / hours;
        wageHourlyRound = wageHourly.toFixed(2);
        document.getElementById("result").innerHTML = "Your Hourly Pay is:" + wageHourlyRound
    }
}


//function for the contact form 
function aboutForm() {
    //import data from the html form as varaibles
    var firstName = document.getElementById('first_name').value;
    var lastName = document.getElementById('last_name').value;
    var email = document.getElementById('email').value;
    var hearAbout = document.getElementById('about_choices').value;
    var message = document.getElementById('message').value;

    //prints each variable to the console with some text saying what each value is
    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);
    console.log("Email: " + email);
    console.log("How did you hear about us: " + hearAbout);
    console.log("Message: " + message);
}