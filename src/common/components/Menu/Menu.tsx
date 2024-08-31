import Link from "next/link";

export const Menu = () => {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="contact">Contact</Link>
      </li>
    </ul>
  );
};

export default Menu;
