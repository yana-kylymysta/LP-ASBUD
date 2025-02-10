let offerBefore = document.querySelector('.offer__before');
let subtitle = document.querySelector('.offer__subtitle');
let hr = document.querySelector('.offer__hr');
const popUp = document.querySelector('.popUp');
const slider = document.querySelectorAll('.project');

const projects = [
    {
        id: "01",
        code: `<div class="swiper-wrapper popUp__project active" data-project="01">
                <div class="popUp__slide swiper-slide vertical-img">
                        <img src="./images/projects/02/01.jpg" loading="lazy">
                        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </div>
                <div class="popUp__slide swiper-slide vertical-img">
                        <img src="./images/projects/02/02.jpg" loading="lazy">
                        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </div>
                <div class="popUp__slide swiper-slide vertical-img">
                        <img src="./images/projects/02/03.jpg" loading="lazy">
                        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </div>
                <div class="popUp__slide swiper-slide vertical-img">
                        <img src="./images/projects/02/04.jpg" loading="lazy">
                        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </div>     
                <div class="popUp__slide swiper-slide vertical-img">
                    <img src="./images/projects/02/05.jpg" loading="lazy">
                    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </div>            
            </div>`
    }, 
    {
        id: "02",
        code: `<div class="swiper-wrapper popUp__project active" data-project="02">
                    <div class="popUp__slide popUp__slide-video swiper-slide" 
                            data-thumb="./images/projects/04/01.jpg"
                            data-src="./images/projects/04/01.jpg" >
                            <iframe class="popUp__video" width="100%" height="100%" src="https://www.youtube.com/embed/SGPyZWQg4cs" title="Budowa i modernizacja boisk szkolnych Powiatu Ropczycko-Sędziszowskiego" frameborder="0" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div class="popUp__slide swiper-slide" >
                            <img src="./images/projects/04/01.jpg" loading="lazy">
                            <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                    </div>
                    <div class="popUp__slide swiper-slide">
                            <img src="./images/projects/04/02.jpg" loading="lazy">
                            <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                        </div>
                        <div class="popUp__slide swiper-slide">
                                <img src="./images/projects/04/03.jpg" loading="lazy">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                        </div>
                        <div class="popUp__slide swiper-slide">
                                <img src="./images/projects/04/04.jpg" loading="lazy">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                        </div>
                        <div class="popUp__slide swiper-slide" >
                                <img src="./images/projects/04/05.jpg" loading="lazy">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                        </div>
                        <div class="popUp__slide swiper-slide">
                                <img src="./images/projects/04/06.jpg" loading="lazy">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                        </div>
                        <div class="popUp__slide swiper-slide" >
                                <img src="./images/projects/04/07.jpg" loading="lazy">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="popUp__slide swiper-slide" >
                                <img src="./images/projects/04/08.jpg" loading="lazy">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="popUp__slide swiper-slide">
                                <img src="./images/projects/04/09.jpg" loading="lazy">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                    </div>`
    },
    {
        id: "03",
        code: `<div class="swiper-wrapper popUp__project active" data-project="03">
                    <div class="popUp__slide swiper-slide">
                        <img src="./images/projects/03/01.jpg" loading="lazy">
                        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                    </div>
                    <div class="popUp__slide swiper-slide">
                        <img src="./images/projects/03/02.jpg" loading="lazy">
                        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                    </div>
                    <div class="popUp__slide swiper-slide vertical-img">
                        <img src="./images/projects/03/03.jpg" loading="lazy">
                        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                    </div>
                </div>`
    },
    {
        id: "04",
        code: `<div class="swiper-wrapper popUp__project active" data-project="04">
                            <div class="popUp__slide swiper-slide">
                                <img src="./images/projects/01/01.jpg" loading="lazy">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="popUp__slide swiper-slide">
                                <img src="./images/projects/01/02.jpg" loading="lazy">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="popUp__slide swiper-slide">
                                <img src="./images/projects/01/03.jpg" loading="lazy">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="popUp__slide swiper-slide">
                                <img src="./images/projects/01/04.jpg" loading="lazy">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                        </div>`
    },
    {
        id: "05",
        code:  `<div class="swiper-wrapper popUp__project active" data-project="05">
                            <div class="popUp__slide swiper-slide" >
                                <img src="./images/projects/05/01.jpg" loading="lazy">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="popUp__slide swiper-slide vertical-img">
                                <img src="./images/projects/05/02.jpg" loading="lazy">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="popUp__slide swiper-slide">
                                <img src="./images/projects/05/03.jpg" loading="lazy">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                        </div>`
    },
    {
        id: "06",
        code: `<div class="swiper-wrapper popUp__project active" data-project="06">
                            <div class="popUp__slide swiper-slide vertical-img">
                                <img src="./images/projects/06/01.jpg" loading="lazy">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="popUp__slide swiper-slide vertical-img">
                                <img src="./images/projects/06/02.jpg" loading="lazy">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="popUp__slide swiper-slide vertical-img">
                                <img src="./images/projects/06/03.jpg" loading="lazy">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                        </div>`
    },
    {
        id: "07",
        code: `<div class="swiper-wrapper popUp__project active" data-project="07">
                            <div class="popUp__slide swiper-slide">
                                <img src="./images/projects/07/01.jpg" loading="lazy">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="popUp__slide swiper-slide vertical-img">
                                <img src="./images/projects/07/02.jpg" loading="lazy">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                        </div>`
    },
    {
        id: "08",
        code: ` <div class="swiper-wrapper popUp__project active" data-project="08">
                            <div class="popUp__slide swiper-slide">
                                <img src="./images/projects/08/01.jpg" loading="lazy">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="popUp__slide swiper-slide">
                                <img src="./images/projects/08/02.jpg" loading="lazy">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                        </div>`
    },
    {
        id: "09",
        code: ` <div class="swiper-wrapper popUp__project active" data-project="09">
                            <div class="popUp__slide swiper-slide vertical-img">
                                <img src="./images/projects/09/02.jpg" loading="lazy">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="popUp__slide swiper-slide vertical-img">
                                <img src="./images/projects/09/03.jpg" loading="lazy">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="popUp__slide swiper-slide">
                                <img src="./images/projects/09/04.jpg" loading="lazy">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                             <div class="popUp__slide swiper-slide vertical-img">
                                <img src="./images/projects/09/01.jpg" loading="lazy">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                        </div>`
    },
    {
        id: "10",
        code: `<div class="swiper-wrapper popUp__project active" data-project="10">
                            <div class="popUp__slide swiper-slide">
                                <img src="./images/projects/10/01.jpg" loading="lazy">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="popUp__slide swiper-slide vertical-img">
                                <img src="./images/projects/10/02.jpg" loading="lazy" >
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="popUp__slide swiper-slide">
                                <img src="./images/projects/10/03.jpg" loading="lazy" >
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="popUp__slide swiper-slide">
                                <img src="./images/projects/10/04.jpg" loading="lazy" >
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                        </div>`
    },
     {
        id: "11",
        code: `<div class="swiper-wrapper popUp__project active" data-project="10">
                            <div class="popUp__slide swiper-slide vertical-img">
                                <img src="./images/projects/11/03.JPG" loading="lazy">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="popUp__slide swiper-slide vertical-img">
                                <img src="./images/projects/11/02.JPG" loading="lazy" >
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="popUp__slide swiper-slide">
                                <img src="./images/projects/11/01.JPG" loading="lazy" >
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="popUp__slide swiper-slide">
                                <img src="./images/projects/11/04.JPG" loading="lazy" >
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="popUp__slide swiper-slide vertical-img">
                                <img src="./images/projects/11/05.JPG" loading="lazy" >
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="popUp__slide swiper-slide">
                                <img src="./images/projects/11/06.JPG" loading="lazy" >
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                        </div>`
    },
    {
        id: "12",
        code: `<div class="swiper-wrapper popUp__project active" data-project="10">
                <div class="popUp__slide swiper-slide">
                    <img src="./images/projects/12/01.jpg" loading="lazy">
                    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </div>
                <div class="popUp__slide swiper-slide vertical-img">
                    <img src="./images/projects/12/02.jpg" loading="lazy" >
                    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </div>
                <div class="popUp__slide swiper-slide vertical-img">
                    <img src="./images/projects/12/03.jpg" loading="lazy" >
                    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </div>
            </div>`
    },
    {
        id: "13",
        code: `<div class="swiper-wrapper popUp__project active" data-project="13">
                <div class="popUp__slide swiper-slide vertical-img">
                    <img src="./images/projects/13/01.jpg" loading="lazy">
                    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </div>
                <div class="popUp__slide swiper-slide vertical-img">
                    <img src="./images/projects/13/02.jpg" loading="lazy" >
                    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </div>
                <div class="popUp__slide swiper-slide">
                    <img src="./images/projects/13/03.jpg" loading="lazy" >
                    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </div>
                <div class="popUp__slide swiper-slide">
                    <img src="./images/projects/13/04.jpg" loading="lazy" >
                    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </div>
                <div class="popUp__slide swiper-slide">
                    <img src="./images/projects/13/05.jpg" loading="lazy" >
                    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </div>
                 <div class="popUp__slide swiper-slide">
                    <img src="./images/projects/13/06.jpg" loading="lazy" >
                    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </div>
            </div>`
    }
]

const swiper = new Swiper('.projects__slider', {
  spaceBetween: 16,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
   breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 18,

             },
        1024: {
            slidesPerView: 3,
            spaceBetween: 24,
            navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
             },
            }
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
                                    <div class="popUp__slider-wrapper">
                                    <div class="popUp__slider swiper">`
                                        projects.forEach(el =>el.id === project.dataset.slide && (template += el.code));
                            template +=
                                    `<div class="swiper-button-prev swiper-button"></div>
                                    <div class="swiper-button-next swiper-button"></div>
                                </div>
                               <div thumbsSlider="" class="swiper popUp__slider-gallery">`
                                    projects.forEach(el =>el.id === project.dataset.slide && (template += el.code));
                                 `</div>
                    </div></div></div></div>`
        popUp.innerHTML = template;
        var popUpSliderGallery = new Swiper(".popUp__slider-gallery", {
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
            breakpoints: {
                550: {
                   slidesPerView: 5,
                },
                768: {
                   slidesPerView: 6,
                },
                1024: {
                   slidesPerView: 7,
                },
                1220: {
                   slidesPerView: 8,
                },
            },
        });
        var popUpSlider = new Swiper('.popUp__slider', {
            spaceBetween: 16,
            lazy: true,
            thumbs: {
                swiper: popUpSliderGallery,  
                },
            navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }
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





