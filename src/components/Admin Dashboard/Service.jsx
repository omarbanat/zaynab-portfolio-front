import './Service.css';

const Service = ({
  title,
  setTitle,
  image,
  setImage,
  description,
  setDescription,
  submitHandler,
}) => {
  return (
    <div className="admin-services__container">
      <label htmlFor="">
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label htmlFor="">
        Image:
        <input
          type="file"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </label>
      <label htmlFor="">
        Description:
        <textarea
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <div className="admin-btns">
        <button className="btn-admin">Cancel</button>
        <button className="btn-admin btn-primary" onClick={submitHandler}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Service;
