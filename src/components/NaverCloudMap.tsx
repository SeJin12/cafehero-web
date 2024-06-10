"use client";

// import dynamic from "next/dynamic";
import {
  Container as MapDiv,
  Marker,
  NaverMap,
  useNavermaps,
} from "react-naver-maps";

// const MapDiv = dynamic(() => import("react-naver-maps").then(mod => mod.Container), {
//   ssr: false,
// });

interface Props {
  lat: number;
  lng: number;
  height: number;
}

const NaverCloudMap = (props: Props) => {
  const navermaps = useNavermaps();
  const lat = props.lat;
  const lng = props.lng;
  const position = new naver.maps.LatLng(lat, lng);

  return (
    <MapDiv
      style={{
        height: props.height,
      }}
    >
      <NaverMap
        defaultCenter={position}
        zoomControl
        zoomControlOptions={{
          style: navermaps.ZoomControlStyle.SMALL,
          position: navermaps.Position.RIGHT_TOP,
        }}
        // baseTileOpacity={0.8}
        logoControl
        logoControlOptions={{
          position: navermaps.Position.BOTTOM_RIGHT,
        }}
      >
        <Marker
          defaultPosition={{
            lat,
            lng,
          }}
          //   animation={naver.maps.Animation.DROP}
        />
      </NaverMap>
    </MapDiv>
  );
};

export default NaverCloudMap;
