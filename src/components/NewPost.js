import React, {useState} from 'react';
import { Routes, Route, NavLink, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import UseJsonPost from "../hooks/useJsonPost";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import CloseButton from 'react-bootstrap/CloseButton';

function NewPost() {
  const [form, setForm] = useState({
    content: "",
    id: 0,
});

      const navigate = useNavigate();
      const handleFormChange = (evt) => {
        const {name, value} = evt.target;
       setForm((prevForm) => ({[name] : value}));
      }
      const handleSubmit = (evt) => {
        evt.preventDefault();
       // console.log(form.content);  
        UseJsonPost("http://localhost:7070/posts", form);      
        setForm({content: ""});
        navigate(`/`);
        navigate(0);
       
        };

        const clouseSubmit = (evt) => {
         // evt.preventDefault();
           navigate(`/`);
        }

    return ( 
      <div className='newForm'>
       <CloseButton onClick={clouseSubmit}  />
       <Form  onSubmit={handleSubmit} >
      
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
        </div>
    )
}

export default NewPost;