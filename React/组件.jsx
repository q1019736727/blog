
function F1() {
    return(
        <div>
            哈哈
            <nContext.Consumer>
                {(obj) => (
                    <div>
                        <span>{obj.n}</span>
                        <button onClick={obj.setN}>+</button>
                    </div>
                )}
            </nContext.Consumer>

        </div>
    )
}

const nContext = React.createContext();

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            x: {
                n: 67,
                setN: () => {
                    this.setState({
                        x: {
                            ...this.state.x,
                            n: this.state.x.n + 1
                        }
                    });
                }
            }
        };
    }
    render() {
        return (
            <div>
                <nContext.Provider value={this.state.x}>
                    <F1/>
                </nContext.Provider>
            </div>
        );
    }
}

const rootElement = document.getElementById("app");
ReactDOM.render(<App />, rootElement);
