import { useState } from 'react'
import './inputStyle.css'
const Inputs = () => {
    const [input, setInput] = useState({
        fno: 0,
        sno: 0,
    })

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
        console.log(input);
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
                <button>Generate Steps</button>
            </div>
        </div>
    )
}

export default Inputs