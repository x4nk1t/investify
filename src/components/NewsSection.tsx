"use client";
import HomeCard from "./HomeCard";
import NewsFilter from "./NewsFilter";

import NewsIcon from "@/assets/news-icon.png";
import TribuneIcon from "@/assets/tribune-icon.png";
import DawnIcon from "@/assets/dawn-icon.png";
import RecorderIcon from "@/assets/recorder-icon.png";
import { useState } from "react";
import NewsSectionsTestData from "@/utils/NewsSectionsTestData";

export default function NewsSection() {
  const [active, setActive] = useState("all");

  const newsFilters = [
    { name: "All News", image: NewsIcon, slug: "all" },
    { name: "Dawn", image: DawnIcon, slug: "dawn" },
    { name: "Tribune", image: TribuneIcon, slug: "tribune" },
    { name: "Recorder", image: RecorderIcon, slug: "recorder" },
  ];

  const testNewsData = NewsSectionsTestData();

  return (
    <>
      <h2 className="text-gray-900 font-semibold text-3xl mb-6">Top News</h2>

      <div className="flex gap-4 mb-10">
        {newsFilters.map((news, index) => {
          return (
            <NewsFilter
              key={index}
              image={news.image}
              isActive={active == news.slug}
              onClick={() => {
                setActive(news.slug);
              }}
            >
              {news.name}
            </NewsFilter>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testNewsData
          .filter((data) => {
            return (
              active == "all" || data.authorName.toLowerCase().includes(active)
            );
          })
          .map((data, index) => {
            return (
              <HomeCard
                key={index}
                title={data.title}
                description={data.description}
                authorName={data.authorName}
                authorImage={data.authorLogo}
                thumbnail={data.thumbnail}
              />
            );
          })}
      </div>
    </>
  );
}
