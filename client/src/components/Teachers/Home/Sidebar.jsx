import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MuiDrawer from "@mui/material/Drawer";
import { Divider, useMediaQuery } from "@mui/material";
import NavList from "./NavList";
import { ArrowBack } from "@mui/icons-material";
import { Outlet, Route, Routes } from "react-router-dom";
import Teacher from "../Teacher";
import Forum from "../../forum/Forum";
import { useContext } from "react";
import { DataProvider } from "../../Context/ContextAPI";
import AddCourse from "../AddCourse";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  marginTop: 100,
  display: "flex",
  justifyContent: "center",
  // alignItems: "center",
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideBar() {
  const { setTeacherAccount } = useContext(DataProvider);
  React.useEffect(() => {
    if (localStorage.getItem("teacher")) {
      setTeacherAccount(false);
    }
  }, []);
  const [open, setOpen] = React.useState(false);
  console.log(open);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const isTrue = useMediaQuery("(max-width:600px)");
  // console.log(isTrue);
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Drawer
          //   PaperProps={{ sx: { backgroundColor: "#f8cf98" } }}
          sx={{ zIndex: 1000 }}
          variant='permanent'
          open={open}
        >
          <DrawerHeader>
            {open ? (
              <ArrowBack
                style={{
                  marginLeft: "auto",
                  marginRight: 15,
                  cursor: "pointer",
                  color: "#FF6600",
                }}
                onClick={handleDrawerClose}
              />
            ) : (
              <ArrowForwardIcon
                style={{ color: "#FF6600", cursor: "pointer" }}
                onClick={handleDrawerOpen}
              />
            )}
          </DrawerHeader>
          <Divider className='divider' />
          <NavList open={open} />
        </Drawer>

        <Box sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path='/dashboard' element={<Teacher />} />
            <Route path='/dashboard/addCourse' element={<AddCourse />} />
            <Route path='/forum' element={<Forum />} />
          </Routes>
          {/* <Teacher /> */}
          {/* <Forum /> */}
        </Box>
      </Box>
    </>
  );
}
