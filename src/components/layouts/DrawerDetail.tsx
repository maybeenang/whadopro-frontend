import {
  Button,
  Drawer,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import useDrawer from "../../hooks/useDrawer";
import { useState } from "react";

let toggleDrawer = () => {};

const DrawerDetail = () => {
  const { open, closeDrawer, openDrawer } = useDrawer();

  const [data, setData] = useState({});

  toggleDrawer = (showDrawer: boolean, data: unknown) => {
    console.log("showDrawer", showDrawer);
    setData(data as { nama: string });
    if (showDrawer) {
      openDrawer();
    } else {
      closeDrawer();
    }
  };

  return (
    <>
      <Drawer
        open={open}
        onClose={closeDrawer}
        className="p-4"
        placement="right"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            {/* {data?.nama} */}
            Asdasdas
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <Typography color="gray" className="mb-8 pr-4 font-normal">
          Material Tailwind features multiple React and HTML components, all
          written with Tailwind CSS classes and Material Design guidelines.
        </Typography>
        <div className="flex gap-2">
          <Button size="sm" variant="outlined">
            Documentation
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </Drawer>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { toggleDrawer };
export default DrawerDetail;
