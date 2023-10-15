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
      <div className="flex p-4 justify-center">
        <form action="http://localhost:8080/upload" method="POST" encType="multipart/form-data">
          <input type="file" name="file" className="bg-slate-300 mr-4 p-2 rounded-lg" />
          <button type="submit" className="border-2 p-2 px-6 rounded-lg bg-slate-300">Upload</button>
        </form>
      </div>

      <div className="flex justify-center mt-6">
        <h1 className="font-bold text-xl">Uploaded PDF's</h1>
      </div>

      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}

      <div className="flex flex-wrap p-4">
        <div className="border-2 h-32 w-28 flex justify-center items-center rounded-lg m-4 bg-gray-200">
          {pdfs.map(pdf => (
            <div key={pdf}>{pdf}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
