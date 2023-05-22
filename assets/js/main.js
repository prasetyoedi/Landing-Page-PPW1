function sayHello() {
    alert("Welcome to The Ocean!!!");
}

function editTeks() {
    var teksAwal = document.getElementById("teksAwal");
    var editButton = document.getElementById("editButton");
    var editArea = document.getElementById("editArea");
    var saveButton = document.getElementById("saveButton");

    var teks = teksAwal.textContent; // Mendapatkan teks awal
    editArea.value = teks; // Mengisi textarea dengan teks awal
    teksAwal.style.display = "none"; // Menyembunyikan teks awal
    editButton.style.display = "none"; // Menyembunyikan tombol edit
    editArea.style.display = "block"; // Menampilkan textarea
    saveButton.style.display = "block"; // Menampilkan tombol save
}

function simpanTeks() {
    var editArea = document.getElementById("editArea");
    var teksHasil = document.getElementById("teksHasil");

    var teks = editArea.value; // Mendapatkan teks yang diubah dalam textarea
    teksHasil.textContent = teks; // Menampilkan teks yang diubah dalam elemen p

    editArea.style.display = "none"; // Menyembunyikan textarea
    saveButton.style.display = "none"; // Menyembunyikan tombol save
    teksHasil.style.display = "block"; // Menampilkan teks hasil
    // Mengosongkan textarea setelah disimpan
    editArea.value = "";
}

var editButton = document.getElementById("editButton");
var editArea = document.getElementById("editArea");
var saveButton = document.getElementById("saveButton");
var teksHasil = document.getElementById("teksHasil");

editButton.addEventListener("click", editTeks);
editArea.cols = "35";
editArea.rows = "8";


function submitForm(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var resultHTML = "<h2>Thanks for your response. Your data recorded as </h2>" +
        "<p>Name : " + name + "!</p>" +
        "<p>Email : " + email + " </p>" +
        "<p>Message : " + message + "</p>";

    var resultForm = document.getElementById("resultForm");
    resultForm.innerHTML = resultHTML;

    var h2Element = resultForm.getElementsByTagName("h2")[0];
    h2Element.style.fontSize = "24px";

    var pElements = resultForm.getElementsByTagName("p");
    for (var i = 0; i < pElements.length; i++) {
        pElements[i].style.marginBottom = "5px";
        pElements[i].style.fontSize = "16px";
    }
}