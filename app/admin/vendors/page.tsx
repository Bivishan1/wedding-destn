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
      contact: '9841696666',
      image: '/img/review4.jpg'
    },
    {
      id: 2,
      name: 'Party Top',
      description: 'Lighting',
      contact: '9841696666',
      image: '/img/review4.jpg'
    },
    {
      id: 3,
      name: 'Party down',
      description: 'Lighting',
      contact: '9841696666',
      image: '/img/review4.jpg'
    },
    {
      id: 4,
      name: 'Party Planners',
      description: 'Lighter',
      contact: '984169888',
      image: '/img/review4.jpg'
    }
  ];

  
  return (
    <div >
     <Table initialVenues={initialVenues} button="Add Vendor"/>
    </div>
  );
};

export default Vendors;