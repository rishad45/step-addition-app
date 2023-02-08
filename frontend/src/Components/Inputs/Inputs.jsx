import { useState } from 'react'
import './inputStyle.css'
import axios from 'axios'
import Result from '../Result/Result'
const Inputs = () => {
    const [sum, setSum] = useState([])
    const [carry, setCarry] = useState([])
    const [input, setInput] = useState({
        fno: 0,
        sno: 0,
    })

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
        console.log(input);
    }

    const submit = () => {
        axios.post('/api/step-addition', input, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then( result => {
            setSum(result.data.sumString)
            setCarry(result.data.carryString)
        })
    }
    return (
        <div className='inputs'>
            <div>
                <span>Enter First Number : </span><input type="number" name='fno' value={input.fno} onChange={handleChange} />
            </div>
            <div>
                <span>Enter First Number : </span><input type="number" name='sno' value={input.sno} onChange={handleChange} />
            </div>
            <div>
                <button onClick={submit}>Generate Steps</button>
            </div>
            {
                sum.length === 0 ? null : <Result sum={sum} carry={carry}/>
            }
        </div>
    )
}

export default Inputs