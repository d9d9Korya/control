export const UPDATE_INFO = "UPDATE_INFO";

let initialState = {
  name: "",
  password: ""
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_INFO:
      return {
        ...state,
        name: action.nameupdate,
        password: action.passupdate
      };

    default:
      return state;
  }
};
export const updateLoginInfoActionCreator = (nameText, passText) => ({
  type: UPDATE_INFO,
  nameUpdateInfo: nameText,
  passUpdateInfo: passText
});

export default loginReducer;