// Header Search Feild Active 
let HeaderSerchBtn = document.querySelector("header .Search-Btn");
HeaderSerchBtn.onclick =()=>{
    document.querySelector("#headerSerchField").classList.toggle("active");
}

// Header Main Links Active
let HeaderBarsBtn = document.querySelector("header .Bars-Btn");
HeaderBarsBtn.onclick =()=>{
    document.querySelector("header nav").classList.toggle("active");
}

// Hedaer Main Links Active 
let HeaderMainLinks = document.querySelectorAll("header nav ul a");
HeaderMainLinks.forEach(link=>{
    link.onclick=()=>{
        document.querySelector("header nav ul a.active").classList.remove("active");
        link.classList.add("active");
    }
})


// Testimonials section numbers rise up 
    let TestimomnialsBottomBoxesNum = document.querySelectorAll(".testimonails .bottom-sells-box .sell-box h2");
    num=0;
    hedaerNumIncrease = setInterval(increase,50);
    function increase(){
    num++;
    TestimomnialsBottomBoxesNum.forEach(headerNum => {
        headerNum.innerText = `${num}` + "%";
    });
    if(num >= 50){
        clearInterval(hedaerNumIncrease);
}
}



// Gallery Slider 
let MainImgSlider = document.querySelector(".gallery-slider .main-slider-image img");
let AllSliderImages = document.querySelectorAll(".gallery-slider .container .bottom-slider-images img");
let LeftSliderBtn = document.querySelector(".gallery-slider .main-slider-image .right-btn");
let RightSliderBtn = document.querySelector(".gallery-slider .main-slider-image .left-btn");
let FirstSlide = document.querySelector(".gallery-slider .container .bottom-slider-images img:first-child");
let LastSlide = document.querySelector(".gallery-slider .container .bottom-slider-images img:last-child");
console.log(FirstSlide)
AllSliderImages.forEach(img=>{
        img.onclick=()=>{
            MainImgSlider.src = img.src;    
            document.querySelector(".gallery-slider .container .bottom-slider-images img.active").classList.remove("active");
            img.classList.add("active");
            disable()
        }
        function disable(){
            if(LastSlide.classList.contains("active")){
                LeftSliderBtn.classList.add("disable");
            }else{
                LeftSliderBtn.classList.remove("disable");
            }
            if(FirstSlide.classList.contains("active")){
                RightSliderBtn.classList.add("disable");
            }else{
                RightSliderBtn.classList.remove("disable");
            }
        }
        disable()
        LeftSliderBtn.onclick=()=>{
            let ActiveImg = document.querySelector(".gallery-slider .container .bottom-slider-images img.active");
            MainImgSlider.src = ActiveImg.nextElementSibling.src;
            ActiveImg.classList.remove("active");
            ActiveImg.nextElementSibling.classList.add("active");
            disable()
        }
        RightSliderBtn.onclick=()=>{
            let ActiveImg = document.querySelector(".gallery-slider .container .bottom-slider-images img.active");
            MainImgSlider.src = ActiveImg.previousElementSibling.src;
            ActiveImg.classList.remove("active");
            ActiveImg.previousElementSibling.classList.add("active");
            disable()
        }
        
})

// Gallery Slider 

// Section active 
window.onscroll = ()=>{
    let TemplateSections = document.querySelectorAll("section");
    TemplateSections.forEach(section=>{
    let sectionOffsetTop = section.offsetTop;
    let sectionOuterHeight = section.offsetHeight;
    let WindowHeight = this.innerHeight;
    let WindowScrollTop = this.pageYOffset;
    if(WindowScrollTop > (sectionOffsetTop + sectionOuterHeight - WindowHeight  - 400)){
        section.classList.add("active");
    }else{
        section.classList.remove("active");
    }
})
}


    // landing Page Active 
window.onload = ()=>{
    document.querySelector(".LandingPage .inner-Content").classList.add("active");
}