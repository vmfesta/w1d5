function checkProfit(arr) {
    var profit = 0;
    var highest = 0;
    var highestIndex = 0;
    var lowest = 0;
    var lowestIndex = 0;
    for (var i = 0; i < arr.length; i++) {
        var value = arr[i];
        if(i === 0) {
            highest = value;
            highestIndex = 0;
            lowest = value;
        } else {
            if(value > highest && i > highestIndex) {
                highest = value;
                highestIndex = i;
            }
        }
    }
    for (var i = 0; i < arr.length; i++) {
        var value = arr[i];
        if(value < lowest && i < highestIndex) {
            lowest = value;
        }
    }    
    profit = highest - lowest;
    if(profit > 0) {
        return profit;
    } 
    return -1;
}
checkProfit([10, 2, 3, 4, 10, 20]);
module.exports = checkProfit;
