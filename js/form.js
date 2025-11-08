const form = document.querySelector("#webform");

const nameOutput = document.querySelector("#name_output");
const phoneOutput = document.querySelector("#phone_output");
const emailOutput = document.querySelector("#email_output");
const addressOutput = document.querySelector("#address_output");
const vandOutput = document.querySelector("#vand_output");

function cancelPopup(event) {
  event.preventDefault();
  const firstInvalid = form.querySelector(":invalid");
  if (firstInvalid) firstInvalid.focus();
}

function handleSubmit(event) {
  event.preventDefault();

  // 1) Saml værdier fra formularen
  const formData = new FormData(form);
  const name = formData.get("name");
  const phone = formData.get("phone");
  const email = formData.get("email");
  const address = formData.get("address");
  const vand = formData.get("vand");

  // 2) Vis værdierne  i de rigtige  output-felter
  nameOutput.textContent = name;
  phoneOutput.textContent = phone;
  emailOutput.textContent = email;
  addressOutput.textContent = address;
  vandOutput.textContent = vand;
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);
