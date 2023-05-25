var isPraktikanPPW1 = confirm("Apakah Anda praktikan PPW1?");

if (isPraktikanPPW1) {
    var nama = prompt("Masukkan Nama:");
    var nim = prompt("Masukkan NIM:");
    var angkatan = prompt("Masukkan Angkatan:");

    var tableContent = `
        <center>
            <table class="table table-striped table-hover w-50 table-responsive">
            <tr>
                <th>Nama</th>
                <th>NIM</th>
                <th>Angkatan</th>
            </tr>
            <tr>
                <td>${nama}</td>
                <td>${nim}</td>
                <td>${angkatan}</td>
            </tr>
            </table>
        </center>
    `;

    document.write(tableContent);
} else {
    document.write("<p>Anda bukan praktikan PPW1, Anda tidak boleh masuk!</p>");
}
