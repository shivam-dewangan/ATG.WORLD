import React, { useState } from "react";
import "../style/CreatePost.css";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Post Created!\nTitle: ${title}\nDescription: ${description}`);
    setTitle("");
    setDescription("");
    setImage(null);
  };

  return (
    <div className="create-post-container">
      <h1 className="page-title">Create a New Post</h1>
      <form className="post-form" onSubmit={handleSubmit}>
        <label htmlFor="image-upload" className="image-label">
          {image ? (
            <img src={image} alt="Preview" className="image-preview" />
          ) : (
            <span className="upload-placeholder">Click to upload an image</span>
          )}
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            onChange={handleImageChange}
            hidden
          />
        </label>

        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="input-field"
        />

        <textarea
          placeholder="Post Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="input-field description"
        ></textarea>

        <button type="submit" className="submit-btn">
          Create Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
