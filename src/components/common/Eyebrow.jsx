import React from "react";
import { brandColors, grad, borderColor } from "./brand";

const Eyebrow = ({ children }) => {
  return (
    <div
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
      style={{
        background: `linear-gradient(135deg, ${brandColors.primary}0c, ${brandColors.accent}0c)`,
        border: `1.5px solid ${borderColor()}`,
      }}
    >
      <span
        className="w-2 h-2 rounded-full"
        style={{ background: grad.subtle }}
      />
      <span
        className="text-xs font-bold uppercase tracking-widest"
        style={{ color: brandColors.secondary }}
      >
        {children}
      </span>
    </div>
  );
};

export default Eyebrow;
