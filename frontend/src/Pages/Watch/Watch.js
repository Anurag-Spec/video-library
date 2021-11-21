/* eslint-disable jsx-a11y/iframe-has-title */
import { ArrowBackOutlined } from "@material-ui/icons";
import { useLocation, Link } from "react-router-dom";
import "./Watch.scss";

export default function Watch() {
  const location = useLocation();
  const movie = location.movie;
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <iframe
        frameBorder="0"
        type="text/html"
        src={movie.trailer + `?autoplay=1`}
        width="100%"
        height="100%"
        allowFullScreen
        allow="autoplay"
      ></iframe>
    </div>
  );
}
