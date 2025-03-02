import Image from "next/image";

const cards = [
  {
    id: 1,
    name: "booking",
    heading: "Total Bookings",
    count: 1232,
    icon: "/icons/booking.svg",
  },
  {
    id: 2,
    name: "users",
    heading: "Total Users",
    count: 1232,
    icon: "/icons/users.svg",
  },
  {
    id: 3,
    name: "vendors",
    heading: "Total Vendors",
    count: 1232,
    icon: "/icons/vendors.svg",
  },
];

interface CardProps {
  heading: string;
  count: number;
  icon: string;
}

const Card = ({ heading, count, icon }: CardProps) => {
  return (
    <div className="w-[233px] h-[107px] border border-red-400 rounded-md flex justify-center items-center flex-wrap bg-white shadow-md space-x-4">
      <div className="content">
        <h2 className="text-xl font-normal  mb-2">{heading}</h2>
        <p className="font-bold">{count}</p>
      </div>
      <div className="icon">
        <Image src={icon} width={35} height={35} alt={heading} />
      </div>
    </div>
  );
};

export default function Dashboard () {
  return (
    <div className="">
      <div className="dashboard-cards flex space-x-8">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

// export default Dashboard;
