import { useState, useEffect } from "react";
import { Banner, UserItem } from "../../components/modules";

function UserList() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://reqres.in/api/users?page=2")
        .then((response) => response.json())
        .then((result) => setUserList(result.data));
    };
    fetchData();
  }, []);

  return (
    <>
      <main>
        <Banner />
        <div className="container">
          <h2>User Latest</h2>
          <ul className="row">
            {userList.map((user) => (
              <li className="col-3" key={user.id}>
                <UserItem user={user} />
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default UserList;
