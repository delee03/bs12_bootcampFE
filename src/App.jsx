import { useState } from "react";
import BaiTap1Car from "./components/BaiTap1Car";
import CardComponent1 from "./components/CardComponent1";
import CardComponent2 from "./components/CardComponent2";
import ContentComponent from "./components/ContentComponent";
import DemoBinding from "./components/DemoBinding";
import DemoCss from "./components/DemoCss/DemoCss";
import DemoCssModule from "./components/DemoCss/DemoCssModule";
import DemoShoeShop from "./components/DemoShoeShop";
import DemoState from "./components/DemoState";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import NavComponent from "./components/NavComponent";
import BaiTap1CatProps from "./components/BaiTap1CatProps";
import BTDienThoai from "./components/BTDienThoai/BTDienThoai";
import DienThoaiItem from "./components/BTDienThoai/DienThoaiItem";

function App() {
    //hook
    const [count, setCount] = useState(1);

    function updateStateCount() {
        setCount(count + 1);
    }

    return (
        <>
            {/* <div>Đây là dự án React đầu tiên của tôi</div>; */}
            {/* <HeaderComponent />
           
            <NavComponent />
            <ContentComponent />
            <div className="container">
                <div className=" flex justify-between items-center">
                    <CardComponent1 />
                    <CardComponent2 />
                </div>
            </div>
            <FooterComponent />
            <DemoBinding />
            <DemoShoeShop />
            <DemoCss />
            <DemoCssModule />
            <div className="demoSass">
                <h3 className="title">Hôm nay là ngày đầu tuần</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint eligendi sit non soluta amet numquam officiis iusto
                    distinctio quas obcaecati.
                </p>
                <input
                    onChange={(e) => {
                        console.log(e.target.value);
                    }}
                    className="px-2 py-5 bg-red-500 rounded-md"
                />
            </div>
            <div className="container">
                <DemoState />
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br /> */}
            {/* Props  */}
            {/* <BaiTap1Car
                count={count}
                title={"Hello tháng 11"}
                updateCount={updateStateCount}
            /> */}
            <BaiTap1CatProps />

            <BTDienThoai />
        </>
    );
}

export default App;
