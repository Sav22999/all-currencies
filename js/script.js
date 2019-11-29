var currencies = ["€", "£", "$", "¥", "₩", "₮", "₪", "₸", "৳", "௹", "૱", "₨", "₽", "₱", "៛", "﷼", "₦", "₥", "ℳ", "₤", "₭", "₴", "₲", "ƒ", "₣", "₫", "֏", "₯", "₢", "₡", "¢", "₵", "฿", "₳", "؋", "¤"];
var n_symbols = 0;

function copySymbol(text)
{
	document.getElementById("text_to_copy").style.display="block";
	document.getElementById("text_to_copy").value = text;
	var copyText=document.getElementById("text_to_copy");
    copyText.select();
	document.execCommand("copy");
	document.getElementById("text_to_copy").style.display="none";
}

function setSymbols()
{

	//var n_temp = document.getElementsByClassName("symbol").length;
	//n_symbols = n_temp;
	n_symbols = currencies.length;
	for(var i=0;i<n_symbols;i++)
	{
		document.getElementById("symbols").innerHTML += "<input type=\"button\" class=\"symbol\" value=\""+currencies[i]+"\" />";
	}
}

setSymbols();

for(var i=0;i<n_symbols;i++)
{
	document.getElementsByClassName("symbol")[i].onclick = function(e){copySymbol(this.value);};
}