import React from "react";
import NavBar from "../../components/Navbar";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import ProjectCard from "src/components/Cards/ProjectCard";
import { projectlist } from "./projectlist";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      minHeight: "100vh",
    },
    title: {
      margin: "4vh",
      color: "white",
      fontWeight: "bold",
      fontSize: "1.4rem",
    },
    flexbox: {
      flexGrow: 1,
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
    },
  })
);

const Projects: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar />
      <Container className={classes.flexbox}>
        {projectlist.map((project, key) => (
          <ProjectCard key={key} {...project} />
        ))}
      </Container>
    </div>
  );
};

export default Projects;
