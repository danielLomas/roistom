import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/client'
const CreateClient = () => {
  const [code, setCode] = useState('')
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const navigate = useNavigate()

  const store = async (e) => {
    e.preventDefault()
    await axios.post(endpoint, { code: code, name: name, lastName: lastName })
    navigate('/')
  }
  return (
    <div class="p-4 p-md-5 pt-5" >
      <h2>Create new Client</h2>
      <form onSubmit={store}>
        <div className="mb-3">
          <label className="form-label">Code</label>
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <a href="/" className='btn btn-danger'>Regresar</a>
        --

        <button type="submit" className="btn btn-success"> 
          Save
        </button>
      </form>
    </div>
  )
}

export default CreateClient
