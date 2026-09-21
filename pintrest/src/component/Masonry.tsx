import { useEffect, useState } from "react";
import "./masonry.css";

export default function Masonry({ data }) {
  // console.log(data.photos);
  console.log(data);
  // const [dataCheck, setDataCheck] = useState(false);

  if (!Array.isArray(data) || data.length === 0) {
    return (
      <div className='main'>
        <div className='masonry'>
          <p>No photos yet</p>
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
