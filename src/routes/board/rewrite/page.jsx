import React from "react";
import { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useSearchParams, useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { rewriteBoardList } from "~/lib/apis/board";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function BoardWritePage() {
  const params = useParams();
  const [retitle, setRetitle] = useState("");
  const [recontent, setRecontent] = useState("");
  const [reimgsrc, setReimgsrc] = useState("");
  const [show2, setShow2] = useState(false);
  const navigate = useNavigate();

  const handleClose2 = () => {
    navigate(-1);
  };
  const handleShow2 = () => {
    setShow2(true);
  };

  const handleRewrite = async (boardId) => {
    console.log(boardId);
    try {
      const response = await rewriteBoardList(boardId, {
        title: retitle,
        content: recontent,
        img: reimgsrc,
        updatedAt: new Date().toISOString(),
      });
      navigate("/board");
      //setShow2(false);
      //console.log(response);
      window.location.reload(true);
    } catch (error) {
      console.error("글 수정 중 에러 발생:", error);
    }
  };

  return (
    <>
      <Modal show={true} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>글 수정하기</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" style={{ margin: "5px" }}>
            <Form.Label>Title</Form.Label>
            <Form.Control
              style={{ margin: "5px" }}
              onChange={(e) => {
                setRetitle(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" style={{ margin: "5px" }}>
            <Form.Label>Content</Form.Label>
            <Form.Control
              style={{ margin: "5px" }}
              as="textarea"
              rows={5}
              onChange={(e) => {
                setRecontent(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" style={{ margin: "5px" }}>
            <Form.Label>Img src</Form.Label>
            <Form.Control
              style={{ margin: "5px" }}
              onChange={(e) => {
                setReimgsrc(e.target.value);
              }}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => handleRewrite(params.boardId)}
          >
            작성
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
