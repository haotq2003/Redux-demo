
import axios from 'axios';
import { INCREMENT, DECREMENT,FETCH_USER_REQUEST,FETCH_USER_SUCCESS,FETCH_USER_ERR, CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_ERR } from './types';


export const increaseCounter = () => {

    return {

        type: INCREMENT,
        playload:{name:'hao',like:'fifa'}

    };

};

export const decreaseCounter = () => {

    return {

       type: DECREMENT,

    };

};


    export const fetchUser = () =>{
        return async (dispatch,getState) =>{
          dispatch(fetchUserRequest())
            try {
                const res = await axios.get("http://localhost:8080/users/all");
                console.log(res)
            const data = res.data; 
            dispatch(fetchUserSus(data))
            } catch (error) {
                console.log(error)
                dispatch(fetchUserERR(error));
            }
        }
    }
    export const fetchUserRequest = () =>{
        return{
            type:FETCH_USER_REQUEST,
        }
        }
        export const fetchUserSus = (data) =>{
            return{
                type:FETCH_USER_SUCCESS,
                dataUser:data
            }
            }
            export const fetchUserERR = () =>{
                return{
                    type:FETCH_USER_ERR,
                }
                }
            
            export const CreateUserRequest = () =>{
                return{
                    type:CREATE_USER_REQUEST,
                }
                }
                export const CreateUserSus = () =>{
                    return{
                        type:CREATE_USER_SUCCESS,
                        
                    }
                    }
                    export const CreateUserERR = () =>{
                        return{
                            type:CREATE_USER_ERR,
                        }
                        }   
             export  const createNewUser =  (email,password,username) =>{
                return async (dispatch,getState)=>{
                  dispatch(CreateUserRequest());
                  try {
                    const res = await axios.post('http://localhost:8080/users/create',{email,password,username})
                    dispatch(CreateUserSus());
                    dispatch(fetchUser());
                  } catch (error) {
                    console.log(error);
                    dispatch(CreateUserERR());
                  }
                }
             }  

             export const deleteUser =(id) =>{
             return async (dispatch,getState)=>{
                try {
                    const res = await axios.post(`http://localhost:8080/users/delete/${id}`)
                    dispatch(DeleteUserSus())
                    dispatch(fetchUser())
                } catch (error) {
                    console.log(error);
                }
             }
             }
             


             export const DeleteUserSus = () =>{
                return{
                    type:FETCH_USER_SUCCESS,
                    
                }  
            }