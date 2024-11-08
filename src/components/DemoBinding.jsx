const DemoBinding = () => {
    // Databinding reactjs => number, string, jsx -> object
    const sinhVien = {
        hoTen: "Đình Bảo",
        lop: "FE01",
        tuoi: 18,
    };

    const arrMonAn = [
        {
            tenMon: "Lẩu Manwah",
            giaMon: 500000,
        },
        {
            tenMon: "Lẩu Cá đuối",
            giaMon: 100000,
        },
        {
            tenMon: "Lẩu Cá Kèo",
            giaMon: 200000,
        },
    ];

    return (
        <div className="bg-black py-20">
            <h3 className="text-3xl text-sky-500 ">{sinhVien.hoTen}</h3>
            {sinhVien.tuoi < 18 ? (
                <p className="text-red-500">Chúc mừng, bạn chưa đủ tuổi</p>
            ) : (
                <p className="text-green-500 text-2xl">
                    Chúc mừng, bạn đã đủ tuổi
                </p>
            )}
            {[
                <div className="text-white">Đây là jsx 1 </div>,
                <h2 className="text-white">Đây là jsx 2 với data binding</h2>,
            ]}
            <div className="grid grid-cols-3">
                {arrMonAn.map((item, index) => {
                    return (
                        // Tên món ăn
                        <div className="bg-violet-400 text-center p-3  ">
                            <h3>{item.tenMon}</h3>
                            {/* //giá món */}
                            <p>{item.giaMon}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DemoBinding;
