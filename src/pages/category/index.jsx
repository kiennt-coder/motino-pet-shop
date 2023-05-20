import Breadcrumb from "../../components/breadcrumb";
import Banner from "../../components/banner";
import { Col, Container, Row } from "../../components/grid";
import { ChevronRightFilled } from "../../components/icon";
import ProductPet_1 from "../../assets/images/product-pet-1.png";
import {
    CategoryBody,
    CategoryFooter,
    CategoryHeader,
    CategoryHeading,
    CategorySort,
} from "./styled";
import { Heading, Text } from "../../components/typography";
import { Option, ProductCard, Select } from "../../components";
import FilterCategory from "../../components/filterCategory";

function index() {
    const breadcrumb = [
        {
            title: "Home",
            to: "/",
        },
        {
            title: "Dog",
            to: "/Dog",
        },
        {
            title: "Small Dog",
            to: "/small-dog",
        },
    ];

    const description = [
        {
            name: "Gene",
            value: "Male",
        },
        {
            name: "Age",
            value: "02 months",
        },
        {
            name: "Product",
            value: "Food",
        },
        {
            name: "Size",
            value: "385gm",
        },
    ];

    return (
        <>
            <Container>
                {/* --------- Breadcrumb ---------- */}
                <Breadcrumb
                    items={breadcrumb}
                    separator={<ChevronRightFilled />}
                    className="mb-1"
                />

                {/* --------- Banner ---------- */}
                <Banner
                    color={"text-white"}
                    layout={"banner-three"}
                    align="right"
                    title={"One more friend"}
                    subTitle={"Thousands more fun!"}
                    content={
                        "Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!"
                    }
                />

                <Row className="mt-5">
                    <Col className="col-xs-24 col-sm-24 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <FilterCategory />
                    </Col>
                    <Col className="col-xs-24 col-sm-24 col-md-18 col-lg-18 col-xl-18 col-xxl-18">
                        <CategoryHeader>
                            <CategoryHeading>
                                <Heading className="heading--xs font-weight-bold text-transform-capitalize">
                                    small dog
                                </Heading>
                                <Text
                                    tagName="span"
                                    className="body--md font-weight-normal"
                                >
                                    52 puppies
                                </Text>
                            </CategoryHeading>
                            <CategorySort>
                                <Select
                                    name={"sort"}
                                    placeholder="Sort by:"
                                    defaultValue="1"
                                >
                                    <Option key={1} value={1}>
                                        <Text>Popular</Text>
                                    </Option>
                                    <Option key={2} value={2}>
                                        <Text>Favorite</Text>
                                    </Option>
                                </Select>
                            </CategorySort>
                        </CategoryHeader>

                        <CategoryBody className="mt-3 mb-3">
                            <Row>
                                <Col className="col-xs-24 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8 display-flex">
                                    <ProductCard
                                        image={ProductPet_1}
                                        productName="MO231 - Pomeranian White"
                                        description={description}
                                        price="6.900.000 VND"
                                        giftName="Free Toy & Free Shaker"
                                    />
                                </Col>

                                <Col className="col-xs-24 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8 display-flex">
                                    <ProductCard
                                        image={ProductPet_1}
                                        productName="MO231 - Pomeranian White"
                                        description={description}
                                        price="6.900.000 VND"
                                    />
                                </Col>

                                <Col className="col-xs-24 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8 display-flex">
                                    <ProductCard
                                        image={ProductPet_1}
                                        productName="MO231 - Pomeranian White"
                                        description={description}
                                        price="6.900.000 VND"
                                        giftName="Free Toy & Free Shaker"
                                    />
                                </Col>

                                <Col className="col-xs-24 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8 display-flex">
                                    <ProductCard
                                        image={ProductPet_1}
                                        productName="MO231 - Pomeranian White"
                                        description={description}
                                        price="6.900.000 VND"
                                    />
                                </Col>
                            </Row>
                        </CategoryBody>

                        <CategoryFooter>navigate</CategoryFooter>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default index;
