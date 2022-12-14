import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Typography,message } from 'antd';
import axios from 'axios';
import 'antd/dist/antd.css';

function Login() {
  const [username, setUsername] = useState(""); //declare variable and initialize as null
  const [password, setPassword] = useState("");

  const { Title } = Typography;

  const navigate = useNavigate(); //gives access to navigation object, can pass the props

  async function  login(){
    //axios - Javascript library used to make HTTP requests from browser(make connection between frontend and backend side)
    axios.post("http://restapi.adequateshop.com/api/authaccount/login", {
      email: username,
      password: password
    })
    .then((response) => {
      if (response.data.message ==='success'){
        navigate('/dashboard',{state:response.data.data.Name}); //state -  React Navigation stores the navigation structure and history of the app.
      }
      else{
        message.warning('Invalid username or password');
    }
    }, (error) => {
      console.log(error);
      alert("Input required fiields")
    });
    
  }

  return (    
    <div style={{paddingTop:"5rem"}} className="App">
      <Title style={{color:"#1E90FF", display:"flex", justifyContent:"space-around", paddingBottom:"5rem"}}>Login</Title>
      <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
      style={{paddingRight:"20rem" }}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input value={username} onChange={(e)=>setUsername(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password value={password} onChange={(e)=>setPassword(e.target.value)} />
      </Form.Item>

      {/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit"
        onClick={login}>
        Submit          
        </Button>
      </Form.Item>

    </Form>
    </div>
  );
}

export default Login;
