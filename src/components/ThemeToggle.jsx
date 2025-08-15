
import {Moon, Sun} from "lucide-react";

import { useTheme } from "../contexts/ThemeContext";

import {cn} from "@/lib/utils";


export const ThemeToggle = () => {

    const {theme,toggleTheme} = useTheme();


    return(
        <button
        onClick={toggleTheme}
       className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-none"
      )}
        
        >
            {
                theme === "dark" ? (
                    <Sun className="h-6 w-6 text-yellow-300"/>
                ) : (
                    <Moon className="h-6 w-6 text-blue-300"/>
                )
            }
        

        </button>
    )
}