// components/ProductDescription.tsx
import React from "react";

interface Section {
  title: string;
  content: string;
}

interface DescriptionData {
  intro: string;
  sections: Section[];
}

interface ProductDescriptionProps {
  description: DescriptionData;
}

export const ProductDescription = ({
  description,
}: ProductDescriptionProps) => {
  return (
    <div className="max-w-6xl space-y-12 lg:mr-12">
      {/* Introducción */}
      <p className="text-[16px] leading-relaxed text-gray-900">
        {description.intro}
      </p>

      {/* Secciones */}
      {description.sections.map((section, index) => (
        <div key={index} className="space-y-6">
          <h3 className="text-xl lg:text-2xl font-medium">{section.title}</h3>
          <div className="leading-loose lg:leading-loose tracking-[.03em] font-[450] text-[16px] text-gray-900">
            {section.content.split("\n").map((line, i) => (
              <p
                key={i}
                className="mb-2 pl-6 relative  before:absolute before:left-0 before:text-primary-500"
              >
                {line.trim()}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
