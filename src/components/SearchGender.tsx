export default function SearchGender({ handleChange }: { handleChange: any }) {
  return (
    <select
      onChange={(e) => {
        handleChange(e);
      }}
      className="form-select"
      aria-label="Default select example"
    >
      <option defaultValue={""}>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  );
}
