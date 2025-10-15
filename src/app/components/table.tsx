'use client'

import { useEffect, useState } from "react"
import { supabase } from "../../../lib/supabaseClient"
import "./table.css"

interface TableProps {
  tableName: string
  title?: string
}

interface TableRow {
  id: number
  name?: string
  quantity?: number
  price?: number
  discount?: boolean
  discount_price?: number
}

export default function Table({ tableName, title }: TableProps) {
  const [data, setData] = useState<TableRow[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const { data: tableData, error } = await supabase
        .from(tableName)
        .select("*")
        .order("id", { ascending: true })

      console.log(`Supabase fetch error for ${tableName}:`, error)
      console.log(`Supabase fetch data for ${tableName}:`, tableData)

      if (tableData) setData(tableData)
    }

    fetchData()
  }, [tableName])

  if (data === null) return <p>Carregando {title || tableName}...</p>

  const hasDiscount = data.some(item => item.discount)

  return (
    <div className="table-wrapper">
      {title && <h2>{title}</h2>}
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            {/* Mostra "Nome" se existir campo name, senão "Quantidade" */}
            {data[0]?.name !== undefined ? <th>Nome</th> : <th>Quantidade</th>}
            <th>Preço</th>
            {hasDiscount && <th>Promoção</th>}
            {hasDiscount && <th>Preço com Desconto</th>}
          </tr>
        </thead>
        <tbody className="tbody">
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              {/* Mostra nome ou quantidade dependendo do campo disponível */}
              <td>
                {item.name !== undefined
                  ? item.name
                  : item.quantity !== undefined
                  ? `${item.quantity} Peças`
                  : '—'}
              </td>
              <td>
                {item.price != null
                  ? `${item.price.toFixed(2)}€`
                  : "Orçamento"}
              </td>
              {hasDiscount && item.discount ? (
                <>
                  <td>Sim</td>
                  <td>
                    {item.discount_price != null
                      ? `${item.discount_price.toFixed(2)}€`
                      : "—"}
                  </td>
                </>
              ) : hasDiscount ? (
                <>
                  <td></td>
                  <td></td>
                </>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}