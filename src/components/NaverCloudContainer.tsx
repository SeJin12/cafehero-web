import {
  Container as MapDiv,
  NaverMap,
  Marker,
  NavermapsProvider,
  useNavermaps,
} from "react-naver-maps";
import NaverCloudMap from "./NaverCloudMap";

const NaverCloudContainer = () => {
  const NEXT_PUBLIC_NAVER_MAP_CLIENT_ID =
    process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID || "";

  return (
    <NavermapsProvider ncpClientId={NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}>
      <NaverCloudMap />
    </NavermapsProvider>
  );
};

export default NaverCloudContainer;
