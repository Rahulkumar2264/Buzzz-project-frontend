let user = localStorage.getItem("user");

user = (user && JSON.parse(user)) || {};
console.log(user)
const initialState = {
     user
};

export default (state = initialState, action) => {
  const type = action && action.type;
  switch (type) {
    case "SET_USER_INFO":
      return { ...action.user };
    default:
      return state;
  }
};
