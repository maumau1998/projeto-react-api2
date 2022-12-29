export const levelGetColor = (level) => {
    switch (level) {
      case "In Training":
        return "#729F92";
      case "Rookie":
        return "#EAAB7D";
      case "Champion":
        return "#71C3FF";
      case "Fresh":
        return "#BF9762";
      case "Ultimate":
        return "#76A866";
      case "Mega":
        return "#004170";
      case "Armor":
        return "#C7B78B";
      case "Training":
        return "#CE4069";
      default:
        return "#7A7A7A";
    }
  };
