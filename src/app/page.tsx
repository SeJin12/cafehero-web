"use client";

import HomeImage from "@/assets/cafehero.jpg";
import NaverCloudContainer from "@/components/NaverCloudContainer";
import CallIcon from "@mui/icons-material/Call";
import ChecklistOutlinedIcon from "@mui/icons-material/ChecklistOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import {
  Box,
  Button,
  Rating,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";

export default function App() {
  const theme = useTheme();
  // const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isLargeScreen = useMediaQuery('(min-width:1500px)');

  return (
    <Stack
      display={"flex"}
      flexDirection={"column"}
      // minWidth={isSmallScreen ? "320px" : "480px"}
      // bgcolor={'red'}
      pl={isLargeScreen ? '15%' : 0}
      pr={isLargeScreen ? '15%' : 0}
    >
      <Stack
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        mb={2}
        alignContent={"space-around"}
      >
        <Box
          flex={1}
          bgcolor={"#00ffff"}
          position="relative"
          // maxWidth={500}
          // minWidth={isSmallScreen ? "320px" : "480px"}
        >
          <Image src={HomeImage} alt="home" layout="fill" objectFit="cover" />
        </Box>
        <Box flex={1} p={5} alignContent={"space-around"} 
        // bgcolor={'blue'}
        >
          <Stack display={"flex"} flexDirection={"row"}>
            <Typography variant="h5" fontWeight={"bold"} mr={2}>
              카페히어로
            </Typography>
            <Typography variant="h6" mr={3}>
              카페
            </Typography>
            <Rating
              sx={{
                color: theme.palette.primary.main,
              }}
              name="rate"
              value={5}
            />
          </Stack>
          <Stack display={"flex"}>
            <Stack pt={5}>
              <Typography
                whiteSpace={"pre-wrap"}
                fontSize={"0.8rem"}
                letterSpacing={1}
                lineHeight={1.5}
              >{`고급 커피원두를 사용하여 커피가 맛있습니다
 레몬,자몽,청귤,대추,생강,바닐라시럽등 대부분의 카페 재료는 모두 수제로 만들고 있습니다
 디저트로 말렌카 케잌 인기있고, 크로플.수제쿠키.스콘.모카번 등
 울산의 임영웅 팬카페입니다 항상 건강하시고 행복하세요
→ 8시30분 마지막 주문하시면 매장내에서 드시고 가실수 있습니다`}</Typography>
            </Stack>
            <Stack mt={5}>
              <Stack
                display={"flex"}
                flexDirection={"row"}
                gap={2}
                alignItems={"center"}
              >
                <PlaceOutlinedIcon color="primary" />
                <Button variant="text" sx={{ color: "black" }}>
                  경북 안동시 대석4길 9
                </Button>
              </Stack>
              <Stack
                display={"flex"}
                flexDirection={"row"}
                gap={2}
                alignItems={"center"}
              >
                <CallIcon color="primary" />
                <Button variant="text" sx={{ color: "black" }}>
                  0507-1438-8120
                </Button>
              </Stack>
              <Stack
                display={"flex"}
                flexDirection={"row"}
                gap={2}
                alignItems={"center"}
              >
                <LanguageIcon color="primary" />
                <Button
                  variant="text"
                  href="https://blog.naver.com/hc105402"
                  target="_blank"
                  sx={{
                    color: "black",
                  }}
                >
                  https://blog.naver.com/hc105402
                </Button>
              </Stack>
              <Stack
                display={"flex"}
                flexDirection={"row"}
                gap={2}
                alignItems={"center"}
              >
                <ChecklistOutlinedIcon color="primary" />
                <Button variant="text" sx={{ color: "black" }}>
                  포장, 무선 인터넷, 예약, 유아의자, 주차
                </Button>
              </Stack>
              <Stack
                display={"flex"}
                flexDirection={"row"}
                gap={2}
                alignItems={"center"}
              >
                <InfoOutlinedIcon color="primary" />
                <Typography
                  variant="h6"
                  p={2}
                  whiteSpace={"pre-line"}
                  sx={{
                    color: "black",
                  }}
                >
                  {`카페 옆 무료주차장 있으나 협소합니다
                카페 옆 주차가 안되시면, 300m인근에 공영주차장이 있습니다
                안동구시장공영주차장 · 안동시 번영1길 25-12
                30분 500원, 60분 1,100원`}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Stack p={2}>
        <Stack
          height={50}
          justifyContent={"center"}
          // borderRadius={theme.shape.borderRadius}
          pl={1}
          borderBottom={1}
          mb={2}
        >
          <Box display={"flex"}>
            <Box display={"flex"} alignItems={"center"} mr={1}>
              <PinDropOutlinedIcon color="primary" fontSize="medium" />
            </Box>
            <Typography
              variant="h5"
              fontWeight={"500"}
              // textAlign={"center"}
              // color={"white"}
              display={"flex"}
            >
              찾아 오시는 길
            </Typography>
          </Box>
        </Stack>
        <Stack>
          <Typography>
            <ul>
              <li> 안동역, 안동터미널에서 버스 212번 승차</li>
              <li>
                20분 정도 소요 후 안동교회 앞 승강장에서 내려서 바로 우회전 도착
              </li>
            </ul>
          </Typography>

          <NaverCloudContainer />
        </Stack>
      </Stack>
    </Stack>
  );
}
