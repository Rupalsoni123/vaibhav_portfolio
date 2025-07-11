const isEmailValid = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const isRequired = (value) => value !== "";
const isBetween = (length, min, max) => length >= min && length <= max;

const checkName = (name) => {
  const min = 3, max = 25;
  if (!isRequired(name)) return "Name cannot be blank.";
  if (!isBetween(name.length, min, max))
    return `Name must be between ${min} and ${max} characters.`;
  return true;
};

const checkEmail = (email) => {
  if (!isRequired(email)) return "Email cannot be blank.";
  if (!isEmailValid(email)) return "Email is not valid.";
  return true;
};

const checkMessage = (message) => {
  const min = 3, max = 1000;
  if (!isRequired(message)) return "Message cannot be blank.";
  if (!isBetween(message.length, min, max))
    return `Message must be between ${min} and ${max} characters.`;
  return true;
};

// Main validator
const validateForm = (formData, setErrData) => {
  const nameResult = checkName(formData.name.trim());
  const emailResult = checkEmail(formData.email.trim());
  const messageResult = checkMessage(formData.message.trim());

  setErrData({
    nameError: typeof nameResult === "string" ? nameResult : "",
    emailError: typeof emailResult === "string" ? emailResult : "",
    messageError: typeof messageResult === "string" ? messageResult : "",
  });

  return (
    typeof nameResult === "boolean" &&
    typeof emailResult === "boolean" &&
    typeof messageResult === "boolean"
  );
};

export { validateForm };
