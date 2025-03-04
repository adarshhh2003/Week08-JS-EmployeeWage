const IS_ABSENT = 0;

let empCheck = Math.floor(Math.random()*10)%2;

if(empCheck == IS_ABSENT) {
    console.log("Employee is ABSENT");
    return;
} else {
    console.log("Employee is PRESENT");
}

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;


function getWorkingHours(empCheck) {
    switch(empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}


function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

const NUM_OF_WORKING_DAYS = 20;
const MAX_HOURS_IN_MONTH = 160;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
while(totalEmpHrs <= MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}

let empWage = calcDailyWage(totalEmpHrs);
console.log("Total Days: " + totalWorkingDays + 
    " Total Hrs: " + totalEmpHrs + " Emp Wage: " + empWage);

// Array Helper Functions
// Calculate total wage using Array forEach traversal or reduce method
let totEmpWage = 0;
function sum(dailyWage) {
    totEmpWage += dailyWage;
}

empDailyWageArr.forEach(sum);
console.log("Total days: " + totalWorkingDays + " Total Hrs: " + totalEmpHrs + " Emp Wage: " + totEmpWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}

console.log("Emp Wage with reduce: " + empDailyWageArr.reduce(totalWages, 0));

// Show the day with the daily wage using Array map helper function
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("Daily wage map");
console.log(mapDayWithWageArr);

// Show days when full time wage of 160 were earned
function fulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("Daily wage filter when full time wage earned");
console.log(fullDayWageArr);

// Find the first occcurence when full time wage was earned using find function
function findFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("First full time wage was earned of day: " + mapDayWithWageArr.find(findFulltimeWage));

// Check if every element of full time wage is truely holding full time wage
function isAllFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("Check all elements have full time wage: " + mapDayWithWageArr.every(isAllFulltimeWage));

// Check if there is any part time wage
function isAnyParttimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("Check if any part time wage: " + mapDayWithWageArr.some(isAnyParttimeWage));

// Find the number of days employee worked
function totalDaysWorked(numOfDays, dailyWage) {
    if(dailyWage > 0) {
        return numOfDays+1;
    }
    return numOfDays;
}
console.log("Number of days employee worked: " + empDailyWageArr.reduce(totalDaysWorked, 0));