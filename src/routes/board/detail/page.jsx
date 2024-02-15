import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { fetchBoard } from "~/lib/apis/board";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { fetchCommentList } from "~/lib/apis/board";
import ListGroup from "react-bootstrap/ListGroup";

export default function BoardDetailPage() {
  // const navigate = useNavigate();
  const params = useParams();

  const [boardData, setBoardData] = useState([]);

  const callBoard = async () => {
    try {
      const response = await fetchBoard(params.boardId);

      setBoardData(response);
    } catch (error) {
      console.error("API 호출 중 에러:", error);
    }
  };

  const [commentData, setCommentData] = useState([]);

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
        <hr />
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
