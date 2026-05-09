const UserDetails = async ({ params }) => {
  const { usersId } = await params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${usersId}`,
  );
  const user = await res.json();

  return (
    <div>
      <h2>User Details are coming</h2>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};

export default UserDetails;
