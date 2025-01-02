import React, { useState } from "react";
import EditUser from "./EditUser";
function List({ users, updateUser, deleteUser ,selectedUsers, handleCheckboxChange, handleSelectAll }) {
  // display the list accepted by the props
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleClick = (user) => {
    if (user) {
      setShowModal(true);
      setSelectedUser(user);
    } else {
      setShowModal(false);
      return;
    }
  };


  return (
    <div className="tableList">
      <table>
        <thead>
          <tr>
            <th>
            <input
                type="checkbox"
                onChange={handleSelectAll}
                checked={selectedUsers.length === users.length && users.length > 0}
              />

            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
              <input
                  type="checkbox"
                  checked={selectedUsers.includes(user.id)}
                  onChange={() => handleCheckboxChange(user.id)}
                  aria-labelledby={user.id}
                />
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td className="list-action-btns">
                <button aria-labelledby={user.id} onClick={() => handleClick(user)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg></button>
                <button onClick={() => deleteUser(user)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fc4a4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-trash"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg></button>
              </td>
            </tr>
          ))}
          <tr style={{height: '100%'}}>
            <td></td>
          </tr>
        </tbody>
      </table>
      {selectedUser && <EditUser
        showModal={showModal}
        setShowModal={setShowModal}
        selectedUser={selectedUser}
        updateUser={updateUser}
      />}
    </div>
  );
}

export default List;
