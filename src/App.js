import { useEffect, useState } from "react";
import image1 from "./images/image1.jpg";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTrem] = useState("flowers"); //검색어

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`
    )
      .then((res) => res.json()) //요청결과를 JS로 변환
      .then((data) => setImages(data.hits)) //데이터 출력
      .catch((err) => console.log(err)); //에러발생시 에러출력
  }, []);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image1} alt="Photo" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by John Doe
        </div>
        <ul>
          <li>
            <strong>Views: </strong> 4000
          </li>
          <li>
            <strong>Downloads: </strong> 300
          </li>
          <li>
            <strong>Likes: </strong> 400
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag1
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag2
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag3
        </span>
      </div>
    </div>
  );
}

export default App;
