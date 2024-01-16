import "./Contact.css";
import ProductSidebar from "../libraries/ProductSidebar";
import { useForm, ValidationError } from "@formspree/react";
import user from '../assets/user.png';
import phone from '../assets/wapp.png';
import mail from '../assets/mail.png';
import navigation from '../assets/navigation.png';

const Contact = () => {
  window.scrollTo(0, 0);
  const [state, handleSubmit] = useForm("xkndgzdg");
  // if (state.succeeded) {
  //   return <p>Thanks for joining!</p>;
  // }
  return (
    <div style={{ padding: "0px 6vw", backgroundColor: "#FFFFFF" }}>
      <h2 className="contactHeading">Contact us</h2>
      <div
        style={{ display: "grid", gridTemplateColumns: "4fr 1fr", gap: "4rem" }}
      >
        <div
          style={{
            display: "grid",
            border: "1px solid #dddddd",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <div className="lhs">
            <div className="ownerName1">
              <img src={user} alt="" />
              <p style={{ marginBlock: 0 }}>Mr. Madhava Rao</p>
            </div>
            <div className="phonemail1">
              <img src={phone} alt="" />
              <a
                href="https://api.whatsapp.com/send?phone=919704233306"
                target="_blank"
                rel="noreferrer"
              >
                <p style={{ marginBlock: 0 }}>+91 9704233306</p>
              </a>
            </div>
            <div className="phonemail1">
              <img src={mail} alt="" />
              <a href="mailto:thrayeesales@gmail.com">
                <p style={{ marginBlock: 0 }}>thrayeesales@gmail.com</p>
              </a>
            </div>
            <div className="ownerName1">
              <img src={navigation} alt="" />
              <p style={{ marginBlock: 0 }}>
                D.No.2-22-310/39C/402, Plot No.39C, Addagutta Society, Opp.
                JNTU, Kukatpally, Hyderabad, Telangana - 500085, India
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <label>Product / Service looking for</label>
            <input
              type="text"
              id="product"
              name="product"
              placeholder="Product / Service looking for"
            />
            <ValidationError
              prefix="Product"
              field="product"
              errors={state.errors}
            />
            <label>Your name</label>
            <input type="text" id="name" name="name" placeholder="Your name" />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <label>Email</label>
            <input type="email" id="email" name="email" placeholder="Email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label>Phone/Mobile</label>
            <input
              type="number"
              id="phone"
              name="phone"
              placeholder="Phone / Mobile"
            />
            <ValidationError
              prefix="Phone"
              field="phone"
              errors={state.errors}
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <label>Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  placeholder="Country"
                />
                <ValidationError
                  prefix="Country"
                  field="country"
                  errors={state.errors}
                />
              </div>
              <div>
                <label>State</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  placeholder="State"
                />
                <ValidationError
                  prefix="State"
                  field="state"
                  errors={state.errors}
                />
              </div>
            </div>
            <label>City</label>
            <input type="text" id="city" name="city" placeholder="City" />
            <ValidationError prefix="City" field="city" errors={state.errors} />
            <label>Enquiry details</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your requirement"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
          </form>
        </div>
        <ProductSidebar />
      </div>
      <div className="iframeContainer">
        <p>We're here</p>
        {/* eslint-disable-next-line */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.2316746979045!2d78.39382856836603!3d17.496450800767086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f205db2769%3A0x18a7d6c7d7b7cc6e!2sSR%20Towers%2C%202nd%20Ln%2C%20Addagutta%20Society%2C%20Jal%20Vayu%20Vihar%2C%20Kukatpally%2C%20Hyderabad%2C%20Telangana%20500090!5e0!3m2!1sen!2sin!4v1684568266170!5m2!1sen!2sin"
          width="80%"
          height="500"
          style={{ border: 0, borderRadius: "8px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
