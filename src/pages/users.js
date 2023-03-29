export default function Users({ users }) {
  return (
    <>
      <h1>List of Users</h1>
      {users.map((users) => {
        return (
          <div key={users.id}>
            <h3>{users.name}</h3>
            <p>{users.email}</p>
            <p>{users.website}</p>
          </div>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
  return {
    props: {
      users: data,
    },
  };
}
