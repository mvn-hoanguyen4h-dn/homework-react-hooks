function UserItem({ user }) {
  return (
    <div className="user-item">
      <img src={user.avatar} alt={user.first_name} />
      <h5>{user.first_name + " " + user.last_name}</h5>
      <p>{user.email}</p>
      <button>Read more</button>
    </div>
  );
}

export default UserItem;
