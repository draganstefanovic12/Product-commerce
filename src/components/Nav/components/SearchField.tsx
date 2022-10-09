import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../Input";
import search from "../../../assets/images/search.svg";

const SearchField = () => {
  const [value, setValue] = useState<string>("");
  const navigate = useNavigate();

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleNavigate = () => {
    if (value!.length === 0) return;
    navigate(`/search/${value}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (value!.length === 0) return;
    e.key === "Enter" && navigate(`/search/${value}`);
  };

  return (
    <div>
      <div className="relative w-56">
        <Input
          value={value}
          placeholder="Search..."
          className="h-6 w-56 bg-gray-100"
          onChange={handleValue}
          onKeyDown={handleKeyPress}
        />
        <img
          src={search}
          onClick={handleNavigate}
          alt="search-icon"
          className="absolute top-1 h-4 right-2"
        />
      </div>
    </div>
  );
};

export default SearchField;
