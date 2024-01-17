var tl=gsap.timeline()



tl.from(".part1 h2",{
  y:-400,
  duration:1,
  opacity:0,

})




tl.from(".part2 img",{
    scale:0,
    opacity:0,
    delay: 0.3,


})

tl.from(".part1 .content h1",{
    x:-300,
    opacity:0,
    duration:2,
    delay: 0.5,
    stagger:0.6

})


tl.from(".part3 img",{
    x:300,
    scale:0,
    opacity:0,
    delay: 0.3,


})

tl.from(".part3 h1",{
    y:-300,

    opacity:0,
    duration:2,
    delay: 0.5,

})

