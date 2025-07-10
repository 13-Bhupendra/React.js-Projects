import { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ShowDataList() {
  const [fetchData, setfetchData] = useState([]);
  const [loading, setloading] = useState(null);
  const [error, seterror] = useState("");
  const [pageCount, setPageCount] = useState(1);

  const handleData = async () => {
    setloading(true);
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${pageCount}&_limit=10`
      );
      setfetchData(res.data);
      setloading(false);
    } catch (error) {
      console.log(error.message);
      seterror(error.message);
      setloading(false);
    }
  };

  useEffect(() => {
    handleData();
  }, [pageCount]);

  return (
    <div>
      <h1 className="text-center mb-3 mt-3">Product Page</h1>

      {loading ? (
        <h3 className="text-danger text-center">Loading...</h3>
      ) : error ? (
        <h3 className="text-danger text-center">{error}</h3>
      ) : (
        fetchData.map((el, i) => (
          <div className="container">
            <div className="card bg-dark text-light p-3 m-2">
              <h3>{el.id}</h3>
              <h5 className="card-title text-primary">{el.title}</h5>
              <p>{el.body}</p>
            </div>
          </div>
        ))
      )}

      <div className="d-flex justify-content-center m-3">
        <button
          disabled={pageCount == 1}
          onClick={() => setPageCount(pageCount - 1)}
          className="btn btn-outline-primary"
        >
          Prev
        </button>
        <span className="m-2">{pageCount}</span>
        <button
          disabled={pageCount == fetchData.length}
          onClick={() => setPageCount(pageCount + 1)}
          className="btn btn-outline-primary"
        >
          Next
        </button>
      </div>
    </div>
  );
}
