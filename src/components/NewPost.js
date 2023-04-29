import React, {useState} from 'react';
import { Routes, Route, NavLink, Navigate, useNavigate, useSearchParams } from "react-router-dom";


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
        console.log(form.content);        
        setForm({content: ""});
        navigate(`/`);
   };
    return ( 
      <form onSubmit={handleSubmit}>
                                   
            <input type="text" name="content" value={form.content} onChange={handleFormChange} />
                        
            <button className="spanLi"  >ОК</button>
        </form>
    )
}

export default NewPost;