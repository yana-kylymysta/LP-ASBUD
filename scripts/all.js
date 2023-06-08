let offerBefore = document.querySelector('.offer__before');
let subtitle = document.querySelector('.offer__subtitle');
let hr = document.querySelector('.offer__hr');
const popUp = document.querySelector('.popUp');
const slider = document.querySelectorAll('.project');
const popupSlider = document.querySelectorAll('.popUp__project');

let subtitleHeight = subtitle.offsetHeight;
let offerBeforeHeight = offerBefore.offsetHeight;

hr.style.height = `calc(${offerBeforeHeight - subtitleHeight}px + 4rem)`;

//slider
  $(document).ready(function () {
           let slider = $(".projects__slider").lightSlider({
                item: 3,
                loop: false,
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
        popupSlider.forEach(el => {
             if(el.classList.contains('active')){
                el.classList.remove('active');
             } })
        document.querySelector('.lSGallery').remove()
        enableScroll();
    }

    const openPopUp = (project) => {
        popUp.classList.add('active');
        console.log(project.dataset.slide);
        popupSlider.forEach(el => {
             if(el.classList.contains('active')){
                el.classList.remove('active');
             }
            if(el.dataset.project == project.dataset.slide) {
                el.classList.add('active');
            }
        })

        //POP UP SLIDER 
        $(document).ready(function() {
            $('.popUp__project.active').lightSlider({
                gallery:true,
                item:1,
                loop:true,
                thumbItem:9,
                slideMargin:0,
                enableDrag: false,
                currentPagerPosition:'left',
                onSliderLoad: function(el) {
                    el.lightGallery({
                        selector: '.popUp__project.active .lslide'
                    });
                }   
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

