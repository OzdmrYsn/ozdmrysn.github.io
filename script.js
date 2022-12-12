let kullanici = "Yasin";

let sifre = 123;

let bakiye = 1000;

let mehmetiban=456;

let sonuc=0;

let tc=789;

let secim = prompt("Kartsız İşlem / Giriş Yap");

localStorage.setItem("kullanici", kullanici);

localStorage.setItem("sifre", sifre);

localStorage.setItem("bakiye", bakiye);

localStorage.setItem("mehmetiban", mehmetiban);

localStorage.setItem("sonuc", sonuc);

localStorage.setItem("tc", tc);


if(secim=="Giriş Yap"){
    let girilenKullanici = prompt("Kullanıcı adınız nedir?");

    let girilenSifre = prompt("Şifrenizi giriniz?");
    
    if(girilenKullanici==kullanici && girilenSifre==sifre){
        alert("Hoşgeldin" + " " + kullanici)
    
        let yapilanislem = prompt("Para Çek / Para Yatır / Para Transfer / Kredi Çek")
    
        if(yapilanislem=="Para Çek"){
           let cekilmekİstenenÜcret =  Number(prompt("Bakiyeniz" + " " +bakiye + " " + "Ne kadar çekmek istersiniz?"));
            sonuc = bakiye - cekilmekİstenenÜcret;
            if(sonuc<0){
            let esnekhesapsorgu = prompt("Hesabın bakiyesi yetersiz, Esnek Hesap limite geçmek ister misiniz? E / H");
                if(esnekhesapsorgu=="E"){
                    // let esnekhrdspdonuc = bakiye + sonuc;
                    sonuc = -(sonuc);
                    alert("Para Çekildi. Borcunuz" + " " + sonuc);
                }
                else if(esnekhesapsorgu=="H"){
                    alert("Para Çekilemedi!");
                }
            }
        }
    
        else if(yapilanislem=="Para Yatır"){
            let yatirilmakistenenucret = Number(prompt("Bakiyeniz" + " " + bakiye + "," + "Ne kadar yatırmak istersiniz?"));
            sonuc = bakiye + yatirilmakistenenucret;
            alert("Güncel bakiyeniz" + sonuc);
        }
    
        else if(yapilanislem=="Para Transfer"){
            let girilenhesapno= Number(prompt("Hesap numarası giriniz?"));
            
            if(girilenhesapno==mehmetiban){
             let yollanilanpara = Number(prompt("ne kadar yollamak istersiniz?"));
            sonuc = bakiye - yollanilanpara;
            alert("Transfer tamamlandı. Kalan bakiyeniz" + " " + sonuc);
            }
            
            else{
                alert("Böyle bir hesap bulunmamaktadır.");
            }
            
        } 

        else if(yapilanislem=="Kredi Çek"){
            let krediucret = Number(prompt("Ne kadar kredi çekmek istersiniz?"));
            let faizsonuc = krediucret*0.18;
            sonuc = faizsonuc + krediucret;

            alert("Toplam borcunuz" + " " + sonuc + " " + "Aylık Ödemeniz /12" + " " + (sonuc / 12).toFixed(1));
        }
    
        else{
            alert("Yalnış değer girdiniz!");
        }
    
    }
    
    else{
        alert("Kullanıcı adı veya Şifre yanlış!");
    }
}
else if(secim=="Kartsız İşlem"){

    let kartsizsecim = prompt("Hesaba Yatır / Başka İban");

    if(kartsizsecim=="Hesaba Yatır"){
        let girilenKullanici = prompt("Kullanıcı adınız nedir?");

        let girilenSifre = prompt("Şifrenizi giriniz?");
        
        if(girilenKullanici==kullanici && girilenSifre==sifre){
            alert("Hoşgeldin" + " " + kullanici)
        
            let yapilanislem = prompt("Para Çek / Para Yatır")
        
            if(yapilanislem=="Para Çek"){
                let cekilmekİstenenÜcret =  Number(prompt("Bakiyeniz" + " " +bakiye + " " + "Ne kadar çekmek istersiniz?"));
                sonuc = bakiye - cekilmekİstenenÜcret;
                if(sonuc<0){
                let esnekhesapsorgu = prompt("Hesabın bakiyesi yetersiz, Esnek Hesap limite geçmek ister misiniz? E / H");
                    if(esnekhesapsorgu=="E"){
                        // let esnekhrdspdonuc = bakiye + sonuc;
                        sonuc = -(sonuc);
                        alert("Para Çekildi. Borcunuz" + " " + sonuc);
                    }
                    else if(esnekhesapsorgu=="H"){
                        alert("Para Çekilemedi!");
                    }
                }
            //    let cekilmekİstenenÜcret =  Number(prompt("Bakiyeniz" + " " +bakiye + " " + "Ne kadar çekmek istersiniz?"));
            //     sonuc = bakiye - cekilmekİstenenÜcret;
            //    alert("Kalan bakiyeniz" + " " + sonuc);
            }
        
            else if(yapilanislem=="Para Yatır"){
                let yatirilmakistenenucret = Number(prompt("Bakiyeniz" + " " + bakiye + "," + "Ne kadar yatırmak istersiniz?"));
                sonuc = bakiye + yatirilmakistenenucret;
                alert("Güncel bakiyeniz" + sonuc);
            }
        }
        else{
            alert("Kullanıcı adı veya Şifre yanlış!");
        }
    }
    else if(kartsizsecim=="Başka İban"){
      let girilentc = Number(prompt("TC Kimlik No giriniz"));
        if(girilentc==tc){
         let girilentcpara = Number(prompt("Ne kadar göndermek istersiniz?"));
            alert("Paranız Gönderilmiştir. Yollanılan Nakit" + " " + girilentcpara); 
        }
    }
 
}
else{
    alert("Yanlış Tanım!")
}
