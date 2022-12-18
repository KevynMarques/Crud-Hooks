import React, { useState } from 'react'
import { BoxBase, BoxCenter,BoxList} from '.'
import { FaPlus, FaWindowClose,  } from "react-icons/fa";


export function Form() { 

const [addTarefa, setAddTarefa]  = useState ([])
const [inputValue, setInputValue] = useState('');
 
function listenTarefa (e) {
    e.preventDefault()
    setInputValue(e.target.value) 

}

function newTarefa () {
 setAddTarefa([...addTarefa, inputValue])
 setInputValue(''); 
}

function deletTarefa (index) {
    const newArray = [...addTarefa] ; 
    newArray.splice(index,1)
    setAddTarefa(newArray); 
}
    return (
        <>
            <BoxBase>
                <BoxCenter>
                    <h1>Lista de Tarefas</h1>
                    <div>
                        <input 
                         type="text"
                         onChange={listenTarefa}
                         value={inputValue} />
                        <button
                         onClick={newTarefa}
                         type="submit"><FaPlus/></button>
                    </div> 
                    <BoxList>
                  {addTarefa.map((item, index) =>(
                    <li key={index}>
                        {item}
                        <button 
                        onClick={deletTarefa}
                        type="submit">
                            <FaWindowClose/>
                            </button>
                    </li>
                  ))}
                    </BoxList>
                </BoxCenter>
            </BoxBase>
        </>
    )
}
