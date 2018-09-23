const drawerWidth = 240;

const loginStyles = theme => ({
  containerLogin: {
    position: "fixed",
    display: "flex",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  login: {
    position: "relative",
    width: 400
  },
  logininput: {
    width: "100%",
    display: "flex",
    flexFlow: "column",
    alignItems: "center"
  },
  loginaction: {
    width: "100%",
    display: "flex",
    marginTop: 40,
    marginBottom: 40,
    boxSizing: "border-box",
    padding: "0 30px",
    "& div": {
      flex: "1 0 auto",
      display: "flex",
      justifyContent: "flex-end"
    },

    "& > div:first-child": {
      display: "flex",
      justifyContent: "flex-start"
    }
  },
  btnLogin: {
    fontSize: 18,
    color: "white"
  },
  btnLupapw: {
    color: "#888"
  },
  userid: {
    width: "80%"
  },
  loginTitle: {
    background: theme.palette.primary.main,
    "& h1": {
      color: "white"
    }
  }
});

const dashboardStyles = theme => ({
  // Root
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex"
  },

  content: {
    display: "flex",
    width: "calc(100vw - 240px)",
    boxSizing: "border-box",
    padding: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 6,
    minHeight: "100vh",
    position: "relative",
    left: drawerWidth
  }
});

// ini untuk sidebar
const sidebarStyles = theme => ({
  drawerPaper: {
    display: "block",
    whiteSpace: "nowrap",
    overflowX: "hidden",
    width: drawerWidth,
    minHeight: "100vh",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    boxShadow: "1px 1px 5px rgba(0,0,0,0.4)"
  },

  drawerPaperClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 9
  },

  blank: {
    height: "100px",
    display: "flex",
    flexFlow: "column",
    font: "18px roboto",
    justifyContent: "center",
    background: theme.palette.primary.dark,

    "& h1": {
      color: "white",
      fontSize: 52
    },

    "& h3": {
      color: "#333",
      fontSize: 12,
      display: "flex",
      alignItems: "baseline",
      justifyContent: "flex-end",
      boxSizing: "border-box",
      paddingRight: "10px",
      "& span": {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 5
      }
    }
  }
});

const sidebarMenuStyles = theme => ({
  root: {
    display: "flex",
    flexFlow: "column",
    padding: "10px 5px",
    "& a:hover": {
      background: theme.palette.primary.light
    },
    "& a span": {
      display: "flex",
      justifyContent: "flex-start"
    }
  }
});

// Header

const headerStyles = theme => ({
  // Header Styles is here
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    height: "100px",
    alignItems: "center",
    padding: "0 30px 0 0",
    backgroundColor: theme.palette.primary.dark,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },

  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  }
});

// Project

const projectStyles = theme => ({
  grid: {
    width: "100%",
    display: "grid",
    gridTemplateAreas: `
    "t t t"
    "p s tl"
    `,
    gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateRows: "auto auto",
    gridGap: "10px"
  },

  bproduct: {
    gridArea: "p"
  },

  bsquad: {
    gridArea: "s"
  },

  talent: {
    gridArea: "tl"
  },

  table: {
    gridArea: "t"
  },

  actions: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: 20,
    paddingBottom: 20,

    "& button": {
      fontWeight: "400",
      color: "white",
      letterSpacing: 2
    }
  },

  talentContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "auto auto",
    width: "100%",
    paddingLeft: "10px",
    paddingRight: "10px",
    "& h3": {
      marginBottom: 20
    }
  },
  talentItem: {
    paddingLeft: "10px",
    paddingRight: "10px"
  },

  contentTable: {
    position: "relative",
    justifyContent: "center",
    padding: "20px"
  },

  root: {
    flexGrow: 1,
    position: "absolute",
    zIndex: "9",
    width: "calc(100% - 40px )",
    height: "10px"
  },
  colorPrimary: {
    backgroundColor: "#B2DFDB"
  },
  barColorPrimary: {
    backgroundColor: "#00695C"
  }
});

const teamStyles = theme => ({
  grid: {
    display: "grid",
    gridTemplateRows: "auto auto",
    gridRowGap: "10px"
  },
  teamProjectContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridColumnGap: "10px"
  },
  containerItem: {
    display: "flex"
  },
  l: {
    justifySelf: "flex-start",
    width: 100
  },
  m: {
    justifySelf: "center",
    width: 20
  },
  r: {
    justifySelf: "flex-end",
    flex: "1 0 auto"
  }
});

const calenderStyles = theme => ({
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "auto",
    gridGap: "10px"
  },
  scheduleTitle: {
    "& button": {
      color: "white"
    }
  },
  scheduleDetail: {
    display: "grid",
    gridTemplateColumns: "30% 70%",
    width: "100%",

    "& > div:nth-child(1)": {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplteRows: "auto",
      border: "1px solid rgba(0,0,0,0.2)",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px",
      "& .chip": {
        background: theme.palette.error.main,
        alignSelf: "start"
      },
      "& .chip-container": {
        alignSelf: "start"
      }
    },
    "& > div:nth-child(2)": {
      border: "1px solid rgba(0,0,0,0.2)",
      borderLeft: "none"
    }
  },
  time: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  calenderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  }
});


const loaderStyles = theme => ({
  root: {
    flexGrow: 1,
    position: "absolute",
    zIndex: "9",
    width: "calc(100% - 40px )",
    height: "10px"
  },
  colorPrimary: {
    backgroundColor: "#B2DFDB"
  },
  barColorPrimary: {
    backgroundColor: "#00695C"
  }
})

export {
  loginStyles,
  dashboardStyles,
  sidebarStyles,
  sidebarMenuStyles,
  headerStyles,
  projectStyles,
  teamStyles,
  calenderStyles,
  loaderStyles,
};
