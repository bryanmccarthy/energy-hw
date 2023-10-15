
function App() {
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
