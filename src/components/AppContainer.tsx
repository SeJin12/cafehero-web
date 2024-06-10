"use client";

import store from "@/store";
import { Stack } from "@mui/material";
import { Provider } from "react-redux";

interface Props {
  children: React.ReactNode;
  height: string;
}

const AppContainer = ({ children, height }: Props) => {
  return (
    <Provider store={store}>
      <Stack marginTop={height}
       alignItems={"center"}
       >
        {children}
      </Stack>
    </Provider>
  );
};

export default AppContainer;
