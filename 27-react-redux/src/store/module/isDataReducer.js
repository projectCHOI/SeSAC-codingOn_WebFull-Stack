// 할 일 1. src/store/module 개별적인 전역 state 선언
// --> reducer 생성
const initialState = false;

export const isDataReducer = (state = initialState, action) => {
  console.log("isData action", action); // { type: "isData/CHANGE" }
  if (action.type === "isData/CHANGE") return !state;
  return state; // 기존 state 유지
};
