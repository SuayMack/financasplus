import axios from 'axios'

const app = axios.create({
  baseURL: 'http://localhost:3001'
})

export const getTransacoes  = async (id, tipo) => {
  const res = await app.get(`/usuario/${id}/transacoes/${tipo}`)
  return res.data
}
