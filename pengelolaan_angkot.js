// membuat Object Angkot

function Angkot(

    //properti 
    sopir,
    trayek,
    penumpang,
    kas
)
{
    //propoerti dalam properti

    this.sopir = sopir;    
    this.trayek = trayek;    
    this.penumpang = penumpang;    
    this.kas = kas;  
    
    
    this.penumpangNaik = function(namaPenumpang) {
        //array
        this.penumpang.push(namaPenumpang);
        //kembalikan array
        return this.penumpang;
    }

    this.penumpangTurun = function(namaPenumpang, bayar) {
        if ( this.penumpang.length === 0 ){
            alert('angkot masih kosong!');
            return false;
        }
        
        // pengulangan
        for ( var i = 0; i <this.penumpang.length; i++)
        {
            if(this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }

    }


}
 // membuat object angkot nya 

var angkot1 = new Angkot('razki fadillah', ['poris', 'danau'], [], 0);
var angkot2 = new Angkot ('fadillah ikzar', ['telkom', 'pesing'], [], 0);

