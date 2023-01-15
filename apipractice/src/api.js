import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID kHL2WpY7fEp_T3H7yjlNnnerEa_RgVzrgsbBQ1vq36M",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
