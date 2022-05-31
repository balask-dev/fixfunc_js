1.
let n = 123;
console.log(add(n));
function add(n)
{
let sum = 10;
for(var i=0;i<n.length;i++){
 sum+=n[i]
 }
 return sum;
}

Answer:
let n = 123;
function getSum(n)
{
    var sum = 0;
    while (n != 0) {
        sum = sum + n % 10;
        n = parseInt(n / 10);
    }
    return sum;
}
console.log(getSum(n));
------------------------------------------------------------
2.
var arr = [“guvi”, “geek”, “zen”, “fullstack”];
var ano = function(arro) {
 for (var i = 0; i <= arro.length; i++) {
 console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
 }
}
ano();

Answer:
var arr = ["guvi", "geek", "zen", "fullstack"];
var ano = function(arro) {
 for (var i = 0; i <= arr.length; i++) {
 console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
 }
}
ano();
-------------------------------------------------------------
3.
const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(num=>{
 for(let i=2;i<=num;i++){
 if(num%i===0)
 {
 return true;
 }
 }
 return num===1;
});
console.log(myPrime);

Answer:
const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(num=>{
 for(let i=2,s = Math.sqrt(num); i <= s;i++){
 if(num%i===0)
 {
 return false;
 }
 }
 return num>1;
});
console.log(myPrime);
----------------------------------------------------------------
4.
const num = [10, 20, 30, 40,50,60,70,80,90,100] 
const sum = (a, b) =>
 a + b
const sum = num.reduce(sum)
console.log(sum);

Answer:
const num = [10, 20, 30, 40,50,60,70,80,90,100] 
const sum = (a, b) =>a + b
const sum1 = num.reduce(sum)
console.log(sum1);
-----------------------------------------------------------------
5.
var arr = [“guvi”, “geek”, “zen”, “fullstack”];
(function() {
 for (var i = 0; i <= arr.length; i++) {
 console.log(arr[0][i].toUpperCase() + arr[i].substr(1));
 }
})();

Answer:
var arr = ["guvi", "geek", "zen", "fullstack"];
(function() {
 for (var i = 0; i <= arr.length; i++) {
 console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
 }
})();
------------------------------------------------------------------
6.
var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 === 0) {
 console.log(arr[i]);
 }}
})();

Answer:
var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 === 1) {
 console.log(arr[i]);
 }}
})();
-------------------------------------------------------------------
7.
(function(str){
 str1 = str.split(“ “).reverse().join(“”);
 console.log(str1); 
})(“abcd”)

Answer:
(function(str){
 str1 = str.split("").reverse().join("");
 console.log(str1); 
})
("abcd")
--------------------------------------------------------------------
8.
var res = function(arr){
 for(var i=0; i < arr.length; i++){
 newArr = [];
 if(newArr.indexOf(arr[i]) == -1) {
 newArr.push(arr[i]);
 } }
 console.log(newArr)
}
res([“guvi”,”geek”,”guvi”,”duplicate”,”geeK”])

Answer:
var res = function(arr){
 for(var i=0; i < arr.length; i++){
var newArr = [];
 if(newArr.indexOf(arr[i]) <0) {
 newArr.push(arr[i]);
 }}
 console.log(newArr)
}
res(["guvi","geek","guvi","duplicate","geeK"])
-----------------------------------------------------------------------
9.
var as=[12,34,5,6,2,56,6,2,1];
var s=as.reduce(function(a,c){
 if(c%2!=0)
 {
 return a+c;
 }
 return a;});
console.log(s);

Answer:
var as=[12,34,5,6,2,56,6,2,1];
var s=as.reduce(function(a,c){
 if(a%2!=1)
 {
 return a+c;
 }
 return a;});
console.log(s);
-------------------------------------------------------------------------
10.
aa = data=>{
 var a=data;
for(i=0;i<a.length-1;i++){
 var l='';
 var s=a[i+1]
 var b=a[i]
 l+=s
 l+=b
 i=i+1
}
if((a.length%2)!=0){
 l+=a[a.length-1]
}
console.log(l);
}
aa("123");

Answer:
aa = data=>{
 var a=data;
for(i=0;i<a.length-1;i++){
 var l='';
 var s=a[i+1]
 var b=a[i]
 l+=s
 l+=b
 i=i+2
}
if((a.length%2)!=0){
 l+=a[a.length-1]
}
console.log(l);
}
aa("1234");
