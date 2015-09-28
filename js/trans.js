var lang_en = {
    "home": "Home",
    "about": "About",
    "contact": "Contact"
};

var lang_hu = {
    "home": "Főoldal",
    "about": "Rólunk",
    "contact": "Kapcsolat"
};

// Lekérjük a nyelvi beállításokat
function getNavigatorLang(){
    return navigator.language.split('-')[0];
};

// Manü nyelvének beállítása
function setMenuLang(){
    
    // A böngésző beállításainak lekérdezése
    var currentLang = "lang_" + getNavigatorLang();
    
    // Ha be van állítva a kívánt nyelv akkor azzal dolgozzunk
    if( localStorage.myLang ){
        currentLang = "lang_" + localStorage.myLang;
    }
    
    // menü beállítása
    var menu = document.querySelectorAll('ul.nav li a');
    
    for(var i=0; i < menu.length; i++){
        var name = menu[i].getAttribute('data-name');
        menu[i].innerHTML = window[currentLang][name];
    }
};

// Nyelv váltása
function setNewLang(elem){
    localStorage.myLang = elem.value;
    setMenuLang();
};

// Szelektor beállítása
function setSelector(){
    
    // ellenörizzük a beállított nyelvet
    if (!localStorage.myLang) return;
    
    // Tárolt érték beállítása
    var sel = document.querySelector('.lang-selector');
    sel.value = localStorage.myLang;
};

setSelector();
setMenuLang();


































