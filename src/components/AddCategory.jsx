import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  
    const [inputValue, setInputValue] = useState(' ');

    const onInputChange = e => {
        setInputValue(e.target.value);
    }

    const handlerOnSubmit = e => {
        e.preventDefault()//previene el submit
        if (inputValue.trim().length <= 1 ) return;//valida que el ingreso sea mayor a 1
        //setCategories( (categories) => [ inputValue, ...categories ])
        //traigo la property para agregar una categoria nueva a las existentes
        onNewCategory( inputValue.trim() )
        setInputValue('');//vacio el input una vez submiteado
    }
  
  
    return (
        <form onSubmit={handlerOnSubmit}>
            <input 
            type="text"
            placeholder="Buscar Gifts"
            value={inputValue}
            onChange={ onInputChange }
            />
        </form>
  )
}
