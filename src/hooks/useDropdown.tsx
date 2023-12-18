import { useState } from "react";

const useDropdown = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  const close = () => setOpen(false);

  return { open, toggle, close };
};

export default useDropdown;
