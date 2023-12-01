import { createVuetify } from "vuetify";
import theme from "./theme";
import * as defaults from "./defaults";

// Styles
import "vuetify/styles";
export default createVuetify({
  defaults: { ...defaults },
  theme,
});
