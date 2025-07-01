class TransformationService {
  static transformText(value, type) {
    if (typeof value !== "string") {
      return value;
    }

    switch (type) {
      case "TO_UPPER_CASE":
        return value.toUpperCase();
      case "TO_LOWER_CASE":
        return value.toLowerCase();
      case "REVERSE":
        return value.split("").reverse().join("");
      case "TO_TITLE_CASE":
        return value
          .toLowerCase()
          .replace(/\b\w/g, (char) => char.toUpperCase());
      case "TO_CAMEL_CASE":
        return value
          .toLowerCase()
          .replace(/[^a-zA-Z0-9]+(.)?/g, (match, chr) =>
            chr ? chr.toUpperCase() : ""
          )
          .replace(/^./, (char) => char.toLowerCase());
      case "TO_SNAKE_CASE":
        return value
          .replace(/\W+/g, " ")
          .split(/ |\B(?=[A-Z])/)
          .map((word) => word.toLowerCase())
          .join("_");
      case "SPONGEBOB_CASE":
        return value
          .split("")
          .map((char, index) =>
            index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
          )
          .join("");
      default:
        return value.toUpperCase();
    }
  }
}

export default TransformationService;
