import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { v4 as uuid } from "uuid";
import History from "/public/black.webp";
import Psycho from "/public/psychology.jpg";
import Fashion from "/public/fashion.jpg";
import Sustain from "/public/sustain.jpg";

const ContentImageData = [
    {
        id: uuid(),
        title: "History",
        content:
            "Our design process is deeply rooted in historical research. We immerse ourselves in the captivating lives and experiences of past and present Black and Brown tribes, leaders, successors, influential figures, kings, and queens. Through our exploration, we aim to shed light on their compelling stories, enriching our designs with their remarkable narratives.",
        align: "right",
        image: History
    },
    {
        id: uuid(),
        title: "Psychology",
        content:
            "We are dedicated to dismantling the enduring psychological impacts of colonialism. Our mission involves unearthing character, mindset, and trauma while actively challenging prevailing standards and norms, particularly within Black and Brown communities. Through our work, we seek to foster a deeper understanding and pave the way for positive change.",
        align: "left",
        image: Psycho
    },
    {
        id: uuid(),
        title: "Fashion",
        content:
            "At the heart of our mission is the meticulous manufacturing and design of high-quality garments that not only captivate fashion enthusiasts but also embrace the essence of true African designs. These meticulously crafted pieces take their place in the spotlight, gracing the runway at annual fashion shows where they shine as a testament to our unwavering commitment to excellence in design and craftsmanship.",
        align: "right",
        image: Fashion
    },
    {
        id: uuid(),
        title: "Sustainability",
        content:
            "At our core, we are committed to making a positive impact on social, environmental, and economic fronts. We empower Black and Brown artisans within and beyond the diaspora, champion inclusivity and diversity in the creative industry, prioritize sustainably sourced fabrics, and revive traditional textile production techniques. Our brand embodies a mission that extends beyond fashion, aiming to create opportunities, drive change, and celebrate culture while offering stylish, eco-conscious products that resonate with a purpose-driven community.",
        align: "left",
        image: Sustain
    }
];

export const ContentImage = () => {
    return (
        <SectionContainer className="process-items mt-16 space-y-16">
            {ContentImageData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="process-item--container grid md:grid-cols-2 gap-y-8"
                >
                    <div
                        className={`process-item--image rounded-3xl ${
                            item.align === "left" ? "md:order-1" : ""
                        }`}
                    >
                        <Image
                            src={item.image}
                            width={512}
                            height={512}
                            objectFit="cover"
                            alt="Process Banner 1"
                            className="drop-shadow-xl w-full offset-y-0 offset-x-8 blur-16"
                        />
                    </div>
                    <div
                        className={`process-item--content ${
                            item.align === "left"
                                ? "md:pr-16 lg:pr-24 xl:pr-32 ml-auto"
                                : "md:pl-16 lg:pl-24 xl:pl-32  mr-auto"
                        } my-auto content text-black/60`}
                    >
                        <h3 className="mb-6 h4 md:h3 font-semibold text-black">
                            {item.title}
                        </h3>
                        <p>{item.content}</p>
                        <ul className="process-item--list space-y-3">
                            {item.listItems?.length &&
                                item.listItems.map((listItem) => (
                                    <li
                                        id={listItem.id}
                                        key={listItem.id}
                                        className="inline-grid grid-flow-col-dense"
                                    >
                                        <Icon
                                            icon="ph:seal-check-bold"
                                            className="w-6 h-6 text-secondary-500 mr-2"
                                        />
                                        {listItem.content}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
