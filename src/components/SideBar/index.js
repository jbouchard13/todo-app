const buttons = ["Inbox", "Today"];

import "./style.css";
import Button from "../Button";

export default function SideBar() {
  const sideBarContainer = document.createElement("div");
  sideBarContainer.setAttribute("id", "sideBarContainer");

  buttons.map((item) => {
    let button = Button(item, item);

    sideBarContainer.append(button);
  });
  return sideBarContainer;
}
