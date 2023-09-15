import { BadgeGroup, BadgeIcon, BadgeMessage } from "@components/Badge";
import { Button, ButtonGroup } from "@components/Button";
import { Content } from "@components/Content";
import { MotionBTTContainer, MotionInfiniteImage } from "@components/Motion";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Icon } from "@iconify/react";
import Image from "next/image";
import EmailPopup from "@components/Email/Email";
import { useState } from "react";

export const HomeBanner = () => {

    const [showModal, setShowModal] = useState(false);
    return (
        <SectionContainer className="page-banner--container py-16 bg-gradient-to-r from-black-300 to-brown-500">
            <SectionContainer className="page-banner--inner-container wrap wrap-px z-10">
                {/* Appear Second */}
                <MotionBTTContainer transition={{ delay: 0.4, duration: 0.5 }}>
                    <PageTitle
                        className="text-center mx-auto text-black-500"
                        type="heavy"
                    >
                        RUJEMBE STUDIOS
                    </PageTitle>
                </MotionBTTContainer>
                {/* Appear Third */}
                <MotionBTTContainer transition={{ delay: 0.6, duration: 0.5 }}>
                    <Content className="text-center" alignment="center">
                        <p>CREATING GARMENTS WITH AFRICA IN MIND </p>
                    </Content>
                    <div className="mt-6 mb-16 text-center">
                        <button className="btn btn--secondary lemonsqueezy-button bg-blue-300 p-10 px-20 text-2xl" onClick={() => setShowModal(true)}>Join Us</button>
                        <EmailPopup
                            onClose={() => setShowModal(false)}
                            isVisible={showModal}
                        />
                    </div>
                </MotionBTTContainer>
                {/* Appear Fourth */}
                <MotionBTTContainer transition={{ delay: 0.8, duration: 0.5 }}>
                    <div className="page-banner--image">
                        {/* <Image
                            src="/nutritrack-hero-banner.png"
                            width={1024}
                            height={680}
                            alt="Page Banner"
                            objectFit="cover"
                            className="mx-auto"
                        /> */}
                    </div>
                </MotionBTTContainer>
            </SectionContainer>
        </SectionContainer>
    );
};
