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
import DoNotDisturbAltOutlinedIcon from '@mui/icons-material/DoNotDisturbAltOutlined';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
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

interface MenuCardProps {
  menu: MenuItemType;
  onClick: (menu: MenuItemType) => void;
}

// const width = 700;

const MenuCard = ({ menu, onClick }: MenuCardProps) => {
  return (
    <Stack
      display={"flex"}
      flexDirection={"row"}
      // pl={5}
      // pr={5}
      // mt={2}
      mb={7}
      // width={width}
      // gap={1}
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
      <Stack gap={1} pl={5} maxWidth={500}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box display={"flex"} flexDirection={"row"}>
            <Box alignContent={"center"} mr={2}>
              <Typography fontSize={"14px"} fontWeight={"bold"}>
                {menu.title}
              </Typography>
            </Box>
            {menu.isRecommand && (
              <Box alignContent={"center"}>
                <Chip color="primary" label="대표" size="small" />
              </Box>
            )}
          </Box>
        </Box>
        <Typography variant="h6">{menu.description}</Typography>
        <Stack
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Box alignContent={"center"}>
            <Typography>
              <b>{formatNumber(menu.price)}</b>원
            </Typography>
          </Box>
          <Box>
            <Button
              variant="outlined"
              size="small"
              onClick={() => onClick(menu)}
            >
              <AddShoppingCartOutlinedIcon color="primary" />
            </Button>
          </Box>
        </Stack>
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
      // alignItems={"center"}
      minWidth={isSmallScreen ? "320px" : "480px"}
    >
      <Stack id="menuTop">
        <Stack mb={10}>
          <Box
            border={1}
            borderColor={theme.palette.primary.main}
            display={"flex"}
            // alignContent={"center"}
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
              flex={1}
              variant="h6"
              // color={theme.palette.primary.main}
              sx={{
                color: "black",
              }}
              whiteSpace={"pre-line"}
            >
              {`메뉴를 담고, 1층에서 주문 내역을 보여주세요 
(결제는 1층 카운터에서 진행)
              `}
            </Typography>
          </Box>
          {shoppingList.length > 0 && (
            <Stack display={"flex"}>
              <TableContainer component={Paper} sx={{ flex: 1 }}>
                <Table aria-label="customized table">
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
                          // width: '50%'
                        }}
                      >
                        메뉴
                      </TableCell>
                      <TableCell
                        sx={{
                          fontWeight: "bold",
                          fontSize: 14,
                          color: "white",
                          width: "25%",
                          textAlign: "center",
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
                          sx={{ fontSize: 14, textAlign: "center" }}
                        >
                          <b>{formatNumber(row.price)}</b>원
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ fontWeight: "500", fontSize: 13, width: "20%" }}
                        >
                          <Box display={"flex"} justifyContent={"center"}>
                            <Button
                              variant="text"
                              onClick={() => deleteMenu(row)}
                            >
                              <RemoveOutlinedIcon />
                            </Button>
                            <Box alignContent={"center"}>{row.count}</Box>
                            <Button variant="text" onClick={() => addMenu(row)}>
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
                  startIcon={<DoNotDisturbAltOutlinedIcon />}
                  variant="outlined"
                  onClick={() => initMenu()}
                  sx={{
                    ml: 2,
                    height: 40,
                    fontWeight: "bold",
                  }}
                >
                  초기화
                </Button>
                <Button
                  startIcon={<LocalCafeOutlinedIcon />}
                  variant="outlined"
                  sx={{
                    ml: 2,
                    height: 40,
                  }}
                >
                  <Typography color={"black"} fontWeight={"bold"} fontSize={14}>
                    {formatNumber(
                      shoppingList.reduce((sum, item) => {
                        return sum +  item.count;
                      }, 0)
                    ) + " 개"}
                  </Typography>
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
            </Stack>
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
