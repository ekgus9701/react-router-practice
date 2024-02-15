import React from "react";
import { useEffect, useState } from "react";
import { fetchBoardList } from "~/lib/apis/board";
import { postBoardList } from "~/lib/apis/board";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";

export default function BoardListPage() {
  const [apiData, setApiData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imgsrc, setImgsrc] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // console.log(searchParams);
  // console.log(searchParams.getAll("where"));
  // console.log(searchParams.getAll("query"));

  const handleWrite = async () => {
    try {
      const response = await postBoardList({
        title: title,
        content: content,
        img: imgsrc,
      });
      setShow(false);
      console.log(response);
      window.location.reload(true);
    } catch (error) {
      console.error("글 작성 중 에러 발생:", error);
    }
  };

  const callApi = async () => {
    try {
      const response = await fetchBoardList();

      setApiData(response);
    } catch (error) {
      console.error("API 호출 중 에러:", error);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <>
      <div style={{ display: "flex" }}>
        {localStorage.getItem("login") === "true" ? (
          <Button
            variant="primary"
            onClick={handleShow}
            style={{ marginLeft: "auto", marginRight: "20px" }}
          >
            글 쓰기
          </Button>
        ) : (
          <></>
        )}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>글 쓰기</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" style={{ margin: "5px" }}>
            <Form.Label>Title</Form.Label>
            <Form.Control
              style={{ margin: "5px" }}
              onChange={(e) => {
                setTitle(e.target.value);
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
                setContent(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" style={{ margin: "5px" }}>
            <Form.Label>Img src</Form.Label>
            <Form.Control
              style={{ margin: "5px" }}
              onChange={(e) => {
                setImgsrc(e.target.value);
              }}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleWrite}>
            작성
          </Button>
        </Modal.Footer>
      </Modal>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {apiData.map((item) => (
          <Card style={{ width: "18rem", margin: "5px" }} key={item._id}>
            <Card.Img
              variant="top"
              src={
                item.img
                  ? item.img
                  : "https://img.freepik.com/premium-vector/black-background-with-a-small-white-dot-that-says-black_214056-829.jpg"
              }
              style={{ height: "250px" }}
            />

            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.content}</Card.Text>
              <Card.Text>
                {new Date(item.createdAt).toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </Card.Text>
              <Link
                to={`/board/${item._id}`}
                key={item._id}
                preventScrollReset
                className="text-decoration-none"
              >
                <Button variant="primary">상세 보기</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}
