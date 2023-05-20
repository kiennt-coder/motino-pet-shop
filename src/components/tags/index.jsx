import { TagText, TagWrapper } from "./styled";

function Tags({ children, title, ...props }) {
    return (
        <TagWrapper>
            <TagText
                tagName="span"
                className="body--xs font-weight-bold"
                title={title}
            >
                {children}
            </TagText>
        </TagWrapper>
    );
}

export default Tags;
