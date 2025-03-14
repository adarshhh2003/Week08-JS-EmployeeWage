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
let empDailyHrsAndWageArr = new Array();

while(totalEmpHrs <= MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyHrsAndWageArr.push({
        dayNum:totalWorkingDays,
        dailyHours:empHrs,
        dailyWage: calcDailyWage(empHrs),
        toString() {
            return '\nDay' + this.dayNum + ' => Working Hours is ' + this.dailyHours + ' And Wage Earned = ' + this.dailyWage;
        },
    });
}

console.log("Daily Hours Worked and Wage Earned: " + empDailyHrsAndWageArr);

