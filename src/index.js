import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

import homemRosa from'./images/homemRosa.jpg'
import medicaCovid from './images/medicaCovid.jpg'
import medicoVelho from './images/medicoVelho.webp'

// const App = () => {
//     const obterTextoDoBotao = () => "Enviar"
//     const textoDoRotulo = "Nome:"
//     const estiloBotao = { marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'brown', width: '100%', borderStyle: 'none', borderRadius: 8 }
//     return (
//         <div style={{ margin: 'auto', width: '80%', backgroundColor: 'lightblue', padding: 12, borderRadius: 8 }}>
//             <label className="rotulo" style={{ display: 'block', marginBottom: 4 }} >
//                 {textoDoRotulo}
//             </label>
//             <input id="nome" type="text" style={{ paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', borderRadius: 8, width: '100%', boxSizing: 'border-box' }} />
//             <button style={estiloBotao}>{obterTextoDoBotao()}</button>
//         </div>
//     )
// }

const AppExercicio = () => {
    const estiloFundo = { marginTop: 12, paddingTop: '5%', paddingBottom: '2%' ,backgroundColor: 'lightGray', width: '100%', borderRadius: 8 }
    const imageTextSize = { fontSize: 12, textAlign: 'center' }
    const myCardStyle = { display: 'inline-block', marginTop: 12, paddingTop: '1%', padding: 5 , backgroundColor: 'thistle', height: 150, width: 120, borderRadius: 8 }
    const imageStyle = { height: 100, width: 120, borderRadius: 8 }
    const meuCard = (image, text) => (
        <div className='myCard' style={myCardStyle}>
            <img src={image} style={imageStyle}></img>
            <p style={imageTextSize}>{text}</p>
        </div>
        )
        
    const estiloTitulo = { verticalAlign : 'center', textAlign : 'center' }
    return (
        <div style={estiloFundo}>
            <p style={estiloTitulo}>Profissionais da saúde</p>
            <div style={{display: 'flex', justifyContent:'space-around', margin : 10, padding: 10, paddingBottom: '2%' , borderColor : 'darkGray', borderStyle : 'solid', borderRadius : 8 }}>
                {meuCard(homemRosa, 'José da Silva')}
                {meuCard(medicoVelho, 'João da Silva')}
                {meuCard("https://www.imexmedicalgroup.com.br/wp-content/uploads/2020/10/IMEXpostblog-prevencao_CAPA-BLOG-1024x542.jpg", 'Jaqueline Mendes')}
            </div>
        </div>
    )
}

ReactDOM.render(
    <AppExercicio />,
    document.querySelector("#root")
)