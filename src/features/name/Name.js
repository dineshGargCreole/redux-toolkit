import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {addName} from './nameSlice'

function Name() {
    const dispatch = useDispatch()
    const name = useSelector(state => state.nameReducer.name)
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
            {name.length>0 && name.map(item => <li key={item}>{item}</li>)}
        </ul>
    </div>
  )
}

export default Name