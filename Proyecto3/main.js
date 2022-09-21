let colores=["YellowGreen","Yellow","WhiteSmoke","White","Wheat","Violet","Turquoise","Tomato","Thistle","Teal","Tan","SteelBlue",
"SpringGreen","Snow","SlateGrey","SlateBlue","SkyBlue","Silver","Sienna","Seashell","SeaGreen","SandyBrown","Salmon","SaddleBrown","RoyalBlue",
"RosyBrown","Red","RebeccaPurple","Purple","PowderBlue","Plum","Pink","Peru","PeachPuff","PapayaWhip","PaleVioletRed","PaleTurquoise","PaleGreen","PaleGoldenrod",
"Orchid","OrangeRed","Orange","OliveDrab","Olive","OldLace","Navy","NavajoWhite","Moccasin","MistyRose","MintCream","MidnightBlue","MediumVioletRed","MediumTurquoise","MediumSpringGreen","MediumSlateBlue","MediumSeaGreen","MediumPurple","MediumOrchid","MediumBlue","MediumAquamarine","Maroon","Magenta","Linen","LimeGreen",
"Lime","LightYellow","LightSteelBlue","LightSlateGrey","LightSlateGray","LightSkyBlue","LightSeaGreen","LightSalmon","LightPink","LightGrey","LightGreen","LightGray","LightGoldenrodYellow","LightCyan","LightCoral","LightBlue","LemonChiffon","LawnGreen","LavenderBlush","Lavender","Khaki","Ivory","Indigo","IndianRed","HotPink",
"Honeydew","Grey","GreenYellow","Green","Gray","Goldenrod","Gold","GhostWhite","Gainsboro","Fuchsia","ForestGreen","FloralWhite","FireBrick","DodgerBlue","DimGrey","DeepSkyBlue","DeepPink","DarkViolet","DarkTurquoise","DarkSlateGrey","DarkSlateBlue","DarkSeaGreen","DarkSalmon","DarkRed","DarkOrchid","DarkOrange","DarkOliveGreen","DarkMagenta","DarkKhaki",
"DarkGreen","DarkGoldenrod","DarkCyan","DarkBlue","Cyan","Crimson","Cornsilk","CornflowerBlue","Coral","Chocolate","Chartreuse","CadetBlue","BurlyWood","Brown","BlueViolet","Blue","BlanchedAlmond","Bisque","Azure","Aquamarine","Aqua","AntiqueWhite","AliceBlue"];
 let randomclr=0;

 function randomcolor(){
    randomclr=Math.floor(Math.random()*colores.length);
    document.getElementById("fondo").style.background=colores[randomclr];
    document.getElementById("nombre").textContent=colores[randomclr];
}