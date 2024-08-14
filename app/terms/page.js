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
        }}
      >
        <h1>BILLSPOT APP USER TERMS AND CONDITIONS</h1>
        <p className="band">Welcome to Billspot. </p>
        <p className="band">
          {" "}
          By downloading, using or continuing to use Billspot Mobile Application
          you confirm that you accept these terms and conditions.{" "}
        </p>
        <p className="band">
          {" "}
          You agree that you shall use Billspot in accordance with the Terms &
          Conditions at all times.
        </p>
        <li>
          <span className="band">Service Description:</span> Billspot allows users to pay their bills easily
          and securely through our platform.
        </li>
        <li>
        <span className="band">Account Registration:</span> To use Billspot, you must register for an
          account and provide accurate information.
        </li>
        <li>
          {" "}
          <span className="band">User Responsibilities:</span> You are responsible for maintaining the
          confidentiality of your account and for all activities that occur
          under your account.
        </li>
        <li>
        <span className="band">Payment Processing:</span> Billspot processes payments on behalf of users. We
          are not responsible for any issues related to the services or products
          you pay for.{" "}
        </li>{" "}
        <li>
          {" "}
          <span className="band">Fees:</span> Any applicable fees for using our service will be clearly
          stated. By using our services, you agree to pay these fees.
        </li>{" "}
        <li>
        <span className="band">Prohibited Activities:</span> You agree not to use our services for any
          illegal activities or to violate any laws or regulations.{" "}
        </li>{" "}
        <li>
          {" "}
          Billspot reserves the right to change or discontinue, temporarily or
          permanently, you right to use Billspot mobile app at any time without
          notice. This will however, not affect your outstanding obligations to
          us.{" "}
        </li>{" "}
        <li>
          {" "}
          The services on the Billspot platform may from time to time be
          unavailable, delayed, limited or slow due to, but not restricted to
          hardware failure, software, overload of system capacities or other
          events outside our control.
        </li>{" "}
        <li>
          {" "}
          <span className="band">Proprietary rights:</span> You recognize and agree that Billspot owns all
          rights to this app and the content displayed on the app. You agree to
          use this content only as expressly authorized by the service. You
          shall not copy, reproduce, distribute, or create adaptations from this
          content.
        </li>{" "}
        <li>
          {" "}
          <span className="band">Limitation of Liability:</span> Billspot is not liable for any direct,
          indirect, incidental, or consequential damages resulting from the use
          of our services.
        </li>{" "}
        <li>
          {" "}
          <span className="band">Changes to Terms:</span> We may modify these terms at any time. Your
          continued use of our services constitutes acceptance of the new terms.{" "}
        </li>{" "}
      </div>
      <Footer />
    </div>
  );
};

export default page;
