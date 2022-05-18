import React from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import {Cookies} from 'universal-cookie'

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './index';
import Logout from '../assets/'
const sideBar= ()=> (
  <div className="channel-list__sideBar">
    <div className='channel-list__sideBar-icon1'>
      <div className='icon1-inner'>
        <img src={HospitalIcon} alt="hospital" width='30' />

      </div>
    </div>
    <div className='channel-list__sideBar-icon1'>
      <div className='icon1-inner'>
        <img src={LogoutIcon} alt="LogOut" width='30' />

      </div>
    </div>
  </div>
)


const ChannelListContainer = () => {
  return <div>ChannelListContainer</div>;
};

export default ChannelListContainer;
