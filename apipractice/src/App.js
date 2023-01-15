import "./App.css";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageListCopy from "./components/ImageListCopy";
import { useState } from "react";
function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);

    setImages(result);
  };
  return (
    <div className="container">
      <h1>Search for your favourite pictures</h1>
      <SearchBar onSubmit={handleSubmit} />
      <ImageListCopy images={images} />
    </div>
  );
}

export default App;
