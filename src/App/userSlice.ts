import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../App/store";
import { UserListProps } from "../Data/userListType";

interface UserState {
  userList: UserListProps[];
  activeUser: UserListProps | null;
}

const getInitialUserList = (): UserListProps[] => {
  const userList = localStorage.getItem("userList");
  return userList ? JSON.parse(userList) : [];
};

const getInitialActiveUser = (userList: UserListProps[]) => {
  const activeUser = userList.find((user) => user.active === true) || null;
  return activeUser;
};

const initialState: UserState = {
  userList: getInitialUserList(),
  activeUser: getInitialActiveUser(getInitialUserList()),
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUserList: (state, action: PayloadAction<UserListProps[]>) => {
      state.userList = action.payload;
      localStorage.setItem("userList", JSON.stringify(action.payload));
    },
    setActiveUser: (state, action: PayloadAction<UserListProps | null>) => {
      state.activeUser = action.payload;
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
    },
  },
});

export const { setUserList, setActiveUser } = userSlice.actions;
export const selectUsers = (state: RootState) => state.users;

export default userSlice.reducer;
