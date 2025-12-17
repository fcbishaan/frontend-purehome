"use client";

import React, { useEffect, useState } from "react";


const FABRIC_OPTIONS = [
  "Suede Velvet",
  "Faux Leather",
  "Standard Boucle",
  "Boucle (Premium)",
  "Other Fabric",
];

export default function FabricChooser({
  selected,
  defaultSelected = [],
  onChange,
  namePrefix = "fabric",
  className = "",
}) {
  const isControlled = Array.isArray(selected);
  const [internalSelected, setInternalSelected] = useState(defaultSelected);
  const [otherValue, setOtherValue] = useState("");

  const current = isControlled ? selected : internalSelected;

  useEffect(() => {
    // if otherValue changes and "Other Fabric" is checked include it
    if (current?.includes("Other Fabric")) {
      const withoutOtherText = current.filter((s) => s !== otherValue && s !== "Other Fabric");
      const combined = [...withoutOtherText, "Other Fabric", otherValue].filter(Boolean);
      // only notify if different
      onChange?.(combined);
      if (!isControlled) setInternalSelected(combined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [otherValue]);

  const notifyChange = (next) => {
    if (!isControlled) setInternalSelected(next);
    onChange?.(next);
  };

  const toggleOption = (option) => {
    let next;
    if (current?.includes(option)) {
      next = current.filter((s) => s !== option && s !== otherValue);
      // if removing Other Fabric also clear otherValue
      if (option === "Other Fabric") setOtherValue("");
    } else {
      next = [...(current || []), option];
    }
    notifyChange(next);
  };

  return (
    <fieldset className={`fabric-chooser ${className}`}>
      <legend className="visually-hidden">Choose Fabric</legend>
      <div className="fabric-options">
        {FABRIC_OPTIONS.map((opt, i) => {
          const id = `${namePrefix}-${i}`;
          const checked =
            opt === "Other Fabric"
              ? current?.some((s) => s === "Other Fabric" || s === otherValue)
              : current?.includes(opt);
          return (
            <div key={opt} className="fabric-option">
              <input
                id={id}
                type="checkbox"
                checked={!!checked}
                onChange={() => toggleOption(opt)}
                name={namePrefix}
                value={opt}
                aria-checked={!!checked}
              />
              <label htmlFor={id}>{opt}</label>

              {opt === "Other Fabric" && checked && (
                <input
                  type="text"
                  className="fabric-other-input"
                  placeholder="Specify other fabric"
                  value={otherValue}
                  onChange={(e) => setOtherValue(e.target.value)}
                  onBlur={() => {
                    // ensure OTHER entry included with text
                    const withoutOther = (current || []).filter((s) => s !== "Other Fabric" && s !== otherValue);
                    const next = [...withoutOther, "Other Fabric", e.target.value].filter(Boolean);
                    notifyChange(next);
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .fabric-chooser { margin: .5rem 0; }
        .fabric-option { display: flex; align-items: center; gap: .5rem; margin: .4rem 0; }
        .fabric-other-input { margin-left: 1.5rem; padding: .35rem .5rem; border: 1px solid #ddd; border-radius: 4px; }
        .visually-hidden { position: absolute !important; height: 1px; width: 1px; overflow: hidden; clip: rect(1px, 1px, 1px, 1px); white-space: nowrap; }
      `}</style>
    </fieldset>
  );
}