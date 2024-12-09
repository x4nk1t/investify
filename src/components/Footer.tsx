import PlayImage from "@/assets/play-download.png";
import AppleImage from "@/assets/app-store-download.png";
import Logo from "@/assets/investify-logo.png";
import Image from "next/image";
import Link from "next/link";
import XIcon from "./icons/XIcon";
import FacebookIcon from "./icons/FacebookIcon";
import LinkedInIcon from "./icons/LinkedInIcon";

export default function Footer() {
  const footerLinks = [
    {
      name: "Stocks",
      link: "/stocks",
    },
    {
      name: "Market",
      link: "/market",
    },
    {
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      name: "Privacy",
      link: "/privacy",
    },
  ];
  return (
    <div className=" bg-gray-100">
      <div className="container pt-16 pb-12">
        <div className="flex justify-between mb-10">
          <div className="w-4/5">
            <Link href={"/"}>
              <Image
                src={Logo}
                alt="Investify Logo"
                width={170}
                height={40}
                className="mb-8"
              />
            </Link>

            <p className="text-base font-medium text-slate-600 mb-8">
              The information provided on this platform is for informational
              purposes only and does not constitute financial advice. While we
              strive to ensure accuracy, we do not guarantee the completeness or
              reliability of the data presented. Investing in stocks involves
              risk, and past performance is not indicative of future results.
              Users are responsible for their own investment decisions, and we
              are not liable for any losses incurred. We recommend consulting
              with a qualified financial advisor before making any investment
              choices.
            </p>
            <div className="flex gap-8">
              {footerLinks.map((link, index) => {
                return (
                  <Link
                    href={link.link}
                    key={index}
                    className="text-base text-slate-600 font-semibold transition-all hover:text-primary"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Image src={PlayImage} alt="Google play download image" />
            <Image src={AppleImage} alt="Apple store download image" />
          </div>
        </div>
        <div className="pt-8 border-t-2 border-gray-200 flex justify-between">
          <p className="text-base font-semibold text-slate-500">
            © 2024 Investify. All rights reserved.
          </p>
          <div className="flex gap-6 ">
            <a
              href="https://x.com"
              target="_blank"
              className="transition-all text-gray-400 hover:text-primary"
            >
              <XIcon />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="transition-all text-gray-400 hover:text-primary"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              className="transition-all text-gray-400 hover:text-primary"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
