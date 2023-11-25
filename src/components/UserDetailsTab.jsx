import React, { useState, useEffect } from "react";
import UserModal from "./UserModal";
import { getUsers } from "./UserData";
import { Vortex } from "react-loader-spinner";

const UserDetailsTab = () => {
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true); // New state for loading indicator

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getUsers();
        setUserList(users);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, [700]); // Set loading to false once data is fetched (or an error occurs)
      }
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
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
      </div>

      {loading ? (
        <div
          style={{ display: "flex", justifyContent: "center", height: "100vh" }}
        >
          <Vortex
            visible={true}
            height={80}
            width={80}
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={["red", "green", "blue", "yellow", "orange", "purple"]}
          />
        </div>
      ) : (
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
      )}

      {selectedUser && (
        <UserModal
          user={selectedUser}
          onClose={handleCloseModal}
          onGenerateReport={handleGenerateReport}
        />
      )}
    </div>
  );
};

export default UserDetailsTab;
