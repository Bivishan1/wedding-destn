import React, { useState } from 'react';
import Image from 'next/image';

interface tableProps { 
  button?: string;
  initialVenues: {
    id: number;
    name: string;
    description: string;
    contact: string;
    image: string;
  }[];
}
const Table = ({ button, initialVenues}: tableProps) => {
    
    const [venues, setVenues] = useState(initialVenues);
      const [searchTerm, setSearchTerm] = useState('');

      const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const term = event.target.value;
        setSearchTerm(term);
        
        if (term.trim() === '') {
          setVenues(initialVenues);
        } else {
          const filteredVenues = initialVenues.filter((venue) => 
            venue.name.toLowerCase().includes(term.toLowerCase()) ||
            venue.description.toLowerCase().includes(term.toLowerCase()) ||
            venue.contact.includes(term)
          );
          setVenues(filteredVenues);
        }
      }
      
    return (
      <div className="mx-auto p-2">
            {/* Search Box */}
            <div className="flex justify-end mb-4 gap-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border rounded-md py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-red-800"
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              {button && <button className="border-2 border-red-400 p-1 text-center rounded-md hover:bg-red-300 transition-all duration-300 flex flex-row-reverse justify-center items-center gap-2">{button}<Image alt='logout' src='/icons/plus.svg' height={20} width={20} /> </button>}
            </div>
      
            {/* Venue Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-red-900 text-white">
                    <th className="py-3 px-4 text-left">Venue Name</th>
                    <th className="py-3 px-4 text-left">Description</th>
                    <th className="py-3 px-4 text-left">Contact details</th>
                    <th className="py-3 px-4 text-right"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {venues.map((venue) => (
                    <tr key={venue.id} className="hover:bg-gray-50">
                      <td className="py-3 px-4 flex items-center">
                        <div className="h-12 w-10 mr-3 relative">
                          <Image 
                            src={venue.image} 
                            alt={venue.name}
                            fill
                            objectFit="cover"
                            className="rounded-md"
                          />
                        </div>
                        <span>{venue.name}</span>
                      </td>
                      <td className="py-3 px-4">{venue.description}</td>
                      <td className="py-3 px-4">{venue.contact}</td>
                      <td className="py-3 px-4 text-right space-x-2">
                        <button className="text-green-600 hover:text-green-800">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {venues.length === 0 && (
                <div className="text-center py-4 text-gray-500">
                  No venues found matching your search.
                </div>
              )}
            </div>
          </div>
    )}

    

export default Table;