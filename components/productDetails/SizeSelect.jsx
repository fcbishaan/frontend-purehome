"use client";

import { useState } from "react";

const sizes = [
  { id: "values-2-Seater", value: "2-Seater", price: 79.99, disabled: false },
  { id: "values-3-Seater", value: "3-Seater", price: 79.99, disabled: false },
  { id: "values-4-Seater", value: "4-Seater", price: 89.99, disabled: false },
  { id: "values-xl", value: "5-Seater", price: 89.99, disabled: false },
  { id: "values-xxl", value: "6-Seater", price: 89.99, disabled: true },
];

export default function SizeSelect() {
  const [selectedSize, setSelectedSize] = useState("L"); // Default value is "L"

  const handleChange = (value) => {
    setSelectedSize(value);
  };
  return (
    <div className="variant-picker-item">
      <div className="d-flex justify-content-between mb_12">
        <div className="variant-picker-label">
          selected size:
          <span className="text-title variant-picker-label-value">
            {selectedSize}
          </span>
        </div>
        <a
          href="#size-guide"
          data-bs-toggle="modal"
          className="size-guide text-title link"
        >
          Size Guide
        </a>
      </div>
      <div className="variant-picker-values gap12">
        {sizes.map(({ id, value, price, disabled }) => (
          <div key={id} onClick={() => handleChange(value)}>
            <input
              type="radio"
              id={id}
              checked={selectedSize === value}
              disabled={disabled}
              readOnly
            />
            <label
              className={`style-text size-btn-rect ${disabled ? "type-disable" : ""
                }`}
              htmlFor={id}
              data-value={value}
              data-price={price}
            >
              <div className="size-content-rect">
                <span className="text-title size-name">{value}</span>
                <span className="size-price text-caption-1">₹{price}</span>
              </div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
