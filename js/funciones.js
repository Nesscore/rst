
window.addEventListener("DOMContentLoaded", function(){
	document.getElementById("inicios").onclick = (e) => { mostrarInicio(); e.preventDefault(); };
	document.getElementById("servicios").onclick = (e) => { mostrarServicios(); e.preventDefault(); };

});

function mostrarInicio () {
	const rowServicios = document.querySelector("#servicio");
	const rowInicio = document.querySelector("#inicio");
	if (rowInicio.style.display === "none") 
	{
		rowInicio.style.display = "block";
		rowServicios.style.display = "none";
	}
}

function mostrarServicios () {
	const rowServicios = document.querySelector("#servicio");
	const rowInicio = document.querySelector("#inicio");
	if (rowServicios.style.display === "none") 
	{
		rowServicios.style.display = "block";
		rowInicio.style.display = "none";
	}
}

