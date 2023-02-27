import React, { useState } from "react";
import { Button, Container, TextInput, Select, Icon } from "react-materialize";

function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
    nation: "",
    content: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData));
  };

  function handleChange(key) {
    return (evt) => {
      setFormData({
        ...formData,
        [key]: evt.target.value,
      });
    };
  }
  return (
    <div className="contact">
      <Container>
        <h3>Contact us</h3>
        <form className="ContactUS" onSubmit={handleSubmit}>
          <TextInput
            id="TextInput-38"
            label="Your Name"
            value={formData.name}
            onChange={handleChange("name")}
          />
          <TextInput
            id="TextInput-39"
            label="Your Phone"
            value={formData.phone}
            onChange={handleChange("phone")}
          />
          <TextInput
            email
            id="TextInput-41"
            label="Email"
            value={formData.email}
            onChange={handleChange("email")}
            validate
          />
          <Select
            id="Select-46"
            multiple={false}
            value={formData.nation}
            onChange={handleChange("nation")}
          >
            <option disabled value="">
              Choose your favorite nation
            </option>
            <option value="England">England</option>
            <option value="France">France</option>
            <option value="Spain">Spain</option>
          </Select>
          <TextInput
            icon="mode_edit"
            id="TextInput-109"
            label="Your content"
            value={formData.content}
            onChange={handleChange("content")}
          />
          <Button waves="light">
            Submit
            <Icon right>send</Icon>
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default Contact;
