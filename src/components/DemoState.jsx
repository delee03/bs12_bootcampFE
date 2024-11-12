import React, { useState } from "react";

const DemoState = () => {
    const [state, setState] = useState(10);
    const [hoTen, setHoTen] = useState("Đông Dông");

    //const [first, setfirst] = useState(second)

    let diemToan = 9;
    //State áp dụng function component
    //không dùng trong if else và class component
    return (
        <>
            <div>
                <h2>Demo State</h2>
                <p>{state}</p>
                <button
                    onClick={() => {
                        // console.log(state);
                        setState(state + 1);
                    }}
                    className="px-4 py-2 text-white bg-black"
                >
                    Tăng điểm
                </button>
            </div>
            <div>
                <label htmlFor="">Tên học viên</label>
                <input
                    type="text"
                    value={hoTen}
                    onChange={(event) => {
                        setHoTen(event.target.value);
                        console.log(event.target.value);
                    }}
                    className="border-red-700  border-2 py-2 px-6"
                />
            </div>
        </>
    );
};

export default DemoState;
