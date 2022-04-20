const initialState = {
  post: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const type = action && action.type;
  switch (type) {
    case "CREATE_POST":
      return state;
    case "FETCH_POST":
      return { post: action.data };
    default:
      return state;
  }
};