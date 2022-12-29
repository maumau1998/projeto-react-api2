export const levelGetColor2 = (level) => {
    switch (level) {
      case "In Training":
        return "#70B873";
      case "Rookie":
        return "#F44900";
      case "Champion":
        return "#33A4F5";
      case "Ultimate":
        return "#316520";
      case "Armor":
        return "#8A8A8A";
      case "Mega":
        return "#0A6CBF";
      case "Fresh":
        return "#D97745";
      case "Training":
        return "#F67176";
      default:
        return "#7A7A7A";
    }
  };