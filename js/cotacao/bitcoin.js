var URL = 'https://api.bitcointrade.com.br/v2/public/BRLBTC/ticker';
window.onload = function(){
    httpGetAsync(URL, imprime);
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

		var barChartData = {
            type: 'line',
            data: {
                labels: ["Outubro", "Novembro", "Dezembro", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro"],
                datasets: [{
                label: "Valor em R$",
                lineTension: 0.3,
                backgroundColor: "rgba(2,117,216,0.2)",
                borderColor: "rgba(2,117,216,1)",
                pointRadius: 5,
                pointBackgroundColor: "rgba(2,117,216,1)",
                pointBorderColor: "rgba(255,255,255,0.8)",
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(2,117,216,1)",
                pointHitRadius: 50,
                pointBorderWidth: 2,
                data: [23136, 30832, 69068, 55700, 39076, 33124, 32340, 35020, 26472, 25320, 25380, 26180],
                }],
            },
            options: {
                title: {
                    display: true,
                    fontColor: '#fff',
					text: 'Valor do Bitcoin, Outubro de 2017 a Setembro de 2018'
				},
                scales: {
                  xAxes: [{
                    time: {
                      unit: 'date'
                    },
                    gridLines: {
                      display: false,
                    },
                    ticks: {
                        fontColor: '#fff',
                    }
                  }],
                  yAxes: [{
                    ticks: {
                        min: 0,
                    },
                    gridLines: {
                        display: true,
                        color: "#FFFF"
                    },
                    ticks: {
                        fontColor: '#fff',
                    }
                  }],
                },
                legend: {
                  display: false,
                  labels: {
                    // This more specific font property overrides the global property
                    fontColor: 'white'
                    }
                }
            }
        };

function imprime(data) {
    data = JSON.parse(data);
    console.log(data.data.high);
    document.getElementById('menorval').innerHTML = 'R$: '+data.data.low;
    document.getElementById('atualval').innerHTML = 'R$: '+data.data.last;
    document.getElementById('maiorval').innerHTML = 'R$: '+data.data.high;
    var ctx = document.getElementById('bitcoin').getContext('2d');
	window.myBar = new Chart(ctx, barChartData);
}
