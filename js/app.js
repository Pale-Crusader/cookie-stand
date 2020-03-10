'strict';
var listOfBranches =[];

// name is a string of the name, minCust is minimum _number_ of customers, maxCust is maximum _number_ of customers, branchID is the HTML parent ID
function StoreBranch(name, minCust, maxCust, avgCookie, branchID) {
    this.name = name;
    this.minCustomer = minCust;
    this.maxCustomer = maxCust;
    this.averageCookie = avgCookie;
    this.branchID = branchID;
	listOfBranches.push(this);
}

StoreBranch.prototype.numberOfHoursOpen = ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'];
StoreBranch.prototype.customerTotalArray = [];
StoreBranch.prototype.cookieTotalArray = [];
StoreBranch.prototype.runningCookieTotal = 0;
StoreBranch.prototype.runningCustomerTotal = 0;


StoreBranch.prototype.calculateAllDaySales = function() {

	var hourlyVariance = (this.maxCustomer - this.minCustomer);
	var actualHourlyCustomer = (Math.floor(Math.random() * hourlyVariance) + 1 + this.minCustomer);
	var actualHourlyCookie = Math.floor(this.averageCookie * actualHourlyCustomer);
	var branchHourlyArray = [actualHourlyCustomer,actualHourlyCookie];
	// console.log(branchHourlyArray);

	for (var index = 0; index < this.numberOfHoursOpen.length; index++) {
		this.customerTotalArray.push(branchHourlyArray[0]);
		this.runningCustomerTotal = (this.runningCustomerTotal + branchHourlyArray[0]);
		this.cookieTotalArray.push(branchHourlyArray[1]);
		this.runningCookieTotal = (this.runningCookieTotal + branchHourlyArray[1]);
		// console.log('this.customerTotalArray' + this.customerTotalArray);
		// console.log('this.runningCustomerTotal' + this.runningCustomerTotal);
		// console.log('cookie running total array' + cookieTotalArray);
		// console.log('cookie total' + this.runningCookieTotal);

	switch (index) {
		case 0:
			var branchParent = document.getElementById(this.branchID);
			var firstHour = document.createElement('li');
			firstHour.textContent = (this.numberOfHoursOpen[index] + ' ' + branchHourlyArray[1] + ' cookies');
			branchParent.appendChild(firstHour);
			break;
		case 1:
			var secondHour = document.createElement('li');
			secondHour.textContent = (this.numberOfHoursOpen[index] + ' ' + branchHourlyArray[1] + ' cookies');
			branchParent.appendChild(secondHour);
			break;
		case 2:
			var thirdHour = document.createElement('li');
            thirdHour.textContent = (this.numberOfHoursOpen[index] + ' ' + branchHourlyArray[1] + ' cookies');
			branchParent.appendChild(thirdHour);
			break;
		case 3:
			var fourthHour = document.createElement('li');
			fourthHour.textContent = (this.numberOfHoursOpen[index] + ' ' + branchHourlyArray[1] + ' cookies');
			branchParent.appendChild(fourthHour);
			break;
		case 4:
			var fifthHour = document.createElement('li');
			fifthHour.textContent = (this.numberOfHoursOpen[index] + ' ' + branchHourlyArray[1] + ' cookies');
			branchParent.appendChild(fifthHour);
			break;
		case 5:
			var sixthHour = document.createElement('li');
			sixthHour.textContent = (this.numberOfHoursOpen[index] + ' ' + branchHourlyArray[1] + ' cookies');
			branchParent.appendChild(sixthHour);
			break;
		case 6:
			var seventhHour = document.createElement('li');
			seventhHour.textContent = (this.numberOfHoursOpen[index] + ' ' + branchHourlyArray[1] + ' cookies');
			branchParent.appendChild(seventhHour);
			break;
		case 7:
			var eigthHour = document.createElement('li');
			eigthHour.textContent = (this.numberOfHoursOpen[index] + ' ' + branchHourlyArray[1] + ' cookies');
			branchParent.appendChild(eigthHour);
			break;
		case 8:
			var ninthHour = document.createElement('li');
			ninthHour.textContent = (this.numberOfHoursOpen[index] + ' ' + branchHourlyArray[1] + ' cookies');
			branchParent.appendChild(ninthHour);
			break;
		case 9:
			var tenthHour = document.createElement('li');
			tenthHour.textContent = (this.numberOfHoursOpen[index] + ' ' + branchHourlyArray[1] + ' cookies');
			branchParent.appendChild(tenthHour);
			break;
		case 10:
			var eleventhHour = document.createElement('li');
			eleventhHour.textContent = (this.numberOfHoursOpen[index] + ' ' + branchHourlyArray[1] + ' cookies');
			branchParent.appendChild(eleventhHour);
			break;
		case 11:
			var twelthHour = document.createElement('li');
			twelthHour.textContent = (this.numberOfHoursOpen[index] + ' ' + branchHourlyArray[1] + ' cookies');
			branchParent.appendChild(twelthHour);
			break;
		case 12:
			var thirteenthHour = document.createElement('li');
			thirteenthHour.textContent = (this.numberOfHoursOpen[index] + ' ' + branchHourlyArray[1] + ' cookies');
			branchParent.appendChild(thirteenthHour);
			break;
		case 13:
			var fourteenthHour = document.createElement('li');
			fourteenthHour.textContent = (this.numberOfHoursOpen[index] + ' ' + branchHourlyArray[1] + ' cookies');
			branchParent.appendChild(tenthHour);
			var displayTotalElement = document.createElement('li');
			displayTotalElement.textContent = ('Total: ' + this.runningCookieTotal + ' cookies');
			branchParent.appendChild(displayTotalElement);
			break;
		default:
			console.log(displayTotalElement);
		}
	}
}



var seattleBranch = new StoreBranch('Seattle', 23, 65, 6.3, 'branch1');
var tokyoBranch = new StoreBranch('Tokyo', 3, 24, 1.2, 'branch2');
var dubaiBranch = new StoreBranch('Dubai', 11, 38, 3.7, 'branch3');
var parisBranch = new StoreBranch('Paris', 20, 38, 2.3, 'branch4');
var limaBranch = new StoreBranch('Lima', 2, 16, 4.6, 'branch5');

console.log(seattleBranch);
console.log(tokyoBranch);
console.log(dubaiBranch);
console.log(parisBranch);
console.log(limaBranch);
seattleBranch.calculateAllDaySales();
tokyoBranch.calculateAllDaySales();
dubaiBranch.calculateAllDaySales();
parisBranch.calculateAllDaySales();
limaBranch.calculateAllDaySales();