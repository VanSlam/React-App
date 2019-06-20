//Zach Van Slambrook


const Pet = props => {
    return React.createElement("div",{},[
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h3", {}, props.breed),    
    ])
}



const App = () =>{

    return React.createElement("div", {}, [ 
        React.createElement("h1", {}, "Adopt me!"),
        React.createElement(Pet, {name: "Tucker", animal:"dog", breed:"Mut"}),
        React.createElement(Pet, {name: "scout", animal:"dog", breed:"ausy"}),
        React.createElement(Pet, {name: "freddy", animal:"frog", breed:"bullfrog"}),
        React.createElement(Pet, {name: "tootles", animal:"cat", breed:"tabby"})
        
    


    ])
    
}

ReactDOM.render(React.createElement(App), document.getElementById("root"))