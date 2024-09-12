import Link from "next/link";
import { FC } from "react";

type PaginationProps = {
  page: number;
  total: number;
  perPage: number;
};

const Pagination: FC<PaginationProps> = ({ page, total, perPage }) => {
  const isNextPage = (page + 1) * perPage < total;
  return (
    <ul>
      {page > 1 && <Link href={`/widzew-lodz?page=${page - 1}`}>Prev</Link>}
      <p> page: {page}</p>
      {isNextPage && <Link href={`/widzew-lodz?page=${page + 1}`}>Next</Link>}
    </ul>
  );
};

export default Pagination;
