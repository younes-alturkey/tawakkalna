import { SET_HEALTH_PASSPORT } from "../actions";

export default HealthPassportReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_HEALTH_PASSPORT:
      return action.payload;
    default:
      return state;
  }
};
