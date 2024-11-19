import React from "react";

const DienThoaiItem = ({ dienThoai }) => {
    //console.log(dienThoai);
    let { name } = dienThoai;
    return (
        <div className="container mt-5">
            <div className="flex items-center justify-between">
                <div className="w-1/3">
                    <img
                        src={
                            dienThoai?.image
                                ? dienThoai.image
                                : "https://cdn-v2.didongviet.vn/files/products/2024/9/2/1/1727855672713_thumb_iphone_16_pro_trang_didongviet.jpg"
                        }
                        className="w-full h-full"
                        alt=""
                    />
                </div>
                <div className="w-2/3">
                    <h3 className="font-semibold text-orange-500 text-2xl">
                        Thông số kĩ thuật
                    </h3>
                    <table border={2} cellPadding={15}>
                        <tr>
                            <td>Tên điện thoại: {name}</td>
                        </tr>
                        <tr>
                            <td>Hệ điều hành: {dienThoai?.os}</td>
                        </tr>
                        <tr>
                            <td>Cam trước: {dienThoai?.front_camera}</td>
                        </tr>
                        <tr>
                            <td>Cam sau: {dienThoai?.rear_camera}</td>
                        </tr>
                        <tr>
                            <td>Ram: {dienThoai?.ram}</td>
                        </tr>
                        <tr>
                            <td>Rom: {dienThoai?.rom}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DienThoaiItem;
