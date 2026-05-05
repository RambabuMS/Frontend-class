import { getAllUsers } from "../services/userService.js";

export const getUsers = (req, res) => {
  const users = getAllUsers();
  res.json({ data: users });
};

export const createUsers = (req, res) => {
  const user = addUser(req.body);
  res.json({ data: user });
};
