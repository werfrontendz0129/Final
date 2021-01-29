import React from "react";
import {
  Breadcrumbs as MUIBreadcrumbs,
  Link,
  Typography
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import './Breadcrumb.scss'

const Breadcrumbs = props => {
  const {
    history,
    location: { pathname }
  } = props;
  const pathnames = pathname.split("/").filter(x => x);
  return (
    <div className="shownothing">
      <MUIBreadcrumbs aria-label="breadcrumb" className="cookiesp">
      {pathnames.length > 0 ? (
        <Link onClick={() => history.push("/")}>首頁</Link>
      ) : (
        <Typography> 首頁 </Typography>
      )}
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <Typography key={name}>{name}</Typography>
        ) : (
          <Link key={name} onClick={() => history.push(routeTo)}>
            {name}
          </Link>
        );
      })}
    </MUIBreadcrumbs>
    </div>
    
  );
};

export default withRouter(Breadcrumbs);