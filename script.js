a();

 function a(){
alert("I’m invoked!");
b(); 
}
 //--------------------------------------------------------------------------------------

function b(){
alert("I'm JavaScript!");
alert('Hello') // this line is not having semicolon
               //this line does not having ""
alert(`World`)         //this line does not having ""
alert(3 +1+ 2);         //the concatination of line is improper
 c();
}
//-----------------------------------------------------------------------------------------

function c(){

let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+" "+lname;
alert( admin );
d();
}
//------------------------------------------------------------------------------------------

function d(){
let fname=10.5,name=9; 
fname = "Guvi";
let lname = "geek"
name = fname+" "+lname;
alert( 'hello ${name}' );
e();
}
//----------------------------------------------------------------------------------------------

function e(){
let a = parseInt(prompt("First number?"));
let b = parseInt(prompt("Second number?"));
alert(a+b);
f();
}
//-----------------------------------------------------------------------------------------------

function f(){
var a = 2 > 12;
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}
g();
}
//------------------------------------------------------------------------------------------------

function g(){
let a = parseInt(prompt("Enter a character?"));
//Don't modify any code below this
if (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}
h();
}
//----------------------------------------------------------------------------------------------------
function h(){
let value = parseInt(prompt('How many runs you scored in this ball'));
if (value === 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}
i();
}
//------------------------------------------------------------------------------------------------------

function i(){
let message;
let lock ="";
//Dont change any code below this 
if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
  console.log(message);
j();
}
//---------------------------------------------------------------------------------------------------

function j(){

let message;
let lock = null;
//Dont change any code below this
if (lock && " " || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);
k();
}
//-----------------------------------------------------------------------------------------------------

function k(){
let num=10;
for(var i =1;i<=10;i++){
    console.log(i);
}
l();
}
//---------------------------------------------------------------------------------------------------

function l(){
for (let num = 2; num <= 20; num += 2) {
  console.log(num)
}
m();
}
//-------------------------------------------------------------------------------------------------

function m(){
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}
n();
}
//-----------------------------------------------------------------------------------------------

function n(){
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 1; i < 11; i--) {
 new_string += numsArr[i] 
}
console.log(new_string);
o();
}
//------------------------------------
function o(){
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i < 11; i++) {
 new_string += numsArr[i] +"," 
}
console.log(new_string);
p();
}
//----------------------------------------------
function p(){
var new_string = "";
 
for (var i = 11; i > 0; i-- ) {
 new_string += i+" ";
}
console.log(new_string);
q();
}
//---------------------------------------------------------
function q(){
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i] ="even"
 }
}
r();
}
//---------------------------------------------------------------
function r(){
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(i %2 == 0 )
 {
 numsArr[i] = "even"
 }
}
console.log(numsArr);
s();
}
//------------------------------------------------------------------------
function s(){
var sum=0
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {

 sum += numsArr[i]
}
console.log(sum);
t();
}
//-----------------------------------------------------------------------------------
function t(){
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <=numsArr.length; i++) {
 if(numsArr[i] %2 ==0){

 sum += numsArr[i]

 }
}
console.log(sum);
u();
}
//----------------------------------------------------------------------------
function u(){
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=100;
for (var i = 0; i <=10; i++) {
 if(numsArr[i]%2==0)
 {
 sum += numsArr[i]
 }
 else
 {
 sum -= numsArr[i]
 }
}
console.log(numsArr);
 v();
}
//----------------------------------------------------------------------------------
function v(){
    let aa = (f,s,t) => {
 
        console.log(f,s,t);
        if(f>s && f>t){
        console.log(f)}
        else if(s>f && s>t){
        console.log(s)}
        else{
        console.log(t)}
       }
       aa(1,2,3);
    }
//---------------------------------------------------------------------------------------------
