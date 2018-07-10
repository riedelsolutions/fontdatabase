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
		link: "https://www.fonts.com/font/microsoft-corporation/comic-sans",
		img: "",
	}

	var Forte = {
		name: "Forte",
		link: "https://catalog.monotype.com/family/monotype/forte",
		img: ""
	}

	var Luna = {
		name: "Luna",
		link: "https://www.behance.net/gallery/27812357/LUNA-Free-Font",
		img:
	}

	var BrushScriptMT = {
		name: "Brush Script MT",
		link: "https://www.fonts.com/font/adobe/brush-script",
		img:
	}

	var FreestyleScript ={
		name: "Freestyle Script",
		link:"https://www.fonts.com/font/adobe/freestyle-script" ,
		img:
	}

	var Mistral = {
		name: "Mistral",
		link: "https://www.fonts.com/font/adobe/mistral/regular",
		img:
	}

	var HarlowSolidItalic = {
		name: "Harlow Solid",
		link:"https://www.fonts.com/font/itc/harlow",
		img:
	}


	var Impact = {
		name: "Impact", 
		link:"https://www.wfonts.com/font/impact",
		img:
	}

	var Bauhaus93 = {
		name: "Bauhaus 93",
		link:"https://www.fonts.com/font/urw/bauhaus-93/regular" ,
		img:
	}

	var Haettenschweiler = {
		name: "Haettenschweiler",
		link:"https://www.fonts.com/font/microsoft-corporation/haettenschweiler",
		img:
	}

	var Muskaters = {
		name: "Muskaters",
		link:"https://fontbundles.net/font-bundles-store/58592-muskaters-duo-style-font-bonus",
		img:
	}

	var HighTide = {
		name: "High Tide",
		link:"https://blkbk.ink/products/high-tides",
		img:
	}


	var Bebas = {
		name: "Bebas",
		link:"https://www.dafont.com/bebas.font",
		img: 
	}

	var LemonMilk = {
		name: "LemonMilk",
		link:"https://www.dafont.com/lemon-milk.font",
		img: ,

	}

	var Code = {
		name: "Code",
		link:"http://www.myfonts.com/fonts/font-fabric/code-pro/",
		img: ,
	}

	var CocomatLight ={
		name "Cocomat Light",
		link:"https://www.dafont.com/cocomat.font",
		img:
	}

	var BerlinSansFB = {
		name: "Berlin Sans FB",
		link:"http://fontsgeek.com/fonts/Berlin-Sans-FB-Regular",
		img:,
	}

	var museoslab500 = {
		name: "museo slab 500",
		link:"https://www.myfonts.com/fonts/exljbris/museo-slab/500/",
		img:
	}


	var Consolas = {
		name: "Consolas",
		link:"https://www.microsoft.com/en-us/download/details.aspx?id=17879",
		img:
	}


	var Frutiger = {
		name: "Frutiger",
		link:"https://www.fonts.com/font/linotype/frutiger/complete-family-pack",
		img:
	}

	var Calibri = {
		name: "Calibri",
		link: "https://docs.microsoft.com/ru-ru/typography/font-list/calibri",
		img: 
	}

	var Candara = {
		name: "Candara",
		link:"https://docs.microsoft.com/en-us/typography/font-list/candara",
		img:
	}

	var Myriad = {
		name: "Myriad",
		link:"https://www.fonts.com/font/adobe/myriads",
		img: ,
	}

	var CalistoMT ={
		name: "Calisto MT",
		link:"https://docs.microsoft.com/en-us/typography/font-list/calisto-mt",
		img: ,
	}


	var CalifornianFB = {
		name: "CalifornianFB",
		link:"https://docs.microsoft.com/en-us/typography/font-list/californian-fb",
		img:
	}


	var Gravity = {
		name: "Gravity",
		link:"https://www.behance.net/gallery/3407691/Gravity-New-free-font-experiment",
		img:
	}

	var OpenSans = {
		name: "Open Sans",
		link:"https://fonts.google.com/specimen/Open+Sans",
		img:
	}

	var Raleway = {
		name: "Raleway",
		link:"https://fonts.google.com/specimen/Raleway",
		img:
	}

	var BlairITC ={
		name: "ITC Blair",
		link:"https://www.myfonts.com/fonts/itc/blair/",
		img:
	}


	var Cocon = {
		name: "Cocon",
		link:"https://www.myfonts.com/fonts/fontfont/ff-cocon/",
		img:
	}

	var Agent = {
		name: "Agent",
		link:"https://befonts.com/agent-typeface.html",
		img:
	}

	var CourierNew = {
		name: "Courier New",
		link:"https://docs.microsoft.com/en-us/typography/font-list/courier-new",
		img:
	}

	var Arial = {
		name: "Arial",
		link:"https://docs.microsoft.com/en-us/typography/font-list/arial",
		img: 
	}

	var Centaur = {
		name: "Centaur",
		link:"https://www.myfonts.com/fonts/mti/centaur/#index",
		img:
	}

	var GillSans = {
		name: "Gill Sans",
		link:"https://www.myfonts.com/fonts/mti/gill-sans/",
		img:
	}

	var MinionPro = {
		name: "Minion Pro",
		link:"https://www.myfonts.com/fonts/adobe/minion/",
		img:
	}

	var Verdana = {
		name: "Verdana",
		link:"https://docs.microsoft.com/en-us/typography/font-list/verdana",
		img:
	}


	var LetterGothicstd = {
	  	name: "Letter Gothic std",
	  	link:"https://www.myfonts.com/fonts/mti/letter-gothic/" ,
	  	img:
	  }


	var EncodeSansCondensed = {
	  	name: "Encode Sans Condensed",
	  	link:"https://fonts.google.com/specimen/Encode+Sans+Condensed",
	  	img:
	  }


	var Montserrat = {
		name: "Montserrat",
		link:"https://fonts.google.com/specimen/Montserrat",
		img:
	}

	var Roboto = {
		name: "Roboto",
		link:"https://fonts.google.com/specimen/Roboto",
		img:
	}

	var DIN = {
		name: "DIN",
		link:"https://www.myfonts.com/fonts/fontfont/ff-din/",
		img:
	}

	var TimesNewRoman = {
		name: "Times New Roman",
		link:"https://docs.microsoft.com/en-us/typography/font-list/times-new-roman",
		img:
	}

	var CenturyGothic = {
		name: "Century Gothic",
		link:"https://www.myfonts.com/fonts/mti/century-gothic/",
		img:
	}

	var FranklinGothicBook = {
		name: "Franklin Gothic Book",
		link:"https://www.fonts.com/font/urw/franklin-gothic/book",
		img:
	}

	var BookAntiqua = {
		name: "Book Antiqua",
		link:"https://docs.microsoft.com/en-us/typography/font-list/book-antiqua",
		img:
	}

	var Garamond = {
		name: "Garamond",
		link:"https://typekit.com/fonts/adobe-garamond",
		img:,
	}

	var Georgia = {
		name: "Georgia",
		link:"https://www.myfonts.com/fonts/ascender/georgia/",
		img:,
	}

	var Avenir = {
		name: "Avenir",
		link:"https://www.myfonts.com/fonts/linotype/avenir/",
		img:
	}

	var FFMetaProHairline = {
		name: "FF Meta Pro Hairline",
		link:"https://www.fonts.com/font/fontfont/ff-meta/hairline",
		img:
	}

	var Univers = {
		name: "Univers",
		link:"https://www.myfonts.com/fonts/linotype/univers/",
		img:
	}

	var Futura = {
		name: "Futura",
		link:"https://www.myfonts.com/fonts/bitstream/futura/",
		img:
	}

	var Elephant = {
		name: "Elephant",
		link:"https://www.fonts.com/font/carter-and-cone/elephant/regular",
		img:
	}

	var BodoniMT = {
		name: "Bodoni MT",
		link:"https://docs.microsoft.com/en-us/typography/font-list/bodoni-mt",
		img:
	}

	var ModernNo20 = {
		name: "Modern no. 20",
		link:"https://www.myfonts.com/fonts/bitstream/modern-no-20/",
		img:
	}
	
	var Didot = {
		name: "Didot",
		link:"https://www.myfonts.com/fonts/linotype/didot/",
		img:
	}

	var Trajan = {
		name: "Trajan",
		link:"https://www.fonts.com/font/adobe/trajan/regular",
		img:	
	}

	var MarbreSans = {
		name: "Marbre Sans",
		link:"https://www.dafont.com/marbre-sans.font",
		img:
	}
	
	var BickhamScript = {
		name: "Bickham Script",
		link:"https://www.fonts.com/font/adobe/bickham-script",
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
