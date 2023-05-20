/**
 * Created by Kiennt
 * User: https://github.com/kiennt-coder
 * Date: 11/12/2022
 * Description: Tạo thành phần bố cục chính (Layout Main)
 * Parameters:
 * Return: Phần tử JSX
 */

import { useEffect } from "react";
import Constants from "./configs/Constants";
import LayoutMain from "./layouts/main";
import "./App.css";

function App() {
    useEffect(() => {
        document.title = Constants.APP_NAME;

        console.log("re-render");
    }, []);

    return <LayoutMain />;
}

export default App;
