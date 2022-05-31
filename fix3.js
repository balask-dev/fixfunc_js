1.
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 1; i < 11; i++) {
 new_string +=i +"";
}
console.log(new_string);
 
-------------------------------------------------------
2.
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = [];
 
for (var i = 1; i <= 11; i++) {
new_string.push(i)
}
console.log(new_string.toString());

------------------------------------------------------
3.
var new_string = "";
 
for (var i = 11; i > 0; i -- ) {
 new_string += i + " "
}
console.log(new_string);

------------------------------------------------------
4.
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=numsArr.length-1; i++) {
 if( i %2 == 1 )
 {
 numsArr[i] = "even"
 }
}
 console.log(numsArr);

------------------------------------------------------
5.
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=numsArr.length-1; i++) {
 if( i %2 == 0 )
 {
 numsArr[i] = "even"
 }

}
 console.log(numsArr);
------------------------------------------------------
6.
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum =0;;
for (var i = 0; i <=10; i++) {
 sum += numsArr[i]
}
console.log(sum);
-----------------------------------------------------
7.
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <=10; i++) {
 if(numsArr[i]%2==0){
 sum += numsArr[i]
}
}
console.log(sum)
-----------------------------------------------------
8.
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=100;
for (var i = 0; i <=numsArr.length-1; i++) {
 if(numsArr[i]%2!=1)
 {
 sum += numsArr[i]
}
 else
 {
 sum -= numsArr[i]
}
}
console.log(sum);
-----------------------------------------------------
9.
var numsArr = ["[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]"];
console.log(numsArr.join(" "))

 ----------------------------------------------------
10.
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=[];
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ )
     str_all +=inner_array[j]
}
console.log(str_all);
-------------------------------------------------------
11.
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var a = [];
 let reverse =""
a.push([ 6, 7, 8, 9, 10, 11].reverse());
a.push([1, 2, 3, 4, 5].reverse());
for (i=0; i < a.length; i++) {
   for (j = 0; j < a[i].length; j++) { 
     reverse += a[i][j] +"";
    } 
}
console.log(reverse)
-------------------------------------------------------
12.
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;
for (let i = 0; i < numsArr.length; i++) {
    var innerArrayLength = numsArr[i].length;
    for (let j = 0; j < innerArrayLength; j++) {
      if(numsArr[i][j]%2!=0) {
    sum_odd += numsArr[i][j]
      }else{
      sum_even += numsArr[i][j]
    }
    }
}

console.log(sum_odd);
console.log(sum_even);
 
