import React , { useState, useEffect, useRef } from 'react';
import { Routes, Route, NavLink, Navigate, useNavigate, useSearchParams, useParams } from "react-router-dom";
import useJsonFetch from '../hooks/useJsonFetch';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';



function ViewingPost() {
        const params = useParams();
        const prodId = params.id;
        const [{data, err, flag}] = useJsonFetch(`http://localhost:7070/posts/${prodId}`);
             
        return  (
            <div>
               {!flag & 'post' in data ?
               
                <Card style={{ width: '450px' }}>
                  <Card.Body>
                      <Card.Title>Ilnaz Cilyazov</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">Основатель группы</Card.Subtitle>
                      <Card.Text id={data.post.id}>
                         {'content' in data.post? <div> {data.post.content}</div>:<div>нет</div>}
                      </Card.Text>
                      <Card.Link href="#">Нравиться</Card.Link>
                      <Card.Link href="#">Комментировать</Card.Link>
                  </Card.Body>
                  <div>
                    <Button >Изменить</Button>
                    <Button >Удалить</Button>
                  </div>  
                </Card>
               
              :<p>идет загрузка..</p>  }
            </div>

        )    
        
       
 
}

export default ViewingPost;
