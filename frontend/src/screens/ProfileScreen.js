import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { getUserDetails } from "../actions/userActions";
import { register } from "../actions/userActions";

export default function ProfileScreen({ history }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const dispatch = useDispatch();


    const userDetails = useSelector((state) => state.userDetails);
    const { error, loading, user } = userDetails;
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (!userInfo) {
        history.push('/login');
        }else {
            if(!user || !user.name){
                dispatch(getUserDetails('profile'))

            }else{
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch, history, userInfo, user]);

    const submitHandler = (e) => {
        e.preventDefault();

        if(password != confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            console.log('Updating..')
        }
        
    };

  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>

        
      </Col>
      <Col md={9}>
        <h2>My orders</h2>
      </Col>
    </Row>
  );
}
