//Buttonlar
var hesaplamak = document.getElementById('Hesapla');
const sifirla = document.getElementById('sifirla');


//Yazilar
const endeksi = document.getElementById('Endeks');
const durum = document.getElementById('Durumu');

//Sonuc
const kinde_Endeksi = document.getElementById('Kinde_Endeksi');
const sağlık_Durumu = document.getElementById('Sağlık_Durumu');


hesaplamak.addEventListener('click',(e)=>{
    //Sayfasını yenilemesini istemiyorsan koyazrsın
    e.preventDefault();


    const height = Number(document.getElementById('height').value);
    const weight = Number(document.getElementById('weight').value);



    let sonuc = (weight / (height ** 2)).toFixed(2);

    if(sonuc>=0&&sonuc<=18.5){
        kinde_Endeksi.innerHTML =sonuc;
        sağlık_Durumu.innerHTML='Zayıf';
    }else if(18.5<sonuc&&sonuc<=24.9){
        kinde_Endeksi.innerHTML =sonuc;
        sağlık_Durumu.innerHTML='Normal Kilo';
    }else if(24.9<sonuc&&sonuc<=29.9){
        kinde_Endeksi.innerHTML =sonuc;
        sağlık_Durumu.innerHTML='Fazla Kilo';
    }else if(sonuc>=30){
        kinde_Endeksi.innerHTML =sonuc;
        sağlık_Durumu.innerHTML='Obez';
    }

    console.log(height);
    console.log(weight);
    console.log(sonuc);

});




