import React from "react";
import { Button, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api/user";

function Register() {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    //real BE call
    try {
      const response = await registerUser(values);
     console.log(response);
      if (response.success) {
        message.success(response.message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        message.error(response.message);
      }
      console.log("success", response);
    } catch (err) {
      console.log("Error", err);
    }
  };

  return (
    <>
      <main className="App-header">
        <h1>Register On BookMyShow</h1>
        <section className="mw-500 text-center px-3">
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Name"
              htmlFor="name"
              name="name"
              className="d-block"
              rules={[{ required: true, message: "Name is required" }]}
            >
              <Input id="name" type="text" placeholder="Enter your Name" />
            </Form.Item>

            <Form.Item
              label="Email"
              htmlFor="email"
              name="email"
              className="d-block"
              rules={[
                { required: true, message: "Email is required" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input id="email" type="text" placeholder="Enter your Email" />
            </Form.Item>

            <Form.Item
              label="Password"
              htmlFor="password"
              name="password"
              className="d-block"
              rules={[{ required: true, message: "Password is required" }]}
            >
              <Input
                id="password"
                type="password"
                placeholder="Enter your Password"
              />
            </Form.Item>

            <Form.Item className="d-block">
              <Button
                type="primary"
                block
                htmlType="submit"
                style={{ fontSize: "1rem", fontWeight: "600" }}
              >
                Register
              </Button>
            </Form.Item>
          </Form>
          <div>
            <p>
              Existing User ? <Link to="/login">Login Here</Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Register;
