import React from "react";
import { useParams } from "react-router-dom";
import { produtos } from "../Products/Products";
import './Demo.css'

function Demo(){
    const { id } = useParams();

    const produtoEncontrado = produtos.find((produto) => produto.id === Number(id));

    console.log("id: ", id);
    console.log("Produtos: ", produtos);
    console.log("Pesquisa: ", produtoEncontrado);
    
    if (!produtoEncontrado) {
        return <p>Produto não encontrado.</p>;
    }

    let { titulo, descricao, imagem, preco } = produtoEncontrado;

    imagem = '/' + imagem;

    return(
        <>
        <div className="container">

            <div className="row">
                <div className="col-4">
                    <img src={imagem} alt={titulo} width="300" height="300" />
                </div>
                <div className="col-7">
                    
                    <div className="row">
                        <span className="fs-3">{titulo}</span>
                    </div>
                    <div className="row">
                        <span className="fs-5">{descricao}</span>
                    </div>       
                    <div className="row">
                        <div className="col-1">
                            R$
                        </div>
                        <div className="col-1">
                            <span className="fs-1">{preco}</span>
                        </div>                        
                    </div>                                            
                   

                </div>                
            </div>
            
        </div>
        </>
    )
}

export default Demo