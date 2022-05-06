import React from "react";
import "./Sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';
import BugReportRoundedIcon from '@mui/icons-material/BugReportRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">BugTracker</span>
      </div>
      <hr />

      <div className="center">
        <ul>
          
          <li>
              <DashboardIcon className="icon"/>
            <span>Dashboard</span>
          </li>

          <li>
              <SupervisedUserCircleRoundedIcon className="icon"/>
            <span>Users</span>
          </li>

          <li>
              <BugReportRoundedIcon className="icon"/>
            <span>Tickets</span>
          </li>

          <li>
              <QueryStatsRoundedIcon className="icon"/>
            <span>Stats</span>
          </li>

          <li>
              <AccountCircleOutlinedIcon className="icon"/>
            <span>Profile</span>
          </li>

          <li>
              <SettingsOutlinedIcon className="icon"/>
            <span>Settings</span>
          </li>

          <li>
            <ExitToAppRoundedIcon className="icon"/>
            <span>Log Out</span>
          </li>

        
        </ul>
      </div>
      <div className="bottom">
          <div className="colorOption"></div>
          <div className="colorOption"></div>
          <div className="colorOption"></div>
          </div>
    </div>
  );
};

export default Sidebar;
