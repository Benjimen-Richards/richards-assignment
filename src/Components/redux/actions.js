const User_api = "https://jsonplaceholder.typicode.com/users";
export const getusers = async () => {
  const payload = await fetch(User_api).then((res) => res.json());
  return {
    type: "GET_DATA",
    payload,
  };
};

export const setUserTimer = (id, timer, status,interval) => {
  return {
    type: "SET_USER_TIMER",
    payload: {
      id,
      timer,
      status,
      interval
    },
  };
};
export const removeTimer = (id,interval) => {
  return {
    type: "REMOVE_USER_TIMER",
    payload: {
      id,
      interval
    },
  };
};
