// import Image from "next/image";

// export default function Home() {
//   return (
//     <h1>test</h1>
//   );
// }

type User = {
  message: string;
};

const fetchUser = async (path: string): Promise<User> => {
  const response = await fetch(path);
  const data = await response.json();

  return {
    message: data.message
  };
};

export default async function Home() {
  const user = await fetchUser("http://localhost:8080/");

  return <p>{user.message}</p>
}
