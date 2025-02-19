import React from "react";
import Image from "next/image";

interface Props {
  params: { id: string }; //
}

const page = async ({ params }: Props) => {
  const { id } = await params;
  return (
    <div className="container">
      <div className="main-content">
        <div className="heading text-center">
          <h1 className="border-b-2 inline-block mx-auto">
            {" "}
            Chandragiri{id} Resort
          </h1>
        </div>
        <div className="images">
          <div className="images flex gap-7 items-stretch">
            <div className="customize-image w-full">
              <Image
                className="w-full h-full object-cover"
                src="/img/c-resort1.jpg"
                alt="Customize 3"
                width={300}
                height={300}
              />
            </div>
            <div className="customize-two-images flex flex-col sm:flex-col w-full relative gap-4">
              <Image
                className="w-full h-full object-cover"
                src="/img/trending3.jpg"
                alt="Customize 1"
                width={300}
                height={200}
              />
              <Image
                className="w-full h-full object-cover"
                src="/img/trending2.jpg"
                alt="Customize 1"
                width={300}
                height={200}
              />
            </div>
            <div className="customize-image w-full">
              <Image
                className="w-full h-full object-cover"
                src="/img/c-resort-people.jpg"
                alt="Customize 3"
                width={300}
                height={300}
              />
            </div>
          </div>
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

export default page;
