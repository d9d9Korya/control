import {
    connect
} from "react-redux";
import User from "./User";
import {
    connect
} from "react-redux";
import {
    AddUserActionCreator,
    RemoveUserActionCreator
} from "../../redux/reducers/usersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.users,
        fnameinput: state.users.fnameinput,
        lnameinput: state.users.lanameinput,
        emailinput: state.user.emailinput
    };
}
let mapDispatchToProps = (dispatch) => {
    return {
        DeleteUser: id => {
            dispatch(DelUserActionCreator(id));
        },
        AddUser: () => {
            dispatch(AddUserActionCreator());
            dispatch(updateUserInfoActionCreator("","",""));
        },
        updateUserInfoActionCreator : (fnameinput,lnameinput,emailinput)

    }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User);
export default UserContainer;