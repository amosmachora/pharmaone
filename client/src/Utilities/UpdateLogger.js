import { useEffect } from "react";

export function useUpdateLogger(item) {
  useEffect(() => {
    console.log(item);
  }, [item]);
}
