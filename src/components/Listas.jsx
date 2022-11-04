import React from 'react'


const Listas = () => {

    let estadoInicial = ["Item 1", "Item 2", "Item 3"]
    let estadoInicialObj = [
        {id: 1, texto: "Elemento 1"},
        {id: 2, texto: "Elemento 2"},
        {id: 3, texto: "Elemento 3"},
        {id: 4, texto: "Elemento 4"}
    ]

    const [lista, setLista] = React.useState(estadoInicial)
    const [listaO, setListaO] = React.useState(estadoInicialObj)
    const agregar = ()=> {
        setListaO([
            ...listaO,
            {id: 5, texto: "elemento 5"}
        ])
    }
  return (
    <div>
      <h2>Listas</h2>
     <ul>
        {
            lista.map((elemento, index)=>( <li key={index}>{elemento}</li> ))
        }
     </ul>
     <button className='btn btn-primary' onClick={()=>agregar()}>Agregar</button>

     <ul>
        {
            listaO.map((elemento)=>( <li key={elemento.id}>{elemento.texto}</li> ))
        }
     </ul>
    </div>
  )
}

export default Listas
