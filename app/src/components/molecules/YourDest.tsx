import Image from 'next/image';

interface YourDestinationProps {
  icon: string;
  alt: string;
  heading: string;
  description: string;
  extraClass?: string;
}

const YourDestination: React.FC<YourDestinationProps> = ({ icon, alt, heading, description, extraClass = '' }) => (
  <div className={`border border-gray-500 rounded-xl py-[46px] px-[23px] shadow-md ${extraClass}`}>
    <div className="flex items-center justify-center gap-4">
      <Image
        className="w-[74px] h-[70px]"
        src={icon}
        alt={alt}
        width={74}
        height={70}
      />
      <h3>{heading}</h3>
    </div>
    <p className="mt-5">{description}</p>
  </div>
);

export default YourDestination;
