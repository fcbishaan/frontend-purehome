"use client";
import React, { useState } from "react";

export default function QualitySelect() {
  const [selectedQuality, setSelectedQuality] = useState("premium");

  const qualityOptions = [
    {
      id: "standard",
      name: "Standard Quality",
      description: "Good value for everyday use",
      price: "Base Price"
    },
    {
      id: "Sleepwell",
      name: "Sleepwell Quality",
      description: "Good value for everyday use",
      price: "+15%"
    },
    {
      id: "PU Foam",
      name: "PU Foam Quality",
      description: "Good value for everyday use",
      price: "+35%"
    }
  ];

  return (
    <div className="tf-product-info-quality">
      <div className="title mb_12">Choose Foam Quality</div>
      <div className="quality-options">
        {qualityOptions.map((option) => (
          <div
            key={option.id}
            className={`quality-option compact ${selectedQuality === option.id ? 'active' : ''}`}
            onClick={() => setSelectedQuality(option.id)}
          >
            <div className="quality-header">
              <span className="quality-name">{option.name}</span>
              <span className="quality-price">{option.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
