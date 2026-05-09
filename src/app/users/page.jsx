import Link from "next/link";

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return (
    <div>
      <h1>This is user Page</h1>
      <div className="grid grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user.id} className="card bg-info text-primary-content w-96">
            <div className="card-body">
              <h2 className="card-title">{user.name}!</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <Link href={`/users/${user.id}`}>
                  <button className="btn">Show Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
