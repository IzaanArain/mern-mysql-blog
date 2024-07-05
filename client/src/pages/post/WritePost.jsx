import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const WritePost = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <section className="post-write">
        <section className="content">
          <input type="text" placeholder="Title" />
          <div className="editorContainer scroll">
            <ReactQuill
              className="editor"
              theme="snow"
              value={value}
              onChange={setValue}
            />
          </div>
        </section>
        <aside className="menu">
          <section className="item">
            <h1>Publish</h1>
            <span>
              <b>Status: </b> Draft
            </span>
            <span>
              <b>Visibility: </b> Public
            </span>
            <input
              style={{ display: "none" }}
              type="file"
              id="file"
              name="file"
            />
            <label className="file" htmlFor="file">
              Upload Image
            </label>
            <div className="buttons">
              <button>save as a draft</button>
              <button>Update</button>
            </div>
          </section>
          <section className="item">
            <h1>Category</h1>
            <div className="cat">
              <input type="radio" name="cat" value={"art"} id="art" />
              <label htmlFor="art">ART</label>
            </div>
            <div className="cat">
              <input type="radio" name="cat" value={"science"} id="science" />
              <label htmlFor="science">Science</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                name="cat"
                value={"technology"}
                id="technology"
              />
              <label htmlFor="technology">Technology</label>
            </div>
            <div className="cat">
              <input type="radio" name="cat" value={"cinema"} id="cinema" />
              <label htmlFor="cinema">Cinema</label>
            </div>
            <div className="cat">
              <input type="radio" name="cat" value={"design"} id="design" />
              <label htmlFor="design">Design</label>
            </div>
            <div className="cat">
              <input type="radio" name="cat" value={"food"} id="food" />
              <label htmlFor="food">Food</label>
            </div>
          </section>
        </aside>
      </section>
    </>
  );
};

export default WritePost;
