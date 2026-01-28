import * as React from "react"
import { cn } from "@/lib/utils"

  export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'glass' | 'accent';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    // Base styles
    const baseStyles = "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 duration-200"
    
    // Variants
    const variants = {
      default: "bg-primary text-white hover:bg-primary-600 shadow-lg shadow-primary/25 hover:shadow-primary/40",
      secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-200",
      outline: "border-2 border-primary text-primary bg-transparent hover:bg-primary/5",
      ghost: "hover:bg-slate-100 hover:text-slate-900",
      glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 shadow-lg hover:shadow-xl",
      accent: "bg-accent text-white hover:bg-accent-600 shadow-lg shadow-accent/25 hover:shadow-accent/40",
    }
    
    // Sizes
    const sizes = {
      default: "h-11 px-8 py-2",
      sm: "h-9 rounded-lg px-4 text-xs",
      lg: "h-14 rounded-2xl px-10 text-base",
      icon: "h-10 w-10",
    }

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
