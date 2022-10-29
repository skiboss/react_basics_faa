import React from 'react'
import {useState} from 'react'
import './styles.css'

function Form() {

    const [data, setData] = useState({
        fullname: '',
        age: ''
    })

    const handleDataChange = (e) => {
        setData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`My name is ${data.fullname}, I am ${data.age}`);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Full Name:{""} <input name='fullname' value={data.fullname} onChange={handleDataChange} type='text' />
                    
                </label>
                <label>
                    Age: <input name='age' value={data.age} onChange={handleDataChange} type='text' />
                    
                </label>
                <button type='submit'>Done</button>
            </div>
        </form>
    </div>
  )
}

export default Form