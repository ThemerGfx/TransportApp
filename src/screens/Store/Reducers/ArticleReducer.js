const initState = {
    allArticles: [],
    articleItem: {}
  }
  
  const articleReducer = (state = initState, action) => {
    // if (action.type === "GET_ALL_AGENTS_SUCCESS"){
    //   return {
    //     ...state,
    //     allAgents: action.payload
    //   }
    // }
    // if (action.type === "EDIT_AGENTS_ITEM") {
    //   return {
    //     ...state,
    //     agentItem: action.agent
    //   }
    // }
    return state
  }
  
  export default articleReducer;