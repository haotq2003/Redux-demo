import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Header from './Header';
import FormAddnew from './FormAddnew';
import TableUser from './TableUser';
const Home = (props) => {
  return (
    <>
        <Header/>
        <FormAddnew/>
        <TableUser/>
    </>
  )
}

export default Home