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
//font objects

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

	var BrushScriptMT = {
		name: "Brush Script MT",
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

//font arrays
		var seriousnessArray = ["none", ComicSansMS, Forte, Luna, BrushScriptMT, FreestyleScript, Mistral, HarlowSolidItalic, Impact, Bauhaus93,
								Haettenschweiler, Muskaters, HighTide, Bebas, LemonMilk, Code, CocomatLight, BerlinSansFB, museoslab500, Consolas, Frutiger,
								Calibri, Candara, Myriad, CalistoMT, CalifornianFB, Gravity, OpenSans, Raleway, BlairITC, Cocon, Agent, CourierNew, Arial,
								Centaur, GillSans, MinionPro, Verdana, LetterGothicstd, EncodeSansCondensed, Montserrat, Roboto, DIN, TimesNewRoman,
								CenturyGothic, FranklinGothicBook, BookAntiqua, Garamond, Georgia, Avenir, FFMetaProHairline, Univers, Futura, Elephant,
								BodoniMT, ModernNo20, Didot, Trajan, MarbreSans, BickhamScript];

		var informalArray = ["none", BickhamScript, MarbreSans, Trajan, Didot, ModernNo20, BodoniMT, Elephant, Futura, Univers, FFMetaProHairline, Avenir,
							Georgia, Garamond, BookAntiqua, FranklinGothicBook, CenturyGothic, TimesNewRoman, DIN, Roboto, Montserrat, EncodeSansCondensed,
							LetterGothicstd, Verdana, MinionPro, GillSans, Centaur, Arial, CourierNew, Agent, Cocon, BlairITC, Raleway, OpenSans, Gravity,
							CalifornianFB, CalistoMT, Myriad, Candara, Calibri, Frutiger, Consolas, museoslab500, BerlinSansFB, CocomatLight, Code, LemonMilk,
							Bebas, HighTide, Muskaters, Haettenschweiler, Bauhaus93, Impact, HarlowSolidItalic, Mistral, FreestyleScript, BrushScriptMT,
							Luna, Forte, ComicSansMS];
		var serifArray = ["none", BlairITC, Univers, Bebas, Code, Haettenschweiler, Bauhaus93, Avenir, Futura, CenturyGothic, Arial, Gravity, Raleway, DIN,
						FFMetaProHairline, OpenSans, LemonMilk, MarbreSans, Cocon, ComicSansMS, Consolas, EncodeSansCondensed, Calibri, Roboto, FranklinGothicBook,
						Montserrat, CocomatLight, Verdana, Frutiger, LetterGothicstd, Impact, GillSans, BerlinSansFB, Candara, Myriad, CourierNew, CalistoMT,
						CalifornianFB, Elephant, BodoniMT, ModernNo20, MinionPro, museoslab500, BookAntiqua, Garamond, Georgia, TimesNewRoman, Centaur, Trajan,
						Didot, HarlowSolidItalic, Agent, Forte, Luna, Mistral, BrushScriptMT, FreestyleScript, Muskaters, HighTide, BickhamScript ];
		var sansSerifArray = ["none", BickhamScript, HighTide, Muskaters, FreestyleScript, BrushScriptMT, Mistral, Luna, Forte, Agent, HarlowSolidItalic, Didot,
							Trajan, Centaur, TimesNewRoman, Georgia, Garamond, BookAntiqua, museoslab500, MinionPro, ModernNo20, BodoniMT, Elephant, CalifornianFB,
							CalistoMT, CourierNew, Myriad, Candara, BerlinSansFB, GillSans, Impact, LetterGothicstd, Frutiger, Verdana, CocomatLight, Montserrat,
							FranklinGothicBook, Roboto, Calibri, EncodeSansCondensed, Consolas, ComicSansMS, Cocon, MarbreSans, LemonMilk, OpenSans, FFMetaProHairline,
							DIN, Raleway, Gravity, Arial, CenturyGothic, Futura, Avenir, Bauhaus93, Haettenschweiler, Code, Bebas, Univers, BlairITC];

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
