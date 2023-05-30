function sayHello() {
    alert("Welcome to The Ocean!!!");
}

var originalText = ""; // Variabel untuk menyimpan teks asli

function editTeks() {
    var teksAwal = document.getElementById("teksAwal");
    var editButton = document.getElementById("editButton");
    var editArea = document.getElementById("editArea");
    var saveButton = document.getElementById("saveButton");

    if (originalText === "") {
        originalText = teksAwal.textContent; // Menyimpan teks asli hanya saat pertama kali diedit
    }

    editArea.value = originalText; // Mengisi textarea dengan teks asli atau teks yang sudah disimpan
    teksAwal.style.display = "none";
    editButton.style.display = "none";
    saveButton.style.display = "block";
    editArea.style.display = "block";
}

function simpanTeks() {
    var editArea = document.getElementById("editArea");
    var teksHasil = document.getElementById("teksHasil");
    var saveButton = document.getElementById("saveButton");

    var teks = editArea.value;
    teksHasil.textContent = teks;

    editArea.style.display = "none";
    saveButton.style.display = "none";
    teksHasil.style.display = "block";
    editButton.style.display = "block"; // Menampilkan tombol "Edit" setelah hasil disimpan

    originalText = teks; // Menyimpan teks yang diubah sebagai teks asli yang akan ditampilkan ketika tombol "Edit" ditekan kembali
}


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