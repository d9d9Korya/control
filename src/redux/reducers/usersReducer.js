import {  ADD_USER , DEL_USER ,UPDATE_INFO  } from "../actions/actions";
let initialState = {usersData: [{id:1,firstname:"Korney",lastname:"Novikov",email:"kn@gmail.com"},
                                {id:2,firstname:"Alyosha",lastname: "Rus",email:"AleshaRus123@gmail.com"},
                                {id:3,firstname: "Dmitriy",lastname:"Antonov",email:"JohnSilver@gmail.com"} ],
                                fnameinput:"", lnameinput:"",emailinput:""};


var usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:      
      return {
        ...state,
        usersData:[
          ...state.usersData,
          {id: state.usersData.length++,firstname : state.fnameinput,lastname:state.lnameinput,email:state.emailinput}
        ]
      }  
      case DEL_USER:
        return{
          ...state,
          usersData: [...state.usersData].filter(el => el.id !== action.id)
      }
      case UPDATE_INFO:
        return {
          ...state,
          firstname: action.fnameinput,
          lastname: action.lnameinput,
          email: action.emailinput
        };
    default:
      return state;
  }
}

export const AddUserActionCreator = () => ({ type: ADD_USER });
export const DelUserActionCreator = id => ({ type: DEL_USER, id: id });
export default usersReducer;