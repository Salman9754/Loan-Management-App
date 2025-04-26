// @/components/hooks/use-toast.ts
import React from "react";
import { Toast } from "@/components/ui/toaster"; 

export const useToast = () => {
  const toast = (options) => {
   
    Toast({ description: options.description, variant: options.variant });
  };

  return { toast };
};
