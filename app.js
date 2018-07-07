

		//OLD TRIAL PROMPT METHOD
		//var fontCharacteristic = prompt("I want a font more: " ,"");
		//var fontInput = prompt("than","");
		


		//Setting up the variables
		var fontCharacteristic;
		var fontInput;

		function setCharacteristic(){
			fontCharacteristic = document.getElementById('characteristic').value;
			
		}

		function setFont(){
			fontInput = document.getElementById('font').value;
		
		}
	

		var seriousnessArray = ["none","Comic Sans", "Arial", "Courier", "Open Sans", "Book Antiqua", "Helvetica"];

		var result = [];
		var index;
		var indexOfNewArray = 0;





		//algorithm
		function algo(){
		

			/*if(fontCharacteristic == "formal"){

				//seriousnessarray

			}else if (fontCharacteristic == "informal"){

				//informalarray

			}else if (fontCharacteristic == "serif"){

				//serifarray

			} else if (fontCharacteristic == "sansserif"){

				//sansserifarray

			}else{
				//nothing.
			}
*/










		//if the font is in the list of most to least serious fonts, we get the index. Else, we tell the user we have no suggestions.
		if ($.inArray(fontInput, seriousnessArray)){

			for (var i = 0; i < seriousnessArray.length; i++){
				if (seriousnessArray[i] == fontInput){
					index = i;
				}
			}
		} else {
		
		}

		//We then get the fonts who are more or less of what the user wanted, and create a resulting array with it

		function results(){ // CHANGE THIS TO APPLY TO ANY OF THE OTHER CHARACTERISTICS^^^ maybe
							// a function that returns... function noneFound(){ document.write("Sorry, we could not find fonts more " + fontCharacteristic +  " than " + fontInput);}

			if (index >= seriousnessArray.length - 1){ //if the font the user looked up is the most serious already
/* new
				var y = document.createElement('p');
				y.textContent = "Sorry, we could not find fonts more " + fontCharacteristic +  " than " + fontInput;
				document.body.appendChild(y);
*/
		document.write("Sorry, we could not find fonts more " + fontCharacteristic +  " than " + fontInput);


			} else { // if it isn't, it prints the rest
					document.write("Fonts more " + fontCharacteristic +  " than " + fontInput + ": ");
					for (var i = index + 1; i < seriousnessArray.length; i++){
					result[indexOfNewArray] = seriousnessArray[i];
					indexOfNewArray++;
					}
				
			
			}
				document.write(result + "."); // change to a for loop to format the results better for each, the name, a comma, and a space
		}


		results();  //prints them

		
		/*
		PSEUDOCODE

		function obtainResult(){
			if (user chooses "more serious than"){
				seriousnessResults();
			} else if (user chooses "more informal than"){
				informalResults();
			} else if (user chooses "more serif than"){
				serifResults();
			} else if (user chooses "less serif than"){
				sansSerifResults();
			}

		}	

		*/
	}
