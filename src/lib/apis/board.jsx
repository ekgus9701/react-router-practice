import instance from "./base";
import axios from "axios";

export async function fetchBoardList() {
  //데이터 조회하는 함수
  const response = await instance.get("/board");

  //base.jsx를 만들어줌에 따라 아래코드가 위 코드로 짧아질 수 있었음
  //base.jsx를 만드는 이유는 중복되는 코드가 많은데 이를 모듈화(?)해서 사용할 수 있게 함
  //   try {
  //     //base의 interceptor
  //     const response = await instance.get("/board");
  //     console.log(response);

  //     //기존 axios 활용
  //     console.log(await axios.get("/api/board"));

  //     return response.data;
  //   } catch (err) {
  //     console.err("데이터 조회하다가 error 발생!");
  //   }
  return response;
}

export async function fetchBoard(boardId) {
  const response = await instance.get("/board/" + boardId);

  return response;
}

export async function postBoardList({ title, content, img }) {
  const response = await instance.post("/board", {
    title: title,
    content: content,
    img: img,
  });
  return response;
}

export async function rewriteBoardList(
  boardId,
  { title, content, img, updatedAt }
) {
  const response = await instance.put(`/board/${boardId}`, {
    title: title,
    content: content,
    img: img,
    updatedAt: updatedAt,
  });
  return response;
}

export async function fetchCommentList(boardId) {
  try {
    const queryString = `?boardId=${boardId}`;

    const response = await instance.get(`/board/comments/${queryString}`);
    //console.log(response);

    return response;
  } catch (error) {
    throw error;
  }
}

export async function deleteBoard(boardId) {
  try {
    //const queryString = `?boardId=${boardId}`;

    const response = await instance.delete(`/board/${boardId}`);
    //console.log(response);

    return response;
  } catch (error) {
    throw error;
  }
}

// router.post("/comments", authenticate, function (req, res, next) {
//   const writer = req.user._id ? req.user._id : null;

//   console.log(req.board);

//   const commentData = { ...req.body, writer };

//   Comment.create(commentData)
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       next(err);
//     });
// });

export async function postComment(comment, boardId) {
  console.log(comment, boardId);
  const response = await instance.post("/comments", {
    content: comment,
    board: boardId,
  });
  console.log("afhgjghj");
  return response;
}
