import React from "react";
import "./About.css";
import ProductSidebar from "../libraries/ProductSidebar";

const About = () => {
  window.scrollTo(0, 0);
  return (
    <div style={{margin: '2rem 8vw'}}>
      <div style={{ display: "grid", gridTemplateColumns: '5fr 1.5fr', gap:'2rem' }}>
        <div className="aboutMain">
          <h2>About us</h2>
          <p>
            <strong>Thrayee Engineering & Infra Solutions</strong> was founded
            with the explicit purpose of catering to the burgeoning bulk
            material handling industry. Nestled in the vibrant city of
            Hyderabad, Telangana, India, our company has been making significant
            strides under the adept supervision of seasoned engineers.
          </p>
          <h3>Our team</h3>
          <p>
            Our Team Led by exceptionally skilled professionals, the company has
            swiftly garnered a commendable reputation both domestically and
            internationally. The team, constituting a cornerstone of our
            operations, is a testament to our unwavering commitment to
            excellence.
          </p>
          <h3>Why choose us?</h3>
          <p>
            Our standing above competitors is attributed to a constellation of
            distinctive factors:
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "1rem",
            }}
          >
            <p>
              <strong>Transparent Trade Policies:</strong> Our commitment to
              transparency is reflected in our unwavering adherence to fair and
              open trade practices, establishing trust with our clientele.
            </p>
            <p>
              <strong>Patron-Oriented Policies:</strong> We prioritize the needs
              and satisfaction of our clients, crafting policies that are finely
              attuned to their requirements, fostering lasting partnerships.
            </p>
            <p>
              <strong>Market-Leading Prices and Quick Delivery:</strong> We
              consistently outpace the market with competitive pricing
              strategies and an efficient delivery system, ensuring prompt and
              reliable service.
            </p>
          </div>
        </div>
        <ProductSidebar />
      </div>
      <table>
        <tr>
          <th>Aspect</th>
          <th>Details</th>
        </tr>
        <tr>
          <td>Nature of Business</td>
          <td>Manufacturer, Exporter & Supplier</td>
        </tr>
        <tr>
          <td>Headquarters</td>
          <td>Hyderabad, Telangana, India</td>
        </tr>
        <tr>
          <td>Core Expertise </td>
          <td>Bulk Material Handling</td>
        </tr>
        <tr>
          <td>Leadership</td>
          <td>Supervised by Expert Engineers</td>
        </tr>
        <tr>
          <td>Reputation</td>
          <td>Rapidly Growing with Swift Pace</td>
        </tr>
        <tr>
          <td>Team Composition </td>
          <td>Headed by Highly Experienced Professionals</td>
        </tr>
        <tr>
          <td>Company Strength </td>
          <td>Exceptional Reputation in Domestic and International Markets</td>
        </tr>
        <tr>
          <td>Key Strength </td>
          <td>Highly Experienced Team of Professionals</td>
        </tr>
        <tr>
          <td>Competitive Edge </td>
          <td>
            Transparent Trade Policies, Patron-Oriented Approach, Market-Leading
            Prices, Quick Delivery
          </td>
        </tr>
        <tr>
          <td>Market Coverage </td>
          <td>
            India, Africa, UAE, Nepal, China, USA, Canada, Europe, Asia, Middle
            East, Latin America
          </td>
        </tr>
        <tr>
          <td>Notable Achievements </td>
          <td>Established a Good Reputation in a Short Time Frame</td>
        </tr>
      </table>
    </div>
    // </div>
  );
};

export default About;
