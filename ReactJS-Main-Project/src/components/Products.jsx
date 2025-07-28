import React, { useEffect, useState } from "react";
import axios from "axios";
import { data } from "react-router";
import ProductCard from "./ProductCard";
import { toast } from "react-toastify";

const Products = () => {
  const [fetchedData, setfetchData] = useState([]);
  const [loading, setloading] = useState(false);

  const fetchedDataFromServer = async () => {
    setloading(true);
    try {
      const res = await axios.get(" http://localhost:3000/products");
      setfetchData(res.data);
      toast.success("Data Fetched Successful !", {
        position: "bottom-right",
      });
      setloading(false);
    } catch (error) {
      console.log(error);
      toast.error("Data not Found!", {
        position: "bottom-right",
      });
    }
  };

  useEffect(() => {
    fetchedDataFromServer();
  }, []);

  return (
    <div className="container mt-5">
      <h1>Products</h1>
      <div className="d-flex justify-content-center flex-wrap">
        {loading ? (
          <h1 className="text-danger">Loading</h1>
        ) : (
          fetchedData.map((el) => <ProductCard key={el.id} {...el} />)
        )}
      </div>
    </div>
  );
};

export default Products;
Products;
