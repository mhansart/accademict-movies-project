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
  let [idGender, setIdGender] = useState("");

  let handleChangeSearchBar = (e: any) => {
    setResearch(e.target.value);
    searchRequest({
      name: e.target.value,
      gender: gender,
      genderId: idGender,
    });
  };
  let handleChangeGender = (e: any) => {
    setGender(e.name);
    setIdGender(e.id);
    searchRequest({ gender: e.name, name: search, genderId: e.id });
  };

  let searchRequest = (v: any) => {
    console.log(v);
    let url = "";
    if (v.name === "" && v.gender === "") {
      reset();
      return;
    }
    if (v.name !== "" && v.gender !== "") {
      url = api.URL + `movies/filter/tg?name=${v.name}&genre=${v.gender}`;
    } else {
      if (v.gender !== "") {
        url = api.URL + `genres/${v.genderId}`;
      }
      if (v.name !== "") {
        url = api.URL + `movies/filter/t?name=${v.name}`;
      }
    }
    if (url !== "") {
      axios(url).then((response) => {
        console.log(response);
        setMovies(response.data);
      });
    }
  };

  let getMovies = () => {
    axios(api.URL + "movies", {
      headers: { "Access-Control-Allow-Origin": "*" },
    }).then((response) => {
      setMovies(response.data);
    });
  };

  let reset = () => {
    getMovies();
    setGender("");
    setIdGender("");
    setResearch("");
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <section>
      <div className="d-flex search">
        <SearchBar handleChange={handleChangeSearchBar} />
        <SearchGender handleChange={handleChangeGender} />
      </div>
      <div className="movies-list">
        {movies.map((x, i) => {
          return <MovieItem item={x} />;
        })}
      </div>
    </section>
  );
}
