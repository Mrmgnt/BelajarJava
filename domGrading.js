const tUbahWarna = document.getElementById('tUbahWarna')


tUbahWarna.addEventListener('click', function() {
        // document.body.style.backgroundColor = 'lightblue';
        document.body.classList.toggle('biru-muda');
        // document.body.setAttribute('class', 'biru-muda');
});

const trandom = document.createElement('button');
const tekstombol = document.createTextNode('ubah warna');

    trandom.appendChild(tekstombol);
    trandom.setAttribute('type', 'button');
    trandom.setAttribute('class', 'button');
    tUbahWarna.after(trandom);

trandom.addEventListener('click',function() {
    const r =   Math.round(Math.random() * 255 + 1);
    const g =   Math.round(Math.random() * 255 + 1);
    const b =   Math.round(Math.random() * 255 + 1);
    
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
    
});

const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function () {
    const r= sMerah.value;
    const g= sHijau.value;
    const b= sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sHijau.addEventListener('input', function () {
    const r= sMerah.value;
    const g= sHijau.value;
    const b= sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sBiru.addEventListener('input', function () {
    const r= sMerah.value;
    const g= sHijau.value;
    const b= sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});
