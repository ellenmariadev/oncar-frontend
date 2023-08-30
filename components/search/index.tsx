import { SearchIcon } from "@/assets/search";
import S from "./styles.module.scss";

const SearchBar = ({ onSearch, query, setQuery }: any) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    onSearch(searchTerm);
    setQuery(searchTerm);
  };

  return (
    <div className={S.group}>
      <SearchIcon className={S.icon} />
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        id="search"
        className={S.searchbar}
        placeholder="Digite o modelo ou uma marca"
      />
    </div>
  );
};

export default SearchBar;
