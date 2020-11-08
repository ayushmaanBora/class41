function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);

 var name = "ayushmaan";
 console.log(name.length);
 console.log(name.toUpperCase());
 //You can also convert a string into a number:
 console.log( parseInt("123"));
console.log( "Hi" + "Friend");
console.log( "a" / "b");

 //Comparison operators (>,<,>=,<=,===, !=) also 
 if(3>2){
	console.log("Happy")
}
else{
	console.log("Not Happy")
}

//...................................


var name = "My name";

switch(name) {  
case  "My name":  
console.log("Condition 1");  
break;  
case  "my Name":  
console.log("Condition 2");  
break;  
default:  
console.log("None of the conditions are true");
}

//....................

for(var i=0; i<=5; i++){
	console.log(i)
}
//..........................
var i =0
while (i<=5){
	console.log(i)
	i=i+1
}
//......................................................

var friends = ["friend1","friend2","friend3"]
console.log(friends[0]);
///................................................
for(var index in friends){
  console.log(friends[index])
  console.log(index);
}
///,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

friends.push("friend4")
console.log(friends);
friends.pop();

//////////////......///./././././.\




}
function circumference(radius){
	var circumference = 2 * 3.14 * radius
	return circumference
}

function draw() {
  background(255,255,255);  

  circumference(5)
  drawSprites();

}

