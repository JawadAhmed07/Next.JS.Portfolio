"use client";

import { Button } from "@nextui-org/react"; // Importing NextUI Button component
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image"; // Using Next.js Image for optimization
// import Features from "../components/features";
// import Requestproposal from "../components/Requestproposal";
// import Reviews from "../components/reviews";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    setCurrentQuestion(panel);

    // Reset color after 3 seconds
    if (isExpanded) {
      setTimeout(() => {
        setCurrentQuestion(null);
      }, 3000);
    }
  };

  return (
    <>
      {/* Main front page (company description) */}
      <section
        className="text-gray-600 body-font bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://doctorofseo.com/wp-content/uploads/revslider/home-1/slide1-home1.jpg)",
        }}
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center bg-opacity-50">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 px-16 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl capitalize text-3xl mb-4 font-medium text-white">
              Best website <br /> development
              <br className="lg:inline-block" />
              Company
            </h1>

            <p className="mb-8 w-80 leading-relaxed text-white">
              Our web development service provides modern, responsive, and
              user-friendly websites that drive growth and showcase your
              business.
            </p>
            <div className="flex justify-center">
              <Link  href="../../components/Requestproposal">
              <Button auto shadow color="primary">
                Request a Proposal
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
        </>

    )
}
