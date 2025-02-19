import React from "react";
// import { UpIcon } from "../../../../public/icons";
// import { DownIcon } from "../../../../public/icons";
import Link from "next/link";

interface AccordionItem {
  id: number;
  name: string;
}

interface AccordionProps {
    items: AccordionItem[];
    heading: string;
    // features: { [key: string]: string[] }; // Features by package
    pack?: string[]; // Optional array of package names like ["Basic", "Standard", "Premium"]
  }

const AccordionM: React.FC<AccordionProps> = ({ items, heading }) => {
  // const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  // const [activeFAQ, setActiveFAQ] = useState(false);

  // Toggle logic: If clicked FAQ is already active, close it (set to null), otherwise set to the clicked FAQ's index
  // const toggleAccordion = () => {
  //   // setActiveFAQ((prev) => (prev === index ? null : index));
  //   setActiveFAQ(!activeFAQ);
  // };
  return (
    <div>
      
        <div className="">
          {/* Accordion Header */}
          <div
            className="packages flex justify-between items-center my-2"
          >
            <h5 className="font-semibold underline">{heading}</h5>
            {/* <span className="text-xl">
              {activeFAQ ? <DownIcon /> : <UpIcon />}
            </span> */}
          </div>
          {/* smooth transition */}
          {/* <div
            className={`overflow-hidden transition-all duration-300 ease-in-out mt-[9px] ${
              activeFAQ ? "h-40" : "h-0"
            }`}
          > */}
            <div className="">
              {items.map((item, index) =>(
               < div key={item.id}>
                <Link href={`plans/resorts/${item.id}`}>
                    <p className={`mb-0 hover:cursor-pointer hover:bg-red-700 hover:text-white py-3 pl-2 border border-gray-300 ${index === items.length - 1 ? 'rounded-b-lg' : ''}`}>
                     {item.name}
                     
                    </p>
                    {/* <span className="border border-gray-300 block"></span> */}
                    </Link>
                   </div>
              ))
                }
            </div>
          </div>
        </div>
    
    // </div>
  );
};

export default AccordionM;
