// membuat object part 1

var mhs = {
    // ini namanya properti

    nama : "razki",
    umur : "17",
        ips  : [3.00, 2.50, 3.20],
        email : "raskifadillah@gmail.com",
        alamat : {
            jalan : "jl. abc no 123",
            kota : "bandung",
            provinsi : "jawa barat"
        }
 }

 var mhs2 = {
        nama : "thry",
        umur : "17",
        ips  : [3.00, 2.50, 3.20],
        email : "thryyyy@gmail.com",
       
 }

 

 //function declaration

 function buatObjectMahasiswa(nama, umur, ips,

     email) {

     var mhs = {};
     mhs.nama = nama;
     mhs.umur = umur;
     mhs.ips = ips;
     mhs.email = email;

     return mhs;
 }
 var mhs3 = buatObjectMahasiswa('ikzar' , '17', '3.00', '20177691@smktelkom-jkt.sch.id' )



 //construktur
 function Mahasiswa(nama, umur, ips, email){
     this.nama = nama;
     this.umur = umur;
     this.ips = ips;
     this.email = email;
 }
var mhs4 = new Mahasiswa('Razki', '18', '3.00', '2017732173@dawjdhawndjwan')




