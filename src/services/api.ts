import axios from 'axios'

// json-server --watch db.jsom
export const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
})