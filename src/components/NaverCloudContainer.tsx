"use client";

import dynamic from "next/dynamic";
// import {
//   NavermapsProvider
// } from "react-naver-maps";
import NaverCloudMap from "./NaverCloudMap";
import { useEffect, useState } from "react";

const NavermapsProvider = dynamic(
  () => import("react-naver-maps").then((mod) => mod.NavermapsProvider),
  { ssr: false }
);

interface Props {
  lat: number;
  lng: number;
  height: number;
}

const NaverCloudContainer = (props: Props) => {
  const NEXT_PUBLIC_NAVER_MAP_CLIENT_ID =
    process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID || "";

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <NavermapsProvider ncpClientId={NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}>
        <NaverCloudMap lat={props.lat} lng={props.lng} height={props.height} />
      </NavermapsProvider>
    )
  );
};

export default NaverCloudContainer;
