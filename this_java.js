//membuat object literal
//this

//variabel
let razki = {

    //properti soalnya ad didalam variabel
    nama: 'razki',
    mager: 10,

    // kalo yang ini method nyedh namanya
gabut: function(kemageran) {
        this.mager = this.mager + kemageran;
        console.log(`hallo razki ${this.nama}, selamat magerrr`);
    }

}

// var a = 10;
// console.log(this.a);

// function halo() {
//     console.log(this);
//     console.log('halo');
// }
// this.halo();

// // this mengembalikan object global


//* cara 2 object literal

// var obj = {a : 10, nama : 'razki'};

// ///method
// obj.halo = function () {
//     console.log(this);
//     console.log('halo razki');
// }
// obj.halo();

//this mengembalikan object yang bersangkutan


//cara 3 pake constructor

function Halo() {
    console.log(this);
    console.log('halo razki');
}
var obj1 = new Halo();
var obj2 = new Halo();
//this mengembalikan object yang baru dibuat



