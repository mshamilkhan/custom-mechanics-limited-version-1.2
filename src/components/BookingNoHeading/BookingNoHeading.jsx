import { useState } from "react";
import "./BookingNoHeading.css";

export default function BookingNoHeading() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    service: "",
    description: "",
    dateTime: "",
  });

  const [isSending, setIsSending] = useState(false);

  const fields = [
    {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "Write your name",
    },
    {
      label: "Contact",
      name: "contact",
      type: "tel",
      placeholder: "+441 505-5053",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "contact@custommechanicsltd.com",
    },
    {
      label: "Service you want",
      name: "service",
      type: "text",
      placeholder: "TCD Testing or any other service",
    },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSending) return;

    setIsSending(true);

    if (!formData.dateTime) {
      alert("Please select preferred date and time.");
      setIsSending(false);
      return;
    }

    try {
      const response = await fetch(
        "https://custommechanicsltd-email-module.vercel.app/api/book-now",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (!response.ok || !result?.success) {
        alert("Failed to send booking. Try again.");
        setIsSending(false);
        return;
      }

      alert("Booking sent!");

      setFormData({
        name: "",
        contact: "",
        email: "",
        service: "",
        description: "",
        dateTime: "",
      });
    } catch {
      alert("Network error. Try again later.");
    }

    setIsSending(false);
  };

  return (
    <div className="booking-no-heading-card">
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div className="booking-form-field" key={field.name}>
            <label htmlFor={field.name} className="booking-form-label">
              {field.label}
            </label>
            <div className="booking-form-input-wrapper">
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                className="booking-form-input"
                required
              />
            </div>
          </div>
        ))}

        <div className="booking-form-field">
          <label htmlFor="dateTime" className="booking-form-label">
            Preferred date &amp; time
          </label>
          <div className="booking-form-input-wrapper">
            <input
              type="datetime-local"
              id="dateTime"
              name="dateTime"
              value={formData.dateTime}
              onChange={handleChange}
              className="booking-form-input"
              required
              min={new Date().toISOString().slice(0, 16)}
            />
          </div>
        </div>

        <div className="booking-form-field">
          <label htmlFor="description" className="booking-form-label">
            Description
          </label>
          <div className="booking-form-input-wrapper">
            <textarea
              id="description"
              name="description"
              placeholder="Description of what actually you want"
              value={formData.description}
              onChange={handleChange}
              className="booking-form-textarea"
              rows="3"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="booking-submit-button"
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
}