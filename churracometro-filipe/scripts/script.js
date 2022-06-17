//Carne - 400gr por pessoa + 6horas - 650
//Cerveja - 1200ml por pessoa + 6horas - 2000ml
//Refrigerante/Agua - 1000ml por pessoa + 6horas - 1500ml 

//criança valem 0,5


function calcular() 
{
	
	var inputAdultos  = document.getElementById("adulto").value;	
	var inputDuracao  = document.getElementById("duracao").value;
	
	var inputCriancas = 0;    
	var qdtTotalCarne = 0;
	var qdtTotalCerveja = 0;
	var qdtTotalBebida = 0;
	
	inputCriancas = document.getElementById("crianca").value;
	
	
	
	if(inputDuracao != "" && inputAdultos != "")
	{
		qdtTotalCarne = carnePP(duracao) * inputAdultos + (carnePP(duracao) / 2 * inputCriancas);
		qdtTotalCerveja = cervejaPP(duracao) * inputAdultos;
		qdtTotalBebida= bebidaPP(duracao) * inputAdultos + (bebidaPP(duracao) / 2 * inputCriancas);
		document.getElementById('resultado').innerHTML = "<p>&nbsp;</p><p style='color:#ffffff;'>" + qdtTotalCarne +"g de carne</p>" + "<p style='color:#ffffff;'>" + qdtTotalCerveja + "ml de cerveja</p>" + "<p style='color:#ffffff;'>" + qdtTotalBebida + "ml de bebidas</p>";
	
	}
	
	return false;
	
	

}

function carnePP(duracao)
{    
    if (duracao >= 6) 
	{
        return 650;
    } 
	else 
	{
        return 400;
	}
}

function cervejaPP(duracao){
    
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;}
}

function bebidaPP(duracao){
    
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;}
}
