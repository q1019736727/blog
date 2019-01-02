let number = 0

render()

let add = ()=>{
    number += 1
    render()
}

let minus = ()=>{
    number -= 1
    render()
}



function render(){
    ReactDOM.render(
        <div>
            <span>{number}</span>
            <button onClick={add}>+</button>
            <button onClick={minus}>-</button>
        </div>,
        document.querySelector('#app')
    )
}