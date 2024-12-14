// Step 1: Locomotive Scroll initialize karein
const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main-containet"),  // Scrolling container
    smooth: true  // Smooth scrolling activate karein
});

// Step 2: ScrollTrigger ko Locomotive Scroll ke saath sync karein
ScrollTrigger.scrollerProxy(".main-containet", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector(".main-containet").style.transform ? "transform" : "fixed"
});

// Step 3: ScrollTrigger ko update karein jab bhi scroll ho
locoScroll.on("scroll", ScrollTrigger.update);

// Step 4: ScrollTrigger refresh karne par Locomotive Scroll ko update karein
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// Step 5: Refresh ScrollTrigger
ScrollTrigger.refresh();







    const scroll = new LocomotiveScroll({
        el: document.querySelector('.main-containet'),
        smooth: true
    });


    gsap.from('.animate-let',{
        stagger: .1,
        y: 20,
        opacity: 0,
        duration: 2,
        ease: Power2,
    })

    Shery.imageEffect(".aside img",{
        style: 4,
        config: {"uColor":{"value":false},"uSpeed":{"value":0.62,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.07,"range":[0,5]},"uFrequency":{"value":10,"range":[0,10]},"geoVertex":{"range":[1,64],"value":32.74},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.5071271675280269},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0.043010752688172005,"y":0.010752688172043001}},"shapeScale":{"value":{"x":0.69,"y":0.73}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.18,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
        debug: true
    })



    var frames = document.querySelectorAll(".frame");
    const lerp = (x, y, a) => x * (1 - a) + y * a;



    frames.forEach(frame => {
        frame.addEventListener("mousemove", function(dets){
            var dims = frame.getBoundingClientRect();
            console.log(dims);
        
            var xstart = dims.x;
            var xend = dims.x + dims.width;
        
        
        var zeroone = gsap.utils.mapRange(xstart, xend, 0, 1,dets.clientX);
        
        
            gsap.to(circle, {
                scale: 4
            })
            gsap.to(frame.children,{
                color: "#fff",
                duration: .4,
                y: "-2vw"
            })
            gsap.to (frame.children,{
                x: lerp(-50,50, zeroone),
                duration: .3
            })
        
        })
        
    })



 
   

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".backend-project",
            pin: true,
            markers: true,
            start: "top top",
            end: "bottom top",
            scrub: 1,

            scroller: ".main-containet", 
        }
    });
    
    tl.to(".right-backend", {
        rotate: "0deg",
        x: "-80%"
    })
    .to(".left-backend2",{
        rotate: "0deg",
        x: "205%",
         
    })

    .to(".left-backend3",{
        rotate: "0deg",
        x: "-110%"
    })
    


    
    



    


    
    

    























    const dayNight = document.querySelector(".day-night");
    dayNight.addEventListener("click",() =>{
        dayNight.querySelector("i").classList.toggle("fa-sun");
        dayNight.querySelector("i").classList.toggle("fa-moon")
        document.body.classList.toggle("dark");
        
    })

    window.addEventListener("load", () =>{
        if(document.body.classList.contains("dark"))
        {
            dayNight.querySelector("i").classList.add("fa-sun");
        }
        else
        {
            dayNight.querySelector("i").classList.add("fa-moon")
        }
    })


    