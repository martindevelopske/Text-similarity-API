import { FC, HTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const HeadingVariants = cva(
  "text-black dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tighter",
  {
    variants: {
      size: {
        default: "text-4xl md:text-5xl lg: text-6xl",
        lg: "text-5xl md:text-6xl lg: text-7xl",
        sm: "text-2xl md:text-3xl lg: text-4xl",
     
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);
interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof HeadingVariants> {}

//foward ref
const LargeHeading = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, children, size, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        {...props}
        className={cn(HeadingVariants({ size, className }))}
      >
        {children}
      </h1>
    );
  }
);
LargeHeading.displayName= "LargeHeading"
export default LargeHeading;
