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

	/*

	function printResults(chosenArray??){
		for (var i = 0, i<chosenArray.length-1, i++){
			
			print object at i index.pic
			print object at i index.linkto
			new line
			i++

		}
	}
	*/



//OBJECTS

	var ComicSansMS = {
		name: "Comic Sans MS",
		link: "",
		img: "",
	}

	var Forte = {
		name: "Forte",
		link: "",
		img: ""
	}

	var Luna = {
		name: "Luna",
		link: ,
		img:
	}

	var BrushScriptMTItalic = {
		name: "Brush Script MT Italic",
		link: ,
		img:
	}

	var FreestyleScript ={
		name: "Freestyle Script",
		link: ,
		img:
	}

	var Mistral = {
		name: "Mistral",
		link: ,
		img:
	}

	var HarlowSolidItalic = {
		name: "Harlow Solid Italic",
		link: ,
		img:
	}


	var Impact = {
		name: "Impact", 
		link: ,
		img:
	}

	var Bauhaus93 = {
		name: "Bauhaus 93",
		link: ,
		img:
	}

	var Haettenschweiler = {
		name: "Haettenschweiler",
		link: ,
		img:
	}

	var Muskaters = {
		name: "Muskaters",
		link: ,
		img:
	}

	var HighTide = {
		name: "High Tide",
		link: ,
		img:
	}


	var Bebas = {
		name: "Bebas",
		link: ,
		img: 
	}

	var LemonMilk = {
		name: "LemonMilk",
		link: ,
		img: ,

	}

	var Code = {
		name: "Code",
		link: ,
		img: ,
	}

	var CocomatLight ={
		name "Cocomat Light",
		link:,
		img:
	}

	var BerlinSansFB = {
		name: "Berlin Sans FB",
		link:,
		img:,
	}

	var museoslab500 = {
		name: "museo slab 500",
		link:,
		img:
	}


	var Consolas = {
		name: "Consolas",
		link:,
		img:
	}


	var Frutiger = {
		name: "Frutiger",
		link:,
		img:
	}

	var Calibri = {
		name: "Calibri",
		link: ,
		img: 
	}

	var Candara = {
		name: "Candara",
		link: ,
		img:
	}

	var Myriad = {
		name: "Myriad",
		link: ,
		img: ,
	}

	var CalistoMT ={
		name: "Calisto MT",
		link: ,
		img: ,
	}


	var CalifornianFB = {
		name: "CalifornianFB",
		link:,
		img:
	}


	var Gravity = {
		name: "Gravity",
		link: ,
		img:
	}

	var OpenSans = {
		name: "Open Sans",
		link: ,
		img:
	}

	var Raleway = {
		name: "Raleway",
		link: ,
		img:
	}

	var BlairITC ={
		name: "Blair ITC",
		link: ,
		img:
	}


	var Cocon = {
		name: "Cocon",
		link: ,
		img:
	}

	var Agent = {
		name: "Agent",
		link: ,
		img:
	}

	var CourierNew = {
		name: "Courier New",
		link: ,
		img:
	}

	var Arial = {
		name: "Arial",
		link: ,
		img: 
	}

	var Centaur = {
		name: "Centaur",
		link:,
		img:
	}

	var GillSans = {
		name: "Gill Sans",
		link:,
		img:
	}

	var MinionPro = {
		name: "Minion Pro",
		link:,
		img:
	}

	var Verdana = {
		name: "Verdana",
		link: ,
		img:
	}


	var LetterGothicstd = {
	  	name: "Letter Gothic std",
	  	link: ,
	  	img:
	  }


	var EncodeSansCondensed = {
	  	name: "Encode Sans Condensed",
	  	link: ,
	  	img:
	  }


	var Montserrat = {
		name: "Montserrat",
		link: ,
		img:
	}

	var Roboto = {
		name: "Roboto",
		link: ,
		img:
	}

	var DIN = {
		name: "DIN",
		link: ,
		img:
	}

	var TimesNewRoman = {
		name: "Times New Roman",
		link: ,
		img:
	}

	var CenturyGothic = {
		name: "Century Gothic",
		link: ,
		img:
	}

	var FranklinGothicBook = {
		name: "Franklin Gothic Book",
		link: ,
		img:
	}

	var BookAntiqua = {
		name: "Book Antiqua",
		link: ,
		img:
	}

	var Garamond = {
		name: "Garamond",
		link:,
		img:,
	}

	var Georgia = {
		name: "Georgia",
		link:,
		img:,
	}

	var Avenir = {
		name: "Avenir",
		link: ,
		img:
	}

	var FFMetaProHairline = {
		name: "FF Meta Pro Hairline",
		link: ,
		img:
	}

	

	var Univers = {
		name: "Univers",
		link: ,
		img:
	}

	var Futura = {
		name: "Futura",
		link: ,
		img:
	}

	var Elephant = {
		name: "Elephant",
		link:,
		img:
	}

	var BodoniMT = {
		name: "Bodoni MT",
		link: ,
		img:
	}

	var ModernNo20 = {
		name: "Modern no. 20",
		link: ,
		img:

	}
	

	var Didot = {
		name: "Didot",
		link: ,
		img:
	}

	var Trajan = {
		name: "Trajan",
		link:,
		img:	
	}

	var MarbreSans = {
		name: "Marbre Sans",
		link: ,
		img:
	}
	
	var BickhamScript = {
		name: "Bickham Script",
		link: ,
		img:
	}
	
	/*
	ARRAYS -> make the objects for each and then the arrays
						Array lists:

-seriousnessArray:
	name: Comic Sans MS, link: , img:
	name: Forte, link: , img:
	name: Luna, link: , img:
	name: Brush Script MT Italic, link: , img:
	name: Freestyle Script, link: , img:
	name: Mistral, link: , img:
	name: Harlow Solid Italic, link: , img:
	name: Impact, link: , img:
	name: Bauhaus 93, link: , img:
	name: Haettenschweiler, link: , img:
	name: Muskaters, link: , img:
	name: High Tide, link: , img:
	name: Bebas, link: , img:
	name: LemonMilk, link: , img:
	name: Code, link: , img:
	name: Cocomat Light, link: , img:
	name: Berlin Sans FB, link: , img:
	name: museo slab 500, link: , img:
	name: Consolas, link: , img:
	name: Frutiger, link: , img:
	name: Calibri, link: , img:
	name: Candara, link: , img:
	name: Myriad, link: , img:
	name: Calisto MT, link: , img:
	name: Californian FB, link: , img:
	name: Gravity, link: , img:
	name: Open Sans, link: , img:
	name: Raleway, link: , img:
	name: Blair ITC, link: , img:
	name: Cocon, link: , img:
	name: Agent, link: , img:
	name: Courier New, link: , img:
	name: Arial, link: , img:
	name: Centaur, link: , img:
	name: Gill Sans, link: , img:
	name: Minion Pro, link: , img:
	name: Verdana, link: , img:
	name: Letter Gothic std, link: , img:
	name: Encode Sans Condensed, link: , img:
	name: Montserrat, link: , img:
	name: Roboto, link: , img:
	name: DIN, link: , img:
	name: Times New Roman, link: , img:
	name: Century Gothic, link: , img:
	name: Franklin Gothic Book, link: , img:
	name: Book Antiqua, link: , img:
	name: Garamond, link: , img:
	name: Georgia, link: , img:
	name: Avenir, link: , img:
	name: FF Meta Pro Hairline, link: , img:
	name: Univers, link: , img:
	name: Futura, link: , img:
	name: Elephant, link: , img:
	name: Bodoni MT, link: , img:
	name: Modern no. 20, link: , img:
	name: Didot, link: , img:
	name: Trajan, link: , img:
	name: Marbre Sans, link: , img:
	name: Bickham Script, link: , img:

-informalArray
	name: Bickham Script, link: , img:
	name: Marbre Sans, link: , img:
	name: Trajan, link: , img:
	name: Didot, link: , img:
	name: Modern no. 20, link: , img:
	name: Bodoni MT, link: , img:
	name: Elephant, link: , img:
	name: Futura, link: , img:
	name: Univers, link: , img:
	name: FF Meta Pro Hairline, link: , img:
	name: Avenir, link: , img:
	name: Georgia, link: , img:
	name: Garamond, link: , img:
	name: Book Antiqua, link: , img:
	name: Franklin Gothic Book, link: , img:
	name: Century Gothic, link: , img:
	name: Times New Roman, link: , img:
	name: DIN, link: , img:
	name: Roboto, link: , img:
	name: Montserrat, link: , img:
	name: Encode Sans Condensed, link: , img:
	name: Letter Gothic std, link: , img:
	name: Verdana, link: , img:
	name: Minion Pro, link: , img:
	name: Gill Sans, link: , img:
	name: Centaur, link: , img:
	name: Arial, link: , img:
	name: Courier New, link: , img:
	name: Agent, link: , img:
	name: Cocon, link: , img:
	name: Blair ITC, link: , img:
	name: Raleway, link: , img:
	name: Open Sans, link: , img:
	name: Gravity, link: , img:
	name: Californian FB, link: , img:
	name: Calisto MT, link: , img:
	name: Myriad, link: , img:
	name: Candara, link: , img:
	name: Calibri, link: , img:
	name: Frutiger, link: , img:
	name: Consolas, link: , img:
	name: museo slab 500, link: , img:
	name: Berlin Sans FB, link: , img:
	name: Cocomat Light, link: , img:
	name: Code, link: , img:
	name: LemonMilk, link: , img:
	name: Bebas, link: , img:
	name: High Tide, link: , img:
	name: Muskaters, link: , img:
	name: Haettenschweiler, link: , img:
	name: Bauhaus 93, link: , img:
	name: Impact, link: , img:
	name: Harlow Solid Italic, link: , img:
	name: Mistral, link: , img:
	name: Freestyle Script, link: , img:
	name: Brush Script MT Italic, link: , img:
	name: Luna, link: , img:
	name: Forte, link: , img:
	name: Comic Sans MS, link: , img:

-serifArray
	name: Blair ITC, link: , img:
	name: Univers, link: , img:
	name: Bebas, link: , img:
	name: Code, link: , img:
	name: Haettenschweiler, link: , img:
	name: Bauhaus 93, link: , img:
	name: Avenir, link: , img:
	name: Futura, link: , img:
	name: Century Gothic, link: , img:
	name: Arial, link: , img:
	name: Gravity, link: , img:
	name: Raleway, link: , img:
	name: DIN, link: , img:
	name: FF Meta Pro Hairline, link: , img:
	name: Open Sans, link: , img:
	name: LemonMilk, link: , img:
	name: Marbre Sans, link: , img:
	name: Cocon, link: , img:
	name: Comic Sans MS, link: , img:
	name: Consolas, link: , img:
	name: Encode Sans Condensed, link: , img:
	name: Calibri, link: , img:
	name: Roboto, link: , img:
	name: Franklin Gothic Book, link: , img:
	name: Montserrat, link: , img:
	name: Cocomat Light, link: , img:
	name: Verdana, link: , img:
	name: Frutiger, link: , img:
	name: Letter Gothic std, link: , img:
	name: Impact, link: , img:
	name: Gill Sans, link: , img:
	name: Berlin Sans FB, link: , img:
	name: Candara, link: , img:
	name: Myriad, link: , img:
	name: Courier New, link: , img:
	name: Calisto MT, link: , img:
	name: Californian FB, link: , img:
	name: Elephant, link: , img:
	name: Bodoni MT, link: , img:
	name: Modern no. 20, link: , img:
	name: Minion Pro, link: , img:
	name: museo slab 500, link: , img:
	name: Book Antiqua, link: , img:
	name: Garamond, link: , img:
	name: Georgia, link: , img:
	name: Times New Roman, link: , img:
	name: Centaur, link: , img:
	name: Trajan, link: , img:
	name: Didot, link: , img:
	name: Harlow Solid Italic, link: , img:
	name: Agent, link: , img:
	name: Forte, link: , img:
	name: Luna, link: , img:
	name: Mistral, link: , img:
	name: Brush Script MT, link: , img:
	name: Freestyle Script, link: , img:
	name: Muskaters, link: , img:
	name: High Tide, link: , img:
	name: Bickham Script, link: , img:

-sansSerifArray:
	name: Bickham Script, link: , img:
	name: High Tide, link: , img:
	name: Muskaters, link: , img:
	name: Freestyle Script, link: , img:
	name: Brush Script MT, link: , img:
	name: Mistral, link: , img:
	name: Luna, link: , img:
	name: Forte, link: , img:
	name: Agent, link: , img:
	name: Harlow Solid Italic, link: , img:
	name: Didot, link: , img:
	name: Trajan, link: , img:
	name: Centaur, link: , img:
	name: Times New Roman, link: , img:
	name: Georgia, link: , img:
	name: Garamond, link: , img:
	name: Book Antiqua, link: , img:
	name: museo slab 500, link: , img:
	name: Minion Pro, link: , img:
	name: Modern no. 20, link: , img:
	name: Bodoni MT, link: , img:
	name: Elephant, link: , img:
	name: Californian FB, link: , img:
	name: Calisto MT, link: , img:
	name: Courier New, link: , img:
	name: Myriad, link: , img:
	name: Candara, link: , img:
	name: Berlin Sans FB, link: , img:
	name: Gill Sans, link: , img:
	name: Impact, link: , img:
	name: Letter Gothic std, link: , img:
	name: Frutiger, link: , img:
	name: Verdana, link: , img:
	name: Cocomat Light, link: , img:
	name: Montserrat, link: , img:
	name: Franklin Gothic Book, link: , img:
	name: Roboto, link: , img:
	name: Calibri, link: , img:
	name: Encode Sans Condensed, link: , img:
	name: Consolas, link: , img:
	name: Comic Sans MS, link: , img:
	name: Cocon, link: , img:
	name: Marbre Sans, link: , img:
	name: LemonMilk, link: , img:
	name: Open Sans, link: , img:
	name: FF Meta Pro Hairline, link: , img:
	name: DIN, link: , img:
	name: Raleway, link: , img:
	name: Gravity, link: , img:
	name: Arial, link: , img:
	name: Century Gothic, link: , img:
	name: Futura, link: , img:
	name: Avenir, link: , img:
	name: Bauhaus 93, link: , img:
	name: Haettenschweiler, link: , img:
	name: Code, link: , img:
	name: Bebas, link: , img:
	name: Univers, link: , img:
	name: Blair ITC, link: , img:

	*/
