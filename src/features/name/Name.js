import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {addName} from './nameSlice'

function Name() {
    const dispatch = useDispatch()
    const name = useSelector(state => state.nameReducer.name)
    const [text, setText] = useState('')
  return (
    <div>
        <input type='text' onChange={(e) => setText(e.target.value)} />
        <button onClick={() => dispatch(addName(text))}>Add</button>

        <br/><br/>
        Name: {name}
    </div>
  )
}

export default Name