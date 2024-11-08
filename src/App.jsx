import CardComponent1 from "./components/CardComponent1";
import CardComponent2 from "./components/CardComponent2";
import ContentComponent from "./components/ContentComponent";
import DemoBinding from "./components/DemoBinding";
import DemoShoeShop from "./components/DemoShoeShop";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import NavComponent from "./components/NavComponent";

function App() {
    return (
        <>
            <HeaderComponent />
            {/* <div>Đây là dự án React đầu tiên của tôi</div>; */}
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
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    );
}

export default App;
