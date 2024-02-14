import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  const handleLogin = async () => {
    try {
      const response = await axios
        .post("/api/board/login", {
          email: id,
          password: pw,
        })
        .then((data) => {
          if (data.status === 201) {
            alert("로그인 성공");
            setIsLoggedIn(true);
            navigate("/");
          }
        })
        .catch((err) => {
          alert("로그인 실패");
          console.log("err:", err);
        });
    } catch (error) {
      console.error("로그인 중 에러 발생:", error);
    }
  };

  return (
    <div>
      <Form style={{ display: "flex", flexDirection: "row" }}>
        <Form.Group className="mb-3" style={{ margin: "5px" }}>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            style={{ margin: "5px" }}
            id="id"
            className="login"
            onChange={(e) => {
              setId(e.target.value);
            }}
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group className="mb-3" style={{ margin: "5px" }}>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            style={{ margin: "5px" }}
            id="password"
            className="login"
            onChange={(e) => {
              setPw(e.target.value);
            }}
          />
        </Form.Group>
      </Form>

      <div>
        <Button
          variant="primary"
          style={{ margin: "0px 5px 5px 5px" }}
          type="button"
          className="loginButton"
          onClick={handleLogin}
        >
          로그인
        </Button>
      </div>
    </div>
  );
}
