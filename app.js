var fontCharacteristic = prompt("I want a font more: " ,"");
		var fontInput = prompt("than","");

		var seriousnessArray = ["Comic Sans", "Arial", "Courier", "Open Sans", "Book Antiqua", "Helvetica"];

		var result = [];
		var index;
		var indexOfNewArray = 0;

		//if the font is in the list of most to least serious fonts, we get the index. Else, we tell the user we have no suggestions.
		if ($.inArray(fontInput, seriousnessArray)){

			for (var i = 0; i < seriousnessArray.length; i++){
				if (seriousnessArray[i] == fontInput){
					index = i;
				}else{

				}
			}
		} else {
			document.write("Sorry, we could not find fonts more " + fontCharacteristic + " than " + fontInput + ".");
		}

		//We then get the fonts who are more or less of what the user want it, and create a resulting array with it

		for (var i = index + 1; i < seriousnessArray.length; i++){
			if (index >= seriousnessArray.length-1){
				document.write("Sorry, we could not find fonts more" + fontCharacteristic +  " than " + fontInput + ".");
			}
			result[indexOfNewArray] = seriousnessArray[i];
			indexOfNewArray++;
		}

		//we print the suggestions
		document.write(result);
