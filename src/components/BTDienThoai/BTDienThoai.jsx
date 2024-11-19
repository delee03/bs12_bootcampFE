import React, { useState } from "react";
import DanhSachDienThoai from "./DanhSachDienThoai";
import DienThoaiItem from "./DienThoaiItem";

const arrDienThoai = [
    {
        image: "https://cdn-v2.didongviet.vn/files/products/2023/8/29/1/1695953606803_thumb_iphone_15_pro_didongviet.jpg",
        name: "iPhone 15 Pro Max",
        os: "iOS 17",
        front_camera: "12MP",
        rear_camera: "48MP (Chính), 12MP (Ultra Wide), 12MP (Telephoto 5x)",
        ram: "8GB",
        rom: "256GB, 512GB, 1TB",
    },
    {
        image: "https://cdn-v2.didongviet.vn/files/products/2023/8/29/1/1695953303071_thumb_iphone_15_didongviet.jpg",
        name: "iPhone 15 Pro",
        os: "iOS 17",
        front_camera: "12MP",
        rear_camera: "48MP (Chính), 12MP (Ultra Wide), 12MP (Telephoto 3x)",
        ram: "8GB",
        rom: "128GB, 256GB, 512GB, 1TB",
    },
    {
        image: "https://cdn-v2.didongviet.vn/files/products/2024/9/2/1/1727855468669_thumb_iphone_16_pro_didongviet.jpg",
        name: "iPhone 16 Plus",
        os: "iOS 17",
        front_camera: "12MP",
        rear_camera: "48MP (Chính), 12MP (Ultra Wide)",
        ram: "6GB",
        rom: "128GB, 256GB, 512GB",
    },
    {
        image: "https://cdn-v2.didongviet.vn/files/products/2024/9/2/1/1727854642416_thumb_iphone_16_didongviet.jpg",
        name: "iPhone 16",
        os: "iOS 17",
        front_camera: "12MP",
        rear_camera: "48MP (Chính), 12MP (Ultra Wide)",
        ram: "6GB",
        rom: "128GB, 256GB, 512GB",
    },
    {
        image: "https://cdn-v2.didongviet.vn/files/products/2024/9/2/1/1727855077401_thumb_iphone_16_plus_didongviet.jpg",
        name: "iPhone 16 Pro Max",
        os: "iOS 16",
        front_camera: "12MP",
        rear_camera: "48MP (Chính), 12MP (Ultra Wide), 12MP (Telephoto 3x)",
        ram: "6GB",
        rom: "128GB, 256GB, 512GB, 1TB",
    },
    {
        image: "https://cdn-v2.didongviet.vn/files/products/2024/9/2/1/1727855672713_thumb_iphone_16_pro_trang_didongviet.jpg",
        name: "iPhone 16 Pro",
        os: "iOS 16",
        front_camera: "12MP",
        rear_camera: "48MP (Chính), 12MP (Ultra Wide), 12MP (Telephoto 3x)",
        ram: "6GB",
        rom: "128GB, 256GB, 512GB, 1TB",
    },
];

const BTDienThoai = () => {
    const [dienThoai, setDienThoai] = useState(arrDienThoai[0]);

    function updateDienThoai(dienThoai) {
        setDienThoai(dienThoai);
    }
    return (
        <div className="container">
            <h2>Bài tập hiển thị điện thoại</h2>
            <div className="grid grid-cols-3 gap-5">
                <DanhSachDienThoai
                    arrDienThoai={arrDienThoai}
                    updateDienThoai={updateDienThoai}
                />
                {/* Nhiệm vụ: render mảng điện thoại ở trên thành 3 item / dòng 2p */}
            </div>
            <DienThoaiItem dienThoai={dienThoai} />
        </div>
    );
};

export default BTDienThoai;
