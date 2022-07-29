import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {addName, removeName} from './nameSlice'

function Name() {
    const dispatch = useDispatch()
    const names = useSelector(state => state.nameReducer.names)
    const [text, setText] = useState('')

    const handleClick = () => {
        dispatch(addName(text))
        setText('')
    }
  return (
    <div>
        <input type='text' onChange={(e) => setText(e.target.value)} value={text} />
        <button onClick={handleClick}>Add</button>

        <br/><br/>
        <ul>
            {names.length>0 && names.map(item => {
                return (
                    <li key={item}>
                        {item} 
                        <button onClick={() => dispatch(removeName(item))} style={{marginLeft: '10px', marginBottom: '10px'}}>X</button>
                        <button style={{marginLeft: '10px', marginBottom: '10px'}}>U</button>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Name