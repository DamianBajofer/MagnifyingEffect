function CentrarVentana(objeto, option){
	//-----> Ancho y Alto del objeto.
	var AnchoObjeto = objeto.width();
	var AltoObjeto = objeto.height();

	//----> Ancho y Alto del navegador.
	var AnchoNavegador = $(window).width();
	var AltoNavegador = $(window).height();

	//----> Posicion X-Y del objeto.
	var PosicionX = (AnchoNavegador / 2) - (AnchoObjeto / 2);
	var PosicionY = (AltoNavegador / 2) - (AltoObjeto / 2);
	
	//----> Propiedades CSS del objeto.
	if(option == "fixed" || option == "absolute" || option == "relative"){
		objeto.css({"position":""+option+"", "left":PosicionX+"px", "top":PosicionY+"px"});
	}else{
		objeto.css({"position":""+option+"", "margin-left":PosicionX+"px", "margin-top":PosicionY+"px"});
	}
}

function CentrarEnVentana(objeto1,objeto2,option,y,x){
	//-----> Ancho y Alto del objeto2.
	var AnchoObjeto = objeto2.width();
	var AltoObjeto = objeto2.height();

	//----> Ancho y Alto del objeto1.
	var AnchoContenedor = objeto1.width();
	var AltoContenedor = objeto1.height();

	//----> Posicion X-Y del objeto2.
	var PosicionX = (AnchoContenedor / 2) - (AnchoObjeto / 2);
	var PosicionY = (AltoContenedor / 2) - (AltoObjeto / 2);

	//----> Mandar dentro del objeto1.
	var PosX = objeto1.position();
	PosX = PosX.left;
	PosicionX = PosX + PosicionX;

	var PosY = objeto1.position();
	PosY = PosY.top;
	PosicionY = PosY + PosicionY;

	//----> Propiedades CSS del objeto2.
	if(option == "fixed" || option == "absolute" || option == "relative"){

		if(y == 'top'){
			objeto2.css({"top":PosY+"px"});
		}else if(y == 'bottom'){
			objeto2.css({"top":(PosY + AltoContenedor) - (AltoObjeto)+"px"});
		}else{
			objeto2.css({"top":PosicionY+"px"});
		}

		if(x == 'left'){
			objeto2.css({"left":PosX+"px"});
		}else if(x == 'right'){
			objeto2.css({"left":(PosX + AnchoContenedor) - (AnchoObjeto)+"px"});
		}else{
			objeto2.css({"left":PosicionX+"px"});
		}
		objeto2.css({"position":""+option+""});
	}else{
		if(y == 'top'){
			objeto2.css({"margin-top":PosY+"px"});
		}else if(y == 'bottom'){
			objeto2.css({"margin-top":(PosY + AltoContenedor) - (AltoObjeto)+"px"});
		}else{
			objeto2.css({"margin-top":PosicionY+"px"});
		}

		if(x == 'left'){
			objeto2.css({"margin-left":PosX+"px"});
		}else if(x == 'right'){
			objeto2.css({"margin-left":(PosX + AnchoContenedor) - (AnchoObjeto)+"px"});
		}else{
			objeto2.css({"margin-left":PosicionX+"px"});
		}
		objeto2.css({"position":""+option+""});
	}
}

function AjustarMenu(objeto1,objeto2,border){
	//----> Contamos la cantidad de elementos del menu.
	var TotalItems = objeto2.length;

	//----> Obtenemos el ancho de cada elemento.
	var AnchoItem = objeto1.width() / TotalItems;

	//----> Verificamos cuantos bordes tiene el elemento.
	if(border == "left" || border == "rigth"){
		AnchoItem = AnchoItem - 1;
	}else if(border == "all"){
		AnchoItem = AnchoItem - 2;
	}else{

	}

	//----> Aplicamso el ancho para ocupar todo el menu.
	objeto2.css({"width":AnchoItem+"px"});
}

function AjustarElemento(objeto1,objeto2){
	//----> obtener ancho del objeto1.
	var AnchoObj1 = objeto1.width();

	objeto2.css({"width":AnchoObj1+"px"});
}

function FijarItemMenu(objeto1,objeto2,objeto3,position){
	//----> Obtener alto del objeto1.
	var AltoObjet1 = objeto1.height();
	//----> Obtener posicion X-Y del objeto2.
	var PosXObjet2 = objeto2.position();
	PosXObjet2 = PosXObjet2.left;
	var PosYObjet2 = objeto2.position();
	PosYObjet2 = PosYObjet2.top;

	//----> Evaluar tipo de Position.
	if(position == "fixed" || position == "absolute" || position == "relative"){
		objeto3.css({"left":PosXObjet2+"px", "top":AltoObjet1+"px", "position":""+position+""});
	}else{
		objeto3.css({"margin-left":PosXObjet2+"px", "margin-top":AltoObjet1+"px"});
	}
}

function AjustarLeft(objeto1, objeto2){
	// Dimensiones del navegador.
	var navWidth = $(window).width();
	// Dimensiones del objeto1.
	var AnchoContenedor = $(objeto1).width();
	// Dimensiones del objeto2.
	var AnchoElemento = $(objeto2).width();

	// Calculo de centro.
	PosicionLeft = (navWidth - AnchoContenedor) / 2;

	$(objeto2).css({"margin-left":(PosicionLeft)+"px"});
}

function AjustarBottom(objeto1, objeto2){
	// Dimensiones del objeto1.
	var AltoContenedor = $(objeto1).height();
	// Dimensiones del objeto2.
	//var AltoElemento = $(objeto2).width();

	$(objeto2).css({"top":(AltoContenedor)+"px"});
}

function FijarMenu(objeto1,objeto2,objeto3,position,tipoAjusteTop,ajusteTop,tipoAjusteLeft,ajusteLeft){
	//----> Obtener alto del objeto1.
	var AltoObjet1 = objeto1.height();
	//----> Obtener posicion X-Y del objeto2.
	var PosXObjet2 = objeto2.position();
	PosXObjet2 = PosXObjet2.left;
	var PosYObjet2 = objeto2.position();
	PosYObjet2 = PosYObjet2.top;

	//----> Evaluar tipo de Position.
	if(position == "fixed" || position == "absolute" || position == "relative"){
		if(tipoAjusteLeft == '-' && tipoAjusteTop == '-'){
			objeto3.css({"left":(PosXObjet2 - ajusteLeft)+"px", "top":(AltoObjet1 - ajusteTop)+"px", "position":""+position+""});
		}else if(tipoAjusteLeft == '+' && tipoAjusteTop == '+'){
			objeto3.css({"left":(PosXObjet2 + ajusteLeft)+"px", "top":(AltoObjet1 + ajusteTop)+"px", "position":""+position+""});
		}else if(tipoAjusteLeft == '+' && tipoAjusteTop == '-'){
			objeto3.css({"left":(PosXObjet2 + ajusteLeft)+"px", "top":(AltoObjet1 - ajusteTop)+"px", "position":""+position+""});
		}else{
			objeto3.css({"left":(PosXObjet2 - ajusteLeft)+"px", "top":(AltoObjet1 + ajusteTop)+"px", "position":""+position+""});
		}
	}else{
		if(tipoAjusteLeft == '-' && tipoAjusteTop == '-'){
			objeto3.css({"margin-left":(PosXObjet2 - ajusteLeft)+"px", "margin-top":(AltoObjet1 - ajusteTop)+"px"});
		}else if(tipoAjusteLeft == '+' && tipoAjusteTop == '+'){
			objeto3.css({"margin-left":(PosXObjet2 + ajusteLeft)+"px", "margin-top":(AltoObjet1 + ajusteTop)+"px"});
		}else if(tipoAjusteLeft == '+' && tipoAjusteTop == '-'){
			objeto3.css({"margin-left":(PosXObjet2 + ajusteLeft)+"px", "margin-top":(AltoObjet1 - ajusteTop)+"px"});
		}else{
			objeto3.css({"margin-left":(PosXObjet2 - ajusteLeft)+"px", "margin-top":(AltoObjet1 + ajusteTop)+"px"});
		}
	}
}

function AjustarItemMenu(objeto1, objeto2, max){
	//----> Items de menu.
	var TotalItems = objeto2.length;
	var AnchoItems = objeto2.width();

	//----> Calculamos el ancho del objeto1.
	var AnchoContenedor = AnchoItems * max;

	//----> Aplicamos la dimension al objeto1
	objeto1.css({"width":AnchoContenedor+"px"});
}

function AjustarImagen(objeto1, objeto2, img){
	//----> Ancho y Alto del objeto1.
	var AnchoContenedor = objeto1.width();
	var AltoContenedor = objeto1.height();

	//----> Obtenemos los datos de la imagen.
	var Imagen = new Image();
	Imagen.src = img;
	var ImagenAncho = Imagen.width;
	var ImagenAlto = Imagen.height;

	//----> Evaluamos las medidas de la imagen.
	if(ImagenAncho > AnchoContenedor){
		objeto2.css({"width":AnchoContenedor+"px"});
	}else{
		objeto2.css({"width":(ImagenAncho*100/AnchoContenedor)+"%"});
	}

	if(ImagenAlto > AltoContenedor){
		objeto2.css({"height":AltoContenedor+"px"});
	}else{
		objeto2.css({"height":(ImagenAlto*100/AltoContenedor)+"%"});
	}

	//----> Agregamos la imagen de fondo.
	objeto2.css({"background-image":"url('"+img+"')"});
}

function Detalles(objeto){
	//----> Ancho y Alto del objeto.
	var AnchoObjeto = objeto.width();
	var AltoObjeto = objeto.height();

	//----> Posicion X-Y del Objeto.
	var PosicionX = objeto.position();
		PosicionX = PosicionX.left;
	var PosicionY = objeto.position();
		PosicionY = PosicionY.top;

	//----> Propiedades CSS del Objeto.
	var Background = objeto.css("background-color");
	var ColorTexto = objeto.css("color");
	var Margenes = objeto.css("margin-left");

	//----> Mostrar Detalles del Objeto.
	console.log("/*~ Propiedades del Elemento ~*/\n");
	console.log("Color de Fondo: "+Background);
	console.log("Color de Texto: "+ColorTexto);
	console.log("Ancho: "+AnchoObjeto+"px");
	console.log("Alto: "+AltoObjeto+"px");
	console.log("Left: "+PosicionX+"px");
	console.log("Top: "+PosicionY+"px");
}