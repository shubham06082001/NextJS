import Link from "next/link";
import AddToCart from "./components/AddToCart";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <AddToCart />
      <hr />
      <Link href="/users">Users</Link>
      <hr />
      <Link href="/users/new">New Users.</Link>
    </>
  );
}
