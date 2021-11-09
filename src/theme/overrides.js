const overrides = {
  MuiPaper: {
    rounded: {
      borderRadius: "5px",
    },
  },
  MuiTimelineItem: {
    missingOppositeContent: {
      "&:before": {
        display: "none",
      },
    },
  },

  MuiInputLabel: {
    outlined: {
      transform: "translate(14px, 12.5px) scale(1)",
    },
  },
  MuiOutlinedInput: {
    root: {
      "&&& $input": {
        padding: "8px",
      },
    },
  },
};
export default overrides;
