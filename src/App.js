/* eslint-disable no-unused-vars */
import "./App.css";
import { useEffect, useState } from "react";
import Modal from "./Components/Modal.jsx";

function App() {
  const [loading, setLoading] = useState(true);
  const [pokes, setPokes] = useState([]);
  const [error, setError] = useState("");
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=20");
  const [prevUrl, setPrevUrl] = useState("");
  const [nextUrl, setNextUrl] = useState("");
  const [pokeUrl, setPokeUrl] = useState("");
  const [pokeData, setPokeData] = useState({ types: [], stats: [] });

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await fetch(url, {
          signal: controller.signal,
        });
        const newData = await res.json();
        setError(false);
        setLoading(false);
        setPokes(newData.results);
      } catch (error) {
        if (error.name === "AbortError") {
          setError(error);
          setLoading(false);
        }
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [url]);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      const res = await fetch(pokeUrl, {
        signal: controller.signal,
      });
      const newData = await res.json();
      setPokeData(newData);
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [pokeUrl]);

  return (
    <div className="App">
      <div>{error.message}</div>
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          <div className="flex flex-wrap justify-center">
            {pokes.map((poke, index) => (
              <PokeCard key={index} setPokeUrl={setPokeUrl} poke={poke} />
            ))}
          </div>

          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <label htmlFor="my-modal-4" className="modal cursor-pointer">
            <Modal pokeData={pokeData} />
          </label>
        </>
      )}
    </div>
  );
}

export default App;
