import { post, get } from "../../api";

export function createPost(data) {
  return async (dispatch) => {
    try {
      await post(data);
      dispatch({
        type: "CREATE_POST",
      });
      dispatch(fetchPost());
    } catch (err) {}
  };
}

export function fetchPost() {
  return async (dispatch) => {
    try {
      let data = await get();
        await dispatch({
          type: "FETCH_POST",
          data
        });
    } catch (err) {}
  };
}