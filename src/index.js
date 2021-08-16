module.exports = function toReadable(number) {
    let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let ten = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let hundred = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number >= 0 && number < 10) return (units[number]);
    if (number > 9 && number < 20) return (ten[number % 10]);
    if (number > 19 && number < 100) {
        let first = Math.floor(number / 10);
        let second = number % 10;
        if (second !== 0) return (hundred[first] + ' ' + units[second])
        else return hundred[first];
    }

    if (number > 99 && number < 1000) {
        let hundreds = number % 100;
        let first = Math.floor(number / 100);
        let second = Math.floor(hundreds / 10);
        let third = hundreds % 10;
        if (hundreds === 0) return (units[first] + ' hundred')
        if (0 < hundreds && hundreds < 10)
            return (units[first] + ' hundred ' + units[hundreds])
        if (9 < hundreds && hundreds < 20)
            return (units[first] + ' hundred ' + ten[hundreds % 10])
        if (19 < hundreds && hundreds < 100) {
            if (third === 0) return (units[first] + ' hundred ' + hundred[second])
            if (third > 0) return (units[first] + ' hundred ' + hundred[second] + ' ' + units[third])
        }
    }
}