import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/client/'

const EditClient = () => {
  const [code, setCode] = useState('')
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const navigate = useNavigate()
  const { id } = useParams()

  const update = async (e) => {
    e.preventDefault()
    await axios.put(`${endpoint}${id}`, {
      code: code,
      name: name,
      lastName: lastName,
    })
    navigate('/')
  }

  useEffect(() => {
    const getClientById = async () => {
      const response = await axios.get(`${endpoint}${id}`)
      setCode(response.data.code)
      setName(response.data.name)
      setLastName(response.data.lastName)
    }
    getClientById()
  }, [])
  return (
    <div class="p-4 p-md-5 pt-5">
      <h2>Edit Client</h2>
      <form onSubmit={update}>
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
        <a href="/" className="btn btn-danger">
          Regresar
        </a>
        --
        <button type="submit" className="btn btn-success">
          Update
        </button>
      </form>
    </div>
  )
}

export default EditClient
