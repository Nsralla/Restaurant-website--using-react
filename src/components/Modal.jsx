import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal ({ children, onClose ,open, className = '' }){
  const dialogRef = useRef();

  useEffect(() => {
    if (open) {
      dialogRef.current.showModal();
    }

    
        return () => dialogRef.current.close();
    
    
  }, [open]);

  return createPortal(
    <dialog onClose={onClose} className={`modal ${className}`} ref={dialogRef}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};


