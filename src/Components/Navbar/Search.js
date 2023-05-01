import { Icon } from "Icons";

const Search = () => {
  return (
    <div className="mr-auto ml-4  relative">
      <label
        htmlFor="search-input"
        className="text-black w-12 h-10 flex items-center justify-center absolute top-0 left-0"
      >
        <Icon name="search" size={24} />
      </label>
      <input
        autoFocus={true}
        type="text"
        id="search-inut"
        className="h-10 bg-white pl-12 rounded-3xl outline-none text-black font-medium placeholder-black/60 max-w-full w-[22.75rem] text-sm "
        placeholder="Ne Dinlemek İstiyorsun?"
      />
    </div>
  );
};

export default Search;
