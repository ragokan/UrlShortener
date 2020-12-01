import React, { useState } from "react";
import { addData } from "../../firebase/FirestoreAddData";

// Thanks to stackoverflow
const urlRegex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;

const AddUrl = () => {
  const [urlfield, setUrlfield] = useState("");
  const [slugfield, setSlugfield] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function addUrlFunction() {
    setError("");
    setSuccess("");
    if (!urlfield.match(urlRegex)) return setError("Please provide a real url!");
    if (urlfield.length < 1) return setError("Please provide an url!");
    if (slugfield.length < 1) return setError("Please provide a slug for your url!");

    addData("shorters", { url: urlfield, slug: slugfield });
    setSuccess(`You url added successfully, now you can share https://shortur.vercel.app/${slugfield}`);
  }

  return (
    <div>
      <h4 className="center">Add Url</h4>
      {error && <h4 className="red-text center">{error}</h4>}
      {success && <h4 className="green-text center">{success}</h4>}
      <div className="input-field col s12">
        <textarea id="textarea1" className="materialize-textarea" required value={urlfield} onChange={(e) => setUrlfield(e.target.value)}></textarea>
        <label htmlFor="textarea1">Url</label>
      </div>
      <div className="input-field col s12">
        <textarea
          id="textarea1"
          className="materialize-textarea"
          required
          value={slugfield}
          onChange={(e) => setSlugfield(e.target.value)}
        ></textarea>
        <label htmlFor="textarea1">Slug</label>
      </div>
      <a href="#!" className="waves-effect waves-light btn" onClick={() => addUrlFunction()}>
        Create
      </a>
    </div>
  );
};

export default AddUrl;
