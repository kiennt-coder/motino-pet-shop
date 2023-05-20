/**
 * Created by Kiennt
 * User: https://github.com/kiennt-coder
 * Date: 18/12/2022
 * Description: Tạo thành phần thẻ sản phẩm (Product Card Component)
 * Parameters:
 * Return: Phần tử JSX
 */

import React from "react";
import { Heading, Text } from "../typography";
import {
    ProductCard,
    ProductCardImage,
    ProductCardContent,
    ProductCardDescription,
    ProductCardPrice,
    ProductCardGift,
} from "./styled";
import { DotOutlined, GiftFilled } from "../icon";

function index({ image, productName, description, price, giftName }) {
    const handleRenderDescription = () => {
        return description.map((item, index) => (
            <React.Fragment key={index}>
                <Text tagName="span" className="font-weight-normal body--sm">
                    {item.name}:&nbsp;
                    <Text
                        tagName="a"
                        href=""
                        className="font-weight-bold neutral-color-60"
                    >
                        {item.value}
                    </Text>
                </Text>
                {index < description.length - 1 && (
                    <DotOutlined className="product-card__dot body--sm" />
                )}
            </React.Fragment>
        ));
    };

    return (
        <ProductCard className="box-shadow">
            <ProductCardImage image={image} />
            <ProductCardContent>
                <Heading
                    level={2}
                    className="font-weight-bold body--xl product-card__heading"
                >
                    <Text tagName="a" href="" title={productName}>
                        {productName}
                    </Text>
                </Heading>
                <ProductCardDescription>
                    {description && handleRenderDescription()}
                </ProductCardDescription>
                <ProductCardPrice className="font-weight-bold body--md">
                    {price}
                </ProductCardPrice>
                {giftName && (
                    <ProductCardGift>
                        <GiftFilled />
                        <DotOutlined className="product-card__gift-dot" />
                        <Text
                            tagName="span"
                            className="font-weight-bold body--md product-card__gift-title"
                            title={giftName}
                        >
                            {giftName}
                        </Text>
                    </ProductCardGift>
                )}
            </ProductCardContent>
        </ProductCard>
    );
}

export default index;
