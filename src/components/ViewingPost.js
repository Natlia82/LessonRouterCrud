import React , { useState, useEffect, useRef } from 'react';
import { Routes, Route, NavLink, Navigate, useNavigate, useSearchParams, useParams } from "react-router-dom";
import useJsonFetch from '../hooks/useJsonFetch';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import UseJsonPost from "../hooks/useJsonPost";


function ViewingPost() {
        const [update, setUpdate] = useState(0);

        
       

        const params = useParams();
        const prodId = params.id;
        const [{data, err, flag}] = useJsonFetch(`http://localhost:7070/posts/${prodId}`);
        const navigate = useNavigate();
        
         const onDeleteSubmit = (evt) => {
          evt.preventDefault();
          UseJsonPost(`http://localhost:7070/posts/${prodId}`, {}, 'DELETE');      
          navigate(`/`);
         };    
        
         const handleSubmit = (evt) => {
          evt.preventDefault();
         }
         
         const handleChange = (evt) => {

         }

          return  (
           <div>
              {update==0? 
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
                    <Button onClick={() => setUpdate(1)} >Изменить</Button>
                    <Button onClick={onDeleteSubmit} >Удалить</Button>
                  </div>  
                </Card>
               
              :<p>идет загрузка..</p> }
              </div>
            :   <div className='newForm'>
            <CloseButton onClick={() => setUpdate(0)}  />
            <Form  onSubmit={handleSubmit} >
                <Form.Group className="mb-3" >
                        <Form.Control placeholder="Текст поста" name="content" value={data.post.content} onChange={handleChange}/>
                 </Form.Group>  
                 <Button variant="primary" type="submit">
                        Сохранить
                 </Button>
              
             </Form>
             </div>}
            </div>


        )    
        
       
 
}

export default ViewingPost;
