import React, {useState} from 'react';
import { Routes, Route, NavLink, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import UseJsonPost from "../hooks/useJsonPost";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

function NewPost() {
  const [form, setForm] = useState({
    content: ""
});

      const navigate = useNavigate();
      const handleFormChange = (evt) => {
        const {name, value} = evt.target;
       setForm((prevForm) => ({[name] : value}));
      }
      const handleSubmit = (evt) => {
        evt.preventDefault();
       // console.log(form.content);  
        UseJsonPost("http://localhost:7070/posts", form.content);      
        setForm({content: ""});
        navigate(`/`);
   };
    return ( 
      <Form className='newForm' onSubmit={handleSubmit} >
            <Nav >
              <Nav.Item>
                    <Nav.Link href="#">Публикация</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link eventKey="#">Фтот/видео</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link eventKey="#">Прямой Эфир</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link eventKey="#" disabled>ещё</Nav.Link>
              </Nav.Item>
            </Nav>
            <Form.Group className="mb-3" >
                    <Form.Label>Введите тект поста</Form.Label>
                    <Form.Control placeholder="Текст поста" name="content" value={form.content} onChange={handleFormChange}/>
            </Form.Group>  
            <Button variant="primary" type="submit">
                   Опубликовать
            </Button>
         
        </Form>
    )
}

export default NewPost;