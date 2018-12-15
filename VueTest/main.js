
let view = new Vue({
    el: '#app',
    data:{
        book:{
            name:'九年义务教育',
            number: 2,
        },
        list:[{name:'我是第一',index:0},{name:'我是第二',index:1},{name:'我是第三',index:2}],
        selectIndex: 0
    },
    template :`
        <div>
            <div>{{this.book.name}}</div>
            <ol>
                <li v-for="item in list"
                    v-bind:class="{active: selectIndex===item.index}"
                    v-on:click="click(item.index)"
                >{{item.name}}</li>
            </ol>
            <div v-model:book.name></div>
        </div>
    `,
    methods:{
        click(index){
            this.selectIndex = index
        }
    }
})
