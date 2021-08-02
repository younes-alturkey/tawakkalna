export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";
export const SET_HEALTH_PASSPORT = "SET_HEALTH_PASSPORT";

export const logIn = (user) => {
  return {
    type: USER_LOGIN,
    payload: user,
  };
};

export const logout = () => {
  return {
    type: USER_LOGOUT,
  };
};

export const setHealthPassport = (healthPassport) => {
  return {
    type: SET_HEALTH_PASSPORT,
    payload: healthPassport,
  };
};
