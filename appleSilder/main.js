
let $buttons = $('.banner>.dotWrapper>.dotItem')
let $imgWrapper = $('.banner>.imgWind>.imgWrapper')
console.log($imgWrapper)
for (let i=0;i<$buttons.length;i++) {
    let $btn = $($buttons[i])
    $btn.on('click',(ele)=>{
        let index = $(ele.currentTarget).index()
        $imgWrapper.css({transform :`translateX(${-925*index}px)`})
        $(ele.currentTarget).addClass('active').siblings().removeClass('active')
    })
}