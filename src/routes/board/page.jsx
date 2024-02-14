import React from "react";
import { useEffect, useState } from "react";
import { fetchBoardList } from "~/lib/apis/board";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function BoardListPage() {
  const [apiData, setApiData] = useState([]);

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
      <h1>BoardList</h1>
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
                <Button variant="primary">Go Details</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}
