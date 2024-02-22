import { useEffect, useState } from "react";

export const useComponentMounted = () => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  
  return hasMounted;
}