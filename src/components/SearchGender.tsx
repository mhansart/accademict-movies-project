import api from "../api.json";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
export default function SearchGender({ handleChange }: { handleChange: any }) {
  let [genres, setGenres] = useState([]);
  useEffect(() => {
    axios(api.URL + "genres", {
      headers: { "Access-Control-Allow-Origin": "*" },
    }).then((response) => {
      setGenres(response.data);
    });
  }, []);
  let onChangeGender = (e: any) => {
    let i = genres.filter((x: any) => x.id === Number(e.target.value));
    if (i.length >= 1) {
      handleChange(i[0]);
    } else {
      handleChange({ name: "", id: "" });
    }
  };
  return (
    <select
      onChange={(e) => {
        onChangeGender(e);
      }}
      className="form-select"
      aria-label="Default select example"
    >
      <option defaultValue={""}>Gender</option>
      {genres.map((x: any, i) => {
        return <option value={x.id}>{x.name}</option>;
      })}
    </select>
  );
}
