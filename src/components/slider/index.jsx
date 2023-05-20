import { SliderWrapper, SliderBox, SliderItem } from "./styled";

export function Slide({ children, ...props }) {
    return <SliderItem {...props}>{children}</SliderItem>;
}

function Slider({ children, ...props }) {
    return (
        <SliderWrapper>
            <SliderBox {...props}>{children}</SliderBox>
        </SliderWrapper>
    );
}

export default Slider;
