import Link from "next/link";
import Image from "next/image";
import Logo from "/public/Screenshot 2023-09-14 015714.png";
import { SectionContainer } from "@components/Section";
import { Nav } from "@components/Nav";
import { ButtonGroup, Button } from "@components/Button";
import { Icon } from "@iconify/react";
import { useState } from "react";

export const Header = () => {
    return (
        <header
            id="header"
            className="header fixed left-0 w-full z-30 top-0 bg-white backdrop-filter backdrop-blur-md bg-opacity-50"
        >
            <SectionContainer className="header--container wrap wrap-px ">
                <div className="header-logo--container">
                    <h1 className="logo mb-4 bold font-serif">
                        <Link href="/"></Link>
                        {/* Rujembe */}
                    </h1>
                </div>
                <SectionContainer className="flex items-center ml-auto">
                    <Nav />
                </SectionContainer>
            </SectionContainer>
        </header>
    );
};
