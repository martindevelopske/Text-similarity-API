import { FC, HTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const ParagraphVariants = cva(
  "max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center",
  {
    variants: {
      size: {
        default: "text-base sm:text-lg",
        sm: "text-sm sm:text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);
interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof ParagraphVariants> {}

//foward ref
const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, children, size, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={cn(ParagraphVariants({ size, className }))}
      >
        {children}
      </p>
    );
  }
);
Paragraph.displayName= "Paragraph"
export default Paragraph;
