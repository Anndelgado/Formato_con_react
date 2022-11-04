import React from 'react'

const Variables = () => {
  const texto1="Buenas noches"
  let texto2="¿Como estás?"
const url= "https://i.pinimg.com/736x/c6/57/ed/c657ed1fc767767b81e89fa5a8753635.jpg"
    return (
        <>
        <p>Variables en jsx, {texto1} {texto2}</p>
        <img src={url} alt="hight school"/>
    
        </>
  )
}
export default Variables;