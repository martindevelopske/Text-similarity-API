import { ButtonHTMLAttributes, FC } from "react";
import Button from "./ui/Button";
import { toast } from "./ui/Toast";
import { CopyIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  valueToCopy: string;
}

const CopyButton: FC<ButtonProps> = (className, valueToCopy, ...props) => {
  return <Button {...props} type="button" 
  onClick={()=>{
    navigator.clipboard.writeText(valueToCopy);
    toast({
        title: "Copied",
        message: "API key copied to clipboard",
        type: "success"
    })
  }}
  variant="ghost"
  className={cn("", className)}
  >
    <CopyIcon className="h-5 w-5"></CopyIcon>
  </Button>
};

export default CopyButton;
