import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

function ListaProduto({ product }) {
    return (
      <div>
        <h2>Produtos</h2>
        <ListGroup>
          {product.map(product  => (
            <ListGroup.Item key={product .id}>
              <Card>
                <Card.Body>
                  <Card.Title>{product .nome}</Card.Title>
                  <Card.Text>{product .preco}</Card.Text>
                  <Card.Text>{product .estoque}</Card.Text>
                  <Card.Text>{product .descricao}</Card.Text>
                  <Card.Text>{}</Card.Text>
                </Card.Body>
              </Card>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }
  
  export default ListaProduto;
  