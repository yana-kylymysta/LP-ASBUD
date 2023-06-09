let offerBefore = document.querySelector('.offer__before');
let subtitle = document.querySelector('.offer__subtitle');
let hr = document.querySelector('.offer__hr');
const popUp = document.querySelector('.popUp');
const slider = document.querySelectorAll('.project');

const projects = [
    {
        id: "01",
        code: `<div class="popUp__project active" data-project="01">
                <div class="popUp__slide" 
                    data-thumb="./images/projects/02-Elewacja-Dębowe-Apartamęty/01.jpg" data-src="./images/projects/02-Elewacja-Dębowe-Apartamęty/01.jpg">
                        <img src="./images/projects/02-Elewacja-Dębowe-Apartamęty/01.jpg">
                </div>
                <div class="popUp__slide" 
                    data-thumb="./images/projects/02-Elewacja-Dębowe-Apartamęty/02.jpg"
                    data-src="./images/projects/02-Elewacja-Dębowe-Apartamęty/02.jpg">
                        <img src="./images/projects/02-Elewacja-Dębowe-Apartamęty/02.jpg">
                </div>
                <div class="popUp__slide" 
                    data-thumb="./images/projects/02-Elewacja-Dębowe-Apartamęty/03.jpg"
                    data-src="./images/projects/02-Elewacja-Dębowe-Apartamęty/03.jpg">
                        <img src="./images/projects/02-Elewacja-Dębowe-Apartamęty/03.jpg">
                </div>
                <div class="popUp__slide" 
                    data-thumb="./images/projects/02-Elewacja-Dębowe-Apartamęty/04.jpg"
                    data-src="./images/projects/02-Elewacja-Dębowe-Apartamęty/04.jpg">
                        <img src="./images/projects/02-Elewacja-Dębowe-Apartamęty/04.jpg">
                </div>     
                <div class="popUp__slide" 
                    data-thumb="./images/projects/02-Elewacja-Dębowe-Apartamęty/05.jpg"
                    data-src="./images/projects/02-Elewacja-Dębowe-Apartamęty/05.jpg">
                    <img src="./images/projects/02-Elewacja-Dębowe-Apartamęty/05.jpg">
                </div>            
            </div>`
    }, 
    {
        id: "02",
        code: `<div class="popUp__project active" data-project="02">
                    <div class="popUp__slide" 
                        data-thumb="./images/projects/04-infrastruktury-sportowej-Powiatu-Ropczycko- Sędziszowskiego/01.jpg"
                        data-src="./images/projects/04-infrastruktury-sportowej-Powiatu-Ropczycko- Sędziszowskiego/01.jpg">
                            <img src="./images/projects/04-infrastruktury-sportowej-Powiatu-Ropczycko- Sędziszowskiego/01.jpg">
                    </div>
                    <div class="popUp__slide" 
                        data-thumb="./images/projects/04-infrastruktury-sportowej-Powiatu-Ropczycko- Sędziszowskiego/02.jpg"
                        data-src="./images/projects/04-infrastruktury-sportowej-Powiatu-Ropczycko- Sędziszowskiego/02.jpg">
                            <img src="./images/projects/04-infrastruktury-sportowej-Powiatu-Ropczycko- Sędziszowskiego/02.jpg">
                        </div>
                        <div class="popUp__slide" 
                            data-thumb="./images/projects/04-infrastruktury-sportowej-Powiatu-Ropczycko- Sędziszowskiego/03.jpg"
                            data-src="./images/projects/04-infrastruktury-sportowej-Powiatu-Ropczycko- Sędziszowskiego/03.jpg">
                                <img src="./images/projects/04-infrastruktury-sportowej-Powiatu-Ropczycko- Sędziszowskiego/03.jpg">
                        </div>
                        <div class="popUp__slide" 
                            data-thumb="./images/projects/04-infrastruktury-sportowej-Powiatu-Ropczycko- Sędziszowskiego/04.jpg"
                            data-src="./images/projects/04-infrastruktury-sportowej-Powiatu-Ropczycko- Sędziszowskiego/04.jpg">
                                <img src="./images/projects/04-infrastruktury-sportowej-Powiatu-Ropczycko- Sędziszowskiego/04.jpg">
                        </div>
                        <div class="popUp__slide" 
                            data-thumb="./images/projects/04-infrastruktury-sportowej-Powiatu-Ropczycko- Sędziszowskiego/05.jpg"
                            data-src="./images/projects/04-infrastruktury-sportowej-Powiatu-Ropczycko- Sędziszowskiego/05.jpg">
                                <img src="./images/projects/04-infrastruktury-sportowej-Powiatu-Ropczycko- Sędziszowskiego/05.jpg">
                        </div>
                        <div class="popUp__slide" 
                            data-thumb="./images/projects/04-infrastruktury-sportowej-Powiatu-Ropczycko- Sędziszowskiego/06.jpg"
                            data-src="./images/projects/04-infrastruktury-sportowej-Powiatu-Ropczycko- Sędziszowskiego/06.jpg">
                                <img src="./images/projects/04-infrastruktury-sportowej-Powiatu-Ropczycko- Sędziszowskiego/06.jpg">
                        </div>
                        <div class="popUp__slide" 
                            data-thumb="./images/projects/04-infrastruktury-sportowej-Powiatu-Ropczycko- Sędziszowskiego/07.jpg"
                            data-src="./images/projects/04-infrastruktury-sportowej-Powiatu-Ropczycko- Sędziszowskiego/07.jpg">
                                <img src="./images/projects/04-infrastruktury-sportowej-Powiatu-Ropczycko- Sędziszowskiego/07.jpg">
                            </div>
                            <div class="popUp__slide" 
                                data-thumb="./images/projects/04-infrastruktury-sportowej-Powiatu-Ropczycko- Sędziszowskiego/08.jpg"
                                data-src="./images/projects/04-infrastruktury-sportowej-Powiatu-Ropczycko- Sędziszowskiego/08.jpg">
                                    <img src="./images/projects/04-infrastruktury-sportowej-Powiatu-Ropczycko- Sędziszowskiego/08.jpg">
                            </div>
                            <div class="popUp__slide" 
                                data-thumb="./images/projects/04-infrastruktury-sportowej-Powiatu-Ropczycko- Sędziszowskiego/09.jpg"
                                data-src="./images/projects/04-infrastruktury-sportowej-Powiatu-Ropczycko- Sędziszowskiego/09.jpg">
                                    <img src="./images/projects/04-infrastruktury-sportowej-Powiatu-Ropczycko- Sędziszowskiego/09.jpg">
                            </div>
                        </div>`
    },
    {
        id: "03",
        code: `<div class="popUp__project active" data-project="03">
                    <div class="popUp__slide"
                        data-thumb="./images/projects/03-Elewacja-Dębowe-Tarasy/01.jpg"
                        data-src="./images/projects/03-Elewacja-Dębowe-Tarasy/01.jpg">
                            <img src="./images/projects/03-Elewacja-Dębowe-Tarasy/01.jpg">
                    </div>
                    <div class="popUp__slide"
                        data-thumb="./images/projects/03-Elewacja-Dębowe-Tarasy/02.jpg"
                        data-src="./images/projects/03-Elewacja-Dębowe-Tarasy/02.jpg">
                            <img src="./images/projects/03-Elewacja-Dębowe-Tarasy/02.jpg">
                    </div>
                    <div class="popUp__slide"
                        data-thumb="./images/projects/03-Elewacja-Dębowe-Tarasy/03.jpg"
                        data-src="./images/projects/03-Elewacja-Dębowe-Tarasy/03.jpg">
                            <img src="./images/projects/03-Elewacja-Dębowe-Tarasy/03.jpg">
                    </div>
                </div>`
    },
    {
        id: "04",
        code: `<div class="popUp__project active" data-project="04">
                            <div class="popUp__slide"
                                data-thumb="./images/projects/01-Budowa-budynku-Ochotniczej-Straży-Pożarnej-w-Małej/01.jpg"
                                data-src="./images/projects/01-Budowa-budynku-Ochotniczej-Straży-Pożarnej-w-Małej/01.jpg">
                                <img src="./images/projects/01-Budowa-budynku-Ochotniczej-Straży-Pożarnej-w-Małej/01.jpg">
                            </div>
                            <div class="popUp__slide"
                                data-thumb="./images/projects/01-Budowa-budynku-Ochotniczej-Straży-Pożarnej-w-Małej/02.jpg"
                                data-src="./images/projects/01-Budowa-budynku-Ochotniczej-Straży-Pożarnej-w-Małej/02.jpg">
                                <img src="./images/projects/01-Budowa-budynku-Ochotniczej-Straży-Pożarnej-w-Małej/02.jpg">
                            </div>
                            <div class="popUp__slide"
                                data-thumb="./images/projects/01-Budowa-budynku-Ochotniczej-Straży-Pożarnej-w-Małej/03.jpg"
                                data-src="./images/projects/01-Budowa-budynku-Ochotniczej-Straży-Pożarnej-w-Małej/03.jpg">
                                <img src="./images/projects/01-Budowa-budynku-Ochotniczej-Straży-Pożarnej-w-Małej/03.jpg">
                            </div>
                            <div class="popUp__slide"
                                data-thumb="./images/projects/01-Budowa-budynku-Ochotniczej-Straży-Pożarnej-w-Małej/04.jpg"
                                data-src="./images/projects/01-Budowa-budynku-Ochotniczej-Straży-Pożarnej-w-Małej/04.jpg">
                                <img src="./images/projects/01-Budowa-budynku-Ochotniczej-Straży-Pożarnej-w-Małej/04.jpg">
                            </div>
                        </div>`
    },
    {
        id: "05",
        code:  `<div class="popUp__project active" data-project="05">
                            <div class="popUp__slide" 
                                data-thumb="./images/projects/05-Przebudowa-głównych-schodów-zewnętrznych/01.jpg"
                                data-src="./images/projects/05-Przebudowa-głównych-schodów-zewnętrznych/01.jpg">
                                <img src="./images/projects/05-Przebudowa-głównych-schodów-zewnętrznych/01.jpg">
                            </div>
                            <div class="popUp__slide" 
                                data-thumb="./images/projects/05-Przebudowa-głównych-schodów-zewnętrznych/02.jpg"
                                data-src="./images/projects/05-Przebudowa-głównych-schodów-zewnętrznych/02.jpg">
                                <img src="./images/projects/05-Przebudowa-głównych-schodów-zewnętrznych/02.jpg">
                            </div>
                            <div class="popUp__slide" 
                                data-thumb="./images/projects/05-Przebudowa-głównych-schodów-zewnętrznych/03.jpg"
                                data-src="./images/projects/05-Przebudowa-głównych-schodów-zewnętrznych/03.jpg">
                                <img src="./images/projects/05-Przebudowa-głównych-schodów-zewnętrznych/03.jpg">
                            </div>
                        </div>`
    },
    {
        id: "06",
        code: `<div class="popUp__project active" data-project="06">
                            <div class="popUp__slide" 
                                data-thumb="./images/projects/06-Przebudowa-sali-sportowej-na-salę-audio-wizualną/01.jpg"
                                data-src="./images/projects/06-Przebudowa-sali-sportowej-na-salę-audio-wizualną/01.jpg">
                                <img src="./images/projects/06-Przebudowa-sali-sportowej-na-salę-audio-wizualną/01.jpg">
                            </div>
                            <div class="popUp__slide" 
                                data-thumb="./images/projects/06-Przebudowa-sali-sportowej-na-salę-audio-wizualną/02.jpg"
                                data-src="./images/projects/06-Przebudowa-sali-sportowej-na-salę-audio-wizualną/02.jpg">
                                <img src="./images/projects/06-Przebudowa-sali-sportowej-na-salę-audio-wizualną/02.jpg">
                            </div>
                            <div class="popUp__slide" 
                                data-thumb="./images/projects/06-Przebudowa-sali-sportowej-na-salę-audio-wizualną/03.jpg"
                                data-src="./images/projects/06-Przebudowa-sali-sportowej-na-salę-audio-wizualną/03.jpg">
                                <img src="./images/projects/06-Przebudowa-sali-sportowej-na-salę-audio-wizualną/03.jpg">
                            </div>
                        </div>`
    },
    {
        id: "07",
        code: `<div class="popUp__project active" data-project="07">
                            <div class="popUp__slide" 
                                data-thumb="./images/projects/07-Remont-oraz-rozbudowa-budynku-PCPR-w-Ropczycach-o-szyb-windowy/01.jpg"
                                data-src="./images/projects/07-Remont-oraz-rozbudowa-budynku-PCPR-w-Ropczycach-o-szyb-windowy/01.jpg">
                                <img src="./images/projects/07-Remont-oraz-rozbudowa-budynku-PCPR-w-Ropczycach-o-szyb-windowy/01.jpg">
                            </div>
                            <div class="popUp__slide" 
                                data-thumb="./images/projects/07-Remont-oraz-rozbudowa-budynku-PCPR-w-Ropczycach-o-szyb-windowy/02.jpg"
                                data-src="./images/projects/07-Remont-oraz-rozbudowa-budynku-PCPR-w-Ropczycach-o-szyb-windowy/02.jpg">
                                <img src="./images/projects/07-Remont-oraz-rozbudowa-budynku-PCPR-w-Ropczycach-o-szyb-windowy/02.jpg">
                            </div>
                        </div>`
    },
    {
        id: "08",
        code: ` <div class="popUp__project active" data-project="08">
                            <div class="popUp__slide"
                                data-thumb="./images/projects/08-Rozbudowa-Domu-Kultury-w-Kamionce-o-salę-wielofunkcyjną/01.jpg"
                                data-src="./images/projects/08-Rozbudowa-Domu-Kultury-w-Kamionce-o-salę-wielofunkcyjną/01.jpg">
                                <img src="./images/projects/08-Rozbudowa-Domu-Kultury-w-Kamionce-o-salę-wielofunkcyjną/01.jpg">
                            </div>
                            <div class="popUp__slide"
                                data-thumb="./images/projects/08-Rozbudowa-Domu-Kultury-w-Kamionce-o-salę-wielofunkcyjną/02.jpg"
                                data-src="./images/projects/08-Rozbudowa-Domu-Kultury-w-Kamionce-o-salę-wielofunkcyjną/02.jpg">
                                <img src="./images/projects/08-Rozbudowa-Domu-Kultury-w-Kamionce-o-salę-wielofunkcyjną/02.jpg">
                            </div>
                        </div>`
    },
    {
        id: "09",
        code: ` <div class="popUp__project active" data-project="09">
                            <div class="popUp__slide"
                                data-thumb="./images/projects/09-Rozbudowa-Specjalnego-Ośrodka-Szkolno-Wychowawczego-w-Ropczycach-o-szyb-windowy/01.jpg"
                                data-src="./images/projects/09-Rozbudowa-Specjalnego-Ośrodka-Szkolno-Wychowawczego-w-Ropczycach-o-szyb-windowy/01.jpg">
                                <img src="./images/projects/09-Rozbudowa-Specjalnego-Ośrodka-Szkolno-Wychowawczego-w-Ropczycach-o-szyb-windowy/01.jpg">
                            </div>
                            <div class="popUp__slide"
                                data-thumb="./images/projects/09-Rozbudowa-Specjalnego-Ośrodka-Szkolno-Wychowawczego-w-Ropczycach-o-szyb-windowy/02.jpg"
                                data-src="./images/projects/09-Rozbudowa-Specjalnego-Ośrodka-Szkolno-Wychowawczego-w-Ropczycach-o-szyb-windowy/02.jpg">
                                <img src="./images/projects/09-Rozbudowa-Specjalnego-Ośrodka-Szkolno-Wychowawczego-w-Ropczycach-o-szyb-windowy/02.jpg">
                            </div>
                            <div class="popUp__slide"
                                data-thumb="./images/projects/09-Rozbudowa-Specjalnego-Ośrodka-Szkolno-Wychowawczego-w-Ropczycach-o-szyb-windowy/03.jpg"
                                data-src="./images/projects/09-Rozbudowa-Specjalnego-Ośrodka-Szkolno-Wychowawczego-w-Ropczycach-o-szyb-windowy/03.jpg">
                                <img src="./images/projects/09-Rozbudowa-Specjalnego-Ośrodka-Szkolno-Wychowawczego-w-Ropczycach-o-szyb-windowy/03.jpg">
                            </div>
                            <div class="popUp__slide"
                                data-thumb="./images/projects/09-Rozbudowa-Specjalnego-Ośrodka-Szkolno-Wychowawczego-w-Ropczycach-o-szyb-windowy/04.jpg"
                                data-src="./images/projects/09-Rozbudowa-Specjalnego-Ośrodka-Szkolno-Wychowawczego-w-Ropczycach-o-szyb-windowy/04.jpg">
                                <img src="./images/projects/09-Rozbudowa-Specjalnego-Ośrodka-Szkolno-Wychowawczego-w-Ropczycach-o-szyb-windowy/04.jpg">
                            </div>
                        </div>`
    },
    {
        id: "10",
        code: `<div class="popUp__project active" data-project="10">
                            <div class="popUp__slide"
                                data-thumb="./images/projects/10-Rozbudowa-Domu-Pomocy-Społecznej-w-Rudzie-o-szyb-windowy-wraz-z-korytarzem-o-konstrukcji-aluminiowej/01.jpg"
                                data-src="./images/projects/10-Rozbudowa-Domu-Pomocy-Społecznej-w-Rudzie-o-szyb-windowy-wraz-z-korytarzem-o-konstrukcji-aluminiowej/01.jpg">
                                <img src="./images/projects/10-Rozbudowa-Domu-Pomocy-Społecznej-w-Rudzie-o-szyb-windowy-wraz-z-korytarzem-o-konstrukcji-aluminiowej/01.jpg">
                            </div>
                            <div class="popUp__slide"
                                data-thumb="./images/projects/10-Rozbudowa-Domu-Pomocy-Społecznej-w-Rudzie-o-szyb-windowy-wraz-z-korytarzem-o-konstrukcji-aluminiowej/02.jpg"
                                data-src="./images/projects/10-Rozbudowa-Domu-Pomocy-Społecznej-w-Rudzie-o-szyb-windowy-wraz-z-korytarzem-o-konstrukcji-aluminiowej/02.jpg">
                                <img src="./images/projects/10-Rozbudowa-Domu-Pomocy-Społecznej-w-Rudzie-o-szyb-windowy-wraz-z-korytarzem-o-konstrukcji-aluminiowej/02.jpg">
                            </div>
                            <div class="popUp__slide"
                                data-thumb="./images/projects/10-Rozbudowa-Domu-Pomocy-Społecznej-w-Rudzie-o-szyb-windowy-wraz-z-korytarzem-o-konstrukcji-aluminiowej/03.jpg"
                                data-src="./images/projects/10-Rozbudowa-Domu-Pomocy-Społecznej-w-Rudzie-o-szyb-windowy-wraz-z-korytarzem-o-konstrukcji-aluminiowej/03.jpg">
                                <img src="./images/projects/10-Rozbudowa-Domu-Pomocy-Społecznej-w-Rudzie-o-szyb-windowy-wraz-z-korytarzem-o-konstrukcji-aluminiowej/03.jpg">
                            </div>
                            <div class="popUp__slide"
                                data-thumb="./images/projects/10-Rozbudowa-Domu-Pomocy-Społecznej-w-Rudzie-o-szyb-windowy-wraz-z-korytarzem-o-konstrukcji-aluminiowej/04.jpg"
                                data-src="./images/projects/10-Rozbudowa-Domu-Pomocy-Społecznej-w-Rudzie-o-szyb-windowy-wraz-z-korytarzem-o-konstrukcji-aluminiowej/04.jpg">
                                <img src="./images/projects/10-Rozbudowa-Domu-Pomocy-Społecznej-w-Rudzie-o-szyb-windowy-wraz-z-korytarzem-o-konstrukcji-aluminiowej/04.jpg">
                            </div>
                        </div>`
    }
]

//line
let subtitleHeight = subtitle.offsetHeight;
let offerBeforeHeight = offerBefore.offsetHeight;
hr.style.height = `calc(${offerBeforeHeight - subtitleHeight}px + 4rem)`;

//slider
  $(document).ready(function () {
           let slider = $(".projects__slider").lightSlider({
                item: 3,
                loop: false,
                controls: false,
                slideMargin: 14,
                responsive: [
                    {
                        breakpoint: 1070,
                        settings: {
                            item: 2,
                        }
                    },
                    {
                        breakpoint: 650,
                        settings: {
                            item: 1,
                        }
                    }
                ]
            });
            $('.lSPrev').click(function () {
                slider.goToPrevSlide();
            });
            $('.lSNext').click(function () {
                slider.goToNextSlide();
            });
        });


////POP UP
    const disableScroll = () => {
        const widthScroll = window.innerWidth - document.body.offsetWidth;
        document.body.dbScrollY = window.scrollY;
        document.body.style.cssText = `
                position: fixed;
                top: ${-window.scrollY}px;
                left: 0;
                width: 100%;
                height: 100vh;
                overflow: hidden;
                padding-right: ${widthScroll}px;
                `
    }

    const enableScroll = () => {
        document.body.style.cssText = '';
        window.scroll({
            top: document.body.dbScrollY,
        })
    }

    const closeWindow = () => {
        popUp.classList.remove('active');
        popUp.innerHTML = "";
        enableScroll();
    }

    const openPopUp = (project) => {
        popUp.classList.add('active');
        let template = `<div class="popUp__bg">
                            <div class="popUp__block">
                                <div class="popUp__scroll">
                                    <div class="popUp__close" onclick="closeWindow()">&#10006;</div>
                                    <div class="popUp__slider">`
        projects.forEach(el =>el.id === project.dataset.slide && (template += el.code));
        template +=`</div></div></div></div>`
        popUp.innerHTML = template;
    
        $(document).ready(function() {
                $('.popUp__project.active').lightSlider({
                    gallery:true,
                    item:1,
                    loop:true,
                    thumbItem:9,
                    slideMargin:0,
                    enableDrag: false,
                    currentPagerPosition:'left',
                });  
            });       
     disableScroll();
    }

    popUp.addEventListener('click', ({target}) => {
        if(target.matches('.popUp__close') || target.matches('.popUp__bg')) {
            closeWindow();
        }
    })


    slider.forEach(slide => {
        slide.addEventListener('click', ({currentTarget}) => {
           openPopUp(currentTarget)
        })
    })

