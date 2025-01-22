// action type의 상수
const DEPOSIT = "bank/DEPOSIT";
const WITHDRAW = "bank/WITHDRAW";

// action 리턴 함수
export const deposit = (payload) => ({
  type: DEPOSIT,
  payload: payload,
});
export const withdraw = (payload) => ({ type: WITHDRAW, payload });

const initialState = 0;

// reducer
export const bankReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEPOSIT:
      return state + action.payload;
    case WITHDRAW:
      return state - action.payload;
    default:
      return state;
  }
};
