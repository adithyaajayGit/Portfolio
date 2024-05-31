import React from 'react'
import MagicButton from './ui/Magic Button'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className="w-full  pb-10 mb-[100px] md:mb-5" id="contact">
    <div className="flex flex-col items-center">
      <h1 className="heading lg:max-w-[45vw]">
      I'm seeking new job opportunities <span className="text-purple">let's connect</span> to discuss potential roles
      </h1>
      <p className="text-white-200 md:mt-10 my-5 text-center">
        Reach out to me today and let&apos;s discuss how I can help you
        achieve your goals.
      </p>
      <a href="mailto:adithyaajay098@gmail.com">
        <MagicButton
          title="Let's get in touch"
          icon={<FaLocationArrow />}
          position="right"
        />
      </a>
    </div>
    <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
      <p className="md:text-base text-sm md:font-normal font-light">
        Copyright © 2024 Adithya Ajay
      </p>

      <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link} // Add link property for each social media object
              target="_blank"
              rel="noreferrer noopener"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="social media icon" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer
