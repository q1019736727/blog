
!function () {

    let views =  document.querySelectorAll('#topNavFix nav a')

    var controller = {
        views: null,
        init: function (views) {
            this.views = views
            this.animationTime()
            this.bindEvent()
        },
        bindEvent: function () {
            for (var index = 0; index < this.views.length; index++) {
                let aEle = this.views[index]
                aEle.onclick = function (ele) {
                    ele.preventDefault()
                    let currentEle = ele.currentTarget
                    let scrollerView = document.querySelector(currentEle.getAttribute('href'))
                    let currentTop = window.scrollY
                    let targetTop = scrollerView.offsetTop - 80
                    let s = targetTop - currentTop
                    var coords = {y: currentTop}
                    var t = Math.abs((s / 100) * 300)
                    if (t > 500) {
                        t = 500
                    }
                    var tween = new TWEEN.Tween(coords)
                        .to({y: targetTop}, t)
                        .easing(TWEEN.Easing.Quadratic.InOut)
                        .onUpdate(function () {
                            window.scroll(0, coords.y)
                        })
                        .start();
                }
            }
        },
        animationTime:function () {
            //tween.js动画要求(获取处理器好坏)
            requestAnimationFrame(animate);
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
        }
    }

    controller.init(views)

}.call()