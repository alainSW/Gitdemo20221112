/**
 * http://usejsdoc.org/
 */

 function add(a,b){
	 return a+b;
 }

 console.log(add(2,3));

 /**
  * Array
 */

 var a = 4;
 var b =["hello", "word", "40", "goodbye"];

 for(var i=0; i<b.length;i++){
	 console.log(b[i]);
 }

 console.log("\n");

 var c = new Array();
 c[0]="goobye";
 c[1] ="40";
 c[2] = "word";
 c[3] = "hello";
console.log("\n");

 // Example 3

 var name = "Alain";
 console.log(name.charAt(0));

 var newName = name.concat("Shetty");
 console.log(newName);
 console.log(name.indexOf("a"));
 console.log(name.slice(1, 3));
 // starting index is inclusive  - ending index is eclusiv
 console.log(name.toUpperCase());

 var name  = "Alain";

 console.log(name.trim());


 var name2 = new String("Alain") // String Objekt deklaration





