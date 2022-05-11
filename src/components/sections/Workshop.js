import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import blogData from "../../data/blog/blog";
const Workshop = () => {
  const classes = useStyles();

  return (
    <>
      <div className={clsx("row", classes.section)} id="workshop">
        {blogData.map((blogItem) => {
          return (
          <div
            className={classes.card}
          >{`${blogItem.title} - ${blogData.id}`}</div>
        )})}
      </div>
    </>
  );
};

export default Workshop;

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
    background: "rgba(144,42,172,1)",
    width: '100%',
    // justifyContent: "center",
    // alignContent: 'center',
  },
  card: {
    fontSize: "16px",
    borderRadius: "0",
    backgroundColor: "white",
    width: "80px",
    height: "80px",
  },
}));
