import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

//jQuery libraries

import 'jquery/dist/jquery.min.js'

//Datatable Modules
import 'datatables.net-dt/js/dataTables.dataTables'
import 'datatables.net-dt/css/jquery.dataTables.min.css'
import $ from 'jquery'

const endpoint = 'http://localhost:8000/api'
const ShowClients = () => {
  const [clients, setClients] = useState([])
  useEffect(() => {
    getAllClients()
    $(document).ready(function () {
      setTimeout(function () {
        $('#clients').DataTable()
      }, 1000)
    })
  }, [])

  const getAllClients = async () => {
    const response = await axios.get(`${endpoint}/clients`)
    setClients(response.data)
  }

  const deleteClient = async (id) => {
    await axios.delete(`${endpoint}/client/${id}`)
    getAllClients()
  }
  return (
    <div class="p-4 p-md-5 pt-5">
      <div className="content ">
        <div className="p-md-2 ">
          <Link
            to="/create"
            className="btn btn-success btn-lg mt-2 mb-2 text-white"
          >
            Create
          </Link>
        </div>
        <div className="card ">
          <table id="clients" className="table table-striped">
            <thead className="bg-primary text-white">
              <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Last Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id}>
                  <td>{client.code}</td>
                  <td>{client.name}</td>
                  <td>{client.lastName}</td>
                  <td>
                    <Link to={`/edit/${client.id}`} className="btn btn-info">
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteClient(client.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ShowClients
