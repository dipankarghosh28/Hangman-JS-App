var app = angular.module("HangManApp", []);
app.controller("GameController", ['$scope',function($scope,$timeout){
//app.controller(",[function($dip)){}])
var words= ["rat","cat","mat"];
$scope.incorrectLettersChosen =[];
$scope.correctLettersChosen=[];
//camel code way of representing a variable
//L&C representation
var guesses = 6;// total number of guesses we have in our program.
$scope.guesses =6;
$scope.displayWord = '';
$scope.input = {
    letter : '' // ?
}
//var app = angular.module("Han",[]);
//app.controller("Controller", ['$scope', function($scope){}])

var selectRandomWord = function(){
    var index = Math.round(Math.random()* words.length);
    return words[index];
}
var newGame = function(){
    $scope.incorrectLettersChosen = [];
    $scope.correctLettersChosen = [];
    $scope.guesses = 6;
    $scope.displayWord = '';
    selectedWord = selectRandomWord();
    //another function
    var tempDisplayWord ='';
    console.log(selectedWord);
    for (var i = 0; i < selectedWord.length; i++)
    {
        tempDisplayWord +='#';
    }
    console.log(tempDisplayWord);
    $scope.displayWord = tempDisplayWord;
    console.log(selectedWord);
}
$scope.letterChosen = function(){
console.log("working!");
console.log("Hi Dipankar here !!");
for(var i=0; i< $scope.correctLettersChosen.length; i++){
    if($scope.correctLettersChosen[i].toLowerCase()==$scope.input.letter.toLowerCase())
    {
        $scope.input.letter= "";
        return;
    }
}
for(var i=0; i< $scope.incorrectLettersChosen.length; i++){
    if($scope.incorrectLettersChosen[i].toLowerCase()==$scope.input.letter.toLowerCase())
    {
        $scope.input.letter= "";
        return;
    }
}
var correct = false;
for(var i=0; i< selectedWord.length; i++){
   if(selectedWord[i].toLowerCase()==$scope.input.letter.toLowerCase())
   {
       $scope.displayWord = $scope.displayWord.slice(0,i)+ $scope.input.letter.toLowerCase() + $scope.displayWord.slice(i+1)
    correct = true;
    }
}

if(correct)
{
    $scope.correctLettersChosen.push($scope.input.letter.toLowerCase());
}
else{
    $scope.guesses--;
    $scope.incorrectLettersChosen.push($scope.input.letter.toLowerCase());
}
$scope.input.letter="";
if($scope.guesses==0){
    alert("you lost!");
    $timeout(function()
    {
        newGame();
    },500);
}
if($scope.displayWord.indexOf("#")==-1){
    alert("You won !!");
    $timeout(function()
    {
        newGame();
    },500);
}
}
newGame();
//var app = angular.module("",[]);
$scope.demo="somestring";
//app.controller("", ['$sco[e', function($scope){}]])
//$scope.demo ="something";
}]);
//mv* framework
//can hold multiple controllers.
// controlelr is basically the photographer
//camera is the view
//object is data
