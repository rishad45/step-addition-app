import { useState } from 'react'
import './inputStyle.css'
import axios from 'axios'
import Result from '../Result/Result'
const Inputs = () => {
    const [result, setresult] = useState([])
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
        }).then( res => {
            setresult(res.data.output)
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
                result.length === 0 ? null : <Result result={result}/>
            }
        </div>
    )
}

export default Inputs