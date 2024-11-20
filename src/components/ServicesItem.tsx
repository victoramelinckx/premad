import Link from "next/link";

interface ServiceItemProps {
  name: string;
  icon: string;
  description: string;
  features: string[];
  isDental?: boolean;
  href: string;
}

export const ServicesItem = ({
  name,
  icon,
  description,
  features,
  href,
}: ServiceItemProps) => {
  return (
    <li className="flex flex-col justify-between h-auto w-fit bg-white rounded-2xl p-6 shadow-sm">
      {/* Header section */}
      <div className="flex flex-row gap-2 items-center justify-start mt-6">
        <img
          src={icon}
          alt={name}
          className="w-8 h-8 rounded-lg transition-all ease-in-out duration-300 hover:-translate-y-3"
        />
        <h3 className="text-xl font-bold">{name}</h3>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm text-[#1C1C1C99] font-semibold">
        {description}
      </p>

      <div>
        {/* Separator */}
        <div className="h-px bg-gray-200 w-full mt-12 mb-6" />

        {/* Features section */}
        <div className="flex flex-col gap-4">
          <ul className="flex flex-col gap-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-primary-500 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-xs text-gray-700 font-semibold">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <Link href={href}>
          <button className="w-full mt-6 bg-primary-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-400 transition-colors">
            Más información
          </button>
        </Link>
      </div>
    </li>
  );
};
