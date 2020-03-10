'strict';



var storeBranch1 = {
    name: "Seattle",
    minCustomer: 23,
    maxCustomer: 65,
    averageCookie: 6.3,
    numberOfHoursOpen: 14,
    calculateHourlySales: function() { 
        var hourlyVariance = (this.maxCustomer - this.minCustomer);
        var actualHourlyCustomer = (Math.floor(Math.random() * hourlyVariance) + 1 + this.minCustomer);
        var actualHourlyCookie = Math.floor(this.averageCookie * actualHourlyCustomer);
        var storeBranch1HourlyArray = [actualHourlyCustomer,actualHourlyCookie];
        // console.log(storeBranch1HourlyArray);
        return storeBranch1HourlyArray;
    },
    calculateAllDaySales: function() {
        var runningCookieTotal = 0;
        var cookieTotalArray  = [];
        var runningCustomerTotal = 0;
        var customerTotalArray  = [];

        for (var index = 0; index < this.numberOfHoursOpen; index++) {
            var storeBranch1HourlyArray = this.calculateHourlySales();
            customerTotalArray.push(storeBranch1HourlyArray[0]);
            runningCustomerTotal = (runningCustomerTotal + storeBranch1HourlyArray[0]);
            cookieTotalArray.push(storeBranch1HourlyArray[1]);
            runningCookieTotal = (runningCookieTotal + storeBranch1HourlyArray[1]);
            // console.log('customerTotalArray' + customerTotalArray);
            // console.log('runningCustomerTotal' + runningCustomerTotal);
            // console.log('cookie running total array' + cookieTotalArray);
            // console.log('cookie total' + runningCookieTotal);

        switch (index) {
            case 0:
                var branch1DisplayElement = document.getElementById('branch1');
                var firstHour = document.createElement('li');
                firstHour.textContent = ('6 am: ' + storeBranch1HourlyArray[1] + ' cookies');
                branch1DisplayElement.appendChild(firstHour);
                break;
            case 1:
                var secondHour = document.createElement('li');
                secondHour.textContent = ('7 am: ' + storeBranch1HourlyArray[1] + ' cookies');
                branch1DisplayElement.appendChild(secondHour);
                break;
            case 2:
                var thirdHour = document.createElement('li');
                thirdHour.textContent = ('8 am: ' + storeBranch1HourlyArray[1] + ' cookies');
                branch1DisplayElement.appendChild(thirdHour);
                break;
            case 3:
                var fourthHour = document.createElement('li');
                fourthHour.textContent = ('9 am: ' + storeBranch1HourlyArray[1] + ' cookies');
                branch1DisplayElement.appendChild(fourthHour);
                break;
            case 4:
                var fifthHour = document.createElement('li');
                fifthHour.textContent = ('10 am: ' + storeBranch1HourlyArray[1] + ' cookies');
                branch1DisplayElement.appendChild(fifthHour);
                break;
            case 5:
                var sixthHour = document.createElement('li');
                sixthHour.textContent = ('11 am: ' + storeBranch1HourlyArray[1] + ' cookies');
                branch1DisplayElement.appendChild(sixthHour);
                break;
            case 6:
                var seventhHour = document.createElement('li');
                seventhHour.textContent = ('12 pm: ' + storeBranch1HourlyArray[1] + ' cookies');
                branch1DisplayElement.appendChild(seventhHour);
                break;
            case 7:
                var eigthHour = document.createElement('li');
                eigthHour.textContent = ('1 pm: ' + storeBranch1HourlyArray[1] + ' cookies');
                branch1DisplayElement.appendChild(eigthHour);
                break;
            case 8:
                var ninthHour = document.createElement('li');
                ninthHour.textContent = ('2 pm: ' + storeBranch1HourlyArray[1] + ' cookies');
                branch1DisplayElement.appendChild(ninthHour);
                break;
            case 9:
                var tenthHour = document.createElement('li');
                tenthHour.textContent = ('3 pm: ' + storeBranch1HourlyArray[1] + ' cookies');
                branch1DisplayElement.appendChild(tenthHour);
                break;
            case 10:
                var eleventhHour = document.createElement('li');
                eleventhHour.textContent = ('4 pm: ' + storeBranch1HourlyArray[1] + ' cookies');
                branch1DisplayElement.appendChild(eleventhHour);
                break;
            case 11:
                var twelthHour = document.createElement('li');
                twelthHour.textContent = ('5 pm: ' + storeBranch1HourlyArray[1] + ' cookies');
                branch1DisplayElement.appendChild(twelthHour);
                break;
            case 12:
                var thirteenthHour = document.createElement('li');
                thirteenthHour.textContent = ('6 pm: ' + storeBranch1HourlyArray[1] + ' cookies');
                branch1DisplayElement.appendChild(thirteenthHour);
                break;
            case 13:
                var fourteenthHour = document.createElement('li');
                fourteenthHour.textContent = ('7 pm: ' + storeBranch1HourlyArray[1] + ' cookies');
                branch1DisplayElement.appendChild(tenthHour);
                var displayTotalElement = document.createElement('li');
                displayTotalElement.textContent = ('Total: ' + runningCookieTotal + ' cookies');
                branch1DisplayElement.appendChild(displayTotalElement);
                break;
            default:
                console.log(displayTotalElement);
            }
        }
    }
}



// storeBranch1.calculateHourlySales();
storeBranch1.calculateAllDaySales();
