import Image, { StaticImageData } from "next/image";

interface HomeCardTypes {
  title: string;
  description: string;
  authorName: string;
  authorImage: StaticImageData;
  thumbnail: StaticImageData;
}

export default function HomeCard({
  title,
  description,
  authorName,
  authorImage,
  thumbnail,
}: HomeCardTypes) {
  return (
    <div className="">
      <div className="mb-5">
        <Image
          src={thumbnail}
          alt="The Express Tribune Thumbnail"
          className="object-cover w-full h-[200px] object-center rounded-2xl"
        />
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-base">{description}</p>
      </div>
      <div className="flex gap-3 items-center min-w-80">
        <Image
          src={authorImage}
          alt={`${title} Thumbnail`}
          width={40}
          height={40}
        />
        <p className="uppercase text-sm text-gray-600 font-semibold">
          {authorName}
        </p>
      </div>
    </div>
  );
}
