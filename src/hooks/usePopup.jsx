import { useState } from "react";

export function usePopup() {
  const [popup, setPopup] = useState(false);
  function handleClick() {
    setPopup(!popup);
  }
  return {
    popup,
    handleClick,
  };
}
