import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../assets/css/background.css";

const Cart = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="cart-bg">
        <main className="container max-w-5xl mx-auto flex flex-row   ">
          <section className=" basis-[50%] mt-3">
            <h1 className="font-bold text-lg text-white mt-4">
              Checkout your <br />
              item now!
            </h1>
            <div className="bg-white mr-32 p-8 mt-12 text-center shadow-2xl rounded-lg">
              <h1 className="text-[#362115] font-extrabold text-2xl">
                Order Summary
              </h1>
              <div className="flex flex-row justify-between mt-6">
                <img
                  className="mask mask-circle max-w-[20%]"
                  src="https://placeimg.com/200/280/arch"
                  alt="Movie"
                ></img>
                <div classsName="flex flex-col ">
                  <h1 className="font-bold">Cold Brew</h1>
                  <h2>x1 Medium</h2>
                  <h2>x1 Reguler</h2>
                </div>
                <h1 className="self-center"> IDR 34.000</h1>
              </div>
              <div className="flex flex-row justify-between">
                <img
                  className="mask mask-circle max-w-[20%]"
                  src="https://placeimg.com/200/280/arch"
                  alt="Movie"
                ></img>
                <div classsName="flex flex-col">
                  <h1 className="font-bold">Cold Brew</h1>
                  <h2>x1 Medium</h2>
                  <h2>x1 Reguler</h2>
                </div>
                <h1 className="self-center"> IDR 34.000</h1>
              </div>
              <div className="flex flex-row justify-between mt-6">
                <div classsName="flex flex-col">
                  <h1 className="font-bold">SUBTOTAL</h1>
                  <h2 className="font-bold">TAX & FEES</h2>
                  <h2 className="font-bold">SHIPPING</h2>
                </div>
                <div className="flex flex-col">
                  <h1 className="font-bold">IDR 40000</h1>
                  <h1 className="font-bold">IDR 40000</h1>
                  <h1 className="font-bold">IDR 5000</h1>
                </div>
              </div>
              <div className="flex flex-row justify-between mt-6">
                <h1 className="font-extrabold text-lg ">TOTAL</h1>
                <h1 className="font-extrabold text-lg ">IDR 150.0000</h1>
              </div>
            </div>
          </section>

          <section className="  ml-3 basis-[50%] mt-3">
            <div className="flex flex-row mt-20 justify-between mr-40">
              <h1 className="text-white font-bold ">Address details</h1>
              <h1 className="text-white font-bold"> edit </h1>
            </div>
            <div className="bg-white mr-40 mt-3 shadow-2xl rounded-lg p-[1rem]">
              <div classsName="flex flex-col ">
                <h1 className="font-bold border-b-2">
                  Delivery to Iskandar Street
                </h1>
                <h2 className="font-bold border-b-2">
                  Km 5 refinery road oppsite re public road, effurun, Jakarta
                </h2>
                <h2 className="font-bold border-b-2">+62 81348287878</h2>
              </div>
            </div>
            <h1 className="text-white font-bold mt-4 ">Payment method</h1>
            <div className="bg-white mt-3 mr-40 shadow-2xl rounded-lg p-[1rem]">
              <div classsName="flex flex-col">
                <div className="form-control border-b-2">
                  <label className="label cursor-pointer">
                    <input
                      type="checkbox"
                      checked="checked"
                      className="checkbox"
                    />
                    <span className="label-text">Card</span>
                  </label>
                </div>
                <div className="form-control border-b-2">
                  <label className="label cursor-pointer">
                    <input
                      type="checkbox"
                      checked="checked"
                      className="checkbox"
                    />
                    <span className="label-text">Bank account</span>
                  </label>
                </div>
                <div className="form-control border-b-2">
                  <label className="label cursor-pointer">
                    <input
                      type="checkbox"
                      checked="checked"
                      className="checkbox"
                    />
                    <span className="label-text">Cash on delivery</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="text-start mr-[3rem]">
              <button
                type="submit"
                className=" btn btn-primary border border-black w-3/4 my-5 mx-center  py-2 bg-amber-500 hover:bg-amber-400 text-amber-900"
              >
                Confirm and Pay
              </button>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
