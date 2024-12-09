import Image, { StaticImageData } from "next/image";

interface NewsFilterTypes {
  image: StaticImageData;
  children: React.ReactNode;
  isActive: boolean | false;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function NewsFilter({
  image,
  children,
  isActive = false,
  onClick,
}: NewsFilterTypes) {
  return (
    <button
      className={`flex gap-2 px-4 py-2 rounded-full transition-all ${
        isActive ? "bg-slate-100" : ""
      }`}
      onClick={onClick}
    >
      <Image
        src={image}
        alt={`${children} logo`}
        width={24}
        height={24}
        className="rounded-full"
      />
      <span className="uppercase">{children}</span>
    </button>
  );
}
