function average(array) {
    var sum = 0;
    array.forEach(function(element) {
        sum += element;
    });
    var average = Math.round(sum / array.length);
    return average;
}
// Using the function:
var scores1 = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores1));
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2));
