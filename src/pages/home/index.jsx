import ProductPet_1 from "../../assets/images/product-pet-1.png";
import ShebaLogo from "../../assets/images/sheba-logo.png";
import WhiskasLogo from "../../assets/images/whiskas-logo.png";
import BakersLogo from "../../assets/images/bakers-logo.png";
import FelixLogo from "../../assets/images/felix-logo.png";
import GoodboyLogo from "../../assets/images/goodboy-logo.png";
import ButchersLogo from "../../assets/images/butchers-logo.png";
import PedigreeLogo from "../../assets/images/pedigree-logo.png";
import PostImageFirst from "../../assets/images/post-1.png";
import PostImageSecond from "../../assets/images/post-2.png";
import PostImageThirt from "../../assets/images/post-3.png";
import { FootAnimalFilled } from "../../components/icon";

import Banner from "../../components/banner";
import { ProductCard, Text } from "../../components";
import { Col, Container, Row } from "../../components/grid";
import Section from "../../components/section";
import Slider, { Slide } from "../../components/slider";
import Image from "../../components/image";
import Post from "../../components/Post";

function Home() {
    let description = [
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
            {/* ------------- Banner Section ------------ */}
            <Banner
                className="mb-5"
                layout={"banner-bigger"}
                title="One more friend"
                subTitle="Thousands more fun!"
                content="Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!"
                viewLink="/product/view"
                explodeLink="/porduct/explode"
            />
            <Container>
                {/* ------------- Pet Section ------------ */}
                <Section
                    title="Take a look at some of our pets"
                    subTitle="What new?"
                    actionText="View more"
                    layoutTitle="vertical"
                    to="/category"
                    className="mb-5"
                >
                    <Row>
                        <Col className="col-xs-24 col-sm-12 col-md-8 col-lg-6 col-xl-6 col-xxl-6 display-flex">
                            <ProductCard
                                image={ProductPet_1}
                                productName="MO231 - Pomeranian White"
                                description={description}
                                price="6.900.000 VND"
                                giftName="Free Toy & Free Shaker"
                            />
                        </Col>

                        <Col className="col-xs-24 col-sm-12 col-md-8 col-lg-6 col-xl-6 col-xxl-6 display-flex">
                            <ProductCard
                                image={ProductPet_1}
                                productName="MO231 - Pomeranian White"
                                description={description}
                                price="6.900.000 VND"
                            />
                        </Col>

                        <Col className="col-xs-24 col-sm-12 col-md-8 col-lg-6 col-xl-6 col-xxl-6 display-flex">
                            <ProductCard
                                image={ProductPet_1}
                                productName="MO231 - Pomeranian White"
                                description={description}
                                price="6.900.000 VND"
                                giftName="Free Toy & Free Shaker"
                            />
                        </Col>

                        <Col className="col-xs-24 col-sm-12 col-md-8 col-lg-6 col-xl-6 col-xxl-6 display-flex">
                            <ProductCard
                                image={ProductPet_1}
                                productName="MO231 - Pomeranian White"
                                description={description}
                                price="6.900.000 VND"
                            />
                        </Col>
                    </Row>
                </Section>

                {/* ------------- Banner Section ------------ */}
                <Banner
                    align={"right"}
                    layout={"banner-one"}
                    title="One more friend"
                    subTitle="Thousands more fun!"
                    content="Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!"
                    viewLink="/product/view"
                    explodeLink="/porduct/explode"
                    className="mb-5"
                />

                {/* ------------- Food Section ------------ */}
                <Section
                    title="Our Products"
                    subTitle="Hard to choose right products for your pets?"
                    actionText="View more"
                    layoutTitle="vertical"
                    to="/category"
                    className="mb-5"
                >
                    <Row>
                        <Col className="col-xs-24 col-sm-12 col-md-8 col-lg-6 col-xl-6 col-xxl-6 display-flex">
                            <ProductCard
                                image={ProductPet_1}
                                productName="MO231 - Pomeranian White"
                                description={description}
                                price="6.900.000 VND"
                                giftName="Free Toy & Free Shaker"
                            />
                        </Col>

                        <Col className="col-xs-24 col-sm-12 col-md-8 col-lg-6 col-xl-6 col-xxl-6 display-flex">
                            <ProductCard
                                image={ProductPet_1}
                                productName="MO231 - Pomeranian White"
                                description={description}
                                price="6.900.000 VND"
                            />
                        </Col>

                        <Col className="col-xs-24 col-sm-12 col-md-8 col-lg-6 col-xl-6 col-xxl-6 display-flex">
                            <ProductCard
                                image={ProductPet_1}
                                productName="MO231 - Pomeranian White"
                                description={description}
                                price="6.900.000 VND"
                                giftName="Free Toy & Free Shaker"
                            />
                        </Col>

                        <Col className="col-xs-24 col-sm-12 col-md-8 col-lg-6 col-xl-6 col-xxl-6 display-flex">
                            <ProductCard
                                image={ProductPet_1}
                                productName="MO231 - Pomeranian White"
                                description={description}
                                price="6.900.000 VND"
                            />
                        </Col>
                    </Row>
                </Section>

                {/* ------------- Slide Section ------------ */}
                <Section
                    title="Pet Sellers"
                    subTitle="Proud to be part of"
                    actionText="View all our sallers"
                    layoutTitle="inline"
                    to="/category"
                    className="mb-5"
                >
                    <Slider className="slider-box">
                        <Slide width="160px">
                            <Image src={ShebaLogo} alt="" />
                        </Slide>
                        <Slide width="160px">
                            <Image src={WhiskasLogo} alt="" />
                        </Slide>
                        <Slide width="160px">
                            <Image src={BakersLogo} alt="" />
                        </Slide>
                        <Slide width="160px">
                            <Image src={FelixLogo} alt="" />
                        </Slide>
                        <Slide width="160px">
                            <Image src={GoodboyLogo} alt="" />
                        </Slide>
                        <Slide width="160px">
                            <Image src={ButchersLogo} alt="" />
                        </Slide>
                        <Slide width="160px">
                            <Image src={PedigreeLogo} alt="" />
                        </Slide>
                        <Slide width="160px">
                            <Image src={PedigreeLogo} alt="" />
                        </Slide>
                    </Slider>
                </Section>

                {/* ------------- Banner Section ------------ */}
                <Banner
                    layout={"banner-two"}
                    reverse
                    title={
                        <>
                            <Text>Adoption</Text>
                            <FootAnimalFilled
                                className="banner__icon"
                                color={"primary-color"}
                            />
                        </>
                    }
                    subTitle="We need help. so do they."
                    content="Adopt a pet and give it a home,
            it will be love you back unconditionally."
                    viewLink="/product/view"
                    explodeLink="/porduct/explode"
                    className="mb-5"
                />

                {/* ------------- Blog Section ------------ */}
                <Section
                    title="You already know ?"
                    subTitle="Useful pet Knowledge"
                    actionText="View more"
                    layoutTitle="vertical"
                    to="/category"
                    className="mb-5"
                >
                    <Row>
                        <Col className="col-xs-24 col-sm-24 col-md-8 col-lg-8 col-xl-8 col-xxl-8 display-flex">
                            <Post
                                cagegory={[
                                    {
                                        text: "Pet knowledge",
                                    },
                                ]}
                                src={PostImageFirst}
                                title="What is a Pomeranian? How to Identify Pomeranian Dogs"
                                content="The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed."
                            />
                        </Col>
                        <Col className="col-xs-24 col-sm-24 col-md-8 col-lg-8 col-xl-8 col-xxl-8 display-flex">
                            <Post
                                cagegory={[
                                    {
                                        text: "Pet knowledge",
                                    },
                                ]}
                                src={PostImageSecond}
                                title="Dog Diet You Need To Know"
                                content="Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance."
                            />
                        </Col>
                        <Col className="col-xs-24 col-sm-24 col-md-8 col-lg-8 col-xl-8 col-xxl-8 display-flex">
                            <Post
                                cagegory={[
                                    {
                                        text: "Pet knowledge",
                                    },
                                ]}
                                src={PostImageThirt}
                                title="Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively"
                                content="Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog."
                            />
                        </Col>
                    </Row>
                </Section>

                {/* <Banner
                    align={"right"}
                    layout={"banner-three"}
                    title="One more friend"
                    subTitle="Thousands more fun!"
                    content="Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!"
                    viewLink="/product/view"
                    explodeLink="/porduct/explode"
                    color="text-white"
                /> */}
            </Container>
        </>
    );
}

export default Home;
