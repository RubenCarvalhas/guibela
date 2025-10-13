'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../../../lib/supabaseClient'
import "./table.css";

interface EngomadoriaItem {
  id: number
  quantity: number
  price: number
  discount: boolean
  discount_price: number | null
}

export default function Table() {
  const [data, setData] = useState<EngomadoriaItem[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const { data: tableData, error } = await supabase
        .from('Engomadoria')
        .select('*')
        .order('id', { ascending: true })

      console.log('Supabase fetch error:', error)
      console.log('Supabase fetch data:', tableData)

      if (tableData) setData(tableData)
    }

    fetchData()
  }, [])

  if (data === null) return <p>Carregando...</p>

  const hasDiscount = data.some(item => item.discount)

  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Quantidade</th>
          <th>Preço</th>
          {hasDiscount && <th>Promoção</th>}
          {hasDiscount && <th>Preço com Desconto</th>}
        </tr>
      </thead>
      <tbody className="tbody">
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.quantity} Peças</td>
            <td>{item.price}€</td>

            {hasDiscount && item.discount && (
              <>
                <td>Sim</td>
                <td>{item.discount_price != null ? `${item.discount_price}€` : '—'}</td>
              </>
            )}

            {hasDiscount && !item.discount && (
              <>
                <td></td>
                <td></td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
