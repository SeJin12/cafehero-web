import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MenuItemType } from "@/types/menuType";

interface InitialState {
  shoppingList: MenuItemType[];
}

const initialState: InitialState = {
  shoppingList: []
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    init(state) {
      state.shoppingList = [];
    },
    add(state, action: PayloadAction<MenuItemType>) {
      const index = state.shoppingList.findIndex(
        v => v.title === action.payload.title,
      );

      if (index === -1) {
        state.shoppingList.push({
          imagePath: action.payload.imagePath,
          title: action.payload.title,
          description: action.payload.description,
          price: action.payload.price,
          count: 1,
          isRecommand: action.payload.isRecommand
        })
      } else {
        state.shoppingList[index].count = state.shoppingList[index].count + 1;
      }
    },
    delete(state, action) {
      const index = state.shoppingList.findIndex(
        v => v.title === action.payload.title,
      );

      if (index > -1) {
        if (state.shoppingList[index].count > 0) {
          if (state.shoppingList[index].count === 1) {
            state.shoppingList = state.shoppingList.filter((v, i) => i !== index);
          } else {
            state.shoppingList[index].count = state.shoppingList[index].count - 1;
          }
        }
      }
    },
  },
});

export default menuSlice;