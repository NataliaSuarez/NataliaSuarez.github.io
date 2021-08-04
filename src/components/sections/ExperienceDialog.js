import React from "react";
import { makeStyles } from "@material-ui/core";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Chip from "@material-ui/core/Chip";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const ExperienceDialog = ({ open, onClose, selectedExperience }) => {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title-experience"
      aria-describedby="alert-dialog-description-experience"
      classes={{ paper: classes.dialogContainer }}
    >
      <div className={classes.dialogContentContainer}>
        <div id="alert-dialog-title-experience" className={classes.dialogTitle}>
          <div className={classes.roleTitle}>
            {selectedExperience?.position}
            <HighlightOffIcon onClick={onClose} />
          </div>
          <div className={classes.projectName}>{selectedExperience?.name}</div>
          <div className={classes.techContainer}>
            {selectedExperience?.tech.map((t, i) => (
              <div className={classes.techName}>
                <Chip
                  key={t}
                  size="small"
                  label={t}
                  variant="outlined"
                  classes={{
                    root: classes.chipRoot,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <div
          id="alert-dialog-description-experience"
          className={classes.dialogContent}
        >
          {selectedExperience?.data}
        </div>
      </div>
      {/* <div className={classes.buttonsActionsContainer}>
        <Button variant="outlined" size="small" onClick={onClose}>
          close
        </Button>
      </div> */}
    </Dialog>
  );
};

export default ExperienceDialog;

const useStyles = makeStyles((theme) => ({
  dialogContainer: {
    height: "450px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  dialogContentContainer: {
    padding: "10px",
  },
  dialogContent: {
    fontSize: "13px",
    fontWeight: "300",
    padding: "7px 3px 5px 0",
  },
  roleTitle: {
    borderBottom: "2px solid rgba(144,42,172,1)",
    whiteSpace: "nowrap",
    width: "100%",
    textAlign: "start",
    marginBottom: "10px",
    fontSize: "18px",
    fontWeight: "400",
    display: "flex",
    justifyContent: "space-between",
    "& svg": {
      color: "rgba(144,42,172,1)",
      cursor: "pointer",
    },
  },
  techContainer: {
    padding: "10px 0",
  },
  techName: {
    color: "rgba(144,42,172,1)",
    fontSize: "11px",
    fontWeight: "700",
    display: "contents",
  },
  projectName: {
    fontSize: "15px",
    fontWeight: "200",
  },
  buttonsActionsContainer: {
    padding: "8px",
  },
  chipRoot: {
    fontFamily: '"Raleway", sans-serif',
    border: "none",
    backgroundColor: "rgba(144,42,172,1) !important",
    color: "white",
    // color: "rgba(144,42,172,1)",
    fontSize: "11px",
    fontWeight: "400",
    padding: "0",
    margin: "2px",
    "& span": {
      paddingLeft: "6px",
      paddingRight: "6px",
    },
  },
}));
