import { cn } from "@/lib/utils";

interface TypographyProps {
  variant?: "h1" | "h2" | "h3" | "p" | "small";
  className?: string;
  children: React.ReactNode;
}

export function Typography({ variant = "p", className, children }: TypographyProps) {
  const baseStyles = {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-semibold",
    h3: "text-2xl font-medium",
    p: "text-base",
    small: "text-sm",
  };

  return (
    <div className={cn(baseStyles[variant], className)}>
      {children}
    </div>
  );
}