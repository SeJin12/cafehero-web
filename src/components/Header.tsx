"use client";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  height: string;
  currentPath?: string;
}

type ItemType = {
  path: string;
  title: string;
};

const items: (ItemType | undefined)[] = [
  {
    path: "/",
    title: "홈",
  },
  {
    path: "/menu",
    title: "메뉴",
  },
  ,
  {
    path: "/gallery",
    title: "갤러리",
  },
];

const filteredItems: ItemType[] = items.filter(
  (item): item is ItemType => item !== undefined
);

const Header = (props: Props) => {
  const theme = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Stack
      position={"fixed"}
      top={0}
      left={0}
      width={"100%"}
      borderBottom={1}
      zIndex={1002}
      height={props.height}
      display={"flex"}
      justifyContent={"space-between"}
      flexDirection={"row"}
      pl={"5%"}
      pr={"5%"}
      bgcolor={theme.palette.background.default}
    >
      <Box alignContent={"center"}>
        {/* <Image src={NEXT} alt="logo" height={40} width={80} /> */}
        <Typography
          color={theme.palette.primary.main}
          sx={{
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          CAFE HERO
        </Typography>
      </Box>
      <Box display={"flex"} flexDirection={"row"}>
        {filteredItems.map((item) => (
          <Box key={item.path} ml={1} mr={1} alignContent={"center"}>
            <Link href={item.path}>
              <Button
                variant={pathname === item.path ? "contained" : "outlined"}
              >
                {item.title}
              </Button>
            </Link>
          </Box>
        ))}
      </Box>
    </Stack>
  );
};

export default Header;
