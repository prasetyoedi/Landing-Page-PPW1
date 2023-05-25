function calculateTotal() {
    var plasticBottlesPerDay = parseInt(document.getElementById('plasticBottlesPerDay').value) || 0;
    var plasticCupsPerDay = parseInt(document.getElementById('plasticCupsPerDay').value) || 0;
    var strawsPerDay = parseInt(document.getElementById('strawsPerDay').value) || 0;
    var cottonSwabsPerDay = parseInt(document.getElementById('cottonSwabsPerDay').value) || 0;
    var cigaretteButtsPerDay = parseInt(document.getElementById('cigaretteButtsPerDay').value) || 0;
    var resealableBagsPerDay = parseInt(document.getElementById('resealableBagsPerDay').value) || 0;
    var clingWrapPerDay = parseInt(document.getElementById('clingWrapPerDay').value) || 0;
    var plasticSilverwarePerDay = parseInt(document.getElementById('plasticSilverwarePerDay').value) || 0;
    var plasticStirrersPerDay = parseInt(document.getElementById('plasticStirrersPerDay').value) || 0;
    var foodContainerPerDay = parseInt(document.getElementById('foodContainerPerDay').value) || 0;

    var plasticBottlesPerYear = plasticBottlesPerDay * 365;
    var plasticCupsPerYear = plasticCupsPerDay * 365;
    var strawsPerYear = strawsPerDay * 365;
    var cottonSwabsPerYear = cottonSwabsPerDay * 365;
    var cigaretteButtsPerYear = cigaretteButtsPerDay * 365;
    var resealableBagsPerYear = resealableBagsPerDay * 365;
    var clingWrapPerYear = clingWrapPerDay * 365;
    var plasticSilverwarePerYear = plasticSilverwarePerDay * 365;
    var plasticStirrersPerYear = plasticStirrersPerDay * 365;
    var foodContainerPerYear = foodContainerPerDay * 365;

    var total = plasticBottlesPerYear + plasticCupsPerYear + strawsPerYear + cottonSwabsPerYear +
        cigaretteButtsPerYear + resealableBagsPerYear + clingWrapPerYear + plasticSilverwarePerYear +
        plasticStirrersPerYear + foodContainerPerYear;

    document.getElementById('plasticBottlesPerYear').value = plasticBottlesPerYear;
    document.getElementById('plasticCupsPerYear').value = plasticCupsPerYear;
    document.getElementById('strawsPerYear').value = strawsPerYear;
    document.getElementById('cottonSwabsPerYear').value = cottonSwabsPerYear;
    document.getElementById('cigaretteButtsPerYear').value = cigaretteButtsPerYear;
    document.getElementById('resealableBagsPerYear').value = resealableBagsPerYear;
    document.getElementById('clingWrapPerYear').value = clingWrapPerYear;
    document.getElementById('plasticSilverwarePerYear').value = plasticSilverwarePerYear;
    document.getElementById('plasticStirrersPerYear').value = plasticStirrersPerYear;
    document.getElementById('foodContainerPerYear').value = foodContainerPerYear;

    document.getElementById('result').innerText = 'Current Yearly Consumption : ' + total;
}