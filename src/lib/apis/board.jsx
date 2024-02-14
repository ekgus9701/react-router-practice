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
