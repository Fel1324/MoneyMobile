import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
  container: {
    flex: 1,
    padding: 28,
    paddingTop: 32,
    backgroundColor: COLORS.white
  },
  containerField: {
    marginBottom: 40
  },
  inputLabel: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.medium_gray
  },
  inputValue: {
    fontSize: FONT_SIZE.xl,
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 2,
    padding: 5,
    fontWeight: "bold"
  },
  inputText: {
    fontSize: FONT_SIZE.md,
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 2,
    padding: 5
  },
  containerBtn: {
    alignItems: "flex-end"
  },
  btn: {
    backgroundColor: COLORS.blue,
    padding: 10,
    borderRadius: 6,
    width: 115
  },
  btnText: {
    color: COLORS.white,
    fontSize: FONT_SIZE.md,
    textAlign: "center"
  },
  containerDelete: {
    alignItems: "center",
    marginTop: 70
  },
  btnDelete: {
    width: 50,
    height: 50
  },
  inputPicker: {
    fontSize: FONT_SIZE.md,
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 2
  }
}
