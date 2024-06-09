"use client";
import menuSlice from "@/slices/memuSlice";
import { useAppDispatch } from "@/store";
import { RootState } from "@/store/reducer";
import { MenuItemType } from "@/types/menuType";
import { formatNumber } from "@/utils/StringUtil";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PaymentIcon from "@mui/icons-material/Payment";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import {
  Box,
  Button,
  Chip,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { useSelector } from "react-redux";
import { menuList } from "./menuItem";

export const scrollToSection = (sectionId: string) => {
  const sectionElement = document.getElementById(sectionId);
  const menuTopElement = document.getElementById("menuTop");

  if (sectionElement && menuTopElement) {
    const offset = sectionElement.offsetTop - menuTopElement.offsetTop;

    const targetScroll = sectionElement.offsetTop - offset;
    sectionElement.scrollIntoView({ behavior: "smooth" });
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  }
};

interface MenuCardProps {
  menu: MenuItemType;
  onClick: (menu: MenuItemType) => void;
}

const width = 700;

const MenuCard = ({ menu, onClick }: MenuCardProps) => {
  return (
    <Stack
      display={"flex"}
      flexDirection={"row"}
      pl={5}
      pr={5}
      mt={1}
      mb={1}
      width={width}
      gap={1}
    >
      <Box alignContent={"center"} width={150}>
        <Image
          width={100}
          height={100}
          src={menu.imagePath}
          alt={menu.title}
          style={{
            borderRadius: 20,
          }}
        />
      </Box>
      <Stack gap={2} p={5}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box display={"flex"} flexDirection={"row"}>
            <Box alignContent={"center"} mr={2}>
              <Typography variant="h5">{menu.title}</Typography>
            </Box>
            {menu.isRecommand && (
              <Box alignContent={"center"}>
                <Chip color="primary" label="대표" size="small" />
              </Box>
            )}
          </Box>
          <Box>
            <Button variant="outlined" onClick={() => onClick(menu)}>
              <AddShoppingCartOutlinedIcon color="primary" />
            </Button>
          </Box>
        </Box>
        <Typography>{menu.description}</Typography>
        <Typography>
          <b>{formatNumber(menu.price)}</b>원
        </Typography>
      </Stack>
    </Stack>
  );
};

export default function MenuScreen() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useAppDispatch();
  const shoppingList = useSelector(
    (state: RootState) => state.menuReducer.shoppingList
  );

  const initMenu = () => {
    dispatch(menuSlice.actions.init());
  };

  const addMenu = (menu: MenuItemType) => {
    dispatch(menuSlice.actions.add(menu));
  };

  const deleteMenu = (menu: MenuItemType) => {
    dispatch(menuSlice.actions.delete(menu));
  };

  return (
    <Stack
      p={5}
      alignItems={"center"}
      minWidth={isSmallScreen ? "320px" : "480px"}
    >
      <Stack id="menuTop">
        <Stack width={width} mb={10}>
          <Box
            border={1}
            borderColor={theme.palette.primary.main}
            display={"flex"}
            alignContent={"center"}
            alignItems={"center"}
            height={50}
            mb={shoppingList.length > 0 ? 5 : 0}
          >
            <Box
              alignItems={"center"}
              display={"flex"}
              width={50}
              justifyContent={"center"}
            >
              <InfoOutlinedIcon color="primary" fontSize="medium" />
            </Box>
            <Typography
              variant="h6"
              // color={theme.palette.primary.main}
              sx={{
                color: "black",
              }}
            >
              메뉴를 담고, 1층에서 주문 내역을 보여주세요 (결제는 1층에서 진행)
            </Typography>
          </Box>
          {shoppingList.length > 0 && (
            <>
              <TableContainer component={Paper}>
                <Table sx={{ width: width }} aria-label="customized table">
                  <TableHead
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                    }}
                  >
                    <TableRow>
                      <TableCell
                        sx={{
                          fontWeight: "bold",
                          fontSize: 14,
                          color: "white",
                          width: 400,
                        }}
                      >
                        메뉴
                      </TableCell>
                      <TableCell
                        sx={{
                          fontWeight: "bold",
                          fontSize: 14,
                          color: "white",
                        }}
                      >
                        가격
                      </TableCell>
                      <TableCell
                        sx={{
                          fontWeight: "bold",
                          fontSize: 14,
                          color: "white",
                        }}
                        align="center"
                      >
                        수량
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {shoppingList.map((row) => (
                      <TableRow key={row.title}>
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{ fontWeight: "600", fontSize: 13 }}
                        >
                          {row.title}
                        </TableCell>
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{ fontSize: 14 }}
                        >
                          <b>{formatNumber(row.price)}</b>원
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ fontWeight: "500", fontSize: 13 }}
                        >
                          <Box display={"flex"} justifyContent={"center"}>
                            <Button onClick={() => deleteMenu(row)}>
                              <RemoveOutlinedIcon />
                            </Button>
                            <Box alignContent={"center"}>{row.count}</Box>
                            <Button onClick={() => addMenu(row)}>
                              <AddOutlinedIcon />
                            </Button>
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Stack
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"end"}
                mt={2}
                alignItems={"center"}
              >
                <Button
                  startIcon={<DeleteOutlineOutlinedIcon />}
                  variant="outlined"
                  onClick={() => initMenu()}
                  sx={{
                    height: 40,
                    fontWeight:'bold'
                  }}
                >
                  초기화
                </Button>
                <Button
                  startIcon={<PaymentIcon />}
                  variant="outlined"
                  sx={{
                    ml: 2,
                    height: 40,
                  }}
                >
                  <Typography color={"black"} fontWeight={"bold"} fontSize={14}>
                    {formatNumber(
                      shoppingList.reduce((sum, item) => {
                        return sum + item.price * item.count;
                      }, 0)
                    ) + " 원"}
                  </Typography>
                </Button>
              </Stack>
            </>
          )}
        </Stack>
      </Stack>
      <Stack id="menuList">
        {menuList.map((menu) => (
          <MenuCard key={menu.title} menu={menu} onClick={addMenu} />
        ))}
      </Stack>
    </Stack>
  );
}
