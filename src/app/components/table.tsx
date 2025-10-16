'use client';

import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabaseClient";
import "./table.css";

interface TableProps {
  tableName: string;
  title?: string;
  search?: string;
}

interface TableRow {
  id: number;
  name?: string;
  quantity?: number;
  price?: number;
  discount?: boolean;
  discount_price?: number;
}

const ROWS_PER_PAGE = 20;

export default function Table({ tableName, title, search }: TableProps) {
  const [data, setData] = useState<TableRow[] | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  // 🔄 Fetch data from Supabase
  useEffect(() => {
    const fetchData = async () => {
      const { data: tableData } = await supabase
        .from(tableName)
        .select("*")
        .order("id", { ascending: true });

      if (tableData) setData(tableData);
    };

    fetchData();
  }, [tableName]);

  // 🔁 Reset page when search changes
  useEffect(() => {
    setCurrentPage(0);
  }, [search]);

  if (data === null) return <p>Carregando {title || tableName}...</p>;

  const hasDiscount = data.some(item => item.discount);

  const filteredData = search
    ? data.filter(item =>
        item.name?.toLowerCase().includes(search.toLowerCase()) ||
        item.quantity?.toString().includes(search) ||
        item.price?.toString().includes(search)
      )
    : data;

  const totalPages = Math.ceil(filteredData.length / ROWS_PER_PAGE);
  const paginatedData = filteredData.slice(
    currentPage * ROWS_PER_PAGE,
    (currentPage + 1) * ROWS_PER_PAGE
  );

  return (
    <div className="table-wrapper">
      {title && <h2>{title}</h2>}
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            {paginatedData[0]?.name !== undefined ? <th>Nome</th> : <th>Quantidade</th>}
            <th>Preço</th>
            {hasDiscount && <th>Promoção</th>}
            {hasDiscount && <th>Preço com Desconto</th>}
          </tr>
        </thead>
        <tbody className="tbody">
          {paginatedData.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                {item.name !== undefined
                  ? item.name
                  : item.quantity !== undefined
                  ? `${item.quantity} Peças`
                  : '—'}
              </td>
              <td>
                {item.discount && item.discount_price != null ? (
                  <span className="price-strike">
                    {item.price != null ? `${item.price.toFixed(2)}€` : "—"}
                  </span>
                ) : (
                  item.price != null ? `${item.price.toFixed(2)}€` : "Orçamento"
                )}
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

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage(p => Math.max(p - 1, 0))}
            disabled={currentPage === 0}
          >
            ← Anterior
          </button>
          <span>Página {currentPage + 1} de {totalPages}</span>
          <button
            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages - 1))}
            disabled={currentPage === totalPages - 1}
          >
            Próxima →
          </button>
        </div>
      )}
    </div>
  );
}