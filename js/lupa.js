var Aumento = 2;

$(window).load(function(){

	CentrarVentana($("#contenedor"), 'fixed');

	//CentrarEnVentana($("#contenedor"), $("#preload"), 'fixed', 'center', 'center');

	// Tamaño del contenedor que contiene la imagen al 100%
	ImageWidt = $(".zoom").width();
	ImageHeight = $(".zoom").height();

	$(".zoom").on("mouseenter", function(){

		var Image = $(this).attr("image");

		$("#contenedor #zoom-section").css({

			"background-image":"url('"+Image+"')"

		});

	});

	$(".zoom").on("mousemove", function(e){

		var PositionX = e.pageX;

		var PositionY = e.pageY;

		var ContainerX = e.pageX - this.offsetLeft;

		var ContainerY = e.pageY - this.offsetTop;

		ContainerFollow(PositionX, PositionY);

		Verificar(PositionX, PositionY, ContainerX, ContainerY);

		Zoom(ContainerX, ContainerY);

	});

});

function Zoom(ContainerX, ContainerY){

	var ImageX = $("#zoom-section").width() / (2 * Aumento);
	var ImageY = $("#zoom-section").height() / ( 2 * Aumento);

	$("#contenedor #zoom-section").css({

		"background-position":"top -"+(ContainerY - ImageY) * Aumento+"px left -"+(ContainerX - ImageX) * Aumento+"px",
		"background-size":ImageWidt * Aumento+"px "+ImageHeight * Aumento+"px",

	});
}

function ContainerFollow(PageX, PageY){

	$("#contenedor #zoom-section").show();

	$("#contenedor #zoom-section").css({

		"left":PageX-($("#contenedor #zoom-section").width() / 2)+"px",
		"top":PageY-($("#contenedor #zoom-section").height() / 2)+"px"

	});

}

function Verificar(CursorX, CursorY, ContainerX, ContainerY){

	if(ContainerX <= 0 || ContainerY <= 0 || ContainerX > $(".zoom").width() || ContainerY > $(".zoom").height()){

		$("#zoom-section").hide();

	}

}

function ChangeImage(){

	var NewImage = $("input[name='url']").val();

	$("#contenedor").attr("image", NewImage);

	$("#contenedor").css({"background-image":"url('"+NewImage+"')"});

}

function ChangeZoom(zoom){

	Aumento = zoom;

}