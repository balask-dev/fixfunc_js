1.
<!DOCTYPE html>
<html>
<body>
 <script>
 alert( “I'm JavaScript!');
 </script>
 Whats the error in this ?
</body>
</html>

Fixed:

<!DOCTYPE html>
<html>
<body>
 <script>
 alert("I'm JavaScript!");
 </script>
 Whats the error in this ?
</body>
</html>
-------------------------------------------------
2.
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
scripts.js
alert(“I'm invoked!”);

Fixed:
 <!DOCTYPE html>
<html>
<body>
 <script src=”scripts.js”></script> 
</body>
</html>
scripts.js
alert(“I'm invoked!”);
-------------------------------------------------------
3.
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>

script.js 
alert("I'm JavaScript!");  //alert
alert('Hello')  
alert(`Wor
 ld`)
alert(3 +
1
+ 2);  

-----------------------------------------------------------------------------------------------------
4.
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let fname=10.5; 
fname = "Guvi";
lname = "geek"
let name = fname+lname;
alert( 'hello ${name}' );

 Answer:
let fname = 10.5;
fname = "Guvi";
lname = "geek";
let name = fname + lname;
alert(`hello ${name}`); // use Tilt symbol
--------------------------------------------------------------
5
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>

script.js
let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+lname;
alert( admin ); 

Fixed:
script.js
let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+" "+lname;
alert( admin ); 

---------------------------------------------------------------
6.
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>

script.js
let a = prompt("First number?");
let b = prompt("Second number?");
alert(a + b);

Answer:
let a = prompt("First number?");
let b = prompt("Second number?");
alert(parseInt(a) + parseInt(b));
-----------------------------------------------------------------
7.
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>

script.js
var a = "2" > "12";
//Don't touch below this
if (a) {
  console.log("Code is Blasted") 
}
else
{
  console.log("Diffused") 
}

Answer:
var a = "2" < "12";
if (a) {
  console.log("Code is Blasted") 
}
else
{
  console.log("Diffused") 
}
-----------------------------------------------------------------
8
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let a = prompt("Enter a number?");
//Don't modify any code below this
if (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}
Answer:
let b = prompt("Enter a number?");
let a;
//Don't modify any code below this
if (a) {
  console.log("OMG it works for any number inc 0");
} else {
  console.log("Success"); // output is "Success"
}
------------------------------------------------------------------
9 
 <!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let value = prompt('How many runs you scored in this ball');
if (value === 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}
Answer:
let value = prompt("How many runs you scored in this ball");
if (parseInt(value) === 4) {
  console.log("You hit a Four");
} else if (parseInt(value) === 6) {
  console.log("You hit a Six");
} else {
  console.log("I couldn't figure out");
}
----------------------------------------------------------------------
10.
 <!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
// You cant change the value of the msg
let message;
if (null || 2 || undefined )
{
 let message = "welcome boss";
}
else
{
 let message = "Go away";
}
  console.log(message);
Answer:
let message;
if (message == null || message == 2 || message == undefined) {
  message = "welcome boss";
} else {
  message = "Go away";
}
console.log(message);
-------------------------------------------------------------------------
11.
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
//You are allowed to modify only one character 
for (let num = 2; num <= 20; num += 1) {
  console.log(num)
}
Answer:
for (let num = 2; num <= 20; num += 2) {
  console.log(num);
}


