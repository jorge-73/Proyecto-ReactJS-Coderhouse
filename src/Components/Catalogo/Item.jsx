import "../../StylesSheets/Item.css";
import { Link } from "react-router-dom";

export const Item = ({ item }) => {
  return (
    <div className="card rounded-3 shadow">
      <div className="card-header">
        <img
          className="image img-fluid img-thumbnail rounded-3"
          src={item.pictureUrl}
          alt={item.title}
        />
      </div>
      <div className="card-body">
        <h4 className="card-title">{item.title}</h4>
        <Link to={`/item/${item.id}`} className="btn btn-info rounded-3">
          Detalles
        </Link>
      </div>
      <div className="card-footer">
        <p>Stock Disponible: 1</p>
      </div>
    </div>
  );
};
