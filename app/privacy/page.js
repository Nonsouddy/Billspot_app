"use client";

import "../../app/page.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const page = () => {
  return (
    <div>
      <NavBar />
      <div
        style={{
          paddingLeft: "10%",
          paddingRight: "10%",
          textAlign: "justify",
          height: "999px",
        }}
      >
        <h1>BILLSPOT PRIVACY NOTICE</h1>
        <p className="band">
          Billspot is committed to protecting your privacy. This notice explains
          how we collect, use, and protect your information:
        </p>
        <li>
          <span className="band">Information Collection:</span> We collect
          information you provide when you register for an account, such as your
          name, email, and payment information.{" "}
        </li>{" "}
        <li>
          <span className="band"> Use of Information:</span> We use your
          information to provide and improve our services, process transactions,
          and communicate with you.{" "}
        </li>
        <li>
          <span className="band"> Information Sharing:</span> We do not sell,
          trade, or otherwise transfer your personal information to outside
          parties except as required by law.{" "}
        </li>
        <li>
          <span className="band"> Data Security:</span> We implement security
          measures to protect your personal information from unauthorized access
          or disclosure.{" "}
        </li>{" "}
        <li>
          <span className="band"> Cookies:</span>
          Our website uses cookies to enhance your user experience. You can
          choose to disable cookies through your browser settings.{" "}
        </li>
        <li>
          <span className="band"> Changes to Privacy Notice:</span> We may
          update this notice periodically. We encourage you to review this
          notice regularly for any changes.{" "}
        </li>
        <li>
          <span className="band"> Disclaimer of Warranties:</span> Our services
          are provided "as is" without any warranties of any kind. We do not
          guarantee as to the accuracy, suitability, reliability, or
          completeness of our services.{" "}
        </li>{" "}
        <li>
          <span className="band"> Law and Jurisdiction: </span>
          Any disputes or claims arising out of or in connection with this
          service will be governed by the laws of Nigeria and you agree that the
          courts of Nigeria will have exclusive jurisdiction to settle any such
          disputes or claims. 3. Please confirm your acceptance of these terms
          by clicking the Accept button. You understand and agree that by
          proceeding beyond this point, you accept to be bound by these Terms.
        </li>
      </div>
      <Footer />
    </div>
  );
};

export default page;
