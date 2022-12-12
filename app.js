// ALLAH KOLAYLIK VERSİN

// let kullanici = "Yasin";

// let sifre = 123;

// let bakiye = 1000;

// let mehmetiban=456;

// let sonuc=0;

// let tc=789;

// let secim = prompt("Kartsız İşlem / Giriş Yap");

localStorage.setItem("kullanici","Yasin");
localStorage.setItem("sifre",123);
localStorage.setItem("bakiye",1000);
localStorage.setItem("mehmetiban",456);
localStorage.setItem("sonuc",0);
localStorage.setItem("tc",789);

let kullanici = localStorage.getItem("kullanici");
let sifre = Number(localStorage.getItem("sifre"));
let bakiye = Number(localStorage.getItem("bakiye"));
let mehmetiban = Number(localStorage.getItem("mehmetiban"));
let sonuc = Number(localStorage.getItem("sonuc"));
let tc = Number(localStorage.getItem("tc"));
let baskaisim = localStorage.getItem("baskaisim");






$(".kartsizislembtn").click(function(){
    $(".girisekran").css("display","none");
    $(".kartsizislemscreen").css("display","block");
});


$(".hesabayatirbtn").click(function(){
    $(".kartsizgiris").css("display","none");
    $(".girisyapgiris").css("display","block");
});

$(".girisyapbtn").click(function(){
    $(".girisekran").css("display","none");
    $(".girisyapgiris").css("display","block");
});

$(".kullanicisifrebtn").click(function(){
    let kullaniciadi = $(".inputisim1").val();
    let sifre = $(".inputisim2").val();

    if(kullaniciadi=="Yasin" && sifre=="123"){
        $(".anaekran").css("display","block");
        $(".paracekbtn").css("display","block");
        $(".parayatirbtn").css("display","block");
        $(".kredicekbtn").css("display","block");
        $(".havalebtn").css("display","block");
        $(".cikisyapbtn").css("display","block");
        $(".girisyapgiris").css("display","none");
    }
    else{
        $(".sifreyanlisalert").css("display","block");
        
        setTimeout(function(){
            $('.alert').remove();
          }, 5000);
    }
});


$(".paracekbtn").click(function(){
    bakiye = localStorage.getItem("bakiye");
    $(".anaekran").css("display","none");
    $(".paracekscreen").css("display","block");
    $(".bakiyebilgi").text("Ne kadar para çekmek istersiniz? Bakiyeniz: "+bakiye+" TL");
});

$(".paracekscreenbtn").click(function(){
    let paracekmedeger = $(".inputisim3").val();
    let bakiye = Number(localStorage.getItem("bakiye"));
    let sonucum = Number(bakiye - paracekmedeger);
    if(paracekmedeger>0 && paracekmedeger<=bakiye){
        $(".bakiyebilgi").text("Para çekme işleminiz başarılı. Kalan Bakiyeniz:" + " " + sonucum + " " + "TL");
        localStorage.setItem("bakiye",sonucum);
    }

    else{
        $(".bakiyebilgi").text("Yanlış veya yetersiz miktar girdiniz!");
    }
});

$(".parayatirbtn").click(function(){
    bakiye = localStorage.getItem("bakiye");
    $(".anaekran").css("display","none");
    $(".parayatirscreen").css("display","block");
    $(".bakiyebilgi2").text("Ne kadar para yatırmak istersiniz? Bakiyeniz: "+bakiye+" TL");

});


$(".parayatirscreenbtn").click(function(){
    let parayatir = Number($(".inputisim4").val());
    let bakiye = Number(localStorage.getItem("bakiye"));
    let sonucum2 = Number(bakiye + parayatir);

    if(parayatir>=0){
        $(".bakiyebilgi2").text("Para yatırma işleminiz başarılı. Güncel Bakiyeniz:" + " " + sonucum2 + " TL");
        localStorage.setItem("bakiye",sonucum2);
    }
    else{
        $(".bakiyebilgi2").text("Yanlış veya yetersiz miktar girdiniz!");
    }
});

$(".havalebtn").click(function(){
    bakiye = localStorage.getItem("bakiye");
    $(".anaekran").css("display","none");
    $(".havalescreen").css("display","block");
    $(".havaleidcheck2").text(baskaisim + " " + "isimli hesaba ne kadar havale yapmak istersiniz? Bakiyeniz: "+bakiye+" TL");
});

$(".havaleidonay").click(function(){
    let havaleid = Number($(".inputisim5").val());

    if(havaleid==456){
        $(".havalescreen").css("display","none");
        $(".havaleanascreen").css("display","block");
    }
    else{
        $(".hataliibanalert").css("display","block");
        setTimeout(function(){
            $('.hataliibanalert').remove();
          }, 5000);
    }
});

$(".havaleidonay2").click(function(){
    let havale = Number($(".inputisim6").val());
    let bakiye = Number(localStorage.getItem("bakiye"));
    let sonucum3 = Number(bakiye - havale);

    if(havale>0 && havale<=bakiye){
        $(".havaleidcheck2").text("Havale işleminiz başarılı. Güncel Bakiyeniz:" + " " + sonucum3 + " TL");
        localStorage.setItem("bakiye",sonucum3);
    }
    else{
        $(".havaleidcheck2").text("Yanlış veya yetersiz bir değer girdiniz!");
    }
});

$(".kredicekbtn").click(function(){
    $(".anaekran").css("display","none");
    $(".krediscreen").css("display","block");
});


$(".kredibilgi").click(function(){
    let kredi = Number($(".inputisim7").val());
    let krediText =  $(".kreditext");
    let faiz = kredi*0.18;
    let toplamBorc = faiz + kredi;
    let aylikOdeme = toplamBorc / 12;

    if(kredi>0){
        krediText.html("Kredizin Toplam Fazili Hali : " + toplamBorc + " Aylık Ödemeniz : "  + aylikOdeme.toFixed(1) );
        $(".kredibilgi").css("display","none");
        $(".kredionay").css("display","block");
        $(".kredired").css("display","block");
    }
});

$(".kartsizhesabaulas").click(function(){
    $(".kartsizislemscreen").css("display","none");
    $(".hesabaulasscreen").css("display","block");
});


$(".hesabaulasbtn").click(function(){
    let kullaniciadi1 = $(".inputisim9").val();
    let sifre1 = $(".inputisim10").val();

    if(kullaniciadi1=="Yasin" && sifre1=="123"){
        $(".anaekran").css("display","block");
        $(".hesabaulasscreen").css("display","none");
    }
    else{
        $(".uyari1").css("display","block");
    }
});

$(".kartsizibanaulas").click(function(){
    $(".kartsizislemscreen").css("display","none");
    $(".kartsizibanscreen1").css("display","block");
});

$(".kartsizibanonaybtn").click(function(){
    let ibancheck = $(".inputisim11").val();

    if(ibancheck=="456"){
        $(".kartsizibanonayscreen").css("display","block");
        $(".kartsizibanscreen1").css("display","none");
        $(".ibanchecktext").text(baskaisim + " " + "isimli hesaba ne kadar göndermek istersiniz?");
    }
    else{
        $("kartsizibantext").text("Böyle bir İBAN veya Kullanıcı bulunamadı!");
        setTimeout(function(){
            $('.kartsizibantext').remove();
          }, 5000);
    }
});

$(".kartsizibancheckbtn").click(function(){
    let ibansend = Number($(".inputisim15").val());
    
    if(ibansend>0 && ibansend<99999){
        $(".ibanchecktext").text(baskaisim + " " + "adlı hesaba , Para transferi tamamlandı. Gönderilen TL miktarı:" + " " + ibansend);
    }

    else{
        $(".ibanchecktext").text("Yanlış değer girdiniz!");
    }
});

// darkmode white mode
$(".darkmodebuton").click(function(){
    var element = document.body;
    element.classList.toggle("dark-mode");
});

$(".kredionay").click(function(){
    let kredi = Number($(".inputisim7").val());
    let krediText =  $(".kreditext");
    let faiz = kredi*0.18;
    let toplamBorc = faiz + kredi;
    let aylikOdeme = toplamBorc / 12;
    let bakiye = Number(localStorage.getItem("bakiye"));
    let kredilibakiye = Number(bakiye + kredi);

    krediText.html("Kredi çekim işleminiz onaylandı. Aylık ödemeniz:" + " " + aylikOdeme.toFixed(1) + " " + "Güncel Bakiyeniz:" + " " + kredilibakiye + " TL");
    $(".kredionay").css("display","none");
    $(".kredired").css("display","none");
    localStorage.setItem("bakiye",kredilibakiye);
});

$(".kredired").click(function(){
    krediText.html("Kredi çekim işleminiz reddedildi. Ana Sayfaya dönebilirsiniz.");
    $(".kredionay").css("display","none");
    $(".kredired").css("display","none");
});

$(".anasayfabtn").click(function(){
    $(".container").css("display","none");
    $(".container").css("display","block");
    $(".paracekscreen").css("display","none");
    $(".parayatirscreen").css("display","none");
    $(".havalescreen").css("display","none");
    $(".krediscreen").css("display","none");
    $(".havaleanascreen").css("display","none");
    $(".anaekran").css("display","block");
});

$(".cikisyapbtn").click(function(){
    $(".container").css("display","none");
    $(".container").css("display","block");
    $(".paracekbtn").css("display","none");
    $(".parayatirbtn").css("display","none");
    $(".havalebtn").css("display","none");
    $(".kredicekbtn").css("display","none");
    $(".cikisyapbtn").css("display","none");
    $(".girisekran").css("display","block");
});


$(".anasayfabtn").click(function(){
    $(".inputisim").val("");
    $(".inputisim2").val("");
    $(".inputisim3").val("");
    $(".inputisim4").val("");
    $(".inputisim5").val("");
    $(".inputisim6").val("");
    $(".inputisim7").val("");
    $(".inputisim8").val("");
    $(".inputisim9").val("");
    $(".inputisim10").val("");
    $(".inputisim11").val("");
    $(".inputisim12").val("");
    $(".inputisim13").val("");
    $(".inputisim14").val("");
    $(".inputisim15").val("");
    
});


