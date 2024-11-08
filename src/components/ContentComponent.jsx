import CardComponent1 from "./CardComponent1";
import CardComponent2 from "./CardComponent2";

const ContentComponent = () => {
    return (
        <div className="bg-sky-500 h-60 text-center ">
            Đây là Content of Page
            <div className="flex items-center justify-center">
                <CardComponent1 />
                <CardComponent2 />
            </div>
        </div>
    );
};
export default ContentComponent;
