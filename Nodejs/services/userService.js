const users = [
  {
    id: 1,
    name: "Nirmal",
  },
];

export const getAllUsers = () => {
  return users;
};

export const addUser = (user) => {
  users.push(user);
  return users;
};
