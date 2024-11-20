import { FaCheck } from "react-icons/fa6"
import { PricingTier } from "./Precios"
import { IoCloseOutline } from "react-icons/io5"
import { cn } from "@/lib/utils"

export const CartaPrecio = ({ tier, className = "" }: { tier: PricingTier, className?: string }) => {
  const { popular, name, price, subtitle, period, buttonText, features } = tier

  return (
    <div key={name} className={cn(`flex flex-col w-full ${popular && "sm:max-lg:flex-row"}`, className)}>
      <div
        className={`relative flex flex-col items-start p-8 rounded-[30px] ${popular
          ? "bg-primary-500 text-white sm:max-lg:w-7/12"
          : "bg-[#f3f3F3] text-gray-900"
          }`}
      >
        {popular && (
          <span className="absolute top-4 right-4 px-2 py-[2px] bg-white text-primary-500 text-xs font-semibold rounded-full">
            Most Popular
          </span>
        )}

        <h3 className={`md:text-[26px] text-xl text-[32px] font-bold mb-1`}>{name}</h3>
        <p
          className={`text-sm md:text-base font-medium mb-6 tracking-wider ${popular ? "text-white sm:max-lg:mb-3" : "text-[#1C1C1C99]"
            }`}
        >
          {subtitle}
        </p>

        <h3 className={`text-[28px] md:text-[32px] lg:text-5xl font-bold mb-2`}>{price}</h3>
        <p
          className={`text-sm mb-6 font-medium tracking-wider ${popular ? "text-white" : "text-[#1C1C1C99]"
            }`}
        >
          {period}
        </p>

        <button
          className={`w-full py-3 text-center rounded-full font-semibold transition-colors ${popular
            ? "bg-white text-primary-500 "
            : "bg-transparent border-2 border-current"
            }`}
        >
          {buttonText}
        </button>
      </div>
      <div className={`flex flex-col py-8 ${popular && "sm:max-lg:pl-6 sm:max-lg:py-0"}`}>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex justify-start items-center gap-3 text-[#1C1C1C] font-medium text-[16px]"
            >
              {feature.included ? (
                <FaCheck className="w-6" />
              ) : (
                <IoCloseOutline className="w-6 h-auto text-gray-900/20" />
              )}
              <span className={feature.included ? "" : "opacity-50"}>
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}