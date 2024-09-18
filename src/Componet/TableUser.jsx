import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchUser } from "../Actionn/actions";
const TableUser = () => {
  
  const dispatch = useDispatch();
  // const user = async () => {
  //   const res = await axios.get("http://weblearn.ddns.net:4000/api/products");
  //   const data = res.data;  
  //   setUserr(data);
  //   console.log(data);
  // };

  const userr = useSelector((state)=>state.user.listUser);
  const isLoading = useSelector((state)=>state.user.isLoading);
  const isError = useSelector((state)=>state.user.isError)

  useEffect(() => {
    // user();
    dispatch(fetchUser())
  }, []);
  const Handelete = (user) =>{
    dispatch(deleteUser(user.id))
  }
  return (
    <>
      <hr></hr>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Email </th>
            <th>Username</th>
            <th>ACtion</th>
          </tr>
        </thead>
        <tbody>
        {isError ===true ?  <><div>Something is wrong !!</div></> :<>
         {isLoading === true ? <> <div>Loading...</div></> : <> {userr.map((item,index) => {
            return (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item.email}</td>
                <td>{item.username}</td>
                <td>
                    <button onClick={() =>Handelete(item)}>
                        Delete
                    </button>
                </td>
              </tr>
            );
          })}</>}
        </>}
          
        </tbody>
      </Table>
    </>
  );
};

export default TableUser;
