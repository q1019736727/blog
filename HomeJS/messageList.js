!function () {

    let view = View('.Message')

    var model = {
        init:function() {
            var APP_ID = '9MA0aGnSx2J1yM7JUaw8lDsR-gzGzoHsz';
            var APP_KEY = 'wPVtPwLF7SyI1BYvRaD46UCA';
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
        },
        sendMessage:function(inputs) {
            var CloudDta = AV.Object.extend('messageList')
            var sendAction = new CloudDta();
            sendAction.set('name',inputs[0].value);
            sendAction.set('content',inputs[1].value);
            let data = sendAction.save()
            return data
        },
        fetchData:function () {
            var query = new AV.Query('messageList');
            let  data =  query.find()
            return data
        }

    }

    var controller = {
        view:null,
        model:null,
        init:function (view,model) {
            this.view = view
            this.model = model
            this.model.init()

            this.getDataAction()
            this.submitAction()
        },
        submitAction:function() {
            let form = this.view.querySelector('#sendMessageForm')
            let inputs = form.querySelectorAll('input[type=text]')
            form.addEventListener('submit',function (ele) {
                ele.preventDefault()
                if (inputs[0].value === '' || inputs[1].value === ''){
                    alert('请将内容输入完整')
                    return
                }
                this.model.sendMessage(inputs)
                    .then(function (todo) {
                    let message = todo.attributes
                    let li = document.createElement('li')
                    li.innerText = message.name + ': ' + message.content
                    messageList.appendChild(li)
                    inputs[1].value = ''
                }, function (error) {

                }).then(()=>{},(error)=>{console.log(error)})

            }.bind(this))
        },
        getDataAction:function() {
            this.model.fetchData()
                .then(function (messages) {
                    let mesArr = []
                    messages.forEach((item)=>{
                        mesArr.push(item.attributes)
                    })
                    return mesArr
                })
                .then((messagelist)=>{
                    messagelist.map((value)=>{
                        let li = document.createElement('li')
                        li.innerText = value.name + ': ' + value.content
                        messageList.appendChild(li)
                    })
                }).then(()=>{},(error)=>{console.log(error)})
        }
    }

    controller.init(view,model)


}.call()