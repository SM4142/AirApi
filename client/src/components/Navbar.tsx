import React from "react";

export default function NavbarHome() {
  return (
    <div className="flex justify-between mb-6 text-[15px] text-gray-700">
      <h1 className="font-bold text-[19px]">Plane Scape</h1>
      <nav>
        <ul className="flex flex-row gap-3">
          <li>Deals</li>
          <li>Discovery</li>
          <li>
            <img src="" />
            Joane Smith
          </li>
        </ul>
      </nav>
    </div>
  );
}
