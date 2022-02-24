// padTo2Digits and formatDate copied from internet:
// https://bobbyhadz.com/blog/javascript-format-date-yyyy-mm-dd-hh-mm-ss
function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

function formatDate(date) {
    return (
        [
            date.getFullYear(),
            padTo2Digits(date.getMonth() + 1),
            padTo2Digits(date.getDate()),
        ].join('-') +
        ' ' +
        [
            padTo2Digits(date.getHours()),
            padTo2Digits(date.getMinutes()),
            padTo2Digits(date.getSeconds()),
        ].join(':')
    );
}
export default function getCurrentDateTime() {
    // returns datetime as str in mysql format
    date = new Date();
    return formatDate(date);
}