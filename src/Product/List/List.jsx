import React from "react";
import { produtos } from "../Products/Products";
import './List.css'

function List() {
  // Agrupa os produtos em chunks de 3
  const groupedProducts = produtos.reduce((acc, produto, index) => {
    const groupIndex = Math.floor(index / 3);
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(produto);
    return acc;
  }, []);

  return (
    <div className="container bg-transparent">
      {groupedProducts.map((group, groupIndex) => (
        <div className="row" key={groupIndex}>
          {group.map((produto) => (
            <div className="col-md-4" key={produto.id}>
                <div className="row m-3 hoover">
                    <div className="col-5">
                        <img src={produto.imagem} width="120" height="120" alt={produto.titulo} />
                    </div>
                    <div className="col-7">
                        <div className="row">
                            <span className="fs-5"> {produto.titulo} </span>
                        </div>
                        <div className="row">
                            <span> R$ <span className="fs-5">{produto.preco.toFixed(2)}</span> </span>
                        </div>
                    </div>
                </div>

            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default List;
