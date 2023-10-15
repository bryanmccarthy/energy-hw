import { useState } from "react";
import { useQuery } from "react-query";

function App() {
  const [pdfs, setPdfs] = useState([]);

  const { isLoading, error, data } = useQuery("pdfs", () =>
    fetch("http://localhost:8080/pdfs").then((res) => console.log(res))
  );

  return (
    <div className="">
      <form action="http://localhost:8080/upload" method="POST" encType="multipart/form-data">
        <input type="file" name="file" />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default App;
