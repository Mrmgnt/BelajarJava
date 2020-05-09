// kalo di click dia barubah warna xd
// AMBIL di yang idnya p3
const p3 = document.querySelector('.p3');

// tambahin fungsinya
function ubahwarnaP2() {
    
    p2.style.backgroundColor = 'lightblue';
   
}
function ubahwarnaP3() {
    
    p3.style.backgroundColor = 'lightblue';
}

// ini ambil variavel yang p2
const p2 = document.querySelector('.p2');

// kalo diclick ke function ubahwarna (LINE:6)
p2.onclick = ubahwarnaP2;
const p4 = document.querySelector('section#b p');

// ==================================================================================================================

//cari element p4 , dan kalo di click lakukan sesuatu yg di function
p4.addEventListener('click', function() {
    //ambil parent nya
    const ul = document.querySelector('section#b ul');
    //bikin element baru
        const liBaru = document.createElement('li');
    //rangkai
        const tekslibaru = document.createTextNode('teks li baru');
    //simpan dalam ul ( gabungkan )
            liBaru.appendChild(tekslibaru);
                ul.appendChild(liBaru);

})




// PILIH SALAH SATU!!! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



// =========================================================
// // kalo pake event handler
// const p3 = document.querySelector('.p3');
// p3.onclick = function() {
//     p3.style.backgroundColor = 'lightblue';
// }

// p3.onclick = function () {
//     p3.style.color = 'red';
// }
// ===============================================================


// ========================================================================
// //event listener (YANG RECOMMENDED DIPAKE!!!)
// const p3 = document.querySelector('.p3');

// p3.addEventListener('click', function() {
//     p3.style.backgroundColor = 'lightblue';
// });


// p3.addEventListener('click', function() {
//     p3.style.color = 'red';
// });
// // =============================================================================

//  end of evend