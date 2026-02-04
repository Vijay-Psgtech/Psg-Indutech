export const brandColors = {
  primary:   "#22227A",   // deep navy
  secondary: "#434C9A",   // mid indigo
  tertiary:  "#6D77B3",   // soft indigo
  accent:    "#06b6d4",   // cyan
};

export const grad = {
  hero:     `linear-gradient(135deg, ${brandColors.primary}, ${brandColors.secondary}, ${brandColors.accent})`,
  subtle:   `linear-gradient(135deg, ${brandColors.primary}, ${brandColors.accent})`,
  text:     `linear-gradient(135deg, ${brandColors.secondary}, ${brandColors.accent})`,  // use with bgClip
  wash:     `linear-gradient(135deg, ${brandColors.primary}0c, ${brandColors.accent}0c)`,
};

export const gradText = {
  background: grad.text,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

export const borderColor = (hex = brandColors.tertiary, alpha = "22") => `${hex}${alpha}`;