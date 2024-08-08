import React from 'react';
import * as AiIcons from 'react-icons/ai';
// import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
// import * as IoIcons from 'react-icons/io';
import * as HiIcons from "react-icons/hi";
// import * as FiIcons from "react-icons/fi";
import * as BsIcons from "react-icons/bs";
// import * as FcIcons from "react-icons/fc";
import { FaTable } from "react-icons/fa";
import { FaFileWaveform } from "react-icons/fa6";

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Administración del sistema',
    path: '/',
    icon: <RiIcons.RiAdminLine />,
    cName: 'nav-text',
    subNav: [
      {
        title: 'Filiales',
        path: '/admin/aplicaciones',
        icon: <BsIcons.BsFillBuildingsFill />
      }
    ]
  },
  {
    title: 'Reportes',
    path: '/',
    icon: <HiIcons.HiOutlineDocumentReport />,
    cName: 'nav-text'
  },
  {
    title: 'SABI',
    path: '/',
    icon: <RiIcons.RiAdminLine />,
    cName: 'nav-text',
    subNav: [
      {
        title: 'Actividades pendientes',
        path: '/sabi/pendingactivities',
        icon: <FaTable />
      },
      {
        title: 'Registro actividades',
        path: '/sabi/timerecord/',
        icon: <FaFileWaveform />
      }
    ]
  }
];
