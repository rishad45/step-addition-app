import { useState } from 'react'
import './inputStyle.css'
import axios from 'axios'
import Result from '../Result/Result'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
const Inputs = () => {
    const [result, setresult] = useState([])
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState({
        fno: 0,
        sno: 0,
    })

    const handleChange = (e) => {
        setresult([]);
        setInput({ ...input, [e.target.name]: e.target.value })
        console.log(input);
    }

    const submit = () => {
        setresult([])
        setLoading(true)
        axios.post('/api/step-addition', input, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            setresult(res.data.output)
            setLoading(false)
        }).catch(err => {
            toast.error(err.response.data.message, toastoptions)
            setLoading(false)
        })
    }

    const toastoptions = {
        position: "bottom-left",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true
    }
    return (
        <>
            <div className='inputs'>
                <div>
                    <span>Enter First Number : </span><input type="number" name='fno' value={input.fno} onChange={handleChange} required/>
                </div>
                <div>
                    <span>Enter First Number : </span><input type="number" name='sno' value={input.sno} onChange={handleChange} required/>
                </div>
                <div>
                    <button onClick={submit}>Generate Steps</button>
                </div>
                {
                    loading && <Box sx={{ display: 'flex' }}>
                        <Spinner />
                    </Box>
                }
                {
                    result.length === 0 ? null : <Result result={result} />
                }
            </div>
            <ToastContainer />
        </>
    )
}

export default Inputs