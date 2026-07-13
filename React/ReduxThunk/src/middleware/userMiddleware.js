import userSlice from "../redux/userSlice";
const actions = userSlice.actions;

export const fetchUserMiddleware = (param) => {
  return async (dispatch) => {
    console.log(param);
    try {
      dispatch(actions.setLoading(true));
      const respo = await fetch(`https://jsonplaceholder.typicode.com/users/${param}`);
      const data = await respo.json();
      console.log(data);
      dispatch(actions.setUser(data));
    } catch (err) {
      dispatch(actions.setError(err));
    } finally {
      dispatch(actions.setLoading(false));
    }
  };
};
