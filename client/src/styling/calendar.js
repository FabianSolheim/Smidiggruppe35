import { createTheme } from "@material-ui/core";
import "./style.css";

const materialTheme = createTheme({
  overrides: {
    MuiButtonBase: {
      root: {
        padding: "",
        marginBlock: "16px",
      },
    },

    MuiPickersCalendarHeader: {
      switchHeader: {
        backgroundColor: "#490374",
        color: "white",
      },

      dayLabel: {
        color: "white",
      },
      iconButton: {
        backgroundColor: "#490374",
      },
    },

    MuiIconButton: {
      root: {
        borderRadius: "15%",
        color: "white",
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        },
      },
    },

    MuiPickersDay: {
      dayDisabled: {
        color: "#A1A1A1",
        pointerEvents: "none",
      },
      day: {
        color: "white",
      },
      current: {
        color: "white",
      },
      daySelected: {
        backgroundColor: "rgb(255, 255, 255, 0.3)",
        "&:hover": {
          backgroundColor: "rgb(255, 255, 255, 0.4)",
        },
      },
    },

    MuiTypography: {
      body1: {
        fontFamily: "Montserrat, sans-serif",
        fontWeight: "300",
        fontSize: "24px",
        lineHeight: "0.8",
      },
      body2: {
        fontFamily: "Montserrat, sans-serif",
        fontWeight: "300",
        fontSize: "1rem",
        color: "white",
      },
      caption: {
        fontSize: "1rem",
        fontFamily: "Montserrat, sans-serif",
        fontWeight: "300",
      },
    },

    MuiPickersBasePicker: {
      pickerView: {
        backgroundColor: "#490374",
      },
    },

    MuiSvgIcon: {
      root: {
        fontSize: "2rem",
      },
    },
  },
});

export default materialTheme;
