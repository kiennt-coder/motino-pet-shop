import Tags from "../tags";
import {
    PostBanner,
    PostCategory,
    PostContent,
    PostSummary,
    PostTitle,
    PostWrapper,
} from "./styled";

function Post({ src, title, content, cagegory = [], ...props }) {
    return (
        <PostWrapper className="box-shadow">
            <PostBanner src={src} title={title}></PostBanner>

            <PostContent>
                <PostCategory>
                    {cagegory.map((cate, index) => (
                        <Tags key={index}>{cate.text}</Tags>
                    ))}
                </PostCategory>

                <PostTitle
                    level={3}
                    title={title}
                    className="body--xl text-align-left"
                >
                    {title}
                </PostTitle>

                <PostSummary className="body--md text-align-left">
                    {content}
                </PostSummary>
            </PostContent>
        </PostWrapper>
    );
}

export default Post;
