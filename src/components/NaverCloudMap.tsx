import {
  Container as MapDiv,
  Marker,
  NaverMap,
  useNavermaps,
} from "react-naver-maps";

const NaverCloudMap = () => {
  const navermaps = useNavermaps();
  const lat = 36.5662431;
  const lng = 128.7269388;
  const position = new naver.maps.LatLng(lat, lng);

  return (
    <MapDiv
      style={{
        height: 500
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
          // icon={marker}
          //   animation={naver.maps.Animation.DROP}
        />
      </NaverMap>
    </MapDiv>
  );
};

export default NaverCloudMap;
