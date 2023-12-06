import { Component, createContext } from "react";
export const DarkContext = createContext()


class DarkContextProvider extends Component{
    state = {
        isLightTheme: true,
        light :{syntax : "#555" , ui:"#ddd", bg:"#eee"},
        dark :{syntax : "#ddd" , ui:"#333", bg:"#555"}
    }

    toggleTheme = () => {
        this.setState({isLightTheme : !this.state.isLightTheme})
    }

    render() {
        return (
            <>
                <DarkContext.Provider value={{...this.state , toggleTheme:this.toggleTheme}}>
                    {this.props.children}
                </DarkContext.Provider>
            </>
        )
    }
}

export default DarkContextProvider