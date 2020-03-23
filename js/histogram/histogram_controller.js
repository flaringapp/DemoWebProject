const _histogramContainer = document.getElementById("histogram_container");

initChartsLib()

document.addEventListener("DOMContentLoaded", function() {
    isDomReady = true;
    drawGistogram();
});



function initChartsLib() {
    google.charts.load('current', {
        'packages': ['corechart']
    });
    google.charts.setOnLoadCallback(() => {
        chartsLibReady = true;
        drawGistogram();
    });
}

var isDomReady = false;
var chartsLibReady = false;

function drawGistogram() {
    if (!isDomReady) return;
    if (!chartsLibReady) return;

    let data = google.visualization.arrayToDataTable([
        ['Dinosaur', 'Length'],
        ['Acrocanthosaurus (top-spined lizard)', 12.2],
        ['Albertosaurus (Alberta lizard)', 9.1],
        ['Allosaurus (other lizard)', 12.2],
        ['Apatosaurus (deceptive lizard)', 22.9],
        ['Archaeopteryx (ancient wing)', 0.9],
        ['Argentinosaurus (Argentina lizard)', 36.6],
        ['Baryonyx (heavy claws)', 9.1],
        ['Brachiosaurus (arm lizard)', 30.5],
        ['Ceratosaurus (horned lizard)', 6.1],
        ['Coelophysis (hollow form)', 2.7],
        ['Compsognathus (elegant jaw)', 0.9],
        ['Deinonychus (terrible claw)', 2.7],
        ['Diplodocus (double beam)', 27.1],
        ['Dromicelomimus (emu mimic)', 3.4],
        ['Gallimimus (fowl mimic)', 5.5],
        ['Mamenchisaurus (Mamenchi lizard)', 21.0],
        ['Megalosaurus (big lizard)', 7.9],
        ['Microvenator (small hunter)', 1.2],
        ['Ornithomimus (bird mimic)', 4.6],
        ['Oviraptor (egg robber)', 1.5],
        ['Plateosaurus (flat lizard)', 7.9],
        ['Sauronithoides (narrow-clawed lizard)', 2.0],
        ['Seismosaurus (tremor lizard)', 45.7],
        ['Spinosaurus (spiny lizard)', 12.2],
        ['Supersaurus (super lizard)', 30.5],
        ['Tyrannosaurus (tyrant lizard)', 15.2],
        ['Ultrasaurus (ultra lizard)', 30.5],
        ['Velociraptor (swift robber)', 1.8]
    ]);

    let options = {
        backgroundColor: 'transparent',
        title: 'Lengths of dinosaurs, in meters',
        titleTextStyle: {
            color: 'white'
        },
        hAxis: {
            textStyle: {
                color: '#FFF'
            },
            baseline: {
            	color: 'transparent'
            },
            gridlines: {
            	color: 'black'
            }
        },
        vAxis: {
            textStyle: {
                color: '#FFF'
            },
            baseline: {
            	color: 'transparent'
            },
            gridlines: {
            	color: 'black'
            },
            minorGridlines: {
            	color: 'transparent'
            }
        },
        legend: {
            textStyle: {
            	color: 'white'
            },
            minorGridlines: {
            	color: 'transparent'
            }
        },
        histogram: {
            lastBucketPercentile: 5
        },
        height: 600,
        width: 800
    };


    var chart = new google.visualization.Histogram(_histogramContainer);
    chart.draw(data, options);
}