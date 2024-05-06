import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
  expense: {
    width: "100%",
    backgroundColor: COLORS.gray,
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  containerIcon: {
    flex: 3
  },
  expenseIcon:{
    width: 35,
    height: 35
  },
  containerCategory: {
    flex: 10
  },
  containerValue: {
    flex: 4
  },
  expenseCategory: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.dark_gray,
    fontWeight: "bold"
  },
  expenseDescription: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.dark_gray,
  },
  expenseValue: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.dark_gray,
    fontWeight: "bold",
    textAlign: "right"
  }
}