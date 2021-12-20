import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGif";

export const useFecthGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGif(category).then((img) => {
      setState({
        data: img,
        loading: false,
      });
    });
  }, [category]);

  return state;
};
