import { Link } from "react-router-dom";
import { div, Divider, h1, Card, CardActions, createSvgIcon, Avatar, ListItemAvatar, Dialog } from "@material-ui/core";

function Header() {
    return (

        <div className="jumbotron jumbotron-fluid">

            <createSvgIcon>
                <arguments className="display-4">React Frontend Project</arguments>
            </createSvgIcon>
            <hr />
            <CardActions className="my-4">
                This project going to perform the CRUD operation on Student by interacting applications.
                We are going to use to connect frontend to backend axios module by which we will be able to call the REST endpoints.
            </CardActions>


            <Link className="btn btn-primary" to={`/students/add`}>Add Student</Link>

        </div>

    );
}
export default Header;