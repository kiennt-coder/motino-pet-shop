import { Link } from "react-router-dom";
import { ButtonOutlined } from "../button";
import { ArrowRightOutlined } from "../icon";
import {
    SecitonAction,
    SectionBody,
    SectionFooter,
    SectionHeader,
    SectionHeaderTitle,
    SectionWrapper,
} from "./styled";

function Section({
    title,
    subTitle,
    actionText,
    children,
    layoutTitle,
    to,
    ...props
}) {
    return (
        <SectionWrapper {...props}>
            <SectionHeader>
                <SectionHeaderTitle layout={layoutTitle}>
                    <span className="body--xl font-weight-normal neutral-color-100 section__sub-title">
                        {subTitle}
                    </span>
                    <p className="heading--xs font-weight-bold primary-color section__main-title">
                        {title}
                    </p>
                </SectionHeaderTitle>
                <SecitonAction className="section__action-header">
                    <Link to={to}>
                        <ButtonOutlined
                            icon={<ArrowRightOutlined />}
                            size="small"
                        >
                            {actionText}
                        </ButtonOutlined>
                    </Link>
                </SecitonAction>
            </SectionHeader>
            <SectionBody>{children}</SectionBody>
            <SectionFooter>
                <SecitonAction>
                    <Link to={to}>
                        <ButtonOutlined
                            icon={<ArrowRightOutlined />}
                            size="small"
                        >
                            {actionText}
                        </ButtonOutlined>
                    </Link>
                </SecitonAction>
            </SectionFooter>
        </SectionWrapper>
    );
}

export default Section;
