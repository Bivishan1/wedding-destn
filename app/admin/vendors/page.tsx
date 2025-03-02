'use client';

import Table from '@/components/admin/table';

interface Vendor {
  id: number;
  name: string;
  description: string;
  contact: string;
  image: string;
}

const Vendors = () => {
  const initialVenues: Vendor[] = [
    {
      id: 1,
      name: 'Innovative',
      description: 'Lighting',
      contact: '9809875391',
      image: '/img/review4.jpg'
    },
    {
      id: 2,
      name: 'Party Top 1',
      description: 'Lighting',
      contact: '9899870984',
      image: '/img/review4.jpg'
    },
    {
      id: 3,
      name: 'Party down 2',
      description: 'Lighting',
      contact: '9841696666',
      image: '/img/review4.jpg'
    },
    {
      id: 4,
      name: 'Party Planners 3',
      description: 'Lighter',
      contact: '984169888',
      image: '/img/review4.jpg'
    }
  ];

  
  return (
    <div >
     <Table initialVenues={initialVenues} button="Add Vendor" searchParams={{ sortOrder: 'asc' }}/>
    </div>
  );
};

export default Vendors;