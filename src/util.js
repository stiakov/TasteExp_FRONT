const checkSignedIn = currentUser => {
  let tokens = false;
  if (localStorage.user) {
    tokens = JSON.parse(localStorage.user).headers;
  } else if (currentUser) {
    tokens = currentUser.headers;
  }
  console.log('tokens', tokens);
  return tokens;
};

export default checkSignedIn;
