const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const blockID = anchor.getAttribute('href').substr(1);
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

//____________________________________________

const langBtns = document.querySelectorAll('.header__language__btn');

if (langBtns.length > 0){
    let ruBtn = langBtns[0];
    let enBtn = langBtns[1];

    function eventForRu (){
        ruBtn.addEventListener('click', function(){
            this.classList.add('header__language__btn_active');
            enBtn.classList.remove('header__language__btn_active');
        });
    }
    function eventForEn () {    
            enBtn.addEventListener('click', function(){
                this.classList.add('header__language__btn_active');
                ruBtn.classList.remove('header__language__btn_active');
            });
    }
    eventForEn();
    eventForRu();
}

//____________________________________________