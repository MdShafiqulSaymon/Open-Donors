import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }


  return (
    <div className="relative mx-8" >
      <FontAwesomeIcon icon={faBell} className="p-2 rounded-full bg-gray-100" onClick={toggleDropdown}/>
      {isOpen && (
        <div className="absolute top-12 right-0 w-72 bg-white shadow-lg border border-gray-200 divide-y divide-gray-200 rounded-lg">
          <div className="px-4 py-2">
            <p className="text-sm font-medium text-gray-500">Notification Dropdown</p>
          </div>
          <div className="p-2">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">John Doe</p>
                <p className="text-xs text-gray-400">June 10, 2022</p>
                <p className="text-sm">Title: Some Title</p>
              </div>
            </div>
          </div>
          <div className="py-2 px-4">
            <button className="text-sm text-gray-500 hover:text-gray-700">Show More</button>
          </div>
        </div>
      )}
    </div>
  );
}