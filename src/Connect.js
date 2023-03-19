import React from 'react'
import './Connect.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link} from 'react-router-dom';

export default function Connect() {
  return (
    <div className="card_spot">
      <Card style={{ width: '18rem' }} className="user_card">
      <Card.Img variant="top" src="https://placekitten.com/g/200/300" />
      <Card.Body>
        <Card.Title className="card_title"> Danielle </Card.Title>
        <Card.Text className="card_text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to="/Chat">Chat</Link>
      </Card.Body>
    </Card>
  </div>
  )
}
