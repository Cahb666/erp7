var sh;

var tiendaActual;

function creador(){

	sh= new StoreHouse.getInstance();
	
		//CATEGORIAS
		var Televisores=new Category("Televisores");
		var Ordenadores=new Category("Ordenadores");
		var SmartPhone=new Category("SmartPhone");
		var Ofertas=new Category("En Oferta");
		Televisores.description="TV";
		Ordenadores.description="PC";
		SmartPhone.description="SP";
		Ofertas.description="OF";
	
		sh.addCategory(Televisores);
		sh.addCategory(Ordenadores);
		sh.addCategory(SmartPhone);
		sh.addCategory(Ofertas);
	
	
		//PRODUCTOS
		var tv1= new TV("lg49p21","TV LG 49","499","21");
		var tv2= new TV("lg32p21","TV LG 32p","209","21");
		var tv3= new TV("lg32i21","TV LG 32i","205","21");
		var tv4= new TV("lg32u21","TV LG 32u","199","21");
		var tv5= new TV("lg28p21","TV LG 28","169","21");
		var tv6= new TV("lg24p21","TV LG 24","129","21");
		var pc1= new PC("a107016","ASUS BLACK-G 1070 16G","789","21");
		var pc2= new PC("a10e016","ASUS GREY 1060 16G","579","21");
		var pc3= new PC("a10a08g","ASUS GRAY 1050 8G","459","21");
		var pc4= new PC("a20g032","ASUS GAMER 2080 32G","1119","21");
		var pc5= new PC("a20c032","ASUS CHAMPION 2080 32G","1329","21");
		var sp1= new SP("i7077721","IPHONE 7","777","21");
		var sp2= new SP("i8088821","IPHONE 8","888","21");
		var sp3= new SP("i9099921","IPHONE 9","999","21");
		var sp4= new SP("ix133321","IPHONE X","1333","21");
	
		tv1.images="images/tv1-49.jpg";
		tv2.images="images/tv2-32.jpg";
		tv3.images="images/tv3-32.jpg";
		tv4.images="images/tv4-32.jpg";
		tv5.images="images/tv5-28.jpg";
		tv6.images="images/tv6-24.jpg";
		pc1.images="images/pc1.jpg";
		pc2.images="images/pc2.jpg";
		pc3.images="images/pc3.jpg";
		pc4.images="images/pc4.jpg";
		pc5.images="images/pc5.jpg";
		sp1.images="images/sp1.jpg";
		sp2.images="images/sp2.jpg";
		sp3.images="images/sp3.jpg";
		sp4.images="images/sp4.jpg";

		tv1.description="Televisor LG 49 HD";
		sp1.description="Movil Caro";
		sp2.description="Movil Caro";
		sp3.description="Movil Caro";
		sp4.description="Movil Muy Caro";
	
		sh.addProduct(tv1);
		sh.addProduct(tv2);
		sh.addProduct(tv3);
		sh.addProduct(tv4);
		sh.addProduct(tv5);
		sh.addProduct(tv6);
		sh.addProduct(pc1);
		sh.addProduct(pc2);
		sh.addProduct(pc3);
		sh.addProduct(pc4);
		sh.addProduct(pc5);
		sh.addProduct(sp1);
		sh.addProduct(sp2);
		sh.addProduct(sp3);
		sh.addProduct(sp4);
	
	
		//CATEGORIA EN PRODUCTOS
		sh.addCategoryInProduct(tv1,Televisores);
		sh.addCategoryInProduct(tv2,Televisores);
		sh.addCategoryInProduct(tv3,Televisores);
		sh.addCategoryInProduct(tv4,Televisores);
		sh.addCategoryInProduct(tv5,Televisores);
		sh.addCategoryInProduct(tv6,Televisores);
		sh.addCategoryInProduct(pc1,Ordenadores);
		sh.addCategoryInProduct(pc2,Ordenadores);
		sh.addCategoryInProduct(pc3,Ordenadores);
		sh.addCategoryInProduct(pc4,Ordenadores);
		sh.addCategoryInProduct(pc5,Ordenadores);
		sh.addCategoryInProduct(sp1,SmartPhone);
		sh.addCategoryInProduct(sp2,SmartPhone);
		sh.addCategoryInProduct(sp3,SmartPhone);
		sh.addCategoryInProduct(sp4,SmartPhone);
	
		sh.addCategoryInProduct(tv5,Ofertas);
		sh.addCategoryInProduct(tv6,Ofertas);
		sh.addCategoryInProduct(pc2,Ofertas);
		sh.addCategoryInProduct(pc3,Ofertas);
		sh.addCategoryInProduct(sp1,Ofertas);
		sh.addCategoryInProduct(sp2,Ofertas);
		
	
	
		//TIENDAS
		var tienda1= new Shop("A12345678","Tienda 1","C/Falsa Nº123","963852741");
		var tienda2= new Shop("B12345678","Tienda 2","C/Arriba Nº24","963852742");
		var tienda3= new Shop("C12345678","Tienda 3","C/Abajo Nº35","963852743");
	
		sh.addShop(tienda1);
		sh.addShop(tienda2);
		sh.addShop(tienda3);
	
	
		//TIENDA1 Productos
		sh.addProductInShop(tv1,tienda1,10);   
		sh.addProductInShop(tv2,tienda1,9);   
		sh.addProductInShop(tv3,tienda1,11);   
		sh.addProductInShop(tv5,tienda1,14);   
		sh.addProductInShop(tv6,tienda1,15);   
		sh.addProductInShop(sp1,tienda1,8);  
		sh.addProductInShop(sp2,tienda1,8);
		sh.addProductInShop(pc1,tienda1,2);
		sh.addProductInShop(pc2,tienda1,6);  
		sh.addProductInShop(pc3,tienda1,9); 
		sh.addProductInShop(pc4,tienda1,7);
		  
	
		//TIENDA2 Productos
		sh.addProductInShop(tv1,tienda2,10);      
		sh.addProductInShop(tv4,tienda2,11);   
		sh.addProductInShop(tv6,tienda2,10);   
		sh.addProductInShop(sp2,tienda2,8);  
		sh.addProductInShop(sp3,tienda2,8);
		sh.addProductInShop(sp4,tienda2,10);
		sh.addProductInShop(pc1,tienda2,2);
		sh.addProductInShop(pc2,tienda2,6);  
		sh.addProductInShop(pc3,tienda2,9); 
		sh.addProductInShop(pc5,tienda2,7);  
	
	
		//TIENDA3 Productos
		sh.addProductInShop(tv4,tienda3,6);
		sh.addProductInShop(pc1,tienda3,9);
		sh.addProductInShop(pc2,tienda3,7);


}


function init(){
	
	//Llamar funciones
	creador();
	menuTiendas();
	menuCategorias();
	
	sesionIniciada();
}






//MENU TIENDAS, TAMBIEN MUESTRA TIENDAS EN EL CENTRO
function menuTiendas(){



	var liCat = document.getElementsByClassName("categorias-nav");
	liCat[0].setAttribute("class","dropdown categorias-nav hidden");


	//Tiendas Navbar
	var navbar = document.getElementById("myNavbar");
	var menuNavbar = navbar.getElementsByClassName("tienda-nav");
	var ulMenu= menuNavbar[0].getElementsByTagName("ul");

	var divCont = document.getElementById("myDiv"); 	//CONTENEDOR
	var divRow = document.createElement("div");		//LINEA

	var lis = ulMenu[0].getElementsByTagName("li");
	
	if (lis.length > 0){
		var cont = lis.length;
		for(let i=0;i<cont;i++){
			ulMenu[0].removeChild(lis[0]);
		}

		var lineaTiendas = document.getElementsByClassName("tiendas");

		var lineaProductos = document.getElementsByClassName("productos");

		if(lineaTiendas.length!=0){
			divCont.removeChild(lineaTiendas[0]);
		}
		if(lineaProductos.length!=0){
			divCont.removeChild(lineaProductos[0]);
			
		}
		
	}

	var shops = sh.shop;
	var shop = shops.next();

	while(!shop.done){
		//LISTA
		var li = document.createElement("li");
		var a = document.createElement("a");
		a.setAttribute("href", "#"+shop.value.name);
		
		var texto = document.createTextNode(shop.value.name);

		a.addEventListener("click", evtMostrarProductos(shop.value));

		a.appendChild(texto);
		li.appendChild(a);

		ulMenu[0].appendChild(li);

		//TEXTOS
		var nombreT = document.createTextNode(shop.value.name);
		var calle = document.createTextNode("Informacion de Tienda");
		
		
		//CREAR ELEMENTOS
		
		var divProd = document.createElement("div");
		var divPanelS = document.createElement("div");
		var divPanelHead = document.createElement("div");
		var divPanelBody = document.createElement("div");
		var a = document.createElement("a");
		var img = document.createElement("img");
		var divPanelFoot = document.createElement("div");
		var div = document.createElement("div");
		var btn = document.createElement("button");

		//HIJOS
		btn.appendChild(calle);
		div.appendChild(btn);
		divPanelFoot.appendChild(div);
		divPanelHead.appendChild(nombreT);
		a.appendChild(img);
		divPanelBody.appendChild(a);
		divPanelS.appendChild(divPanelHead);
		divPanelS.appendChild(divPanelBody);
		divPanelS.appendChild(divPanelFoot);
		divProd.appendChild(divPanelS);
		divRow.appendChild(divProd);
		

		//ATRIBUTOS
		divProd.setAttribute("class", "col-sm-4"); 
		divPanelS.setAttribute("class", "panel panel-primary"); 
		divPanelHead.setAttribute("class", "panel-heading"); 
		divPanelBody.setAttribute("class", "panel-body"); 
		a.setAttribute("href", "#"+shop.value.name);

		a.addEventListener("click", evtMostrarProductos(shop.value));
		img.setAttribute("src", "https://placehold.it/150x80?text=SHOP"); 
		img.setAttribute("class", "img-responsive"); 
		img.setAttribute("style", "width:100%"); 
		img.setAttribute("alt", "Image");
		divPanelFoot.setAttribute("class","panel-footer")
		btn.setAttribute("class","btn btn-info");



		//MODAL INFO TIENDA
		var tName = "Tienda: "+shop.value.name;
		var tDir = "Direccion: "+shop.value.direccion;
		var tTlf ="TLF: "+shop.value.tlf;
		

		btn.setAttribute("data-toggle", "modal");
		btn.setAttribute("data-target", "#"+shop.value.cif);

		var divMF = document.createElement("div");
		divMF.setAttribute("class","modal fade");
		divMF.setAttribute("id",shop.value.cif);
		divMF.setAttribute("role","dialog");

		var divMD = document.createElement("div");
		divMD.setAttribute("class","modal-dialog");

		var divMC = document.createElement("div");
		divMC.setAttribute("class","modal-content");

		var divMB = document.createElement("div");
		divMB.setAttribute("class","modal-body");

		var pM1 = document.createElement("p");
		var pMC1 = document.createTextNode(tName);
		var pM2 = document.createElement("p");
		var pMC2 = document.createTextNode(tDir);
		var pM3 = document.createElement("p");
		var pMC3 = document.createTextNode(tTlf);
		
		
		divMF.appendChild(divMD);
		divMD.appendChild(divMC);
		divMC.appendChild(divMB);
		divMB.appendChild(pM1);
		divMB.appendChild(pM2);
		divMB.appendChild(pM3);
		pM1.appendChild(pMC1);
		pM2.appendChild(pMC2);
		pM3.appendChild(pMC3);
		

		divProd.appendChild(divMF);




		shop = shops.next();

	}

	divCont.appendChild(divRow);	 
	divRow.setAttribute("class", "row tiendas"); 
 
}






//MENU CATEGORIA
function menuCategorias(){

	//categorias-nav
	var navbar = document.getElementById("myNavbar");
	var menuNavbar = navbar.getElementsByClassName("categorias-nav");
	var ulMenu= menuNavbar[0].getElementsByTagName("ul");
	
	var lis = ulMenu[0].getElementsByTagName("li");
	if (lis.length > 0){
		var cont = lis.length;
		for(let i=0;i<cont;i++){
			ulMenu[0].removeChild(lis[0]);
		}
		
	}

	var categorias = sh.categories;
	var categoria = categorias.next();

	while(!categoria.done){

		var li = document.createElement("li");
		var a = document.createElement("a");
		a.setAttribute("href", "#"+categoria.value.name);
		a.addEventListener("click", evtMostrarProductosCategoria(categoria.value));
		
		var texto = document.createTextNode(categoria.value.name);

		a.appendChild(texto);
		li.appendChild(a);

		ulMenu[0].appendChild(li);
		categoria = categorias.next();

	}

}

//BORRA LA LINEA
function borrarLineaProductos(){
	
	var divCont = document.getElementById("myDiv");
	var elementos = document.getElementsByClassName("productos");
	var elementos2 = document.getElementsByClassName("tiendas");
	if(elementos.length!=0){
		divCont.removeChild(elementos[0]);
	}
	if(elementos2.length!=0){
		divCont.removeChild(elementos2[0]);
	}

}

//GUARDA TIENDA ACTUAL Y MUESTRA MENU CATEGORIAS
function cambiarTiendaActual(tienda){
	
	tiendaActual = sh.getShopAt(tienda);	//TIENDA ACTUAL GUARDADA POR CIF
	var elementos = document.getElementsByClassName("categorias-nav");		
	elementos[0].classList.remove("hidden");		//QUITA EL HIDDEN DEL MENU CATEGORIAS Y LAS MUESTRA

}

//MUESTRA LOS PRODUCTOS DE UNA TIENDA
function mostrarProductos(tienda){

	cambiarTiendaActual(tienda);
	borrarLineaProductos();
	showProduct(sh.getShopProducts(tiendaActual.shop));		//pinta los productos

}

//MUESTRA LOS PRODUCTOS DE UNA CATEGORIA
function mostrarProductosCategoria(categoria){

	borrarLineaProductos();
	var productosFiltrados = sh.getCategoryProductShop(categoria, tiendaActual);	//PRODUCTOS FILTRADOS POR CATEGORIA Y TIENDA
	showProduct(productosFiltrados);	//pinta los productos

}

//PINTA LOS PRODUCTOS
function showProduct(products){

	var product= products.next();

	var divCont = document.getElementById("myDiv");		//CONTENEDOR
	var divRow = document.createElement("div");		//LINEA

	
	while (product.done !== true){
	
		//TEXTO
		var nombreP = document.createTextNode(product.value.product.name);
		var infoP = document.createTextNode("Informacion del Producto");
		var stockP = document.createTextNode("Stock Total");
		var stockPT = document.createTextNode("Stock "+tiendaActual.shop.name);
		
		//CREAR ELEMENTOS
		var divProd = document.createElement("div");
		var divPanelS = document.createElement("div");
		var divPanelHead = document.createElement("div");
		var divPanelBody = document.createElement("div");
		var a = document.createElement("a");
		var img = document.createElement("img");
		var divPanelFoot = document.createElement("div");
		//var p = document.createElement("p");
		var divF1=document.createElement("div");
		var divF2=document.createElement("div");
		var buttonS = document.createElement("button");	
		var buttonP = document.createElement("button");	
		var buttonST = document.createElement("button");	


		//HIJOS
		buttonS.appendChild(stockP);
		buttonST.appendChild(stockPT);	
		divF2.appendChild(buttonS);	
		divF2.appendChild(buttonST);	
		buttonP.appendChild(infoP);	
		divF1.appendChild(buttonP)
		divPanelFoot.appendChild(divF1);
		//divPanelFoot.appendChild(p);
		divPanelFoot.appendChild(divF2);		
		divPanelHead.appendChild(nombreP);
		a.appendChild(img);
		divPanelBody.appendChild(a);
		divPanelS.appendChild(divPanelHead);
		divPanelS.appendChild(divPanelBody);
		divPanelS.appendChild(divPanelFoot);
		divProd.appendChild(divPanelS);
		divRow.appendChild(divProd);
		
		
		//ATRIBUTOS
		divProd.setAttribute("class", "col-sm-4"); 
		divPanelS.setAttribute("class", "panel panel-success");
		buttonS.setAttribute("class","btn btn-success");
		buttonST.setAttribute("class","btn btn-warning");
		buttonP.setAttribute("class","btn btn-info");
		divPanelHead.setAttribute("class", "panel-heading"); 
		divPanelBody.setAttribute("class", "panel-body"); 
		a.setAttribute("href", "#p"); 
		//a.setAttribute("href", "#"+product.value.product.SN); 
		img.setAttribute("src", product.value.product.images); 	 
		img.setAttribute("class", "img-responsive"); 
		img.setAttribute("style", "width:100%"); 
		img.setAttribute("alt", "Image"); 
		divPanelFoot.setAttribute("class","panel-footer")



		//MODAL INFO PRODUCTO
		var tSN = "SN: "+product.value.product.SN;
		var tName = "Producto: "+product.value.product.name;
		var tPrice ="Precio: "+product.value.product.price+"€";
		var tDesc = "Descripcion: "+product.value.product.description;

		buttonP.setAttribute("data-toggle", "modal");
		buttonP.setAttribute("data-target", "#"+product.value.product.SN);

		var divMF = document.createElement("div");
		divMF.setAttribute("class","modal fade");
		divMF.setAttribute("id",product.value.product.SN);
		divMF.setAttribute("role","dialog");

		var divMD = document.createElement("div");
		divMD.setAttribute("class","modal-dialog");

		var divMC = document.createElement("div");
		divMC.setAttribute("class","modal-content");

		var divMB = document.createElement("div");
		divMB.setAttribute("class","modal-body");

		var pM1 = document.createElement("p");
		var pMC1 = document.createTextNode(tSN);
		var pM2 = document.createElement("p");
		var pMC2 = document.createTextNode(tName);
		var pM3 = document.createElement("p");
		var pMC3 = document.createTextNode(tPrice);
		var pM4 = document.createElement("p");
		var pMC4 = document.createTextNode(tDesc);
		
		divMF.appendChild(divMD);
		divMD.appendChild(divMC);
		divMC.appendChild(divMB);
		divMB.appendChild(pM1);
		divMB.appendChild(pM2);
		divMB.appendChild(pM3);
		divMB.appendChild(pM4);
		pM1.appendChild(pMC1);
		pM2.appendChild(pMC2);
		pM3.appendChild(pMC3);
		pM4.appendChild(pMC4);

		divProd.appendChild(divMF);
		

		

		
		

		//MODAL STOCK TOTAL
		var allstock = sh.getAllStock(product.value.product);

		var tNameS = "Producto: "+product.value.product.name;
		var tStock = "Stock Total: "+allstock;


		buttonS.setAttribute("data-toggle", "modal");
		buttonS.setAttribute("data-target", "#"+product.value.product.SN+"stock");

		var divMFS = document.createElement("div");
		divMFS.setAttribute("class","modal fade");
		divMFS.setAttribute("id",product.value.product.SN+"stock");
		divMFS.setAttribute("role","dialog");

		var divMDS = document.createElement("div");
		divMDS.setAttribute("class","modal-dialog");

		var divMCS = document.createElement("div");
		divMCS.setAttribute("class","modal-content");

		var divMBS = document.createElement("div");
		divMBS.setAttribute("class","modal-body");

		var pM1S = document.createElement("p");
		var pMC1S = document.createTextNode(tNameS);
		var pM2S = document.createElement("p");
		var pMC2S = document.createTextNode(tStock);
	
		
		divMFS.appendChild(divMDS);
		divMDS.appendChild(divMCS);
		divMCS.appendChild(divMBS);
		divMBS.appendChild(pM1S);
		divMBS.appendChild(pM2S);
		pM1S.appendChild(pMC1S);
		pM2S.appendChild(pMC2S);
	

		divProd.appendChild(divMFS);



		


		//MODAL STOCK TIENDA
		var stockT = sh.getStockProduct(product.value.product, tiendaActual.shop);

		var tNameST = "Producto: "+product.value.product.name;
		var tStockT = "Stock de "+tiendaActual.shop.name+": "+stockT;


		buttonST.setAttribute("data-toggle", "modal");
		buttonST.setAttribute("data-target", "#"+product.value.product.SN+"stockT");

		var divMFST = document.createElement("div");
		divMFST.setAttribute("class","modal fade");
		divMFST.setAttribute("id",product.value.product.SN+"stockT");
		divMFST.setAttribute("role","dialog");

		var divMDST = document.createElement("div");
		divMDST.setAttribute("class","modal-dialog");

		var divMCST = document.createElement("div");
		divMCST.setAttribute("class","modal-content");

		var divMBST = document.createElement("div");
		divMBST.setAttribute("class","modal-body");

		var pM1ST = document.createElement("p");
		var pMC1ST = document.createTextNode(tNameST);
		var pM2ST = document.createElement("p");
		var pMC2ST = document.createTextNode(tStockT);
	
		
		divMFST.appendChild(divMDST);
		divMDST.appendChild(divMCST);
		divMCST.appendChild(divMBST);
		divMBST.appendChild(pM1ST);
		divMBST.appendChild(pM2ST);
		pM1ST.appendChild(pMC1ST);
		pM2ST.appendChild(pMC2ST);
	

		divProd.appendChild(divMFST);


		//ESTILO
		buttonS.style.marginRight="10px";
		buttonS.style.marginTop="10px";
		buttonST.style.marginTop="10px";

		//ABRIR UNA VENTANA NUEVA
		a.addEventListener("click", evtAbrirVentana(product.value));
		
		product = products.next();

	}

	divCont.appendChild(divRow);	 
	divRow.setAttribute("class", "row productos");

	

}

var ventanas=[];

function abrirV(producto){
	var ventana;


	ventana = window.open("", "", "width=370,height=480");

	ventana.document.write("<!DOCTYPE html><html lang='en'><head><title>Producto</title><meta charset='utf-8'><meta name='viewport' content='width=device-width, initial-scale=1'><link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'><script src='https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script><script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'></script>");

	ventana.document.write("<body>");

	ventana.document.write("<div style='margin:10px 10px' class='panel panel-success'><div class='panel-heading'>"+producto.product.name+"</div><div class='panel-body'>");
	ventana.document.write("<img src='"+producto.product.images+"' class='img-responsive' style='width:100%' alt='Image'></div>");
	ventana.document.write("<div class='panel-footer'><p>Precio: "+producto.product.price+"€</p><p>Descripcion: "+producto.product.description+"</p></div>");
	
	ventana.document.write("</body></html>");

	ventanas.push(ventana);

}




function cerrarV(){
	for(var i=0;i<ventanas.length;i++){
		ventanas[i].close();
	}
}

function evtMostrarProductos(shop){
	return function(){
		return mostrarProductos(shop);
	}
}

function evtMostrarProductosCategoria(categoria){
	return function(){
		return mostrarProductosCategoria(categoria);
	}
}

function evtAbrirVentana(producto){
	return function(){
		return abrirV(producto);
	}
}














function sesionIniciada(){

	var cerrarSesion = document.getElementById("cerrarSesion");
	var bU = document.getElementById("bU");
	var aU = document.getElementById("aU");
	var aT = document.getElementById("aT");
	var aC = document.getElementById("aC");
	var aP = document.getElementById("aP");
	var aG = document.getElementById("aG");


	if(getCookie("usuario")){
		cerrarSesion.setAttribute("class","");
		bU.setAttribute("data-dismiss","modal");
		aU.setAttribute("class","hidden");
		aT.setAttribute("class","");
		aC.setAttribute("class","");
		aP.setAttribute("class","");
		aG.setAttribute("class","");
	
	}
	
}




function sesionUsuario(){
	var usuario="prueba";
	var psw="prueba";

	var cerrarSesion = document.getElementById("cerrarSesion");
	var bU = document.getElementById("bU");

	var aU = document.getElementById("aU");
	var aT = document.getElementById("aT");
	var aC = document.getElementById("aC");
	var aP = document.getElementById("aP");
	var aG = document.getElementById("aG");

	var u = document.forms[0].usuario.value;
	var p = document.forms[0].psw.value;
	
	if(u==usuario && p==psw){
		cerrarSesion.setAttribute("class","");
		bU.setAttribute("data-dismiss","modal");
		aU.setAttribute("class","hidden");
		aT.setAttribute("class","");
		aC.setAttribute("class","");
		aP.setAttribute("class","");
		aG.setAttribute("class","");
		
		setCookie("usuario",u,30);


		alert("Usuario y Contraseña Correctos");	
	}else{
		alert("Usuario o Contraseña Incorrectos");
	}

	

}

function cerrarS(){
	var cerrarSesion = document.getElementById("cerrarSesion");
	var aU = document.getElementById("aU");
	var aT = document.getElementById("aT");
	var aC = document.getElementById("aC");
	var aP = document.getElementById("aP");
	var aG = document.getElementById("aG");

	cerrarSesion.setAttribute("class","hidden");
	aU.setAttribute("class","");
	aT.setAttribute("class","hidden");
	aC.setAttribute("class","hidden");
	aP.setAttribute("class","hidden");
	aG.setAttribute("class","hidden");

	document.cookie = "usuario=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

}






function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("usuario");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        
        if (user != "" && user != null) {
            setCookie("usuario", user, 365);
        }
    }
} 




//Formularios



function crearModificarCategoria(){
	
	var nombreCategoria=document.forms[2].categoria.value;
	var descripcion=document.forms[2].descripcion.value;
	
	var category = sh.getCategoryAt(nombreCategoria);

	//añadir
	if(category == null){
		if(nombreCategoria == ""){
			nombreCategoria = "Nueva Categoria";
		}

		category = new Category(nombreCategoria);
		category.description = descripcion;
		sh.addCategory(category);
		alert("Se ha añadido la  categoria")

	//Modificar
	}else{

		category.description = descripcion;
		alert("Se ha modificado la  categoria")

	}

	menuCategorias()

}

function eliminarCategoria(){
	
	var nombreCategoria=document.forms[2].categoria.value;
	var descripcion=document.forms[2].descripcion.value;
	
	var category = sh.getCategoryAt(nombreCategoria);

	if(category == null){
		alert("No existe")
	}else{
		try{
			sh.removeCategory(category.category);

			alert("Categoria eliminada");

			menuCategorias();
		}catch(err){
			alert(err)
		}
		

	}	

}

function crearModificarTienda(){

	var cif = document.forms[1].cif.value;
	var tienda = document.forms[1].tienda.value;
	var direccion = document.forms[1].direccion.value;
	var tlf = document.forms[1].tlf.value; 

	var shop = sh.getShopAtCIF(cif);

	if(shop == null){
		if(tienda == ""){
			tienda = "Nueva Tienda";
		}
		shop = new Shop(cif, tienda,direccion,tlf);

		sh.addShop(shop);

		alert("tienda añadida")

	}else{

		shop.shop.name = tienda;
		shop.shop.direccion = direccion
		shop.shop.tlf = tlf;

		alert("tienda modificada")

	}

	menuTiendas();

}

function eliminarTienda(){
	var cif = document.forms[1].cif.value;
	var tienda = document.forms[1].tienda.value;
	var direccion = document.forms[1].direccion.value;
	var tlf = document.forms[1].tlf.value; 

	var shop = sh.getShopAtCIF(cif);

	if(shop == null){

		alert("No existe la tienda")

	}else{

		try{
			sh.removeShop(shop.shop);

			alert("tienda elimnada")

			menuTiendas();
		}catch (err){
			alert(err)
		}
		
	}

	
}





function crearModificarProducto(){

	var tipo = document.forms[3].tipo.value;
	var sn = document.forms[3].sn.value;
	var producto = document.forms[3].producto.value;
	var precio = document.forms[3].precio.value; 
	var tax = document.forms[3].tax.value; 

	var product = sh.getProductAt(sn);

	if(product == null){
		
		if(tipo == "TV"){
			product = new TV(sn, producto,precio,tax);
		}
		if(tipo == "PC"){
			product = new PC(sn, producto,precio,tax);
		}
		if(tipo == "SP"){
			product = new SP(sn, producto,precio,tax);
		}

		product.images="https://placehold.it/500x500?text=PRODUCT";

		sh.addProduct(product);

		alert("producto añadido")

	}else{

		sh.removeProduct(product.product);

		if(tipo == "TV"){
			product = new TV(sn, producto,precio,tax);
		}
		if(tipo == "PC"){
			product = new PC(sn, producto,precio,tax);
		}
		if(tipo == "SP"){
			product = new SP(sn, producto,precio,tax);
		}

		product.images="https://placehold.it/500x500?text=PRODUCT";

		sh.addProduct(product);

		alert("producto modificado")

	}



}

function eliminarProducto(){
	var tipo = document.forms[3].tipo.value;
	var sn = document.forms[3].sn.value;
	var producto = document.forms[3].producto.value;
	var precio = document.forms[3].precio.value; 
	var tax = document.forms[3].tax.value; 

	var product = sh.getProductAt(sn);

	if(product == null){

		alert("No existe el producto")

	}else{

		try{
			sh.removeProduct(product.product);

			alert("producto elimnada")

			mostrarProductos(tiendaActual.shop)

			
		}catch (err){
			alert(err)
		}
		
	}

	
}









function anadirCategoriaProducto(){
	
	var nombreCategoria = document.forms[4].categoria2.value;
	var sn = document.forms[4].sn2.value;
	
	var category = sh.getCategoryAt(nombreCategoria);
	var product = sh.getProductAt(sn);
	
	if(category == null){
		alert("No existe la categoria")
	}else if(product == null){
		alert("No existe el producto")
	}else{
		try {
			sh.addCategoryInProduct(product.product, category.category);
			alert("Se ha añadido la categoria al producto");
		} catch (err) {
			alert("La categoria ya existe en el producto");
		}
		
	}
		


}


function anadirProductoTienda(){

	var sn = document.forms[5].sn3.value;
	var unidades = document.forms[5].unidades.value;
	var cif = document.forms[5].cif2.value;
	if(unidades == undefined || unidades == ""){
		unidades=1;
	}

	unidades=parseInt(unidades);

	var product = sh.getProductAt(sn);
	var shop = sh.getShopAtCIF(cif);

	if(shop == null){
		alert("No existe la tienda")
	}else if(product == null){
		alert("No existe el producto")
	}else{
		try {
			sh.addProductInShop(product.product, shop.shop, unidades)
			alert("añadido producto a la tienda");
		} catch (err) {
			sh.addQuantityProductInShop(product.product, shop.shop, unidades)
			alert("añadida cantidad");
		}
		
	}

}

























window.onload = init;