$(document).ready(() => {
    $(".cities_table").css('opacity', '0');

    $(".cities_input_form").on('submit', (e) => {
        e.preventDefault();
        onCitiesSubmit();
    })
});

function onCitiesSubmit() {
    let inputCities = $("#input_cities");
    let cities = inputCities.val()
        .split('\n')
        .map(item => $.trim(item))
        .filter(item => item.length !== 0);

    if (cities.length === 0) {
        window.alert("Please enter at lease one city!");
        return;
    }

    let sort = $("#input_cities_sort").prop("checked") === true;

    sendCitiesToServer(cities, sort);
}

function sendCitiesToServer(cities, sort) {
    let json = {
        "cities": cities,
        "sort": sort
    };

    let form = $('.cities_input_form');
    let url = form.attr('action');

    $.ajax({
        url: url,
        type: form.attr('method'),
        data: JSON.stringify(json),
        success: (data) => {
            displayCities(JSON.parse(data));
        }
    });
}

function displayCities(data) {
    console.log(data);

    let table = $(".cities_table");
    table.css('opacity', '1');

    table.find("tr:gt(0)").remove();

    $.each(data, function(i, obj) {
        let row = document.createElement("TR");
        let cityCell = document.createElement("TD");
        cityCell.innerHTML = obj["name"];
        let descriptionCell = document.createElement("TD");
        descriptionCell.innerHTML = obj["description"];
        row.append(cityCell);
        row.append(descriptionCell);
        table.append(row);
    });
}