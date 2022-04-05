import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

const App = () => {
    const obterTextoDoBotao = () => "Enviar"
    const textoDoRotulo = "Nome:"
    const estiloBotao = { marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'brown', width: '100%', borderStyle: 'none', borderRadius: 8 }
    return (
        <div style={{ margin: 'auto', width: '80%', backgroundColor: 'lightblue', padding: 12, borderRadius: 8 }}>
            <label className="rotulo" style={{ display: 'block', marginBottom: 4 }} >
                {textoDoRotulo}
            </label>
            <input id="nome" type="text" style={{ paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', borderRadius: 8, width: '100%', boxSizing: 'border-box' }} />
            <button style={estiloBotao}>{obterTextoDoBotao()}</button>
        </div>
    )
}

const AppExercicio = () => {
    const estiloFundo = { marginTop: 12, paddingTop: '5%', paddingBottom: '2%' ,backgroundColor: 'lightGray', width: '100%', borderStyle: 'none', borderRadius: 8 }
    const meuCard = (
        <div className='myCard'>
            3
            {/* <img src=''></img> */}
        </div>
        )
        
    const estiloTitulo = { verticalAlign : 'center', textAlign : 'center' }
    return (
        <div style={estiloFundo}>
            1
            <p style={estiloTitulo}>Profissionais da saúde</p>
            <div style={{ margin : 'auto' , paddingTop: '10%', paddingBottom: '2%' , borderColor : 'darkGray', borderStyle : 'solid', borderRadius : 8 }}>
                2
                {meuCard}
            </div>
        </div>
    )
}

ReactDOM.render(
    <AppExercicio />,
    document.querySelector("#root")
)