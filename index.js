var myArray = [1000]
for (var i = 1000; i >= 0; i -= 2) {
    myArray.push(i);
    if (i % 2 == 0) {
        console.log(i)
    }
}


var ourArray = [10000]
for (var i = 0; i <= 10000; i++) {
    ourArray.push(i);
    if (i = 2500) {
    alert('A quarter of the way there!')
    }
    if (i = 5000) {
    alert('Halfway there!')
    }
    if (i = 10000) {
    alert('The loop is done!')
    }
}

var topFive = ["iCarly", "Great Pretender", "Code Lyoko", "One Piece", "Attack on Titan"];
    console.log("My #1 favorite tv show is ", topFive[4])
    console.log("My #2 favorite tv show is ", topFive[3])
    console.log("My #3 favorite tv show is ", topFive[1])
    console.log("My #4 favorite tv show is ", topFive[2])
    console.log("My #5 favorite tv show is ", topFive[0])
