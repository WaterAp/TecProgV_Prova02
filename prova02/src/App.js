import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import ListaProduto from './components/lista-produto';
import { useState, useEffect } from 'react';

function App() {
  //function/js area:
  const [products, setProducts] = useState([]);
  const [nome, setNome] = useState([]);
  const [preco, setPreco] = useState([]);
  const [estoque, setEstoque] = useState([]);
  const [descricao, setDescricao] = useState([]);

  


  useEffect(() => {
    axios.get('http://3.137.177.147:3000/produtos').then(
      res => {
        setProducts(res.data)
      }  
    ).catch(
      err => {
        alert("API está indisponível")
      }
    );
        
  }, []);

  return (
    <div class="container">
      <div className="row">
        <h1>Gerenciamento de produtos</h1>
      </div>
      <div className="row">
        <div className="col">
          <div><label>Nome:</label></div>
          <input type='text' onChange={(event) => {
            setNome(event.target.value)
          }}></input>
        </div>
        <div className="col">
          <div><label>Preço:</label></div>
          <input type='number' onChange={(event) => {
            setPreco(event.target.value)
          }}></input>
        </div>
        <div className="col">
          <div><label>Estoque:</label></div>
          <input type='number' onChange={(event) => {
            setEstoque(event.target.value)
          }}></input>
        </div>
      </div>
      <div className="row">
        <div><label>Descrição</label></div>
        <textarea name="message" rows="10" cols="20" onChange={(event) => {
            setDescricao(event.target.value)
          }}></textarea>
      </div>
      <div className="row">
        <div className="col">
          <button type="button" className="btn btn-success" onClick={() => {
            axios.post("http://3.137.177.147:3000/produtos", {
            nome: {nome}, preco: {preco}, estoque: {estoque}, descricao: {descricao}
          }).then(() => {
            setNome("")
            setDescricao("")
            setPreco(0)
            setEstoque(0)

            alert("Salvo!!!")
          }).catch((err) => {
            alert("Ocorreu um erro")
          })
        }}>Salvar</button>
        </div>
      </div>
      <div className="conteiner">
        <ListaProduto product={products} />
      </div>
    </div>
  );
}

export default App;
