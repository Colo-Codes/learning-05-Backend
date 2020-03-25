function average(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    var average = Math.round(sum / array.length);
    console.log(average);
}
// Using the function:
var scores1 = [90, 98, 89, 100, 100, 86, 94];
average(scores1);
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores2);
