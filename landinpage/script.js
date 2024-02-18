var tl = gsap.timeline();
var tl2 =gsap.timeline();
tl.from('#Nav h5 ',{
    y:-40,
    duration:2,
    stagger:.091,
    opasity:0
})

tl.from('#nav h4  ',{
    x:-1090,
    duration:1
})


tl2.from('#img1 img',{
    x: 1000,
    duration:1,

})

