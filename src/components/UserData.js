// UserData.js
let users = [
  { id: 1, username: 'user1', email: 'user1@example.com', phone: '123-456-7890', creationDate: '2023-01-01' },
  { id: 2, username: 'user2', email: 'user2@example.com', phone: '987-654-3210', creationDate: '2023-02-01' },
  // Add more users as needed
];

export const getUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 500);
  });
};

export const addUser = (newUser) => {
  users = [...users, { id: users.length + 1, ...newUser }];
};
