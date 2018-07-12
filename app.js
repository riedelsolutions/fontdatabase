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
//Font objects

	var ComicSansMS = {
		name: "Comic Sans MS",
		link: "https://www.fonts.com/font/microsoft-corporation/comic-sans",
		img: "images/comicsansms.png",
	}

	var Forte = {
		name: "Forte",
		link: "https://catalog.monotype.com/family/monotype/forte",
		img: "images/forte.png",
	}

	var Luna = {
		name: "Luna",
		link: "https://www.behance.net/gallery/27812357/LUNA-Free-Font",
		img:"images/luna.png",
	}

	var BrushScriptMT = {
		name: "Brush Script MT",
		link: "https://www.fonts.com/font/adobe/brush-script",
		img:"images/brushscriptmt.png",
	}

	var FreestyleScript ={
		name: "Freestyle Script",
		link:"https://www.fonts.com/font/adobe/freestyle-script" ,
		img:"images/freestylescript.png",
	}

	var Mistral = {
		name: "Mistral",
		link: "https://www.fonts.com/font/adobe/mistral/regular",
		img:"images/mistral.png",
	}

	var HarlowSolidItalic = {
		name: "Harlow Solid",
		link:"https://www.fonts.com/font/itc/harlow",
		img:"images/harlowsoliditalic.png",
	}


	var Impact = {
		name: "Impact", 
		link:"https://www.wfonts.com/font/impact",
		img:"images/impact.png",
	}

	var Bauhaus93 = {
		name: "Bauhaus 93",
		link:"https://www.fonts.com/font/urw/bauhaus-93/regular" ,
		img:"images/bauhaus93.png",
	}

	var Haettenschweiler = {
		name: "Haettenschweiler",
		link:"https://www.fonts.com/font/microsoft-corporation/haettenschweiler",
		img:"images/haettenschweiler.png",
	}

	var Muskaters = {
		name: "Muskaters",
		link:"https://fontbundles.net/font-bundles-store/58592-muskaters-duo-style-font-bonus",
		img:"images/muskaters.png",
	}

	var HighTide = {
		name: "High Tide",
		link:"https://blkbk.ink/products/high-tides",
		img:"images/hightide.png",
	}


	var Bebas = {
		name: "Bebas",
		link:"https://www.dafont.com/bebas.font",
		img: "images/bebas.png",
	}

	var LemonMilk = {
		name: "LemonMilk",
		link:"https://www.dafont.com/lemon-milk.font",
		img: "images/lemonmilk.png",

	}

	var Code = {
		name: "Code",
		link:"http://www.myfonts.com/fonts/font-fabric/code-pro/",
		img: "images/code.png",
	}

	var CocomatLight ={
		name: "Cocomat Light",
		link:"https://www.dafont.com/cocomat.font",
		img:"images/cocomatlight.png",
	}

	var BerlinSansFB = {
		name: "Berlin Sans FB",
		link:"http://fontsgeek.com/fonts/Berlin-Sans-FB-Regular",
		img:"images/berlinsansfb.png",
	}

	var museoslab500 = {
		name: "museo slab 500",
		link:"https://www.myfonts.com/fonts/exljbris/museo-slab/500/",
		img:"images/museoslab500.png",
	}


	var Consolas = {
		name: "Consolas",
		link:"https://www.microsoft.com/en-us/download/details.aspx?id=17879",
		img:"images/consolas.png",
	}


	var Frutiger = {
		name: "Frutiger",
		link:"https://www.fonts.com/font/linotype/frutiger/complete-family-pack",
		img:"images/frutiger.png",
	}

	var Calibri = {
		name: "Calibri",
		link: "https://docs.microsoft.com/ru-ru/typography/font-list/calibri",
		img: "images/calibri.png",
	}

	var Candara = {
		name: "Candara",
		link:"https://docs.microsoft.com/en-us/typography/font-list/candara",
		img:"images/candara.png",
	}

	var Myriad = {
		name: "Myriad",
		link:"https://www.fonts.com/font/adobe/myriads",
		img: "images/myriad.png",
	}

	var CalistoMT ={
		name: "Calisto MT",
		link:"https://docs.microsoft.com/en-us/typography/font-list/calisto-mt",
		img: "images/calistomt.png",
	}


	var CalifornianFB = {
		name: "CalifornianFB",
		link:"https://docs.microsoft.com/en-us/typography/font-list/californian-fb",
		img:"images/californianfb.png",
	}


	var Gravity = {
		name: "Gravity",
		link:"https://www.behance.net/gallery/3407691/Gravity-New-free-font-experiment",
		img:"images/gravity.png",
	}

	var OpenSans = {
		name: "Open Sans",
		link:"https://fonts.google.com/specimen/Open+Sans",
		img:"images/opensans.png",
	}

	var Raleway = {
		name: "Raleway",
		link:"https://fonts.google.com/specimen/Raleway",
		img:"images/raleway.png",
	}

	var BlairITC ={
		name: "ITC Blair",
		link:"https://www.myfonts.com/fonts/itc/blair/",
		img:"images/blairitc.png",
	}


	var Cocon = {
		name: "Cocon",
		link:"https://www.myfonts.com/fonts/fontfont/ff-cocon/",
		img:"images/cocon.png",
	}

	var Agent = {
		name: "Agent",
		link:"https://befonts.com/agent-typeface.html",
		img:"images/agent.png",
	}

	var CourierNew = {
		name: "Courier New",
		link:"https://docs.microsoft.com/en-us/typography/font-list/courier-new",
		img:"images/couriernew.png",
	}

	var Arial = {
		name: "Arial",
		link:"https://docs.microsoft.com/en-us/typography/font-list/arial",
		img: "images/arial.png",
	}

	var Centaur = {
		name: "Centaur",
		link:"https://www.myfonts.com/fonts/mti/centaur/#index",
		img:"images/centaur.png",
	}

	var GillSans = {
		name: "Gill Sans",
		link:"https://www.myfonts.com/fonts/mti/gill-sans/",
		img:"images/gillsans.png",
	}

	var MinionPro = {
		name: "Minion Pro",
		link:"https://www.myfonts.com/fonts/adobe/minion/",
		img:"images/minionpro.png",
	}

	var Verdana = {
		name: "Verdana",
		link:"https://docs.microsoft.com/en-us/typography/font-list/verdana",
		img:"images/verdana.png",
	}


	var LetterGothicstd = {
	  	name: "Letter Gothic std",
	  	link:"https://www.myfonts.com/fonts/mti/letter-gothic/" ,
	  	img:"images/lettergothicstd.png",
	  }


	var EncodeSansCondensed = {
	  	name: "Encode Sans Condensed",
	  	link:"https://fonts.google.com/specimen/Encode+Sans+Condensed",
	  	img:"images/encodesanscondensed.png",
	  }


	var Montserrat = {
		name: "Montserrat",
		link:"https://fonts.google.com/specimen/Montserrat",
		img:"images/montserrat.png",
	}

	var Roboto = {
		name: "Roboto",
		link:"https://fonts.google.com/specimen/Roboto",
		img:"images/roboto.png",
	}

	var DIN = {
		name: "DIN",
		link:"https://www.myfonts.com/fonts/fontfont/ff-din/",
		img:"images/din.png",
	}

	var TimesNewRoman = {
		name: "Times New Roman",
		link:"https://docs.microsoft.com/en-us/typography/font-list/times-new-roman",
		img:"images/timesnewroman.png",
	}

	var CenturyGothic = {
		name: "Century Gothic",
		link:"https://www.myfonts.com/fonts/mti/century-gothic/",
		img:"images/centurygothic.png",
	}

	var FranklinGothicBook = {
		name: "Franklin Gothic Book",
		link:"https://www.fonts.com/font/urw/franklin-gothic/book",
		img:"images/franklingothicbook.png",
	}

	var BookAntiqua = {
		name: "Book Antiqua",
		link:"https://docs.microsoft.com/en-us/typography/font-list/book-antiqua",
		img:"images/bookantiqua.png",
	}

	var Garamond = {
		name: "Garamond",
		link:"https://typekit.com/fonts/adobe-garamond",
		img:"images/garamond.png",
	}

	var Georgia = {
		name: "Georgia",
		link:"https://www.myfonts.com/fonts/ascender/georgia/",
		img:"images/georgia.png",
	}

	var Avenir = {
		name: "Avenir",
		link:"https://www.myfonts.com/fonts/linotype/avenir/",
		img:"images/avenir.png",
	}

	var FFMetaProHairline = {
		name: "FF Meta Pro Hairline",
		link:"https://www.fonts.com/font/fontfont/ff-meta/hairline",
		img:"images/ffmetaprohairline.png",
	}

	var Univers = {
		name: "Univers",
		link:"https://www.myfonts.com/fonts/linotype/univers/",
		img:"images/univers.png",
	}

	var Futura = {
		name: "Futura",
		link:"https://www.myfonts.com/fonts/bitstream/futura/",
		img:"images/futura.png",
	}

	var Elephant = {
		name: "Elephant",
		link:"https://www.fonts.com/font/carter-and-cone/elephant/regular",
		img:"images/elephant.png",
	}

	var BodoniMT = {
		name: "Bodoni MT",
		link:"https://docs.microsoft.com/en-us/typography/font-list/bodoni-mt",
		img:"images/bodonimt.png",
	}

	var ModernNo20 = {
		name: "Modern no. 20",
		link:"https://www.myfonts.com/fonts/bitstream/modern-no-20/",
		img:"images/modernno20.png",
	}
	
	var Didot = {
		name: "Didot",
		link:"https://www.myfonts.com/fonts/linotype/didot/",
		img:"images/didot.png",
	}

	var Trajan = {
		name: "Trajan",
		link:"https://www.fonts.com/font/adobe/trajan/regular",
		img:"images/trajan.png",	
	}

	var MarbreSans = {
		name: "Marbre Sans",
		link:"https://www.dafont.com/marbre-sans.font",
		img:"images/marbresans.png",
	}
	
	var BickhamScript = {
		name: "Bickham Script",
		link:"https://www.fonts.com/font/adobe/bickham-script",
		img:"images/bickhamscript.png",

	}

//Font arrays
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
		var index;		//Index of where in the original array the results list should start.
		var indexOfNewArray = 0; //Helps initialize and fill the result[] array.
		var finalResArray = [];
		var Download = "Download";



//algorithm
		
		//noneFound(); runs if there are no fonts to be suggested.
		function noneFound(){ 
			var noResults = "Sorry, we could not find fonts more " + fontCharacteristic +  " than " + fontInput + ".";
   			var newParagraph = document.createElement('p');
   			newParagraph.textContent = noResults;
   			document.getElementById("resultDiv").appendChild(newParagraph);
   			
    	}

		


		// results(chosenArray); prints the output.
		function results(chosenArray){ 

			if (index >= chosenArray.length-1){ //if the font the user looked up is the most serious already

			noneFound();


			} else { // if it isn't, it prints the rest
					var result = [];
					for (var i = index + 1; i < chosenArray.length; i++){
					result[indexOfNewArray] = chosenArray[i];
					indexOfNewArray++;
					}

				ind = 0;
			var fontsMoreEtc = "Fonts more " + fontCharacteristic +  " than " + fontInput + ": "/* fix this->finalResArray +"."*/; // make this a loop so it prints the object.name, object.image. and objct.link
   													//^ maybe delete from : on.
   				
   			//Prints fontsMoreEtc
   			var paragraph = document.createElement('p');	
   			paragraph.textContent = fontsMoreEtc;
   			document.getElementById("resultDiv").appendChild(paragraph);


				for (var i = 0; i < finalResArray.length; ++i) {
  					  //this["paragraph"+i] = document.createElement('p');
  					  //this["paragraph"+i].textContent = finalResArray[i];
  					 // document.getElementById("resultDiv").appendChild(this["paragraph"+i]);
  					 this["paragraph"+i] = document.createElement('p');
  					  this["paragraph"+i].textContent = "\n";
  					 document.getElementById("resultDiv").appendChild(this["paragraph"+i]);
  					  i++;
  					 
  					  this['link'+i] = document.createElement('a');
					  this['link'+i].setAttribute('href',finalResArray[i]);
					 //this['link'+i].setAttribute('attribute', 'target = "_blank"');
					  this['link'+i].innerHTML = Download;
					  document.getElementById("resultDiv").appendChild(this['link'+i]);
					i++;
					  /*this["paragraph"+i] = document.createElement('p');
  					  this["paragraph"+i].textContent = finalResArray[i];
  					  document.getElementById("resultDiv").appendChild(this["paragraph"+i]);*/
  					  this['image'+i] = document.createElement("IMG");
   					  this['image'+i].setAttribute("src", finalResArray[i]);
   					  document.getElementById("resultDiv").appendChild(this['image'+i]);
  					  

				}

			}


			
  			//resets variables so the user can reuse the program
   			result = 0;
   			indexOfNewArray = 0;
   			finalResArray = [];
    }
				
			
			
			
		
//createResultsArray(arrayType); creates the new array with the results -> Creates the output.
		function createResultsArray(arrayType){
					//Goes through all the objects.
					//If the object at index i matches the user's chosen font,
					//we get the index to start copying from that to the results array.
				
					for (var i = 0; i < arrayType.length; i++){
						if (arrayType[i].name == fontInput){
							index = i;
							//console.log(index);
							
						}

					}

					//Creates array with each object quality as a component = Array with all the results.
					var ind = 0;
					for (var i = index + 1; i<arrayType.length - 1; i++){
			
						for(let key in arrayType[i]){
							finalResArray[ind] = arrayType[i][key];
							ind++;
						
					}

						}

					ind = 0;




				
		
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

//Fix/resolve these:

	function resetDiv(){
		document.getElementById("resultDiv").innerHTML = "";
	}

	document.getElementById('but').style.display  = 'none';

	function resetButtonAppear(){
		document.getElementById('but').style.display  = 'block';
	}
