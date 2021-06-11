function toEmail(name, email, message, data) {
  data = `mailto:tente1020@gmail.com?subject=nombre: ${name}  correo: ${email}&body=${message}`;
  return data;
}

const handleSubmitEmail = (event, button) => {
  event.preventDefault();
  button.current.click();
};

export { toEmail, handleSubmitEmail };
