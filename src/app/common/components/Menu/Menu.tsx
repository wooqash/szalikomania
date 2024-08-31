import Link from "next/link";

export const Menu = () => {
  return (
    <ul>
      <li>
        <Link href="/"></Link>
      </li>
      <li>
        <Link href="contact"></Link>
      </li>
    </ul>
  );
};

export default Menu;
