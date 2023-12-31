import { useParams } from 'react-router-dom'
import Transacao from '../../components/views/Dashboard/Transacao/Transacao'
import Layout from '../../components/shared/Layout/Layout'
import { getTransacoes } from '../../service/api'
import Button from '../../components/common/Button/Button'
import { useState } from 'react'

const Transacoes = () => {
  const params = useParams()
  const [listaTransacoes, setListaTransacoes] = useState([])

  async function handleBuscarTransacoes() {
    const resposta = await getTransacoes('a57501f9407c2174825bb862860ec23a', params.tipo)
    setListaTransacoes(resposta.data)
  }

  
  console.log(params)
  return (
    <div>
      <Layout >
        <h2>{params.tipo.toLocaleUpperCase()}</h2>
        <Button
          onClick={handleBuscarTransacoes}
          texto={"Buscar transacoes"}
          variant='primary' />
        
        
        {listaTransacoes.map((transacao) => {
          return (
            <Transacao
              key={transacao.id}
              id={transacao.id}
              valor={transacao.valor}
              categoria={transacao.categoria}
              data={transacao.data}
              tipo={transacao.tipo === 'entrada' ? 'entrada' : 'saida'}
            />
          )
        })}
      </Layout>
    </div>
  )
}

export default Transacoes