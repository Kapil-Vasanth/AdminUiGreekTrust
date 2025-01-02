import { useEffect, useState } from "react";
import favLogo from "/favLogo.svg";
import "./App.css";
import List from "./components/List";
import usersData from "./users.json";
import Pagination from "./components/Pagination";
import Search from "./components/Search";

function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState(usersData);
  const [filteredData, setFilteredData] = useState(users);
  const [paginatedData, setPaginatedData] = useState(usersData);
  const [pagination, setPagination] = useState(0);
  const [filterNameEmailRole, setFilterNameEmailRole] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]); // State for selected user IDs

  useEffect(() => {
    if (filterNameEmailRole === "") {
      setFilteredData(users);
    } else {
      setFilteredData(
        users.filter((user) => {
          if (
            user.name
              .toLowerCase()
              .includes(filterNameEmailRole.toLowerCase()) ||
            user.email
              .toLowerCase()
              .includes(filterNameEmailRole.toLowerCase()) ||
            user.role.toLowerCase().includes(filterNameEmailRole.toLowerCase())
          ) {
            return user;
          }
        })
      );
    }

    setPagination(0);
  }, [filterNameEmailRole, users]);

  useEffect(() => {
    setPaginatedData(filteredData.slice(pagination * 10, pagination * 10 + 10));
  }, [users, pagination, filterNameEmailRole, filteredData]);

  const deleteUser = (user) => {
    setUsers(() => {
      const updatedUsers = users.filter((_u) => _u.id !== user.id);
      return updatedUsers;
    });
  };

  const updateUser = (user) => {
    setUsers((prevState) => {
      return prevState.map((existingUser) =>
        existingUser.id === user.id
          ? { ...existingUser, ...user }
          : existingUser
      );
    });
  };

  // Toggle a single checkbox
  const handleCheckboxChange = (userId) => {
    setSelectedUsers(
      (prevSelected) =>
        prevSelected.includes(userId)
          ? prevSelected.filter((id) => id !== userId) // Uncheck
          : [...prevSelected, userId] // Check
    );
  };
  // Select all checkboxes
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedUsers(paginatedData.map((user) => user.id)); // Select all IDs
    } else {
      setSelectedUsers([]); // Deselect all
    }
  };
  // Delete selected users
  const handleDeleteSelected = () => {
    setUsers((prevUsers) =>
      prevUsers.filter((user) => !selectedUsers.includes(user.id))
    );
    setSelectedUsers([]); // Clear selected users
  };

  return (
    <>
      {/* Search Component ie the filter component */}
      <Search setFilterNameEmailRole={setFilterNameEmailRole} />
      {/* list component */}
      <List
        users={paginatedData}
        updateUser={updateUser}
        deleteUser={deleteUser}
        selectedUsers={selectedUsers}
        setSelectedUsers={setSelectedUsers}
        handleCheckboxChange={handleCheckboxChange}
        handleSelectAll={handleSelectAll}
        handleDeleteSelected={handleDeleteSelected}
      />
      {/* pagination component */}
      <Pagination
        pagination={pagination}
        totalUsers={filteredData.length}
        setPagination={setPagination}
        handleDeleteSelected={handleDeleteSelected}
      />
    </>
  );
}

export default App;
