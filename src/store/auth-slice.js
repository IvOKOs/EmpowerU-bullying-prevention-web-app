import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
};

// slice of the global state
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    authenticate() {},
  },
});

export function sendUserData(userData) {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:5000/api/authenticate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
    } catch (error) {}
  };
}

export const authActions = authSlice.actions;
export default authSlice.reducer;
