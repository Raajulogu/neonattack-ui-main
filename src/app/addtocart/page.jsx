"use client";
import React, { useEffect, useState } from "react";
import { tailwindfontstyle } from "../../../service";
import { useRouter } from "next/navigation";
import Image from "next/image";
import img from "@/app/sofa.jpeg"

const AddToCart = () => {
  const [data, setData] = useState([]);
  const[totalprice, setTotalPrice] = useState("");
  const[totalquantity, setTotalquantity] = useState("");

  //modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  let router = useRouter()

  useEffect(() => {
    if(data){
      let quantityCount = 0;
      let totalPrice = 0;
      data.map((val) => {
        quantityCount += val.quantity 
        totalPrice += val.price * val.quantity
      });
      setTotalPrice(totalPrice);
      setTotalquantity(quantityCount)
    }
  },[data])
  useEffect(() => {
    let cart = JSON.parse(
      typeof localStorage !== "undefined" && localStorage.getItem("cart")
    );
    setData(cart);
  }, []);

  const handlecontinue = () => {
    router.push("/")
  }
  const decreament = (idx) => {
    let temp = [...data]
    if(temp[idx]["quantity"] >1){
      temp[idx]["quantity"] = temp[idx]["quantity"] - 1
      setData([...temp])
    }

  }
  const increament = (idx) => {
    let temp = [...data]
    temp[idx]["quantity"] = temp[idx]["quantity"] + 1
    setData([...temp])
  }
  const handleRemove = (idx) => {
    let temp = [...data];
    temp.splice(idx, 1);
    setData([...temp]);
    localStorage.setItem("cart", JSON.stringify(temp));
  };

  return (
    <>
      <div className="text-center">
        <h1
          className="text-[#9200f7] text-6xl m-5 tracking-normal m-5"
          style={{ fontFamily: "Eurostile_Extended" }}
        >
          Your cart
        </h1>
        <button onClick={()=>handlecontinue()} className="text-xl ">
          Continue shopping
        </button>
      </div>
      <div class="flex flex-col ">
        <table>
          <thead class="text-white font-bold border-b-2 border-gray-200">
            <tr>
              <th scope="col" class="px-4 py-2 text-left text-xl ">
                PRODUCT
              </th>
              <th scope="col" class="flex items-center px-4 py-2 space-x-2">
                PRICE
              </th>
              <th>QUANTITY</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((val,idx) => (
              <>
              <tr class="text-white font-bold border-b-2 border-gray-200 font-medium"  key={idx}>
              <td class="px-4 py-2 text-left">
                <div className="flex flex-row p-3">
                  <div className="relative w-[200px]">
                    <Image
                      src={img}
                      alt="product"
                      layout="full"
                      objectFit="cover"
                      className="rounded w-[100%]"
                      width={"100%"}
                      height={100}
                    />
                    <p className="absolute inset-0 flex items-center justify-center text-white font-bold bg-black bg-opacity-50">
                    <div
                  id="textOverlay"
                  className={`font-bold text-center flex flex-row ${
                    val.font ? tailwindfontstyle[val.font] : ""
                  }`}
                  style={{
                    fontFamily: val.font,
                    textShadow: `0 0 10px ${val.color}, 0 0 20px ${val.color}, 0 0 30px ${val.color}`,
                  }}>
                    <span>{val.text}</span>
                </div>
                    </p>
                  </div>
                  <div className="p-3">
                    <h4 className="m-3 font-bold">
                      Custom Neon: <span className="ml-2">{val.text}</span>
                    </h4>
                    <p>
                      Text : <span className="ml-2">{val.text}</span>
                    </p>
                    <p>
                      size: <span className="ml-2">{val.size}</span>
                    </p>
                    <p>
                      color: <span className="ml-2">{val.color}</span>
                    </p>
                    <p>
                      font: <span className="ml-2">{val.font}</span>
                    </p>
                    <p>
                      waterproof:
                      <span className="ml-2">{val.waterproof}</span>
                    </p>
                    <p>
                      wireless: <span className="ml-2">{val.wireless}</span>
                    </p>
                    <button onClick={()=>handleRemove(idx)}>Remove</button>
                  </div>
                </div>
              </td>
              <td>₹ {val.price}</td>
              <td>
                <div>
                  <button onClick={()=>decreament(idx)}> - </button>
                  <span> {val.quantity} </span>
                  <button onClick={()=>increament(idx)}>+</button>
                </div>
              </td>
              <td>₹ {val.price * val.quantity}</td>
            </tr>
              </>
            ))}
            
          </tbody>
        </table>
        <div className="flex flex-row flex-wrap justify-end">
        <h1 className="text-right font-bold p-3">
          Total Quantity <span> {totalquantity}</span>
        </h1>
        <h1 className="text-right font-bold p-3">
          Subtotal <span>₹ {totalprice}</span>
        </h1>
        </div>
        {/* <div class="flex justify-end px-4 py-2">
          <button
            onClick={handleOpen}
            class="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-green-500"
          >
            Check Out
          </button>
        </div> */}
      </div>
    </>
  );
};

export default AddToCart;
