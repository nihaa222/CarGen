// import React, { useState } from "react";
// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   Link,
//   Button,
//   NavbarMenuToggle,
//   NavbarMenu,
//   NavbarMenuItem,
// } from "@nextui-org/react";
// import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../Redux/authSlice";

// const NavbarComponent = () => {
//   const loggedIn = useSelector((state) => state.auth.isLoggedIn);
//   const userData = useSelector((state) => state.auth.data);
//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     dispatch(logout());
//   };
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const menuItems = [
//     "Profile",
//     "Dashboard",
//     "Activity",
//     "Analytics",
//     "System",
//     "Deployments",
//     "My Settings",
//     "Team Settings",
//     "Help & Feedback",
//     "Log Out",
//   ];

//   return (
//     <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
//       <NavbarMenuToggle
//         aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//         className="sm:hidden"
//       />
//       <NavbarBrand>
//         <div className="logo">
//           <h1>My App</h1>
//         </div>
//       </NavbarBrand>
//       <NavbarContent className="nav-links" justify="center">
//         <NavbarItem>
//           <Link color="foreground" href="/">
//             Home
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="foreground" href="/about">
//             About
//           </Link>
//         </NavbarItem>
//         {loggedIn ? (
//           <>
//             <NavbarItem>
//               <Link color="foreground" href="/profile">
//                 Profile
//               </Link>
//             </NavbarItem>
//             <NavbarItem>
//               <Button color="error" onClick={handleLogout}>
//                 Logout
//               </Button>
//             </NavbarItem>
//             <NavbarItem>
//               <span>Welcome, {userData.name}</span>
//             </NavbarItem>
//           </>
//         ) : (
//           <>
//             <NavbarItem>
//               <Link color="foreground" href="/signin">
//                 Login
//               </Link>
//             </NavbarItem>
//             <NavbarItem>
//               <Link color="foreground" href="/signup">
//                 Sign Up
//               </Link>
//             </NavbarItem>
//           </>
//         )}
//       </NavbarContent>
//       <NavbarMenu open={isMenuOpen} onChange={setIsMenuOpen}>
//         {menuItems.map((item, index) => (
//           <NavbarMenuItem key={`${item}-${index}`}>
//             <Link
//               color={
//                 index === 0
//                   ? "primary"
//                   : index === menuItems.length - 1
//                   ? "danger"
//                   : "foreground"
//               }
//               className="w-full"
//               href={`/${item}`}
//               size="lg"
//             >
//               {item}
//             </Link>
//           </NavbarMenuItem>
//         ))}
//       </NavbarMenu>
//     </Navbar>
//   );
// };

// export default NavbarComponent;

import { Avatar, Button } from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import { useLocation } from "react-router-dom";
import { Input } from "@nextui-org/input";
// import { FaSearch } from "react-icons/fa";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useMemo, useState } from "react";
// import { RiArrowDropDownLine } from "react-icons/ri";

const NavbarOne = () => {
  // const handleClick = () => {
  //   setClicked(true);
  // };
  // const [clicked, setClicked] = useState(false);
  const [selectedKeys1, setSelectedKeys1] = useState(["Type of Vehicle"]);
  const [selectedKeys2, setSelectedKeys2] = useState(["Brand"]);
  const [selectedKeys3, setSelectedKeys3] = useState(["Kms travelled"]);
  const [selectedKeys4, setSelectedKeys4] = useState(["Fuel type"]);
  const [selectedKeys5, setSelectedKeys5] = useState(["Transmission"]);

  console.log(selectedKeys1);

  const selectedValue1 = useMemo(
    () => Array.from(selectedKeys1).join(", ").replaceAll("_", " "),
    [selectedKeys1]
  );

  const selectedValue2 = useMemo(
    () => Array.from(selectedKeys2).join(", ").replaceAll("_", " "),
    [selectedKeys2]
  );
  const selectedValue3 = useMemo(
    () => Array.from(selectedKeys3).join(", ").replaceAll("_", " "),
    [selectedKeys3]
  );
  const selectedValue4 = useMemo(
    () => Array.from(selectedKeys4).join(", ").replaceAll("_", " "),
    [selectedKeys4]
  );
  const selectedValue5 = useMemo(
    () => Array.from(selectedKeys5).join(", ").replaceAll("_", " "),
    [selectedKeys5]
  );

  console.log(selectedValue2);

  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <>
      <div className="flex items-center max-w-[1900] mx-auto justify-between px-4 py-4 pb-3 border-b-2">
        <div className=" flex">
          <Button radius="none">Logo</Button>
          <div className="flex gap-6 mx-6">
            <Link
              href="/"
              className={currentRoute === "/" ? "text-blue-600" : "text-black"}
              underline={currentRoute === "/" ? "always" : "never"}
            >
              Buy
            </Link>
            <Link
              href="/sell"
              className={
                currentRoute === "/sell" ? "text-blue-600" : "text-black"
              }
              underline={currentRoute === "/sell" ? "always" : "never"}
            >
              Sell
            </Link>
          </div>
        </div>

        <div className=" flex gap-1 md:gap-8 items-center">
          {/* <Button isIconOnly className="inline md:hidden ">
            <FaSearch className="ml-3" />
          </Button> */}

          <Input className="hidden md:inline" placeholder="Search vehicle" />
          <div>
            <Button
              className="hidden md:inline"
              color="primary"
              variant="bordered"
            >
              Noida
            </Button>
          </div>
          <div>
            <Avatar isDisabled name="Joe" />
          </div>
        </div>
      </div>

      <div className="flex  items-center justify-center md:justify-start">
        <div className="hidden md:flex items-center">
          <p className="ml-6 md:mr-6 mr-2 mb-2">Explore by</p>
        </div>

        <div className="hidden md:flex ">
          <Dropdown className="w-[100px]">
            <DropdownTrigger>
              <Button variant="light">
                {selectedValue1 == "None" ? "Type of Vehicle" : selectedValue1}

                {/* <RiArrowDropDownLine /> */}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              className=""
              aria-label="Single selection example"
              variant="flat"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedKeys1}
              onSelectionChange={setSelectedKeys1}
            >
              <DropdownItem className="" key="text">
                Text
              </DropdownItem>
              <DropdownItem className="" key="number">
                Number
              </DropdownItem>
              <DropdownItem className="" key="date">
                Date
              </DropdownItem>
              <DropdownItem className="" key="single_date">
                Single Date
              </DropdownItem>
              <DropdownItem className="" key="iteration">
                Iteration
              </DropdownItem>
              <DropdownItem className="" key="None">
                None
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="light">
                {selectedValue2 == "None" ? "Brand" : selectedValue2}

                {/* <RiArrowDropDownLine /> */}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Single selection example"
              variant="flat"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedKeys2}
              onSelectionChange={setSelectedKeys2}
            >
              <DropdownItem key="text">Text</DropdownItem>
              <DropdownItem key="number">Number</DropdownItem>
              <DropdownItem key="date">Date</DropdownItem>
              <DropdownItem key="single_date">Single Date</DropdownItem>
              <DropdownItem key="iteration">Iteration</DropdownItem>
              <DropdownItem key="None">None</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="light">
                {selectedValue3 == "None" ? "Kms travelled" : selectedValue3}

                {/* <RiArrowDropDownLine /> */}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Single selection example"
              variant="flat"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedKeys3}
              onSelectionChange={setSelectedKeys3}
            >
              <DropdownItem key="text">Text</DropdownItem>
              <DropdownItem key="number">Number</DropdownItem>
              <DropdownItem key="date">Date</DropdownItem>
              <DropdownItem key="single_date">Single Date</DropdownItem>
              <DropdownItem key="iteration">Iteration</DropdownItem>
              <DropdownItem key="None">None</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="light">
                {selectedValue4 == "None" ? "Fuel type" : selectedValue4}

                {/* <RiArrowDropDownLine /> */}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Single selection example"
              variant="flat"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedKeys4}
              onSelectionChange={setSelectedKeys4}
            >
              <DropdownItem key="text">Text</DropdownItem>
              <DropdownItem key="number">Number</DropdownItem>
              <DropdownItem key="date">Date</DropdownItem>
              <DropdownItem key="single_date">Single Date</DropdownItem>
              <DropdownItem key="iteration">Iteration</DropdownItem>
              <DropdownItem key="None">None</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="light">
                {selectedValue4 == "None" ? "Transmission" : selectedValue5}

                {/* <RiArrowDropDownLine /> */}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Single selection example"
              variant="flat"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedKeys5}
              onSelectionChange={setSelectedKeys5}
            >
              <DropdownItem key="text">Text</DropdownItem>
              <DropdownItem key="number">Number</DropdownItem>
              <DropdownItem key="date">Date</DropdownItem>
              <DropdownItem key="single_date">Single Date</DropdownItem>
              <DropdownItem key="iteration">Iteration</DropdownItem>
              <DropdownItem key="None">None</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default NavbarOne;
