import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <FaIcons.FaHome />,
  },
  {
    title: "About",
    path: "/about",
    icon: <FaIcons.FaInfo />,
  },
  {
    title: "Team",
    path: "/team",
    icon: <FaIcons.FaUsers />,
  },
  {
    title: "Services",
    path: "/service",
    icon: <FaIcons.FaServicestack />,
  },
  {
    title: "Product",
    path: "",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Semua Produk",
        path: "/produk",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Alat Panen",

        cName: "sub-nav",
      },
      {
        title: "Harvesting Sickle (Egrek)",
        path: "/produk/1",
        icon: <IoIcons.IoIosCog />,
        cName: "sub-nav",
      },
      {
        title: " Chisel (Dodos)",
        path: "/produk/2",
        icon: <IoIcons.IoIosCog />,
        cName: "sub-nav",
      },
      {
        title: "Harvesting Axe (Kampak Buah)",
        path: "/produk",
        icon: <IoIcons.IoIosCog />,
        cName: "sub-nav",
      },
      {
        title: " Loading Spike (Tojok)",
        path: "/produk/3",
        icon: <IoIcons.IoIosCog />,
        cName: "sub-nav",
      },
      {
        title: "Hook (Gancu)",
        path: "/produk/4",
        icon: <IoIcons.IoIosCog />,
        cName: "sub-nav",
      },
      {
        title: "Pelengkap Panen",

        cName: "sub-nav",
      },

      {
        title: "Klem Egrek",
        path: "/produk/5",
        icon: <IoIcons.IoIosCog />,
        cName: "sub-nav",
      },
      {
        title: "Sarung Tangan",
        path: "/produk/6",
        icon: <IoIcons.IoIosCog />,
        cName: "sub-nav",
      },
      {
        title: "Piring Buah Sawit",
        path: "/produk/7",
        icon: <IoIcons.IoIosCog />,
        cName: "sub-nav",
      },
      {
        title: "Holder Egrek",
        path: "/produk/8",
        icon: <IoIcons.IoIosCog />,
        cName: "sub-nav",
      },
      {
        title: "Batu Asah",
        path: "/produk/9",
        icon: <IoIcons.IoIosCog />,
        cName: "sub-nav",
      },
      {
        title: "Keranjang Buah",
        path: "/produk/10",
        icon: <IoIcons.IoIosCog />,
        cName: "sub-nav",
      },
      {
        title: "Garuh",
        path: "/produk/11",
        icon: <IoIcons.IoIosCog />,
        cName: "sub-nav",
      },
      {
        title: "Penutup Keamanan",

        cName: "sub-nav",
      },
      {
        title: "Sarung Egrek",
        path: "/produk/12",
        icon: <IoIcons.IoIosCog />,
        cName: "sub-nav",
      },
      {
        title: "Sarung Dodos",
        path: "/produk/13",
        icon: <IoIcons.IoIosCog />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <FaIcons.FaPhone />,
  },
];
