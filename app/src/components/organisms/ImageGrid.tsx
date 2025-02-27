import Image from "next/image";

interface ImageData {
  id: number;
  title: string;
  src: string;
}

interface SharedProps {
  borderStyle?: string;
  buttonStyle?: string;
  buttonText: string;
  info?: string;
  imageStyle?: React.CSSProperties;
}

interface ImageCardProps extends SharedProps {
  image: ImageData;
}

interface ImageGridProps extends SharedProps {
  images: ImageData[];
}

const ImageCard: React.FC<ImageCardProps> = ({
  image,
  borderStyle = "border border-gray-300 rounded-lg p-1 shadow-md",
  buttonStyle = "bg-red-800 text-white p-1 rounded-md text-xs",
  buttonText,
  info = "",
  imageStyle,
}) => (
  <div className={`w-[275px] ${borderStyle}`}>
    <Image
      src={image.src}
      alt={image.title}
      width={300}
      height={300}
      style={{ borderRadius: "10px", width: "100%", ...imageStyle }}
    />
    <div className="mt-2">
      <div className="flex justify-between items-center">
        <h3 className="mb-0 font-semibold text-base">{image.title}</h3>
        <button className={buttonStyle}>{buttonText}</button>
      </div>
      {info && <p>{info}</p>}
    </div>
  </div>
);

const ImageGrid: React.FC<ImageGridProps> = ({
  images,
  ...sharedProps // Pass all shared props to ImageCard
}) => (
  <div className="flex flex-wrap md:justify-between justify-center items-center gap-4">
    {images.map((image) => (
      <ImageCard key={image.id} image={image} {...sharedProps} />
    ))}
  </div>
);

export default ImageGrid;
