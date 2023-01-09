export const loginUser = async (
  username: string,
  password: string
): Promise<void> => {
  if (
    !(username in MOCK_USER_CREDS) ||
    MOCK_USER_CREDS[username] !== password
  ) {
    console.log('fail')
    localStorage.clear();
  } else {
    console.log('login')
    localStorage.setItem("token", "tokenValue");
  }
};

const MOCK_USER_CREDS: any = {
  gary: "abc123",
  will: "abc123",
};
