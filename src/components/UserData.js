export const getUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      resolve(storedUsers);
    }, 500);
  });
};

// Function to add a new user to local storage
export const addUser = (newUser) => {
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  const updatedUsers = [
    ...storedUsers,
    { id: storedUsers.length + 1, ...newUser },
  ];
  localStorage.setItem("users", JSON.stringify(updatedUsers));
};
