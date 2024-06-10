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
  Modal,
  Rating,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function App() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery("(min-width:1500px)");
  const [open, setOpen] = useState<boolean>(false);

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;

    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <Stack
      display={"flex"}
      flexDirection={"column"}
      // minWidth={isSmallScreen ? "320px" : "480px"}
      // bgcolor={'red'}
      pl={isLargeScreen ? "15%" : 0}
      pr={isLargeScreen ? "15%" : 0}
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
        <Box
          flex={1}
          p={5}
          alignContent={"space-around"}
          // bgcolor={'blue'}
        >
          <Stack display={"flex"} flexDirection={"row"}>
            <Button
              variant="text"
              sx={{
                color: "black",
                fontSize: "1.25rem",
                fontWeight: "bold",
              }}
              href="https://map.naver.com/p/search/%EC%B9%B4%ED%8E%98%ED%9E%88%EC%96%B4%EB%A1%9C/place/1532760380?c=16.00,0,0,0,dh&placePath=/home"
              target="_blank"
            >
              카페히어로
            </Button>
            <Typography variant="h6" mr={2} alignContent={"center"}>
              카페
            </Typography>
            <Rating
              sx={{
                color: theme.palette.primary.main,
                alignItems: "center",
                pb: 1,
              }}
              name="rate"
              value={5}
            />
          </Stack>
          <Stack display={"flex"}>
            <Stack>
              <Typography
                p={2}
                whiteSpace={"pre-wrap"}
                fontSize={"0.8rem"}
                letterSpacing={1}
                lineHeight={1.8}
              >{`고급 커피원두를 사용하여 커피가 맛있습니다
레몬,자몽,청귤,대추,생강,바닐라시럽등 대부분의 카페 재료는 모두 수제로 만들고 있습니다
디저트로 말렌카 케이크가 인기있고, 크로플.수제쿠키.스콘.모카번 등
 울산의 임영웅 팬카페입니다 항상 건강하시고 행복하세요
→ 8시30분 마지막 주문하시면 매장내에서 드시고 가실수 있습니다`}</Typography>
            </Stack>
            <Stack mt={5}>
              <Stack
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
              >
                <Box
                  display={"flex"}
                  p={2}
                  alignItems={"center"}
                  justifyItems={"center"}
                >
                  <PlaceOutlinedIcon color="primary" />
                </Box>
                <Button
                  variant="text"
                  sx={{ color: "black" }}
                  onClick={() => scrollToSection("Location")}
                >
                  경북 안동시 대석4길 9
                </Button>
              </Stack>
              <Stack
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
              >
                <Box
                  display={"flex"}
                  p={2}
                  alignItems={"center"}
                  justifyItems={"center"}
                >
                  <CallIcon color="primary" />
                </Box>
                <Button variant="text" sx={{ color: "black" }}>
                  0507-1438-8120
                </Button>
              </Stack>
              <Stack
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
              >
                <Box
                  display={"flex"}
                  p={2}
                  alignItems={"center"}
                  justifyItems={"center"}
                >
                  <LanguageIcon color="primary" />
                </Box>
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
                // gap={2}
                alignItems={"center"}
              >
                <Box
                  display={"flex"}
                  p={2}
                  alignItems={"center"}
                  justifyItems={"center"}
                >
                  <ChecklistOutlinedIcon color="primary" />
                </Box>
                <Button
                  variant="text"
                  sx={{ color: "black" }}
                  href="https://map.naver.com/p/search/%EC%B9%B4%ED%8E%98%ED%9E%88%EC%96%B4%EB%A1%9C/place/1532760380?c=16.00,0,0,0,dh&placePath=/information"
                  target="_blank"
                >
                  포장, 무선 인터넷, 예약, 유아의자, 주차
                </Button>
              </Stack>
              <Stack
                display={"flex"}
                flexDirection={"row"}
                // gap={2}
                // alignItems={"center"}
              >
                <Box
                  display={"flex"}
                  p={2}
                  // alignItems={"center"}
                  justifyItems={"center"}
                >
                  <InfoOutlinedIcon color="primary" />
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    p={2}
                    whiteSpace={"pre-line"}
                    sx={{
                      color: "black",
                    }}
                  >
                    {`카페 옆 무료주차장 있으나 협소합니다
                카페 옆 주차가 안되시면, 300m인근에 공영주차장이 있습니다 (30분 500원, 60분 1,100원)`}
                  </Typography>
                  <Button
                    variant="contained"
                    // startIcon={<PinDropOutlinedIcon />}
                    onClick={() => setOpen(true)}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: "white",
                      }}
                    >
                      안동 구시장 공영주차장 · 안동시 번영1길 25-12
                    </Typography>
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Stack p={2}>
        <Stack
          id={"Location"}
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

          <NaverCloudContainer
            lat={36.5662431}
            lng={128.7269388}
            height={500}
          />
        </Stack>
      </Stack>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            p: 5,
          }}
        >
          <Stack
            // bgcolor={theme.palette.background.default}
            display={"flex"}
            flexDirection={"row"}
          >
            <Typography
              variant="h6"
              fontWeight={"bold"}
              color={"white"}
              display={"flex"}
            >
              안동 구시장 공영주차장 · 안동시 번영1길 25-12
            </Typography>
          </Stack>
          <NaverCloudContainer
            lat={36.5646828}
            lng={128.7271418}
            height={500}
          />
        </Box>
      </Modal>
    </Stack>
  );
}
