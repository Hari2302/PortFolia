import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names with clsx and resolves Tailwind class conflicts using twMerge.
 * 
 * @param inputs - Class names as strings, arrays, or objects
 * @returns A string of resolved and merged class names
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
