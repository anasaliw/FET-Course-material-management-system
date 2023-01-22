import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import { styled, Box } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useContext } from "react";
import { DataProvider } from "../../Context/ContextAPI";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import ForumIcon from "@mui/icons-material/Forum";

const LinkComponent = styled(ListItem)`
  & > a.active {
    background-color: #2f506c;
    color: white;
    & > div {
      color: white;
    }
  }

  & > a:hover {
    color: "#2f506c";
    font-weight: 600;
  }
`;

function NavList({ open }) {
  const navigate = useNavigate();
  const { setTeacherAccount } = useContext(DataProvider);
  const logOut = async () => {
    console.log("Logout invoked form services");
    const user = localStorage.removeItem("teacher");
    navigate("/");
    setTeacherAccount(true);
  };
  const listItem = [
    { id: 1, name: "Dashboard", icon: <DashboardIcon />, route: "dashboard" },
    {
      id: 2,
      name: "Forum",
      icon: <ForumIcon />,
      route: "forum",
    },
    { id: 3, name: "Material", icon: <LocalLibraryIcon />, route: "material" },
  ];
  return (
    <>
      <List>
        {listItem.map((list) => (
          <LinkComponent key={list.id} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              className='LinkComponent'
              component={NavLink}
              to={list.route}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 1,
                  justifyContent: "center",
                  color: "#2f506c",
                }}
              >
                {list.icon}
              </ListItemIcon>
              <ListItemText
                primary={list.name}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </LinkComponent>
        ))}
      </List>
      <List style={{ marginTop: "auto" }}>
        <Box>
          <LinkComponent disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={logOut}
              className='LinkComponent'
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 1,
                  justifyContent: "center",
                  color: "#2f506c",
                }}
              >
                <PowerSettingsNewIcon />
              </ListItemIcon>
              <ListItemText primary={"Logout"} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </LinkComponent>
        </Box>
      </List>
    </>
  );
}

export default NavList;
