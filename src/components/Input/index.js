import "./style.css";

export default function Input(name, type) {
  const inputField = document.createElement("input");
  inputField.setAttribute("id", name);
  inputField.setAttribute("type", type);

  return inputField;
}
