import React from "react";
import FirestoreHook from "../../firebase/FirestoreHook";

const CreatedUrls = () => {
  const { shortUrls } = FirestoreHook("shorters");

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4>Created Links</h4>
      </li>

      {shortUrls
        .slice(0)
        .reverse()
        .map((url) => (
          <a key={url.id} href={url.url}>
            <li className="collection-item">{url.slug}</li>
          </a>
        ))}
    </ul>
  );
};

export default CreatedUrls;
