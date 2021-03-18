import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  divider: {
    width: "100%",
    textAlign: "center",
    borderBottom: "1px solid #000",
    lineHeight: "0.1em",
    margin: "50px 0 40px",
    "& span": {
      background: theme.palette.background.default,
      padding: "0 10px",
      fontSize: "20px",
    },
  },
  continue: {
    display: "flex",
    border: "2px solid lightgray",
    borderRadius: theme.spacing(3),
    justifyContent: "space-between",
    padding: theme.spacing(0.5, 4),
    alignItems: "center",
    cursor: "pointer",
    margin: theme.spacing(3),
    "& svg": {
      color: "#3076FF",
      fontSize: theme.spacing(4),
    },
  },
}));
