import { useEffect, useState } from "react";
import "./masonry.css";

export default function Masonry({ data }) {
  // console.log(data.photos);
  // console.log(data);
  // const [dataCheck, setDataCheck] = useState(false);
  const [localData, setLocalData] = useState();

  const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
        "random",
      )}&client_id=${ACCESS_KEY}&per_page=30`,
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setLocalData(res.results);
      });
  }, []);

  if (!Array.isArray(data) || data.length === 0) {
    return (
      <div className='main'>
        <div className='masonry'>
          {/* <p>No photos yet</p> */}
          {Array.isArray(localData)
            ? localData.map((ele, i) => (
                <img key={i} src={ele.urls.regular} alt='' className='img' />
              ))
            : ""}
        </div>
      </div>
    );
  }

  return (
    <div className='main'>
      <div className='masonry'>
        {data.map((ele, i) => (
          <img key={i} src={ele.urls.regular} alt='' className='img' />
        ))}
      </div>
    </div>
  );
}
