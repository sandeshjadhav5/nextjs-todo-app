import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-evenly p-4 bg-red-100">
      <div>
        <Link href="/">Home</Link>
      </div>

      <Link href="/routingDemo/two">Two</Link>
      <Link href="/routingDemo/one">One</Link>
      <Link href="/routingDemo/:id">Id</Link>
      <Link href="/listOfPosts">Posts</Link>
      <Link href="/two">Two</Link>
    </div>
  );
}
