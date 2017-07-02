function bottleWithMoney(value) {
    var total = Math.floor(value / 2);
    var change = value % 2;

    var backs = {
        total: total,
        change: change
    };

    return backs; 
}

function bottleWithCaps(caps) {
    var total = Math.floor(caps / 4);
    var change = Math.floor(caps % 4);
    
    var backs = {
        total: total,
        change: change
    };

    return backs; 
}

function bottleForEmptyBottles(bottles) {
    var total = Math.floor(bottles / 2);
    var change = Math.floor(bottles % 2);

    var backs = {
        total: total,
        change: change
    };

    return backs; 
}

function calculateBottles(money, bottles, caps) {
    var totalBottles = 0;

    var totalWithMoney = bottleWithMoney(money);
    var totalWithBottles = bottleForEmptyBottles(bottles);
    var totalWithCaps = bottleWithCaps(caps);

    totalBottles += totalWithBottles.total + totalWithCaps.total + totalWithMoney.total;
    var totalBottlesRemaining = totalWithBottles.change;
    var totalCapsRemaining = totalWithCaps.change;

    console.log("You have bought/changed a total of: " + totalBottles);
    console.log("\nBottles bought with money = " + totalWithMoney.total);
    console.log("Your change is: " + totalWithMoney.change);
    console.log("\nBottles changed with empty bottles = " + totalWithBottles.total);
    console.log("You have: " + totalWithBottles.change + " empty bottles now");
    console.log("\nBottles changed with bottle caps = " + totalWithCaps.total);
    console.log("You have: " + totalCapsRemaining + " bottle caps now");
    console.log("\nAfter your consume all you will have remaining for recycle:\nBottles: " + Number(totalBottlesRemaining + totalBottles));
    console.log("Caps: " + Number(totalCapsRemaining + totalBottles));

    
}


calculateBottles(11,12, 13);