var bitcoin = {
    type: 'bar',
    data: {
        labels: ['Maior', 'Agora', 'Menor'],
        datasets: [{
            data: [42000, 41000, 40000,],
            backgroundColor: [
                'rgba(0, 255, 0, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 0, 0, 0.5)',
            ],
            borderColor: [
                'rgba(20, 255, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false,
            },
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
};

        

function imprimebitcoin(data) {
    data = JSON.parse(data);
    console.log(data.data.last);
    bitcoin.data.datasets[0].data[0] = data.data.high;
    bitcoin.data.datasets[0].data[1] = data.data.last;
    bitcoin.data.datasets[0].data[2] = data.data.low;
    var ctx = document.getElementById('bitcoin').getContext('2d');
    window.bitcoinBar = new Chart(ctx, bitcoin);
}


var dolar = {
    type: 'bar',
    data: {
        labels: ['Maior', 'Fechamento', 'Menor'],
        datasets: [{
            data: [4.04, 4.08, 4,],
            backgroundColor: [
                'rgba(0, 255, 0, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 0, 0, 0.5)',
            ],
            borderColor: [
                'rgba(20, 255, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false,
          },
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
};



function imprimedolar(data) {
data = JSON.parse(data);
console.log(data[0].ask);
dolar.data.datasets[0].data[0] = data[0].high;
dolar.data.datasets[0].data[1] = data[0].ask;
dolar.data.datasets[0].data[2] = data[0].low;
var ctx2 = document.getElementById('dolar').getContext('2d');
window.dolarBar = new Chart(ctx2, dolar);
}

var euro = {
    type: 'bar',
    data: {
        labels: ['Maior', 'Fechamento', 'Menor'],
        datasets: [{
            data: [4.04, 4.08, 4,],
            backgroundColor: [
                'rgba(0, 255, 0, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 0, 0, 0.5)',
            ],
            borderColor: [
                'rgba(20, 255, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false,
          },
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
};



function imprimeeuro(data) {
data = JSON.parse(data);
console.log(data[0].high);
euro.data.datasets[0].data[0] = data[0].high;
euro.data.datasets[0].data[1] = data[0].ask;
euro.data.datasets[0].data[2] = data[0].low;
var ctx3 = document.getElementById('euro').getContext('2d');
window.euroBar = new Chart(ctx3, euro);
}
