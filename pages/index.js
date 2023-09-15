import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { HomeBanner } from "@components/Banner";
import { Columns } from "@components/Columns";
import { ContentImage } from "@components/ContentImage";
import { Content } from "@components/Content";
import { Accordion } from "@components/Accordion";
import { MotionBTTContainer } from "@components/Motion";
import { Logo } from "public/logo.png";
import SEO from "@components/SEO/SEO";
import {
    CardBody,
    CardGroup,
    CardHeader,
    CardImage,
    Card
} from "@components/Card";
import {ProductJsonLd} from 'next-seo';
import {faDirections} from '@fortawesome/free-solid-svg-icons';

export default function Home() {
    return (
        <Layout className="">
            <SEO
                title="NutriTrack - Avenue Labs landing page template 🚀"
                description="Discover NutriTrack, the effortless way to plan your meals with the power of Notion. Streamline your nutrition journey and achieve your health goals with ease."
            />
            <div className="main-wrapper bg-brown-200 relative z-10 pb-20 pt-20 ">
                {/* { Page Banner } */}
                <HomeBanner />
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    {/* Features */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="features" className="features">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Our Vision</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Dive into the history and vision of Rujembe
                                Studios
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p></p>
                            </Content>
                            <ContentImage />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Card Container Tabs */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="about" className="feature-tabs">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>About Us</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                About Us
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    Through our product and service offerings we
                                    aim to revolutionise the digital ecommerce
                                    experience provide a contemporary outlook on
                                    African fashion, bridge the gap between the
                                    African diaspora and Africa through
                                    technology, colaboration and paid business
                                    opportunities - providing sustainable
                                    textile production solutions, consumerism,
                                    and overal living.
                                </p>
                            </Content>
                            <CardGroup className="grid scroll-m-24 gap-8 grid-cols-1 max-w-4xl mx-auto mt-24 md:grid-cols-2">
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/features4.png"
                                            alt="Customizable Layouts image used."
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            About Rujembe Studios
                                        </CardHeader>
                                        <p>
                                            We are an Afro-futuristic,
                                            sustainable luxury Fashion and
                                            Lifestyle Brand specializing in
                                            men's and women's apparel. Our
                                            dedication to immaculate
                                            craftsmanship, unparalleled quality,
                                            and innovative design is a testament
                                            to our commitment to excellence.
                                            Rooted in culture and driven by
                                            artistic exploration, our brand
                                            delves into the rich and diverse
                                            lives of Black and People of Color
                                            (BPOC) communities. We express our
                                            in-depth research through a variety
                                            of art forms, seamlessly merging
                                            fashion and culture to create an
                                            authentic and inspiring narrative.
                                        </p>
                                    </CardBody>
                                </Card>
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/features3.png"
                                            alt="Progress Tracking image used."
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Ruth-Jennifer Ndombe
                                        </CardHeader>
                                        <p>
                                            Celebrate your wins and stay
                                            motivated on your nutrition journey.
                                            NutriTrack allows you to monitor
                                            your progress with weight,
                                            measurements, and other key metrics.
                                            Track your improvements over time
                                            and see the positive impact of your
                                            healthy choices.
                                        </p>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Testimonials */}
                    {/* <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer
                            id="testimonials"
                            className="benefits"
                        >
                            <BadgeGroup alignment="left">
                                <BadgeMessage>Testimonials</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            <PageTitle className="" type="default">
                                This is what our customers have to say about
                                this template
                            </PageTitle>
                            <Columns />
                        </SectionContainer>
                    </MotionBTTContainer> */}
                    {/* Accordions */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="faq" className="faq">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>FAQ</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Got some burning questions about Rujembe?{" "}
                                <br></br>
                                <br></br>No worries! We&apos;ve got the answers
                                you need:
                            </PageTitle>
                            <Accordion />
                        </SectionContainer>
                    </MotionBTTContainer>
                </SectionContainer>
            </div>
        </Layout>
    );
}
