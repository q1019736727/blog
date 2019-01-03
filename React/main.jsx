
class App extends React.Component{
    constructor(){
        super()
        this.state = {
            style:{
                header:{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                center:{
                    color: 'red',
                    padding: '0 10px'
                }
            }
        }
    }
   complate1 () {
        alert('兔子🐰完成')
    }
    complate2 () {
        alert('乌龟🐢完成')
    }
    render(){
        return(
            <div>
                <div style={this.state.style.header}>
                    <Time1></Time1>
                    <div style={this.state.style.center}>裁判</div>
                    <Time2></Time2>
                </div>
                <Playground successTop1={this.complate1.bind(this)} successTop2={this.complate2.bind(this)}></Playground>
            </div>
        )
    }
}

function Playground(props){
    let success1 = props.successTop1
    let success2 = props.successTop2
    return(
        <div>
            /*这里面的函数不要用this*/
            <Track1 success={success1} name='🐰'></Track1>
            <Track2 success={success2} name='🐢'></Track2>
        </div>
    )
}

class Time1 extends React.Component{
    render(){
        return(
            <div>
                <p>兔子🐰</p>
            </div>
        )
    }
}
class Time2 extends React.Component{
    render(){
        return(
            <div>
                <p>乌龟🐢</p>
            </div>
        )
    }
}
class Track1 extends React.Component{
    constructor(props){
        super(props)
        let n = 0
        this.state = {
            style:{
                transform: `translateX(${n}%)`
            }
        }
        let timer = setInterval(()=>{
            n += 20
            this.setState({
                style:{
                    transform: `translateX(${n}%)`
                }
            })
            if (n >= 100){
                window.clearInterval(timer)
                this.props.success()//执行函数
            }
        },1000)
    }
    render(){
        return(
            <div className='track'>
                <p style={this.state.style}>{this.props.name}</p>
                <hr/>
            </div>
        )
    }
}
class Track2 extends React.Component{
    constructor(props){
        super(props)
        let n = 0
        this.state = {
            style:{
                transform: `translateX(${n}%)`
            }
        }
        let timer = setInterval(()=>{
            n += 10
            this.setState({
                style:{
                    transform: `translateX(${n}%)`
                }
            })
            if (n >= 100){
                window.clearInterval(timer)
                this.props.success()//执行函数
            }
        },1000)
    }
    render(){
        return(
            <div className='track'>
                <p style={this.state.style}>{this.props.name}</p>
                <hr/>
            </div>
        )
    }
}
ReactDOM.render(<App/>,document.querySelector('#app'))
