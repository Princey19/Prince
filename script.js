function sendEmail() {
  const templateParams = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    subject: document.querySelector("#subject").value,
    message: document.querySelector("#message").value,
  };
  emailjs
    .send("service_2jw5olq", "template_8xsnj7c", templateParams)
    .then(() =>
      alert("Email sent successfully!").catch(() =>
        alert("Failed to send email. Please try again later.")
      )
    );
}
