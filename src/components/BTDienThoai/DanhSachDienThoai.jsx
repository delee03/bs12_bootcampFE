import React from "react";

const DanhSachDienThoai = ({ arrDienThoai, updateDienThoai }) => {
    //console.log(props);
    return (
        <>
            {arrDienThoai.map((item, index) => (
                <div key={index} className="mb-5">
                    {/* hình ảnh */}
                    <img src={item.image} alt="" />
                    {/* name */}
                    <h3>{item.name}</h3>
                    <button
                        onClick={() => {
                            updateDienThoai(item);
                        }}
                        className="px-5 py-2 border border-transparent rounded-xl text-white hover:bg-white hover:border-slate-900 hover:text-black  bg-slate-600"
                    >
                        Xem chi tiết
                    </button>
                </div>
            ))}
        </>
    );
};

export default DanhSachDienThoai;
