import { createMuiTheme as createTheme } from "./theme";
import styles from "./themeStyles";
import { createMuiTheme } from "@material-ui/core/styles";
import { merge } from "lodash";

jest.mock("@material-ui/core/styles", () => ({
  createMuiTheme: jest.fn()
}));

jest.mock("./themeStyles", () => ({
  styles: {
    layout: {
      header: {
        height: "60px",
        color: "#ffffff"
      }
    }
  }
}));

describe("Theme", () => {
  it("should have a createTheme export defined", () => {
    expect(createTheme).toBeDefined();
  });

  it("should have the createTheme export defined as a function", () => {
    expect(typeof createTheme).toBe("function");
  });

  it("should have the theme factory call `createMuiTheme`", () => {
    createTheme();
    expect(createMuiTheme).toHaveBeenCalled();
  });

  it("should override properties that match default styles props", () => {
    const customizedThemeConfig = {
      layout: { header: { height: "50px" } }
    };
    const expected = merge({}, styles, customizedThemeConfig);

    createTheme(customizedThemeConfig);
    expect(createMuiTheme.mock.calls[0][0]).toMatchObject(expected);
  });

  it("should extend default styles with the passed config", () => {
    createTheme({ layout: { youShouldBeInTheConfig: true } });
    const expected = merge({}, styles, {
      layout: { youShouldBeInTheConfig: true }
    });

    expect(createMuiTheme.mock.calls[0][0]).toMatchObject(expected);
  });
});
