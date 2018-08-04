import { configure } from "@storybook/react";

function loadStories() {
  require("./stories/menu");
  require("./stories/mainFlame");
  require("./stories/participant");
  require("./stories/register");
}

configure(loadStories, module);
