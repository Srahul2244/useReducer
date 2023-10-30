import React from "react";

const Users = ({ userList }) => {
  const sortedUsers = userList.sort((a, b) =>
    a.lastname.localeCompare(b.lastname)
  );

  return (
    <div>
      {sortedUsers.map((user, index) => (
        <div key={index}>
          {user.count !== 0 ? (
            <div>
              <ul>
                <li>
                  {user.firstname}
                  {user.lastname}
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Users;
