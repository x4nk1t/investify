import NavBar from "@/components/NavBar";
import Image from "next/image";
import HeroImage from "@/assets/hero-images.png";
import PlayImage from "@/assets/play-download.png";
import AppleImage from "@/assets/app-store-download.png";

import Thumbnail from "@/assets/the-express-tribute-thumbnail.jpg";
import MedicinesThumbnail from "@/assets/card-medicines.jpg";
import MoneyThumbnail from "@/assets/card-money.jpg";
import HomeCard from "@/components/HomeCard";
import NewsSection from "@/components/NewsSection";

import TribuneIcon from "@/assets/tribune-icon.png";
import HomeSlider from "@/components/HomeSlider";
import Footer from "@/components/Footer";
import MarketSummary from "@/components/MarketSummary";
import GainersLosersDetails from "@/components/GainersLosersDetails";
import { gainersData, loosersData } from "@/utils/GainersLosersTestData";

export default function Home() {
  return (
    <>
      <div className="container">
        <NavBar />

        <section className="bg-gray-100 flex rounded-3xl overflow-hidden flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 py-20 px-10 lg:pl-20 lg:pr-10 ">
            <div className="flex lg:block flex-col jusitfy-center items-center">
              <h1 className="text-5xl font-semibold text-gray-900 mb-6 text-center lg:text-left">
                Stay Ahead: Real-Time{" "}
                <span className="text-amber-500">Portfolio</span> &{" "}
                <span className="text-amber-500">News</span>
              </h1>
              <p className="text-gray-500 mb-8">
                Stay Ahead: Real-Time Portfolio & News
              </p>
              <div className="flex gap-4">
                <Image src={PlayImage} alt="Google play download image" />
                <Image src={AppleImage} alt="Apple store download image" />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex items-end justify-center bg-gradient-to-br from-primary to-[#015050]">
            <Image src={HeroImage} alt="HeroImage" />
          </div>
        </section>

        <section>
          <div className="my-10">
            <HomeSlider />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            <HomeCard
              title="New oil and gas deposits discovered"
              description="How do you create compelling presentations that wow your colleagues and impress your managers?"
              authorName="THE EXPRESS TRIBUNE"
              authorImage={TribuneIcon}
              thumbnail={Thumbnail}
            />
            <HomeCard
              title="New oil and gas deposits discovered"
              description="How do you create compelling presentations that wow your colleagues and impress your managers?"
              authorName="THE EXPRESS TRIBUNE"
              authorImage={TribuneIcon}
              thumbnail={MedicinesThumbnail}
            />
            <HomeCard
              title="New oil and gas deposits discovered"
              description="How do you create compelling presentations that wow your colleagues and impress your managers?"
              authorName="THE EXPRESS TRIBUNE"
              authorImage={TribuneIcon}
              thumbnail={MoneyThumbnail}
            />
          </div>
        </section>

        <section className="my-10">
          <MarketSummary />
        </section>

        <section className="flex flex-col lg:flex-row justify-between gap-10 my-20">
          <div className="w-full lg:w-1/2">
            <GainersLosersDetails
              data={gainersData}
              title="Top Gainers Stock"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <GainersLosersDetails data={loosersData} title="Top Losers Stock" />
          </div>
        </section>

        <section className="my-20">
          <NewsSection />
        </section>
      </div>
      <Footer />
    </>
  );
}
