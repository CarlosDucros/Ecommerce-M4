/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const AboutUsContainer: React.FC = () => {
  return (
    <div className="container mx-auto my-12 px-6 text-soft-purple">
      <h1 className="text-5xl font-bold mb-8 text-center">About Us</h1>

      <div className="mb-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <p className="text-lg leading-relaxed">
              Welcome to Best Friend, your number one source for the latest and
              greatest in technology products. We're dedicated to providing you
              the very best of tech gadgets, with a focus on dependability,
              customer service, and uniqueness.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Tech gadgets"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:order-2 md:pl-8 mb-8 md:mb-0">
            <p className="text-lg leading-relaxed">
              Founded in 2022, Best Friend has come a long way from its
              beginnings. When we first started out, our passion for "Technology
              with a personal touch" drove us to start our own business. We now
              serve customers all over the world and are thrilled that we're
              able to turn our passion into our own website.
            </p>
          </div>
          <div className="md:w-1/2 md:order-1">
            <img
              src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Our journey"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="mb-12">
        <p className="text-lg leading-relaxed">
          At Best Friend, we believe in the power of technology to improve
          lives. Our team is constantly researching and curating the best
          products to ensure our customers have access to the most innovative
          and reliable tech on the market. From the latest smartphones to
          essential accessories, we strive to be your trusted partner in
          technology.
        </p>
      </div>

      <div className="mb-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <p className="text-lg leading-relaxed">
              We are committed to sustainability and ethical business practices.
              Our products are sourced from manufacturers who share our values
              of quality, sustainability, and social responsibility. We aim to
              minimize our environmental impact and support fair labor practices
              in every step of our supply chain.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Sustainability"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div>
        <p className="text-lg leading-relaxed mb-8">
          We hope you enjoy our products as much as we enjoy offering them to
          you. If you have any questions or comments, please don't hesitate to
          contact us. Your feedback is invaluable to us as we continually strive
          to improve our offerings and services.
        </p>
        <p className="text-lg leading-relaxed text-center">
          Sincerely,
          <br />
          The Best Friend Team
        </p>
      </div>
    </div>
  );
};

export default AboutUsContainer;
