// UserDetailsTab.js
import React, { useState, useEffect } from 'react';
import UserModal from './UserModal';
import { getUsers } from './UserData';

const UserDetailsTab = () => {
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers();
      setUserList(users);
    };

    fetchUsers();
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  const handleGenerateReport = (user) => {
    // Simulate generating a report
    alert(`Generating report for ${user.username}`);
    handleCloseModal();
  };

  const filteredUsers = userList.filter(
    (user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.id.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.creationDate.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>User Details</h2>
      <div>
        <label>
          Search:
          <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>ID</th>
            <th>Creation Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id} onClick={() => handleUserClick(user)}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.id}</td>
              <td>{user.creationDate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedUser && (
        <UserModal user={selectedUser} onClose={handleCloseModal} onGenerateReport={handleGenerateReport} />
      )}
    </div>
  );
};

export default UserDetailsTab;
