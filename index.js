/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

/*eslint-disable */
let allWagesFor = function () {
  let eligibleDates = this.timeInEvents.map(function (e) {
      return e.date
  })

  let payable = eligibleDates.reduce(function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d)
  }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
    return payable;
};
/* eslint-enable */

/* eslint-disable func-names */
const createEmployeeRecord = (employeeData) => {
  const [firstName, familyName, title, payPerHour] = employeeData;
  return {
    firstName,
    familyName,
    title,
    payPerHour,
    timeInEvents: [],
    timeOutEvents: [],
  };
};

const createEmployees = employees => employees.map(createEmployeeRecord);

const createTimeInEvent = function (timestamp) {
  const [date, hour] = timestamp.split(' ');
  this.timeInEvents = [...this.timeInEvents, {
    type: 'TimeIn', date, hour: parseInt(hour, 10),
  }];
  return this;
};

const createTimeOutEvent = function (timestamp) {
  const [date, hour] = timestamp.split(' ');
  this.timeOutEvents = [...this.timeOutEvents, {
    type: 'TimeOut', date, hour: parseInt(hour, 10),
  }];
  return this;
};

const hoursWorkedOnDate = function (date) {
  const timeIn = this.timeInEvents.find(e => e.date === date).hour;
  const timeOut = this.timeOutEvents.find(e => e.date === date).hour;
  return (timeOut - timeIn) / 100;
};

const wagesEarnedOnDate = function (date) {
  return hoursWorkedOnDate.call(this, date) * this.payPerHour;
};

const createEmployeeRecords = function (employees) {
  return employees.map(e => createEmployeeRecord(e));
};

const findEmployeebyFirstName = function (employees, firstName) {
  return employees.find(e => e.firstName === firstName);
};

const calculatePayroll = function (employees) {
  return employees.reduce((total, current) => total += (allWagesFor.call(current)), 0);
};
