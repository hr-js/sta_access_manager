import { configure } from "@storybook/react";

function loadStories() {
  require("./stories/menu");
  require("./stories/mainFlame");
}

configure(loadStories, module);
