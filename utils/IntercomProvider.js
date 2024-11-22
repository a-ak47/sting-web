"use client"
import Intercom from "@intercom/messenger-js-sdk";
export const IntercomProvider = ({ children }) => {
  
    Intercom({
        app_id: 'g13vevux',
      });
      

  return children;
};