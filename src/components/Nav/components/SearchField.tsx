import { User } from "../../../features/user/types/types";
import { Product } from "../../../features/products/types";
import { useQuery } from "react-query";
import { handleSearch } from "../../../api/userApi";
import { useEffect, useRef, useState } from "react";
import Input from "../../Input";
import search from "../../../assets/images/search.svg";
import useDebounce from "../../../hooks/useDebounce";
import ClickAwayListener from "../../ClickAwayListener/ClickAwayListener";
import SearchResultsUser from "./SearchResultsUser";
import SearchResultsProduct from "./SearchResultsProduct";

const SearchField = () => {
  const [value, setValue] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const debounce = useDebounce(value);
  const { data: results } = useQuery(["debounce", debounce], () => {
    return handleSearch(debounce);
  });

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleOpenSearch = () => {
    setIsOpen(true);
  };

  //Using this ref for clickawaylistener and on the main div to open search results again on input field click
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpen(true);
  }, [results]);

  return (
    <div onClick={handleOpenSearch}>
      <div ref={divRef} className="relative w-56">
        <Input className="h-6 w-56 bg-gray-100" onChange={handleValue} />
        <img
          src={search}
          alt="search-icon"
          className="absolute top-1 h-4 right-2"
        />
      </div>
      <ClickAwayListener divRef={divRef} setIsOpen={setIsOpen} isOpen={isOpen}>
        {results && (
          <ul className="bg-white w-56 rounded-b child-hover:bg-gray-50 absolute p-2">
            {results.map((result: User & Product) =>
              result.username ? (
                <SearchResultsUser user={result} />
              ) : (
                <SearchResultsProduct product={result} />
              )
            )}
          </ul>
        )}
      </ClickAwayListener>
    </div>
  );
};

export default SearchField;
