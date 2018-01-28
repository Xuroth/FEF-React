// import Redux from 'redux';

let initialState = {
  username: '',
  userprofile: {},
  repos: [],
  // searchType: 'USER',
  // pageTitle: 'Home!'
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE_USERNAME':
      return {...state, username: action.payload};
    case 'UPDATE_USERDATA':
      // console.log('Reducer: ',action.payload);
      let userData = action.payload
      return {
        ...state,
        username: userData.login,
        userprofile: userData,
        repos: userData.repos
      };
    case 'UPDATE_REPOS':
      return{
        ...state,
        repos: action.payload
      };
    default:
      return state;
  }
}

// const mapStateToProps = (state)

export default reducer;
