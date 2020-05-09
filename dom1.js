//membuat paragraph atau li baru kedalam java, seperti merangkai bunga

//bikin variabel dlu, (rangkai bunganya)------------------------------------------


// ambil bunganya
const pBaru = document.createElement('p');

// ambil tangkai atau akar
    const teksPBaru = document.createTextNode('paragrag baru');

// simpan tulisan ke dalam paragraph (gabungkan ke pot )
        pBaru.appendChild(teksPBaru);

//simpan p baru do akhir section A ( latar tempat)
            const sectionA = document.getElementById('a');

// gabungkan appenchild = tambahkan (taro bunganya)
                sectionA.appendChild(pBaru);
 // ------------------------------------------------------------------------------====**********>>>>>>


    //latihan 1 (menambahkan tapi li) xxxxxxxxxxxxxxxxxxxxxxxxxx

const liBaru = document.createElement('li');
const teksliBaru = document.createTextNode('item baru');

//simpan
liBaru.appendChild(teksliBaru);

//ambil variabel
const ul = document.querySelector('section#b ul');
const li3 = ul.querySelector('li:nth-child(3)');

//simpan kedalam li ( latar tempat )
ul.insertBefore(liBaru, li3);
// =============================================================================================================>>>



// remove child >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 const link = document.getElementsByTagName('a') [0];
 sectionA.removeChild(link);


 //mengganti child ---------------------------------------------

 // bikin variabel section b dlu buat ngambil element id b
const sectionB = document.getElementById('b');

//variabel p4 buat ngambil di p
    const p4 = sectionB.querySelector('p');

 //buat element h2 barunya sama teks nya
        const h2baru = document.createElement('h2');
            const texth2Baru = document.createTextNode('blbnlanla');

//gabungin element h2 nya
                h2baru.appendChild(texth2Baru);

// replace deh p4 jadi h2baru, begituu...
                    sectionB.replaceChild(h2baru, p4);
// -----------------------------------------------------------------------------------------------------------------------
liBaru.style.backgroundColor="lightgreen";
pBaru.style.backgroundColor="lightgreen";
h2baru.style.backgroundColor="lightgreen";



