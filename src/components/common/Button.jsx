import { cn } from "../../utils/cn";

export const Button = ({ className, variant = "primary", children, ...props }) => {
  const variants = {
    primary: "bg-premium-gradient text-white hover:shadow-lg hover:scale-105 transition-all",
    secondary: "bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all",
    accent: "bg-accent text-white hover:shadow-md hover:brightness-110 transition-all",
    ghost: "bg-transparent text-darkBlue hover:bg-gray-100 transition-all"
  };

  return (
    <button 
      className={cn(
        "px-6 py-3 rounded-full font-semibold text-sm md:text-base flex items-center justify-center gap-2",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};