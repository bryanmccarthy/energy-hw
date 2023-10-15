import { useState } from "react";
import { useQuery } from "react-query";

function App() {
  const [pdfs, setPdfs] = useState([]);

  const fetchFiles = async () => {
    const res = await fetch("http://localhost:8080/pdfs");
    const data = await res.json();
    setPdfs(data.files);
  }

  const downloadPdf = async (filename) => {
    const res = await fetch(`http://localhost:8080/download/${filename}`);
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.setAttribute("download", filename);
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  const { isLoading, error, data } = useQuery("pdfs", () => fetchFiles());

  return (
    <div>
      <div className="flex p-4 justify-center border-b-4">
        <form action="http://localhost:8080/upload" method="POST" encType="multipart/form-data">
          <input type="file" name="file" className="bg-slate-300 mr-4 p-2 rounded-lg" />
          <button type="submit" className="border-2 p-2 px-6 rounded-lg bg-slate-300">Upload</button>
        </form>
      </div>

      <div className="flex justify-center mt-6">
        <h1 className="text-xl">PDF's</h1>
      </div>

      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}

      <div className="flex flex-wrap p-4">
        {pdfs?.map((pdf) => (
          <div className="flex flex-col justify-center items-center m-4">
            <div key={pdf} className="border-2 h-40 w-40 flex justify-center items-center rounded-lg m-2 bg-gray-200">
              {pdf}
            </div>
            <button onClick={() => downloadPdf(pdf)} className="border-2 p-2 w-40 rounded-lg bg-slate-300">Download</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
