import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
const EXPAND_BREAKPOINT = "md";

export default function MyNavbar({ brandTitle, offCanvasTitle }) {
  const [isLoggedOut, setIsLoggedOut] = useState("false");

  const handleLogout = async () => {
    try {
      const response = await axios
        .post("/api/board/logout")
        .then((data) => {
          console.log(data);
          sessionStorage.setItem("login", "false");
          setIsLoggedOut("true");

          alert("로그아웃 성공");
          window.location.reload();
        })
        .catch((err) => {
          alert("로그아웃 실패");
          console.log("err:", err);
        });
    } catch (error) {
      console.error("로그아웃 중 에러 발생:", error);
    }
  };

  return (
    <Navbar
      expand={EXPAND_BREAKPOINT}
      className="mb-3"
      sticky="top"
      bg="dark"
      variant="dark"
    >
      <Container fluid>
        <Navbar.Brand href="#">{brandTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls={`Navbar-expand-${EXPAND_BREAKPOINT}`} />
        <Navbar.Offcanvas
          id={`Navbar-expand-${EXPAND_BREAKPOINT}`}
          aria-labelledby={`NavbarLabel-expand-${EXPAND_BREAKPOINT}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`NavbarLabel-expand-${EXPAND_BREAKPOINT}`}>
              {offCanvasTitle || brandTitle}
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="flex-row-reverse">
            <Nav
              className={`justify-content-around flex-row pb-4 pb-${EXPAND_BREAKPOINT}-0`}
            >
              {sessionStorage.getItem("login") === "true" ? (
                <>
                  <a
                    className="flex-grow-1 text-center border border-dark border-end-0 nav-link"
                    style={{ textDecoration: "none" }}
                    onClick={handleLogout}
                  >
                    로그아웃
                  </a>
                </>
              ) : (
                <>
                  <Link
                    to="board/login"
                    className="flex-grow-1 text-center border border-dark border-end-0 nav-link"
                    style={{ textDecoration: "none" }}
                    state={{ history: "sample" }}
                  >
                    로그인
                  </Link>
                  <Link
                    to="board/signup"
                    className="flex-grow-1 text-center border border-dark border-end-0 nav-link"
                    style={{ textDecoration: "none" }}
                  >
                    회원가입
                  </Link>
                </>
              )}
            </Nav>

            <Nav className="justify-content-start flex-grow-1 pe-3">
              <Nav.Link href="/">Home</Nav.Link>

              <Nav.Link href="/board">게시판</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
