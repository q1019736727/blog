!function(){

    let view =  document.querySelector('#topNavFix')

    var controller = {
        view:null,
        init:function(view) {
            this.view = view
            this.windScroll()
        },
        windScroll: function() {
            window.onscroll = function(){
                if(window.scrollY > 0){
                    this.view.classList.add('activity')
                }else{
                    this.view.classList.remove('activity')
                }
                this.highLight()
                this.scrollerSkillAnimate()
            }.bind(this)
        },
        highLight:function () {
            let datas = document.querySelectorAll('[data-x]')
            let currentY  = window.scrollY
            var index = 0
            for (let i=0;i<datas.length;i++){
                if (Math.abs(datas[i].offsetTop - currentY)<Math.abs(datas[index].offsetTop - currentY)){
                    index = i
                }
            }
            let  aTags = document.querySelectorAll('.topNav>nav>ul>li')
            for (let i = 0;i<aTags.length;i++){
                aTags[i].classList.remove('highLight')
            }
            aTags[index].classList.add('highLight')
        },
        //进度条动画
        scrollerSkillAnimate:function () {
            let barProccess = document.getElementsByClassName('barProccess')
            let skillWrapper = document.getElementsByClassName('skillWrapper')[0]
            if ((window.screen.availHeight + window.scrollY) > (skillWrapper.offsetTop+200)){
                for (let i = 0; i<barProccess.length;i++){
                    barProccess[i].classList.add('activie'+ i)
                }
            }
        }

    }

    controller.init(view)

}.call()

