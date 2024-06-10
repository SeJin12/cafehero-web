import {
  Container as MapDiv,
  NaverMap,
  Marker,
  NavermapsProvider,
  useNavermaps,
} from "react-naver-maps";
import NaverCloudMap from "./NaverCloudMap";

interface Props {
  lat: number;
  lng: number;
  height: number;
}

const NaverCloudContainer = (props: Props) => {
  const NEXT_PUBLIC_NAVER_MAP_CLIENT_ID =
    process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID || "";

  return (
    <NavermapsProvider ncpClientId={NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}>
      <NaverCloudMap lat={props.lat} lng={props.lng} height={props.height} />
    </NavermapsProvider>
  );
};

export default NaverCloudContainer;
