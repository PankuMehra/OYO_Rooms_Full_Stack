import React, { useState } from "react";
import Navbarfunction from "./Navbarfunction";
import { RxChevronDown } from "react-icons/rx";

export default function Navbar2() {
  const cities = [
    {
      name: "Bangalore",
      more: [
        "Koramangala",
        "Majestic",
        "Madiwala",
        "Marathahalli",
        "Hsr Layout",
        "Indiranagar",
        "Kempegowda International Airport",
        "Whitefield",
        "Jp Nagar",
        "Jayanagar",
      ],
    },
    {
      name: "Chennai",
      more: [
        "Mount Road",
        "Chennai Central Railway Station",
        "Ecr East Coast Road",
        "T Nagar",
        "Anna Nagar",
        "Velachery",
        "Chennai International Airport",
        "Koyambedu",
        "Guindy",
        "Tambaram",
      ],
    },
    {
      name: "Delhi",
      more: [
        "Mahipalpur",
        "New Delhi Railway Station",
        "Paharganj",
        "Karol Bagh Metro Station",
        "Rohini",
        "Dwarka, New Delhi",
        "Indira Gandhi International Airport",
        "Laxmi Nagar",
        "Lajpat Nagar",
      ],
    },
    {
      name: "Hyderabad",
      more: [
        "Secunderabad  Railway Station",
        "Gachibowli ",
        "Madhapur",
        "LB Nagar",
        "Kukatpally",
        "Ameerpet",
        "Hitech City",
        "Kondapur",
        "Begumpet",
        "Banjara Hills",
      ],
    },
    {
      name: "Kolkata",
      more: [
        "New Town",
        "Howrah Railway Station",
        "Salt Lake City",
        "Kolkata International Airport",
        "Park Street",
        "Sealdah Railway Station",
        "Dum Dum",
        "Esplanade Metro Station",
        "Sector 5 Salt Lake City",
        "Dum Dum Airport 1 No. Gate",
      ],
    },
    {
      name: "Mumbai",
      more: [
        "Andheri East",
        "Vashi",
        "Thane",
        "Dadar",
        "Andheri",
        "Panvel",
        "Bandra",
        "Saki Naka",
        "Malad West",
      ],
    },
    {
      name: "Noida",
      more: [
        "Sector 62",
        "Sector 18",
        "Pari Chowk",
        "Sector 15",
        "Greater Noida",
        "Noida City Centre",
        "Sector 51",
        "Sector 66",
        "Gaziabad",
        "Botanical Garden",
      ],
    },
    {
      name: "Pune",
      more: [
        "Pimpri Chinchwad",
        "Viman Nagar",
        "Shivaji Nagar",
        "Baner",
        "Pune Railway Station",
        "Hinjewadi",
        "Kharadi",
        "Wakad",
        "Hadapsar",
        "Katraj",
      ],
    },
  ];

  return (
    <div className="locationsNav">
      <div className="locations">
        {cities.map((city, index) => (
          <div key={index}>
            <Navbarfunction name={city.name} more={city.more} />
          </div>
        ))}
      </div>
    </div>
  );
}
