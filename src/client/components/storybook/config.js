import { configure } from "@storybook/react";

function loadStories() {
  require("./stories/menu");
  require("./stories/mainFlame");
  require("./stories/participant");
}

configure(loadStories, module);
