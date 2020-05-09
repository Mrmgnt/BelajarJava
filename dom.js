

// #1 dom selection !!

//   ID!!

// document.getElementById() -> mengembalikan element
const judul = document.getElementById('judul');
judul.style.color = 'red';

judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Razki fadillah';


// // TAG!!

// document.getElementByTagName() -> mengembalikan html collection
const p = document.getElementsByTagName('p');
//pengulangan
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
}
const h1 = document.getElementsByTagName('h1') [0];
h1.style.fontSize = '25px';


// // CLASS NAME!!
//document.getElementsByClassName() -> mengembalikan html collection

const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'inii dibubah dari javascript'


//document.querySelector() -- > mengembalikan 1 element
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2) ');
li2.style.backgroundColor="orange";

const p = document.querySelector('p');
p.innerHTML = "ini diubagh melalui javscript";



//document.querySelectorAll()
const p = document.querySelectorAll('p');
for( let i = 0; i < p.length; i++ ) {
    
    p[i].style.backgroundColor ="lightblue";
}



const sectionB  = document.getElementById('b');
const p4 = sectionB.querySelector('p');
p4.style.backgroundColor = 'orange';

//end of dom selection
//*
//*




//#2 dom Manipulation

//#1

const judul = document.getElementById('judul');
judul.innerHTML = '<em>razki fadillah</em>';

const sectionA = document.querySelector('section#a');
sectionA.innerHTML ='<div> <p> hello world! </div> </p>';

//#2

const judul = document.querySelector('#judul');
judul.style.color = 'lightblue';
judul.style.backgroundColor ='salmon';


const judul = document.getElementsByTagName('h1')[0];
 const a = document.querySelector('section#a a');

const p2 = document.querySelector('.p2');
