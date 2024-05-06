import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    padding: 28,
    paddingTop: 32,
    backgroundColor: COLORS.white
  },
  logo: {
    width: 100,
    height: 30
  },
  dashboard: {
    width: "100%",
    backgroundColor: COLORS.blue,
    padding: 28,
    borderRadius: 20,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  dashboardValue:{
    color: COLORS.white,
    fontSize: FONT_SIZE.xl,
    fontWeight: "bold"
  },
  dashboardText:{
    color: COLORS.white,
    fontSize: FONT_SIZE.sm,
  },
  dashboardImg: {
    width: 35,
    height: 60
  },
  expenseTitle: {
    fontSize: FONT_SIZE.md,
    color: COLORS.dark_gray,
    marginTop: 15,
    fontWeight: "bold"
  },
  btnAdd: {
    position: "absolute",
    bottom: 16
  },
  btnAddImage: {
    width: 50,
    height: 50
  }
}
