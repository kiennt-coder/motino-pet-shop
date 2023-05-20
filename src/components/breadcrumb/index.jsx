import React, { useEffect, useState } from "react";
import {
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbText,
    BreadcrumbWrapper,
} from "./styled";

function Breadcrumb({ items = [], className, separator, ...props }) {
    const [breadcrumb, setBreadcrumb] = useState([]);

    useEffect(() => {
        let newItems = [...items].reduce((result, current, index) => {
            if (index < items.length - 1) {
                result.push(
                    <>
                        <BreadcrumbItem>
                            <BreadcrumbLink to={current.to}>
                                {current.title}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem color="neutral-color-60">
                            {separator}
                        </BreadcrumbItem>
                    </>
                );
            } else {
                result.push(
                    <BreadcrumbItem>
                        <BreadcrumbText>{current.title}</BreadcrumbText>
                    </BreadcrumbItem>
                );
            }

            return result;
        }, []);

        setBreadcrumb(newItems);
    }, [items, separator]);

    return (
        <BreadcrumbWrapper
            {...props}
            className={`body--md font-weight-normal neutral-color-60 ${className}`}
        >
            {breadcrumb.map((item, index) => (
                <React.Fragment key={index}>{item}</React.Fragment>
            ))}
        </BreadcrumbWrapper>
    );
}

export default Breadcrumb;
