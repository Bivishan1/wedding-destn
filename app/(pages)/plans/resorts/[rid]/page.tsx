'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";



// interface Props {
//   params: { id: string };
// }

const resorts = [
    {
      id: "1",
      name: "Chandragiri Resort",
      images: ["/img/c-resort1.jpg", "/img/trending3.jpg", "/img/trending2.jpg", "/img/c-resort-people.jpg"],
      description1: "A beautiful beachside resort with a stunning view, offering luxury accommodations and fine dining.",
      description2: "Enjoy breathtaking sunsets, spa treatments, and adventure activities like scuba diving and jet skiing."
    },
    {
      id: "2",
      name: "Mountain Retreat",
      images: ["/mountain1.jpg", "/mountain2.jpg", "/mountain3.jpg"],
      description1: "Escape to nature and relax in our cozy mountain cabins surrounded by scenic landscapes.",
      description2: "Hiking trails, bonfires, and star-gazing make this the perfect getaway for adventure lovers."
    },
    {
      id: "3",
      name: "City Hotel",
      images: ["/city1.jpg", "/city2.jpg", "/city3.jpg"],
      description1: "Stay in the heart of the city with modern amenities and stunning skyline views.",
      description2: "Experience nightlife, shopping, and gourmet dining just steps away from your room."
    }
  ];


export default function Page  () {
  const { rid } = useParams();
  const router = useRouter();
  interface Resort {
    id: string;
    name: string;
    images: string[];
    description1: string;
    description2: string;
  }

  const [resort, setResort] = useState<Resort | null>(null);

  useEffect(() => {
    if (!rid) return;

    // Find resort details based on the dynamic route parameter
    const selectedResort = resorts.find((resort) => resort.id === rid);
    
    if (selectedResort) {
      setResort(selectedResort);
    } else {
      router.push("/404"); // Redirect to 404 if the resort is not found
    }
  }, [rid, router]);
    
      if (!resort) {
        return <div className="text-center text-white py-10">Loading resort details...</div>;
      }
      
  return (
    <div className="container">
      <div className="main-content">
        <div className="heading text-center my-28">
          <h1 className="border-b-2 inline-block mx-auto">
            {" "}
           {resort.name}
          </h1>
        </div>
        <div className="images">
          <div  className="images flex gap-7 items-stretch">
            <div className="customize-image w-full">
              <Image
                className="w-full h-full object-cover"
                src={resort.images[0]}
                alt="Customize 3"
                width={300}
                height={300}
              />
            </div>
            <div className="customize-two-images flex flex-col sm:flex-col w-full relative gap-4">
              <Image
                className="w-full h-full object-cover"
                src={resort.images[1]}
                alt="Customize 1"
                width={300}
                height={200}
              />
              <Image
                className="w-full h-full object-cover"
                src={resort.images[2]}
                alt="Customize 1"
                width={300}
                height={200}
              />
            </div>
            <div className="customize-image w-full">
              <Image
                className="w-full h-full object-cover"
                src={resort.images[3]}
                alt="Customize 3"
                width={300}
                height={300}
              />
            </div>
          </div> 
        {/*  */}
        </div>
        <div className="description-content flex flex-wrap gap-5 mt-28 mb-32">
          <div className="first-desc flex-1 p-5 border-gray-600 border rounded-md">
            <h3>Description</h3>
            <p>
              Wedding Planner: (Do you need a local planner? If so, what services do they provide?) <br/>
              Photographer/Videographer: (Do you hire a local vendor or bring your own?) Catering & Cake: (Will the
              venue provide catering or do you need to hire an external
              caterer?) <br/> Hair & Makeup Artist: (Local artist or traveling
              professional?) <br/> Flowers & Decor: (Research florists in the area,
              local flowers available, and the availability of your chosen
              wedding style) <br/> Entertainment: (Live band, DJ, traditional dancers,
              etc.) <br/> Transportation: (Will you need shuttles, cars, or other
              transport for you and your guests?)
            </p>
          </div>
          <div className="second-desc flex-1 p-5 border-gray-600 border rounded-md">
            <h3>Description</h3>
            <p>
              Wedding Planner: (Do you need a local planner? If so, what services do they provide?) <br/>
              Photographer/Videographer: (Do you hire a local vendor or bring your own?) Catering & Cake: (Will the
              venue provide catering or do you need to hire an external
              caterer?) <br/> Hair & Makeup Artist: (Local artist or traveling
              professional?) <br/> Flowers & Decor: (Research florists in the area,
              local flowers available, and the availability of your chosen
              wedding style) <br/> Entertainment: (Live band, DJ, traditional dancers,
              etc.) <br/> Transportation: (Will you need shuttles, cars, or other
              transport for you and your guests?)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default page;
