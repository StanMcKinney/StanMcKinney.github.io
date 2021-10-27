var class1 = "Fin Lit";
alert ("Your bout to enter grades for Fin Lit");
var class1Average = getTest();
var class1LetterGrade = letterGrade(class1Average);

var class2 = "PE";
alert ("Your bout to enter grades for PE");
var class2Average = getTest();
var class2LetterGrade = letterGrade(class2Average);

var class3 = "Art 2";
alert ("Your bout to enter grades for Art 2");
var class3Average = getTest();
var class3LetterGrade = letterGrade(class3Average);

var class4 = "JavaScript";
alert ("Your bout to enter grades for JavaScript");
var class4Average = getTest();
var class4LetterGrade = letterGrade(class4Average);

//Call functions below here

function getTest() {
 var test1 = Number(prompt("What grade you got on test 1"));
 var test2 = Number(prompt("What grade you got on test 2"));
 var test3 = Number(prompt("What grade you got on test 3"));
 var test4 = Number(prompt("What grade you got on test 4"));
 var average = (test1+test2+test3+test4)/4; 
 document.write ("<h3>" + average + "</h3>");
 return average;
}

function letterGrade(grade){
 
  var letterGrade;
  var GPA;
  if (grade >= 93) {
    letterGrade = "A";
    GPA = 4.0;
}
else if (grade >= 85) {
   letterGrade = "B";
    GPA = 3.0;
}
else if (grade>=75) {
   letterGrade = "C";
    GPA = 2.0;
}
else if (grade>=67) {
   letterGrade = "D";
    GPA = 1.0;
}
else {
   letterGrade = "F";
    GPA = 0;
}
  
document.write("<li>" +letterGrade + "</li>");
  return GPA;
}
