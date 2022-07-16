const langItems = document.querySelectorAll('a');
// const info = document.querySelector('p');

// info.innerHTML = navigator.language;

const az=["Ana sehife", "Haqqimizda","Xidmetlerimiz","Meqale","Elaqe","Axtar"];
const ru=["Главная страница", "О нас","Наши услуги","Мегале","Контакт","Поиск"];

if(navigator.language=="az-AZ"){
   
    for (let i = 0; i< az.length; i++) {
        langItems[i].innerHTML = az[i];
     }
}

else if(navigator.language=="ru-RU"){
    for (let i = 0; i< ru.length; i++) {
        langItems[i].innerHTML = ru[i];
     }
}


const multiLang =()=>{
    if(multiLangBtn.innerHTML=== "AZ"){
        for (let i = 0; i< az.length; i++) {
            langItems[i].innerHTML = az[i];
        }

        multiLangBtn.innerHTML="RU";
    }
    else{

        for (let i = 0; i< ru.length; i++) {
            langItems[i].innerHTML = ru[i];
         }
 
         multiLangBtn.innerHTML="AZ";
    }
}

multiLangBtn.onclick=multiLang;
