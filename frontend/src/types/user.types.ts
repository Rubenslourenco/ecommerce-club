interface User {
  id: string;
  lastName: string;
  email: string;
  provider: "firebase" | "google";
}

export default User;
