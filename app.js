//Setting up the variables
		var fontCharacteristic;
		var fontInput;

		//Sets the characteristic according to what the user chooses on the 'select' menu.
		function setCharacteristic(){
			fontCharacteristic = document.getElementById('characteristic').value;
			
		}

		//Sets the font according to what the user chooses on the 'select' menu.
		function setFont(){
			fontInput = document.getElementById('font').value;
		
		}

//font arrays
		var seriousnessArray = ["none", "Comic Sans", "Arial", "Courier", "Open Sans", "Book Antiqua", "Helvetica"];
		var informalArray = ["none", "Helvetica", "Book Antiqua", "Open Sans", "Courier", "Arial", "Comic Sans"];
		var serifArray = [];
		var sansSerifArray = [];

//Helper variables
		//var result = []; //Array with the results(output).
		var index;		//Index of where in the original array the results list should start.
		var indexOfNewArray = 0; //Helps initialize and fill the result[] array.



//algorithm
		
		//noneFound(); runs if there are no fonts to be suggested.
		function noneFound(){ 
			var noResults = "Sorry, we could not find fonts more " + fontCharacteristic +  " than " + fontInput + ".";
   			var newParagraph = document.createElement('p');
   			newParagraph.textContent = noResults;
   			document.getElementById("resultDiv").appendChild(newParagraph);
   			
    	}

		//createResultsArray(arrayType); creates the new array with the results -> Creates the output.
		function createResultsArray(arrayType){
			if ($.inArray(fontInput, arrayType)){

					for (var i = 0; i < arrayType.length; i++){
						if (arrayType[i] == fontInput){
							index = i;
						}
					}
				} 
		}


		// results(chosenArray); prints the output.
		function results(chosenArray){ 

			if (index >= chosenArray.length - 1){ //if the font the user looked up is the most serious already

			noneFound();


			} else { // if it isn't, it prints the rest

					var result = [];
					for (var i = index + 1; i < chosenArray.length; i++){
					result[indexOfNewArray] = chosenArray[i];
					indexOfNewArray++;
					}

			var fontsMoreEtc = "Fonts more " + fontCharacteristic +  " than " + fontInput + ": " + result + ".";
   			var paragraph = document.createElement('p');
   			paragraph.textContent = fontsMoreEtc;
   			document.getElementById("resultDiv").appendChild(paragraph);

  
   			result = 0;
   			indexOfNewArray = 0;
    }
				
			
			}
			
		


		function algo(){ //Change this name once I get rid of the original results function.
		

			if(fontCharacteristic == "formal"){ //If the user looks for more formal fonts, we create the serious results array 


				createResultsArray(seriousnessArray);
				results(seriousnessArray);
				
			} else if (fontCharacteristic == "informal"){ //If the user looks for more formal fonts, we create the informal results array 

				createResultsArray(informalArray);
				results(informalArray);

			}else if (fontCharacteristic == "serif"){ //If the user looks for more formal fonts, we create the serif results array 

				createResultsArray(serifArray);
				results(serifArray);

				
			} else if (fontCharacteristic == "sansserif"){ //If the user looks for more formal fonts, we create the sans serif results array 

				createResultsArray(sansSerifArray);
				results(sansSerifArray);

			
			}else{
				//nothing.
			}


	}
