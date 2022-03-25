import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    return (
        <div style={{ margin: 'auto', width: '80%', backgroundColor: 'lightblue', padding: 12, borderRadius: 8 }}>
            <label htmalFor = "nome" style={{display: 'block', marginBottom:4}} >
                Meu primeiro componente React.
            </label> 
            <input id="nome" type="text" style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', borderRadius: 8, width: '100%', boxSizing: 'border-box'}}/>
            <button style={{marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'brown', width: '100%', borderStyle: 'none', borderRadius: 8}}>Enviar</button>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)