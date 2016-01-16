//alert("CONNECTED!");
// maak elke 'square' een andere kleur
var numSquares = 6;
var colors = [];
var squares = document.querySelectorAll('.square');
var resultaat = document.querySelector("#resultaat");
var colorPicked = document.getElementById('pickedColor');
var pickColor = pickRandomColor();
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
initializeAll();
// event handler voor New buttn
resetButton.addEventListener("click", function(){
	initializeAll();
	this.textContent = "Nieuwe kleuren"
});

// event handler voor easy buttn
easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	initializeAll();
});
// event handler voor New buttn
hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	initializeAll();
});

// add listeners to squares
for(var i=0; i<squares.length; i++){
	squares[i].addEventListener("click", function(){
		// get clicked color
		clickedColor =  this.style.background;
		if(clickedColor === pickColor){
			resultaat.textContent = "Dat is 'm!";
			resetButton.textContent = "Nog een keer?"
			setAllColors();

		} else {
			this.style.background = "#232323";
			resultaat.textContent = "Nope..."
			//alert("nope...");
		};
	});
};


function initializeAll(){
	// genereate new colors
	colors = generateRandCols(numSquares);
	// get a new color to pick 
	pickColor = pickRandomColor();
	// change colors of elements
	setColors();
	// update header
	colorPicked.textContent = pickColor;
	// reset header background also
	h1.style.background = "";
	// bericht weghalen
	resultaat.textContent = "";

}

function setColors(){
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		} else {
			squares[i].style.display = "none";
		}
	};
};

// als het goed is, alle kleuren veranderen in de juiste 
function setAllColors(){
	for (i=0; i<squares.length; i++){
		squares[i].style.background = pickColor;
	}
	h1.style.background = pickColor;
}


function pickRandomColor(){
	// get a random element from colors array
	var randCol = (Math.floor(Math.random() * colors.length))
	return colors[randCol];
};

function generateRandCols(num){
	// make array
	var arr = [];
	// add num colors to array
	for(var i = 0; i < num; i++){
		// get random color for each element
		arr[i] = genColor();
		squares[i].style.display = "block";
	};
	//return array
	return arr;
};

function genColor(){
	// initialize return string
	var retVal ="rgb("
	for(var i=0; i<3; i++){
		// gererate random 0 - 255
		retVal += Math.floor(Math.random() * 256);
		// add , or )
		if(i<2){retVal += ", "} else {retVal += ")"} ;
	}
	// return the string
	return retVal;
};