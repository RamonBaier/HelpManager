import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{

}

export function Button(props : ButtonProps){
    return (
        <button
            className="
                px-4 py-2 
                sm:px-6 sm:py-3   /* telas >= 640px */
                md:px-8 md:py-4   /* telas >= 768px */
                bg-blue-600 
                text-white 
                font-semibold 
                rounded-lg 
                shadow-md 
                hover:bg-blue-700 
                focus:outline-none 
                focus:ring-2 focus:ring-blue-400 
                transition
            "
            {...props} 
            
        />
    )
}