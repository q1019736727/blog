!function () {

    var APP_ID = '9MA0aGnSx2J1yM7JUaw8lDsR-gzGzoHsz';
    var APP_KEY = 'wPVtPwLF7SyI1BYvRaD46UCA';
    AV.init({
        appId: APP_ID,
        appKey: APP_KEY
    });



    let form = document.querySelector('#sendMessageForm')
    let inputs = form.querySelectorAll('input[type=text]')

    getMessageList()
    function getMessageList() {
        var query = new AV.Query('messageList');
        query.find()
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

    form.addEventListener('submit',function (ele) {
        ele.preventDefault()
        if (inputs[0].value === '' || inputs[1].value === ''){
            alert('请将内容输入完整')
            return
        }

        var CloudDta = AV.Object.extend('messageList')
        var sendAction = new CloudDta();
        sendAction.set('name',inputs[0].value);
        sendAction.set('content',inputs[1].value);
        sendAction.save()
            .then(function (todo) {
                let message = todo.attributes
                let li = document.createElement('li')
                li.innerText = message.name + ': ' + message.content
                messageList.appendChild(li)
                inputs[1].value = ''
            }, function (error) {

            }).then(()=>{},(error)=>{console.log(error)})
    })







}.call()