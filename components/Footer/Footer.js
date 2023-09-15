import { SectionContainer } from "@components/Section";
import Link from "next/link";
import Image from "next/image";
import { ButtonGroup } from "@components/Button";
import { Icon } from "@iconify/react";
import Logo from "/public/rujembe.png";

const DATA = [
    {
        title: "Rujembe",
        items: [
            {
                label: "Our Vision",
                href: "#features"
            },
            {
                label: "About Us",
                href: "#about"
            },
            {
                label: "FAQ",
                href: "#faq"
            }
        ]
    },
    {
        title: "Company",
        items: [
            {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/ruth-jennifer-ndombe-aa9a51250",
                target: "_blank"
            },
            {
                label: "Twitter",
                href: "",
                target: "_blank"
            },
            {
                label: "Instagram",
                href: "",
                target: "_blank"
            },
            {
                label: "Facebook",
                href: "https://github.com/christian-luntok/",
                target: "_blank"
            }
        ]
    }
];

export const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer id="footer" className="bg-white ">
            {/* Footer Links */}
            <SectionContainer className="footer--container wrap wrap-px relative z-10">
                <div className="footer--content-container py-16">
                    <div className="footer-links mb-12 grid grid-cols-2 gap-8 md:mb-16 md:grid-cols-8 lg:grid-cols-12">
                        <div className="col-span-6">
                            <div className="footer--logo grid gap-8   ">
                                <Link href="/">
                                    <Image
                                        src={Logo}
                                        alt="logo"
                                        className=""
                                        height="600"
                                        width="400"
                                        priority
                                    />
                                </Link>
                                {/* Get Template button; remove if not used */}
                                {/* <ButtonGroup alignment="left">
                                    <a
                                        role="button"
                                        href="https://avenuelabs.lemonsqueezy.com/checkout/buy/df8ccd46-fa63-4384-b2aa-c4c9b8ad3ef0?embed=1"
                                        className="btn btn--secondary lemonsqueezy-button"
                                    >
                                        Join Us
                                        <Icon icon="material-symbols:arrow-forward-rounded" />
                                    </a>
                                </ButtonGroup> */}
                            </div>
                        </div>
                        <div className="col-span-6">
                            <div className="footer-menu grid grid-cols-2 md:grid-cols-8 lg:grid-cols-12">
                                {DATA.map((footerLinks) => (
                                    <div
                                        key={footerLinks.title}
                                        className="footer-menu--container col-span-1 md:col-span-4"
                                    >
                                        <h3 className="font-bold text-2xl mb-2 mt-20 ">
                                            {footerLinks.title}
                                        </h3>
                                        <ul className="footer-menu--list">
                                            {footerLinks.items.map(
                                                (footerItem) => (
                                                    <li
                                                        key={footerItem.label}
                                                        className="footer-menu--list-item gap-2"
                                                    >
                                                        <a
                                                            className="mb-2 block w-auto font-medium transition-colors duration-300 hover:underline"
                                                            href={
                                                                footerItem.href
                                                            }
                                                            target={
                                                                footerItem.target
                                                            }
                                                        >
                                                            {footerItem.label}
                                                        </a>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </SectionContainer>
            {/* Footer Credits */}

            <div className="footer--background"></div>
        </footer>
    );
};
