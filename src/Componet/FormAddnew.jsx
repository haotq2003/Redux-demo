import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { createNewUser } from '../Actionn/actions';
const FormAddnew = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [username,setUsername] = useState('');
  const dispatch = useDispatch();
  const isCreate = useSelector(state=>state.user.isCreate)
  const handleSumit = () =>{
  dispatch(createNewUser(email,password,username))
  setEmail('');
  setPassword('');
  setUsername('');

  
  }
  return (
    <>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(event) =>setEmail(event.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' rows={3} value={password} onChange={(event) =>setPassword(event.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Username</Form.Label>
        <Form.Control type='text' rows={3} value={username} onChange={(event) =>setUsername(event.target.value)} />
      </Form.Group>
      <Button variant="success" disabled={isCreate} onClick={() =>handleSumit()}>Success</Button>{' '}
    </Form>
    </>
  )
}

export default FormAddnew