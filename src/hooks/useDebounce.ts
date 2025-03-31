import { useState, useEffect } from "react";

export function useDebouncing(inputValue:string, delay:number){
  const [debouncedValue, setDebouncedValue] = useState(inputValue);
  useEffect(() => {
    const timeOut = setTimeout(()=>{
      setDebouncedValue(inputValue)
    }, delay)
    return ()=>{
    clearTimeout(timeOut);
    } 
  },[inputValue, delay])
  return debouncedValue;
}