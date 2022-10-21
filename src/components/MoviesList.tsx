import { useEffect } from "react";
import { useState } from "react";
import { Movie } from "../models/Movie";
import api from "../api.json";
import axios from "axios";
import MovieItem from "./MovieItem";
import SearchBar from "./SearchBar";
import SearchGender from "./SearchGender";

export default function MoviesList() {
  let [movies, setMovies] = useState<Movie[]>([]);
  let [search, setResearch] = useState("");
  let [gender, setGender] = useState("");
  let item = {
    title: "Cat",
    description: "Some description",
  };

  let handleChangeSearchBar = (e: any) => {
    setResearch(e.target.value);
  };
  let handleChangeGender = (e: any) => {
    console.log(e.target.value);
    // setGender(e.target.value);
  };
  useEffect(() => {
    axios("https://moviedatabaseapi.azurewebsites.net/api/movies", {
      headers: { "Access-Control-Allow-Origin": "*" },
    }).then((response) => {
      console.log(response);
    });
  }, []);
  return (
    <section>
      <div className="d-flex search">
        <SearchBar handleChange={handleChangeSearchBar} />
        <SearchGender handleChange={handleChangeGender} />
      </div>
      <div className="movies-list">
        {[...Array(10)].map((x, i) => {
          return <MovieItem item={{ ...item, id: i }} />;
        })}
      </div>
    </section>
  );
}
