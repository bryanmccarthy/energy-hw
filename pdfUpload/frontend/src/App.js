import { useState } from "react";
import { useQuery } from "react-query";

function App() {
  const [pdfs, setPdfs] = useState([]);

  const fetchFiles = async () => {
    const res = await fetch("http://localhost:8080/pdfs");
    const data = await res.json();
    setPdfs(data.files);
  }

  const { isLoading, error, data } = useQuery("pdfs", () => fetchFiles());

  return (
    <div className="">
      <form action="http://localhost:8080/upload" method="POST" encType="multipart/form-data">
        <input type="file" name="file" />
        <button type="submit">Upload</button>
      </form>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
        <div>
          {pdfs.map(pdf => (
            <div key={pdf}>{pdf}</div>
          ))}
        </div>
    </div>
  );
}

export default App;
