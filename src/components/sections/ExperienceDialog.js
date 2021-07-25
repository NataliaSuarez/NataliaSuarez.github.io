import React from "react";
import { makeStyles } from "@material-ui/core";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

const ExperienceDialog = ({ open, onClose, selectedExperience }) => {
  // const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title-experience"
      aria-describedby="alert-dialog-description-experience"
      // className={classes.dialogContent}
    >
      <DialogTitle id="alert-dialog-title-experience">
        {selectedExperience?.position} | {selectedExperience?.name}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description-experience">
          {selectedExperience?.data}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ExperienceDialog;

// const useStyles = makeStyles((theme) => ({
//   dialogContent: {},
// }));
