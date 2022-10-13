import { useNavigate } from "react-router-dom";

type PaginationProps = {
  total: number;
  query: string;
};

const Pagination = ({ query, total }: PaginationProps) => {
  const navigate = useNavigate();
  const pages = Math.floor(total / 20);

  return total > 20 ? (
    <div>
      {[...Array(pages).keys()].map((number) => (
        <li onClick={() => navigate(`${query}${number}`)}>{number}</li>
      ))}
    </div>
  ) : (
    <div></div>
  );
};

export default Pagination;
