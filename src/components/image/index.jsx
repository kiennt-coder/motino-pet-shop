import { ImageSource, ImageWrapper } from "./styled";

function Image({ src, alt, ...props }) {
    return (
        <ImageWrapper>
            <ImageSource src={src} alt={alt} />
        </ImageWrapper>
    );
}

export default Image;
