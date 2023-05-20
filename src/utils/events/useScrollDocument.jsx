import { useState, useEffect } from "react";

function useScrollDocument(position) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const onScroll = function (event) {
            switch (position) {
                case "x":
                    setValue(window.scrollX || this.documentElement.scrollTop);
                    break;
                case "y":
                    setValue(window.scrollY || this.documentElement.scrollLeft);
                    break;
                default:
                    setValue(0);
                    break;
            }
        };

        document.addEventListener("scroll", onScroll);

        return () => {
            document.removeEventListener("scroll", onScroll);
        };
    }, [position]);

    return [value];
}

export default useScrollDocument;
