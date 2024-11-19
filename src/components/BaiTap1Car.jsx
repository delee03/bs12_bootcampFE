import React, { useState } from "react";
import hinhAnh from "../assets/black-car.jpg";

const BaiTap1Car = (props) => {
    console.log(props.count);
    console.log(props.title);
    const [carImage, setCarImage] = useState("black-car.jpg");
    const arrButton = [
        {
            icon: "./public/CarBasic/icons/icon-black.jpg",
            title: "Crystal Black",
            subtitle: "Pearl",
            carImage: "black-car.jpg",
        },
        {
            icon: "./public/CarBasic/icons/icon-red.jpg",
            title: "Rylle Red",
            subtitle: "Pearl",
            carImage: "red-car.jpg",
        },
        {
            icon: "./public/CarBasic/icons/icon-silver.jpg",
            title: "Luna Silver",
            subtitle: "Pearl",
            carImage: "silver-car.jpg",
        },
        {
            icon: "./public/CarBasic/icons/icon-steel.jpg",
            title: "Modern Steel",
            subtitle: "Pearl",
            carImage: "steel-car.jpg",
        },
    ];
    return (
        <div className="container mt-8">
            <h2 className="bg-sky-500 text-white">
                Demo về props : {props.title} {props.count}
            </h2>

            <button
                onClick={() => {
                    props.updateCount();
                }}
                className="mt-5 px-5 py-2 rounded-lg bg-green-500"
            >
                Tăng số đếm +1
            </button>

            {/* <img src={"./public/CarBasic/products/black-car.jpg"} alt="" />
            <img src={hinhAnh} alt="" /> */}
            <h2 className="text-center text-sky-500 text-3xl font-bold mt-10">
                Bài tập Chọn Xe
            </h2>
            <div className="flex mt-10 items-center space-x-10">
                <div className="w-2/3">
                    <img
                        src={`./public/CarBasic/products/${carImage}`}
                        alt=""
                    />
                </div>
                <div className="w-1/3 space-y-8 border-2 border-black p-5 rounded-lg">
                    {arrButton.map((item, index) => {
                        return (
                            <button
                                key={index}
                                onClick={() => {
                                    setCarImage(item.carImage);
                                }}
                                className="border border-slate-500 px-8 py-3 rounded-xl flex justify-between items-center space-x-5"
                            >
                                <img width={50} src={item.icon} alt="" />
                                <div>
                                    <h4>{item.title}</h4>
                                    <p>{item.subtitle}</p>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default BaiTap1Car;
