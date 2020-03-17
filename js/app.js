'strict';
var listOfBranches =[];
var listOfHours =['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'];

// name is a string of the name, minCust is minimum _number_ of customers, maxCust is maximum _number_ of customers, branchID is the HTML parent ID
function StoreBranch(name, minCust, maxCust, avgCookie, branchID) {
    this.name = name;
    this.minCustomer = minCust;
    this.maxCustomer = maxCust;
    this.averageCookie = avgCookie;
    this.branchID = branchID;
	listOfBranches.push(this);
}

StoreBranch.prototype.numberOfHoursOpen = listOfHours;
StoreBranch.prototype.customersEachHourArray = [];
StoreBranch.prototype.cookiesEachHourArray = [];
StoreBranch.prototype.runningCookieTotal = 0;
StoreBranch.prototype.runningCustomerTotal = 0;


StoreBranch.prototype.calculateAllDaySales = function() {

	var hourlyVariance = (this.maxCustomer - this.minCustomer);
	// console.log(branchHourlyArray);

	for (var index = 0; index < this.numberOfHoursOpen.length; index++) {
		var actualHourlyCustomer = (Math.floor(Math.random() * hourlyVariance) + 1 + this.minCustomer);
		var actualHourlyCookie = Math.floor(this.averageCookie * actualHourlyCustomer);
		var branchHourlyArray = [actualHourlyCustomer,actualHourlyCookie];

		this.customersEachHourArray.push(branchHourlyArray[0]);
		this.runningCustomerTotal = (this.runningCustomerTotal + branchHourlyArray[0]);
		this.cookiesEachHourArray.push(branchHourlyArray[1]);
		this.runningCookieTotal = (this.runningCookieTotal + branchHourlyArray[1]);
		// console.log('This ' + this.name + '\'s cookiesEachHourArray is ' + this.cookiesEachHourArray + ' at index number: '+ index + ' and this is what was added this loop: ' + branchHourlyArray[1]);

	switch (index) {
		case 0:
			var branchParent = document.getElementById(this.branchID);
			var firstHour = document.createElement('td');
			firstHour.textContent = (' ' + branchHourlyArray[1]);
			branchParent.appendChild(firstHour);
			break;
		case 1:
			var secondHour = document.createElement('td');
			secondHour.textContent = (' ' + branchHourlyArray[1]);
			branchParent.appendChild(secondHour);
			break;
		case 2:
			var thirdHour = document.createElement('td');
            thirdHour.textContent = (' ' + branchHourlyArray[1]);
			branchParent.appendChild(thirdHour);
			break;
		case 3:
			var fourthHour = document.createElement('td');
			fourthHour.textContent = (' ' + branchHourlyArray[1]);
			branchParent.appendChild(fourthHour);
			break;
		case 4:
			var fifthHour = document.createElement('td');
			fifthHour.textContent = (' ' + branchHourlyArray[1]);
			branchParent.appendChild(fifthHour);
			break;
		case 5:
			var sixthHour = document.createElement('td');
			sixthHour.textContent = (' ' + branchHourlyArray[1]);
			branchParent.appendChild(sixthHour);
			break;
		case 6:
			var seventhHour = document.createElement('td');
			seventhHour.textContent = (' ' + branchHourlyArray[1]);
			branchParent.appendChild(seventhHour);
			break;
		case 7:
			var eighthHour = document.createElement('td');
			eighthHour.textContent = (' ' + branchHourlyArray[1]);
			branchParent.appendChild(eighthHour);
			break;
		case 8:
			var ninthHour = document.createElement('td');
			ninthHour.textContent = (' ' + branchHourlyArray[1]);
			branchParent.appendChild(ninthHour);
			break;
		case 9:
			var tenthHour = document.createElement('td');
			tenthHour.textContent = (' ' + branchHourlyArray[1]);
			branchParent.appendChild(tenthHour);
			break;
		case 10:
			var eleventhHour = document.createElement('td');
			eleventhHour.textContent = (' ' + branchHourlyArray[1]);
			branchParent.appendChild(eleventhHour);
			break;
		case 11:
			var twelfthHour = document.createElement('td');
			twelfthHour.textContent = (' ' + branchHourlyArray[1]);
			branchParent.appendChild(twelfthHour);
			break;
		case 12:
			var thirteenthHour = document.createElement('td');
			thirteenthHour.textContent = (' ' + branchHourlyArray[1]);
			branchParent.appendChild(thirteenthHour);
			break;
		case 13:
			var fourteenthHour = document.createElement('td');
			fourteenthHour.textContent = (' ' + branchHourlyArray[1]);
			branchParent.appendChild(fourteenthHour);
			var displayTotalElement = document.createElement('td');
			displayTotalElement.textContent = (' ' + this.runningCookieTotal);
			branchParent.appendChild(displayTotalElement);
			break;
		default:
			console.log('The index is ' + index);
		}
	}
}
function displayColumnTotal() {
	
	var columnTotalingArray = listOfBranches;
	var displayColumnTotalElement = document.getElementsByClassName("displayColumnTotals");
	console.log('get displayColumTotalElement Row 1st time' + displayColumnTotalElement);
	var saleTableElement = document.getElementById("sales");
	console.log('get salesTable 1st time' + saleTableElement);
	var displayHourlyTotalIdAttribute = document.createAttribute("class");
	var displayHourlyTotalIdAttributeValue = "displayColumnTotals";
	displayColumnTotalElement.parentNode.removeChild(displayColumnTotalElement);
	console.log('get displayColumTotalElement Row 2nd time' + displayColumnTotalElement);
	displayColumnTotalElement = document.createElement("tr");
	displayColumnTotalElement.setAttribute(displayHourlyTotalIdAttribute, displayHourlyTotalIdAttributeValue);
	saleTableElement.appendChild(displayColumnTotalElement);


	// for (var eachHour = 0; listOfHours.length; eachHour++)
	// 	var columnRunningSum = 0;
	// 	for (var columnIndex = 0; columnIndex < columnTotalingArray.length; columnIndex++) {
			
			
		
	// var columnTotalEl = document.createElement('td');
	// columnTotalEl.textContent = (' ' + this.runningCookieTotal);
	// branchParent.appendChild(displayTotalElement);
	// }

}

var seattleBranch = new StoreBranch('Seattle', 23, 65, 6.3, 'branch1');
var tokyoBranch = new StoreBranch('Tokyo', 3, 24, 1.2, 'branch2');
var dubaiBranch = new StoreBranch('Dubai', 11, 38, 3.7, 'branch3');
var parisBranch = new StoreBranch('Paris', 20, 38, 2.3, 'branch4');
var limaBranch = new StoreBranch('Lima', 2, 16, 4.6, 'branch5');


// console.log(seattleBranch);
// console.log(tokyoBranch);
// console.log(dubaiBranch);
// console.log(parisBranch);
// console.log(limaBranch);
seattleBranch.calculateAllDaySales();
tokyoBranch.calculateAllDaySales();
dubaiBranch.calculateAllDaySales();
parisBranch.calculateAllDaySales();
limaBranch.calculateAllDaySales();

displayColumnTotal();
// var createNewStoreForm = document.getElementById('makeBranchForm');

// createNewStoreForm.addEventListener('submit', handleForm);
