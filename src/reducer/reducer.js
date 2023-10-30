function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT_COUNT":
      // state.count + 1
      return {
        ...state,
        count: state.count + 1
      };
    case "DECREMENT_COUNT":
      return {
        ...state,
        count: state.count - 1
      };
    case "RESET_COUNT":
      return {
        ...state,
        count: 0
      };
    case "INCREMENT_COUNT_BY_VALUE":
      return {
        ...state,
        count: state.count + action.payload
      };
    case "DECREMENT_COUNT_BY_VALUE":
      return {
        ...state,
        count: state.count - action.payload
      };
    default:
      return state;
  }
}

export default reducer;
