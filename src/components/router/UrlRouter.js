import React from "react";
import FirestoreHook from "../../firebase/FirestoreHook";

const UrlRouter = ({
  match: {
    params: { urlid },
  },
}) => {
  const { shortUrls } = FirestoreHook("shorters");
  let currentUrl = shortUrls.find((url) => url.slug === urlid);
  console.log(currentUrl);
  if (currentUrl) window.location.replace(currentUrl.url);

  return <div>{!currentUrl && <h1 className="center redError">No url found with this slug!</h1>}</div>;
};

export default UrlRouter;
