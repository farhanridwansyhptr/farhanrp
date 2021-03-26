function check() {
    var c=0;
    var q1=document.kuis.question1.value;
    var q2=document.kuis.question2.value;
    var q3=document.kuis.question3.value;
    var q4=document.kuis.question4.value;
    var q5=document.kuis.question5.value;
    var result=document.getElementById('result');
    var kuis=document.getElementById("kuis");
    if (q1=="2019") {c++}
    if (q2=="Bersin di tempat umum") {c++}
    if (q3=="Badmood") {c++}
    if (q4=="Jaga jarak") {c++}
    if (q5=="Minum herbal & bervitamin") {c++}
    kuis.style.display="none";

    if (c<=10) {
        result.textContent=`Nilai Anda adalah ${c}. Silahkan coba lagi.`
    } else {
        result.textContent=`Nilai Anda adalah ${c}. Good job!.`
    }

 }
