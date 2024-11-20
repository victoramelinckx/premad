"use client";

export const Pill = ({ text }: { text: string }) => {
  return (
    <div className="max-sm:self-start bg-secondary-300/20  px-3 border-2 border-primary-500/15  shadow-2xl shadow-secondary-300 rounded-full text-xs font-semibold leading-6 text-primary-500 inline-block">
      <span>{text}</span>
    </div>
  );
};
