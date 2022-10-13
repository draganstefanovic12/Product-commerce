import { useNavigate, useParams } from "react-router-dom";

type PaginationProps = {
  total: number;
  query: string;
};

const Pagination = ({ query, total }: PaginationProps) => {
  const navigate = useNavigate();
  const { offset } = useParams();
  const pages = Math.floor(total / 18) + 1;

  return total > 18 ? (
    <ul className="flex gap-2  place-content-center">
      {[...Array(pages).keys()].map((number, i) => (
        <li
          className={`${
            i === parseInt(offset!) && "bg-gray-200"
          } px-2 rounded cursor-pointer`}
          key={i}
          onClick={() => navigate(`${query}${i}`)}
        >
          {number + 1}
        </li>
      ))}
    </ul>
  ) : (
    <div></div>
  );
};

export default Pagination;
