// src/components/Header.tsx
import React from 'react';
import { HeaderData } from '../types/resumeTypes';

interface HeaderProps {
  data: HeaderData;
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  return (
      <header className="mb-4">
          <div className="flex items-baseline justify-between">
              <h1 className="text-3xl font-bold">{data.name}</h1>
              <h2 className="text-xl text-gray-700">{data.title}</h2>
          </div>

          <div className="grid grid-cols-12 gap-2 mt-3 text-sm">
              <div className="col-span-5 flex items-center">
                  <span className="font-medium mr-1">Email:</span>
                  <span>{data.contact.email}</span>
              </div>

              <div className="col-span-3 flex items-center">
                  <span className="font-medium mr-1">Phone:</span>
                  <span>{data.contact.phone}</span>
              </div>

              <div className="col-span-4 flex items-center">
                  <span className="font-medium mr-1">Location:</span>
                  <span>{data.contact.location}</span>
              </div>

              {data.contact.linkedin && (
                  <div className="col-span-5 flex items-center">
                      <span className="font-medium mr-1">LinkedIn:</span>
                      <span>{data.contact.linkedin}</span>
                  </div>
              )}

              {data.contact.github && (
                  <div className="col-span-3 flex items-center">
                      <span className="font-medium mr-1">GitHub:</span>
                      <span>{data.contact.github}</span>
                  </div>
              )}

              {data.contact.website && (
                  <div className="col-span-4 flex items-center">
                      <span className="font-medium mr-1">Website:</span>
                      <span>{data.contact.website}</span>
                  </div>
              )}
          </div>

          <div className="mt-4 border-b-2 border-gray-300"></div>
      </header>
  );
};

export default Header;
