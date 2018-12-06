!function () {
    let views = document.querySelectorAll('#topNavFix nav>ul>li')
    var controller = {
        views:null,
        init:function(views) {
            this.views = views
            this.bindEvent()
        },
        bindEvent:function() {
            for (let index = 0; index < this.views.length; index++) {
                let lit = this.views[index]
                lit.onmouseenter = function (ele) {
                    let ul = ele.currentTarget.getElementsByTagName('ul')[0]
                    if (ul){
                        ul.classList.add('menuActiviyt')
                    }
                }
                lit.onmouseleave = function (ele) {
                    let ul = ele.currentTarget.getElementsByTagName('ul')[0]
                    if (ul) {
                        ul.classList.remove('menuActiviyt')
                    }
                }
            }
        }
    }

    controller.init(views)

}.call()