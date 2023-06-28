import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-evenly p-4 bg-red-100">
      <div>
        <Link href="/one">One</Link>
      </div>

      <Link href="/two">Two</Link>
      <Link href="/one">One</Link>
      <Link href="/two">Two</Link>
      <Link href="/one">One</Link>
      <Link href="/two">Two</Link>
    </div>
  );
}
