let DNA1 = "TTTT";
let DNA2 = "GCAT";
let DNA3 = "GACCGCCGCC";
let DNA4 = "CCTAATAAAA";
let DNA5 = "TTCGG";

// "UUUU"
// "GCAU"
// "GACCGCCGCC"
// "CCUAAUAAAA"
// "UUCGG"

let DNA = DNA1
var baru =""
for(i=0 ; i<=DNA.length; i++ ) {
    if (DNA[i] == "T") {
        baru= baru + "U"
    } else {
        baru = baru + DNA[i]
    }
}

console.log(baru)