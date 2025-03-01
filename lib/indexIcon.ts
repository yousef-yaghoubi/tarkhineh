// icons/index.js
import IconSearch from '@icons/search-icon.svg';
import IconShopingCard from '@icons/shopping-icon.svg';
import IconProfile from '@icons/profileIcon.svg';
import IconOrderTracking from '@icons/orderTracking.svg';
import IconHeart from '@icons/Heart.svg';
import IconLocation from '@icons/location.svg';
import IconLogout from '@icons/logout.svg';
import IconNavMain from "@icons/home.svg";
import IconNavBranch from "@icons/home-hashtag.svg";
import IconNavMenu from "@icons/menu-board.svg"
import IconNavAbout from "@icons/profile-2user.svg"
import IconCallCalling from "@icons/call-calling.svg"
import IconNavRepresent from "@icons/shop-remove.svg"
interface IconProfileType {
  IconProfile: "IconProfile",
  IconOrderTracking : "IconOrderTracking",
  IconHeart: "IconHeart",
  IconLocation: "IconLocation",
  IconLogout: "IconLogout",
}
interface IconNavType {
  IconNavMain: "IconNavMain",
  IconNavBranch: "IconNavBranch",
  IconNavMenu: "IconNavMenu",
  IconNavRepresent: "IconNavRepresent",
  IconNavAbout: "IconNavAbout",
  IconCallCalling: "IconCallCalling"
}
export const icons = {
  IconSearch,
  IconShopingCard,
  IconProfile,
};

export const iconsProfile : IconProfileType = {
  IconOrderTracking,
  IconHeart,
  IconLocation,
  IconLogout,
  IconProfile,
};

export const iconsNav : IconNavType = {
  IconNavMain,
  IconNavBranch,
  IconNavMenu,
  IconNavRepresent,
  IconNavAbout,
  IconCallCalling
}