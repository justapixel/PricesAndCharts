var URLd = 'https://economia.awesomeapi.com.br/jsonp/USD-BRL';
var URLb = 'https://api.bitcointrade.com.br/v2/public/BRLBTC/ticker';
var URLe = 'https://economia.awesomeapi.com.br/jsonp/EUR-BRL';
window.onload = function(){
    this.httpGetAsync(URLd, imprimedolar);
    this.httpGetAsync(URLb, imprimebitcoin);
    this.httpGetAsync(URLe, imprimeeuro);

}

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);

    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}