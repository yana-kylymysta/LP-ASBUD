let offerBefore = document.querySelector('.offer__before');
let subtitle = document.querySelector('.offer__subtitle');
let hr = document.querySelector('.offer__hr');
const popUp = document.querySelector('.popUp');
const slider = document.querySelectorAll('.project');

const projects = [
    {
        id: "01",
        code: `<div class="popUp__project active" data-project="01">
                <div class="popUp__slide vertical-img" 
                    data-thumb="./images/projects/02/01.jpg" data-src="./images/projects/02/01.jpg">
                        <img src="./images/projects/02/01.jpg">
                </div>
                <div class="popUp__slide vertical-img" 
                    data-thumb="./images/projects/02/02.jpg"
                    data-src="./images/projects/02/02.jpg">
                        <img src="./images/projects/02/02.jpg">
                </div>
                <div class="popUp__slide vertical-img" 
                    data-thumb="./images/projects/02/03.jpg"
                    data-src="./images/projects/02/03.jpg">
                        <img src="./images/projects/02/03.jpg">
                </div>
                <div class="popUp__slide vertical-img" 
                    data-thumb="./images/projects/02/04.jpg"
                    data-src="./images/projects/02/04.jpg">
                        <img src="./images/projects/02/04.jpg">
                </div>     
                <div class="popUp__slide vertical-img" 
                    data-thumb="./images/projects/02/05.jpg"
                    data-src="./images/projects/02/05.jpg">
                    <img src="./images/projects/02/05.jpg">
                </div>            
            </div>`
    }, 
    {
        id: "02",
        code: `<div class="popUp__project active" data-project="02">
                    <div class="popUp__slide" 
                            data-thumb="./images/projects/04/01.jpg"
                            data-src="./images/projects/04/01.jpg">
                            <iframe class="popUp__video" width="100%" height="100%" src="https://www.youtube.com/embed/SGPyZWQg4cs" title="Budowa i modernizacja boisk szkolnych Powiatu Ropczycko-Sędziszowskiego" frameborder="0" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div class="popUp__slide" 
                        data-thumb="./images/projects/04/01.jpg"
                        data-src="./images/projects/04/01.jpg">
                            <img src="./images/projects/04/01.jpg">
                    </div>
                    <div class="popUp__slide" 
                        data-thumb="./images/projects/04/02.jpg"
                        data-src="./images/projects/04/02.jpg">
                            <img src="./images/projects/04/02.jpg">
                        </div>
                        <div class="popUp__slide" 
                            data-thumb="./images/projects/04/03.jpg"
                            data-src="./images/projects/04/03.jpg">
                                <img src="./images/projects/04/03.jpg">
                        </div>
                        <div class="popUp__slide" 
                            data-thumb="./images/projects/04/04.jpg"
                            data-src="./images/projects/04/04.jpg">
                                <img src="./images/projects/04/04.jpg">
                        </div>
                        <div class="popUp__slide" 
                            data-thumb="./images/projects/04/05.jpg"
                            data-src="./images/projects/04/05.jpg">
                                <img src="./images/projects/04/05.jpg">
                        </div>
                        <div class="popUp__slide" 
                            data-thumb="./images/projects/04/06.jpg"
                            data-src="./images/projects/04/06.jpg">
                                <img src="./images/projects/04/06.jpg">
                        </div>
                        <div class="popUp__slide" 
                            data-thumb="./images/projects/04/07.jpg"
                            data-src="./images/projects/04/07.jpg">
                                <img src="./images/projects/04/07.jpg">
                            </div>
                            <div class="popUp__slide" 
                                data-thumb="./images/projects/04/08.jpg"
                                data-src="./images/projects/04/08.jpg">
                                    <img src="./images/projects/04/08.jpg">
                            </div>
                            <div class="popUp__slide" 
                                data-thumb="./images/projects/04/09.jpg"
                                data-src="./images/projects/04/09.jpg">
                                    <img src="./images/projects/04/09.jpg">
                            </div>
                    </div>`
    },
    {
        id: "03",
        code: `<div class="popUp__project active" data-project="03">
                    <div class="popUp__slide"
                        data-thumb="./images/projects/03/01.jpg"
                        data-src="./images/projects/03/01.jpg">
                            <img src="./images/projects/03/01.jpg">
                    </div>
                    <div class="popUp__slide"
                        data-thumb="./images/projects/03/02.jpg"
                        data-src="./images/projects/03/02.jpg">
                            <img src="./images/projects/03/02.jpg">
                    </div>
                    <div class="popUp__slide vertical-img"
                        data-thumb="./images/projects/03/03.jpg"
                        data-src="./images/projects/03/03.jpg">
                            <img src="./images/projects/03/03.jpg">
                    </div>
                </div>`
    },
    {
        id: "04",
        code: `<div class="popUp__project active" data-project="04">
                            <div class="popUp__slide"
                                data-thumb="./images/projects/01/01.jpg"
                                data-src="./images/projects/01/01.jpg">
                                <img src="./images/projects/01/01.jpg">
                            </div>
                            <div class="popUp__slide"
                                data-thumb="./images/projects/01/02.jpg"
                                data-src="./images/projects/01/02.jpg">
                                <img src="./images/projects/01/02.jpg">
                            </div>
                            <div class="popUp__slide"
                                data-thumb="./images/projects/01/03.jpg"
                                data-src="./images/projects/01/03.jpg">
                                <img src="./images/projects/01/03.jpg">
                            </div>
                            <div class="popUp__slide"
                                data-thumb="./images/projects/01/04.jpg"
                                data-src="./images/projects/01/04.jpg">
                                <img src="./images/projects/01/04.jpg">
                            </div>
                        </div>`
    },
    {
        id: "05",
        code:  `<div class="popUp__project active" data-project="05">
                            <div class="popUp__slide" 
                                data-thumb="./images/projects/05/01.jpg"
                                data-src="./images/projects/05/01.jpg">
                                <img src="./images/projects/05/01.jpg">
                            </div>
                            <div class="popUp__slide vertical-img" 
                                data-thumb="./images/projects/05/02.jpg"
                                data-src="./images/projects/05/02.jpg">
                                <img src="./images/projects/05/02.jpg">
                            </div>
                            <div class="popUp__slide" 
                                data-thumb="./images/projects/05/03.jpg"
                                data-src="./images/projects/05/03.jpg">
                                <img src="./images/projects/05/03.jpg">
                            </div>
                        </div>`
    },
    {
        id: "06",
        code: `<div class="popUp__project active" data-project="06">
                            <div class="popUp__slide vertical-img" 
                                data-thumb="./images/projects/06/01.jpg"
                                data-src="./images/projects/06/01.jpg">
                                <img src="./images/projects/06/01.jpg">
                            </div>
                            <div class="popUp__slide vertical-img" 
                                data-thumb="./images/projects/06/02.jpg"
                                data-src="./images/projects/06/02.jpg">
                                <img src="./images/projects/06/02.jpg">
                            </div>
                            <div class="popUp__slide vertical-img" 
                                data-thumb="./images/projects/06/03.jpg"
                                data-src="./images/projects/06/03.jpg">
                                <img src="./images/projects/06/03.jpg">
                            </div>
                        </div>`
    },
    {
        id: "07",
        code: `<div class="popUp__project active" data-project="07">
                            <div class="popUp__slide" 
                                data-thumb="./images/projects/07/01.jpg"
                                data-src="./images/projects/07/01.jpg">
                                <img src="./images/projects/07/01.jpg">
                            </div>
                            <div class="popUp__slide vertical-img" 
                                data-thumb="./images/projects/07/02.jpg"
                                data-src="./images/projects/07/02.jpg">
                                <img src="./images/projects/07/02.jpg">
                            </div>
                        </div>`
    },
    {
        id: "08",
        code: ` <div class="popUp__project active" data-project="08">
                            <div class="popUp__slide"
                                data-thumb="./images/projects/08/01.jpg"
                                data-src="./images/projects/08/01.jpg">
                                <img src="./images/projects/08/01.jpg">
                            </div>
                            <div class="popUp__slide"
                                data-thumb="./images/projects/08/02.jpg"
                                data-src="./images/projects/08/02.jpg">
                                <img src="./images/projects/08/02.jpg">
                            </div>
                        </div>`
    },
    {
        id: "09",
        code: ` <div class="popUp__project active" data-project="09">
                            <div class="popUp__slide vertical-img"
                                data-thumb="./images/projects/09/02.jpg"
                                data-src="./images/projects/09/02.jpg">
                                <img src="./images/projects/09/02.jpg">
                            </div>
                            <div class="popUp__slide vertical-img"
                                data-thumb="./images/projects/09/03.jpg"
                                data-src="./images/projects/09/03.jpg">
                                <img src="./images/projects/09/03.jpg">
                            </div>
                            <div class="popUp__slide"
                                data-thumb="./images/projects/09/04.jpg"
                                data-src="./images/projects/09/04.jpg">
                                <img src="./images/projects/09/04.jpg">
                            </div>
                             <div class="popUp__slide vertical-img"
                                data-thumb="./images/projects/09/01.jpg"
                                data-src="./images/projects/09/01.jpg">
                                <img src="./images/projects/09/01.jpg">
                            </div>
                        </div>`
    },
    {
        id: "10",
        code: `<div class="popUp__project active" data-project="10">
                            <div class="popUp__slide"
                                data-thumb="./images/projects/10/01.jpg"
                                data-src="./images/projects/10/01.jpg">
                                <img src="./images/projects/10/01.jpg">
                            </div>
                            <div class="popUp__slide vertical-img"
                                data-thumb="./images/projects/10/02.jpg"
                                data-src="./images/projects/10/02.jpg">
                                <img src="./images/projects/10/02.jpg">
                            </div>
                            <div class="popUp__slide"
                                data-thumb="./images/projects/10/03.jpg"
                                data-src="./images/projects/10/03.jpg">
                                <img src="./images/projects/10/03.jpg">
                            </div>
                            <div class="popUp__slide"
                                data-thumb="./images/projects/10/04.jpg"
                                data-src="./images/projects/10/04.jpg">
                                <img src="./images/projects/10/04.jpg">
                            </div>
                        </div>`
    }
]

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
                        breakpoint: 750,
                        settings: {
                            item: 1,
                        }
                    }
                ]
            });
            $('.mylSAction .lSPrev').click(function () {
                slider.goToPrevSlide();
            });
            $('.mylSAction .lSNext').click(function () {
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
        const loader = document.createElement('div');
        loader.classList.add('loader__wrapper');
        loader.innerHTML = '<div class="loader"></div>';
        popUp.innerHTML = loader;

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
                    onBeforeSlide: function (el) {
                        var img = el.find('li:nth-child('+el.getCurrentSlideCount()+') img');
                            img.attr('src', img.attr('data-src'));
                    },
                    gallery:true,
                    item:1,
                    loop:true,
                    thumbItem:9,
                    slideMargin:0,
                    enableDrag: false,
                    currentPagerPosition:'left',
                    // onSliderLoad: function(el) {
                    //     el.lightGallery({
                    //         selector: '.popUp__project.active .lslide'
                    //     });
                    // },
                     responsive: [
                        {
                            breakpoint: 700,
                            settings: {
                                controls: false,
                            }
                        }
                ]
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

//SEND EMAIL
$(document).ready(function() {
     $('form.contact__form').submit(function(e) {
        e.preventDefault(); 

        var formData = $(this).serialize(); 
        var form = this; 

        $.ajax({
            url: './scripts/send_mail.php',
            type: 'POST',
            data: formData,
            success: function(response) {
                console.log(response);      
                $('.contact__button').addClass('mail-btn');
                  setTimeout(function() {
                    $('.contact__button').removeClass('mail-btn');
                    form.reset();
                }, 2000);
            },
            error: function(xhr, status, error) {
                console.log(error); 
            }
        });
    });
});





