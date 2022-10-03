import { useState } from "react";
import Input from "../../Input";
import search from "../../../assets/images/search.svg";

const SearchField = () => {
  const [value, setValue] = useState<string | null>(null);

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <div className="relative w-56">
        <Input
          value={value}
          placeholder="Search..."
          className="h-6 w-56 bg-gray-100"
          onChange={handleValue}
        />
        <img
          src={search}
          alt="search-icon"
          className="absolute top-1 h-4 right-2"
        />
      </div>
    </div>
  );
};

export default SearchField;
