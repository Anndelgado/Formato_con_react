import React from 'react'
const Formulario = () => {

    const [nombre, setNombre] = React.useState("")
    const [apellido, setApellido] = React.useState("")
    const [lista, setLista] = React.useState([])
    const [id, setId] = React.useState(-1)

    const guardarDatos=(e) => {
        e.preventDefault();
        if (!nombre.trim()) {
            alert("Ingrese el nombre")
            return
        }
        if (!apellido.trim()) {
            alert("Ingrese el apellido")
            return
        }
        // console.log("agregando:"+nombre+""+apellido)
        setLista([
            ...lista,
            {nombre: nombre, apellido: apellido}
        ])

        //limpiar los input
        e.target.reset()
        //limpiar los estados
        setNombre("")
        setApellido("")

    }
    const eliminarDatos=() => {
        if (id < 0) {
            alert("El id ingresado no existe")
            return
        }

        setLista(lista.filter((item,index)=>index+1 !== id))
        setId(-1)
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("id").value = "";  
    }
    const editarDatos=() => {
        if (id < 0) {
            alert("El id ingresado no existe")
            return
        }
        if (!nombre.trim()) {
            alert("Ingrese el nombre")
            return
        }
        if (!apellido.trim()) {
            alert("Ingrese el apellido")
            return
        }
        setLista(lista.map((item,index)=>{
            if (index+1 === id) {
                return{nombre: nombre, apellido: apellido}
            }
            return item
        
        }))
        
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("id").value = "";
        setNombre("")
        setApellido("")
        setId(-1)
    }

  return (
    <div>
        <h2>Formulario</h2>
        <form onSubmit={guardarDatos}>
            <input type="text" 
            placeholder='Ingresar nombre' 
            id='nombre' 
            onChange={(e)=>setNombre(e.target.value)} />
            <br></br><br></br>
            <input type="text" 
            placeholder='Ingresar apellido'
            id='apellido'
            onChange={(e)=>setApellido(e.target.value)} />
            <br></br><br></br>
            <input onChange={(e)=>setId(+e.target.value)} 
             type="number" 
             placeholder='Ingresar id (eliminar o editar)'
             id='id'/>
<br></br><br></br>

             <div>
                <button type='submit'>Agregar</button>
                <input onClick={eliminarDatos} type="button" value="Eliminar"/>
                <input onClick={editarDatos} type="button" value="Editar"/>
                <br></br><br></br>
                <h3>Lista de usuarios</h3>
                <ol>
                    {
                        lista.map((x, i)=>(<li key={i}>{x.nombre} {x.apellido}</li>))
                    }
                </ol>

            </div>
        </form>
    </div>
  )
}

export default Formulario