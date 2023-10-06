// Apa yang kamu ketahui tentang tanggal 29 Februari? Kamu pasti tahu jika suatu tahun memiliki tanggal 29 Februari berarti tahun tersebut merupakan tahun kabisat.

// Dalam kalender Gregorian, tahun kabisat memiliki beberapa kriteria yaitu antara lain:

// Jika tahun habis di bagi 4 dan tidak habis di bagi 100, atau
// Jika tahun habis di bagi 4, habis di bagi 100 dan habis di bagi 400
// Buatlah algoritma & pseudocode untuk menentukan apakah suatu tahun merupakan tahun kabisat atau bukan!
// tahun = 2024

if (tahun % 4 == 0) {
    console.log(tahun)
} else if (tahun % 100 == 0) {
    console.log( "tahun tidak kabisat" )
}