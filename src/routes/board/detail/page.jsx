import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, Row } from "react-bootstrap";
import { deleteBoard, fetchBoard } from "~/lib/apis/board";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { fetchCommentList } from "~/lib/apis/board";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { postComment } from "~/lib/apis/board";

import ListGroup from "react-bootstrap/ListGroup";

export default function BoardDetailPage() {
  // const navigate = useNavigate();
  const params = useParams();
  const [commentData, setCommentData] = useState([]);
  const [comment, setComment] = useState([]);

  const handleDelete = async (boardId) => {
    try {
      const response = await deleteBoard(boardId);
      //nav로 수정
      window.location.reload(true);
    } catch (error) {
      console.error("글 삭제 중 에러 발생:", error);
    }
  };

  const handleWriteComment = async (comment, boardId) => {
    try {
      //console.log(comment);
      //setCommentData(comment);
      //console.log(commentData);
      const response = await postComment(comment, boardId);

      window.location.reload(true);
    } catch (error) {
      console.error("댓글 작성 중 에러 발생:", error);
    }
  };

  const [boardData, setBoardData] = useState([]);

  const callBoard = async () => {
    try {
      const response = await fetchBoard(params.boardId);

      setBoardData(response);
    } catch (error) {
      console.error("API 호출 중 에러:", error);
    }
  };

  const callComment = async () => {
    try {
      const response = await fetchCommentList(params.boardId);
      //console.log(response[0].content);

      setCommentData(response);
    } catch (error) {
      console.error("API 호출 중 에러:", error);
    }
  };

  useEffect(() => {
    callBoard();
    callComment();
  }, []);

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        {/* //뒤로가기 기능을 navigate를 이용해서 구현 */}
        {/* <Button
        onClick={(e) => {
          navigate(-1);
        }}
      >
        {"<"} 뒤로가기
      </Button> */}
        <Image src={boardData.img} style={{ width: "30rem", margin: "5px" }} />;
        <h1>{boardData.title}</h1>
        <p>{boardData.content}</p>
        <Button
          variant="primary"
          style={{ background: "red", borderColor: "red" }}
          onClick={() => handleDelete(params.boardId)}
        >
          {" "}
          삭제하기
        </Button>
        <hr />
        {/* <FloatingLabel controlId="floatingTextarea2" label="Comments">
          <Form.Control
            as="textarea"
            style={{ height: "100px" }}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
        </FloatingLabel>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            margin: "10px 5px",
          }}
        >
          <Button
            variant="primary"
            onClick={() => handleWriteComment(comment, params.boardId)}
          >
            {" "}
            댓글달기
          </Button>
        </div> */}
      </div>

      {commentData.map((item) => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ListGroup style={{ width: "50%" }}>
            <ListGroup.Item style={{ margin: "3px" }}>
              <strong>Anonymous</strong>
              <br />
              {item.content}
            </ListGroup.Item>
          </ListGroup>
        </div>
      ))}
    </div>
  );
}
