module.exports = function toReadable(number) {
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number === 0) {
        return units[0];
    }

    let result = '';

    // Handle hundreds place
    if (Math.floor(number / 100) > 0) {
        result += units[Math.floor(number / 100)] + ' hundred';
        number %= 100;
        if (number > 0) {
            result += ' ';
        }
    }

    // Handle tens and units place
    if (number > 0) {
        if (number < 10) {
            result += units[number];
        } else if (number < 20 && number > 10) {
            result += teens[number - 11];
        } else if (number === 10 || (number % 10 === 0 && number < 100)) {
            result += tens[number / 10 - 1];
        } else {
            result += tens[Math.floor(number / 10) - 1];
            if (number % 10 > 0) {
                result += ' ' + units[number % 10];
            }
        }
    }

    return result;
}
