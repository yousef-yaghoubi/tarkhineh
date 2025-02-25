// icons/index.js
import IconSearch from '@icons/search-icon.svg';
import IconShopingCard from '@icons/shopping-icon.svg';
import IconProfile from '@icons/profileIcon.svg';
import IconOrderTracking from '@icons/orderTracking.svg';
import IconHeart from '@icons/Heart.svg';
import IconLocation from '@icons/location.svg';
import IconLogout from '@icons/logout.svg';

interface IconProfileType {
  IconProfile: "IconProfile",
  IconOrderTracking : "IconOrderTracking",
  IconHeart: "IconHeart",
  IconLocation: "IconLocation",
  IconLogout: "IconLogout",
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
