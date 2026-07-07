import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
  auth: {
    clientId: "3b589fce-3d03-4e3b-942b-1ac6661a4d42",
    authority: "https://login.microsoftonline.com/9cd6adc7-311b-4430-a9e1-42f8c0579762",
    redirectUri: typeof window !== "undefined" ? window.location.origin : "/",
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true,
  }
};

export const msalInstance = new PublicClientApplication(msalConfig);

let initPromise = null;
export const initializeMsal = () => {
  if (!initPromise) {
    initPromise = msalInstance.initialize().then(() => {
      return msalInstance.handleRedirectPromise();
    }).then((result) => {
      if (result && result.account) {
        msalInstance.setActiveAccount(result.account);
      }
      return msalInstance;
    });
  }
  return initPromise;
};

export const loginRequest = {
  scopes: ["https://management.azure.com/user_impersonation"]
};
