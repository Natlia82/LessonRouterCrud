import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function HomePage() {
const rez =[];
(async () => {
  // POST request using fetch with async/await
 
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({content: 'Новый контент'  })
  };
  const response = await fetch('http://localhost:7070/posts');
  const data = await response.json();
  rez = data;
  console.log(rez);
})();
    console.log(rez)
    return (
      <div>
            {rez.map(o => 
                <h>gggg</h>
                
                )}

            <div className='kart'>
            <Card style={{ width: '450px' }}>
                <Card.Body>
                  <Card.Title>Ilnaz Cilyazov</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Основатель группы</Card.Subtitle>
                <Card.Text>
                  Пост1
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

     
    
      </div>
    )
  }

  export default HomePage;