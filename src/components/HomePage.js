import React , { useState, useEffect, useRef } from 'react';
import { Routes, Route, NavLink, Navigate, useSearchParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import useJsonFetch from '../hooks/useJsonFetch';

function HomePage() {
  const [{data, err, flag}] = useJsonFetch("http://localhost:7070/posts");
  
    return (
     
      <div>
            <NavLink className="knopa" to="/posts/new">Создать пост</NavLink>
             {flag? <h1>"идет загрузка..."</h1>: data.map((m) => 
             <div className='kart' key={m.id}>
             <Card style={{ width: '450px' }}>
                <Card.Body>
                  <Card.Title>Ilnaz Cilyazov</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Основатель группы</Card.Subtitle>
                <Card.Text>
                    {m.content}
                </Card.Text>
                <Card.Link href="#">Нравиться</Card.Link>
                <Card.Link href="#">Комментировать</Card.Link>
                </Card.Body>
                <div className='coment'>
                <Row>
                    <Form.Label column="lg" lg={3}>
                      Ivan
                    </Form.Label>
                    <Col>
                        <Form.Control size="lg" type="text" placeholder="Напишите комментарий.." />
                    </Col>
                </Row>
                </div>
            </Card>
            </div>
         ) }
     
    
      </div>
    )
  }

  export default HomePage;