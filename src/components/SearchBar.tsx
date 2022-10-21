export default function SearchBar({ handleChange }: { handleChange: any }) {
  return (
    <div className="input-group">
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="floatingSearch"
          placeholder="Search by title"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <label className="text-black" htmlFor="floatingSearch">
          Search by title
        </label>
      </div>
      <button type="button" className="btn btn-primary">
        <i className="bi bi-search"></i>
      </button>
    </div>
  );
}
