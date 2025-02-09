import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
};

// slice of the global state
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    authenticate(state) {
      state.isAuthenticated = true;
    },
  },
});

export function sendUserData(userData, isRegister) {
  return async (dispatch) => {
    try {
      console.log("here baby");
      const response = await fetch(
        `${
          isRegister
            ? "https://localhost:7103/api/auth/register"
            : "https://localhost:7103/api/auth/login"
        }`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();

      return result;
    } catch (error) {
      return { error: error.message };
    }
  };
}

export const authActions = authSlice.actions;
export default authSlice.reducer;
