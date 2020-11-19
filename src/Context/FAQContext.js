import React, { createContext } from "react";

const FAQContext = createContext();

const FAQProvider = ({ children }) => {
  class FAQ {
    constructor(question, answer) {
      this.question = question;
      this.answer = answer;
    }
  }

  let faqs = [];
  let saftey, pick_up, cost_delivery, where_delivery;

  saftey = new FAQ(
    "What are your Covid-19 saftey protocols?",
    "We are taking all necessary precautions, as outlined by State and CDC guidelines, in order to keep not only you, our customers safe but our staff and family members, because we are in this together. We have always been committed to quality and cleanliness with our products, now we are implementing full time masks, gloves, and extra sanitation procedures during deliveries and while processing orders in the warehouse."
  );
  faqs.push(saftey);

  pick_up = new FAQ(
    "How does pick-up work?",
    "Pick up days are Tuesday and Friday. Place orders with sales representative via email 2 days prior to pickup. Ex. Order Sunday, pick up Tuesday, order Wednesday, pickup Friday. Come to ABS Seafood SLC warehouse after pre arranging pickup time. We will provide ample ice packs, but please bring your own cooler or ice chest to transport your product."
  );
  faqs.push(pick_up);

  cost_delivery = new FAQ(
    "How much does delivery cost?",
    "Delivery fee ($15) includes door-to-door delivery before 5pm with product packed in gel ice to keep seafood cold. Your order will be delivered Tuesday or Friday depending on which option you prefer. You will receive a text or email when your order is en route."
  );
  faqs.push(cost_delivery);

  // where_delivery = new FAQ(
  //   "Where do you deliver?",
  //   "We deliver in the salt lake valley"
  // );
  //  faqs.push(where_delivery);

  return <FAQContext.Provider value={{ faqs }}>{children}</FAQContext.Provider>;
};

export { FAQProvider, FAQContext };
