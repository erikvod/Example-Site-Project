import { useLoaderData, useNavigate } from "react-router-dom";
import { Card, CardBody, CardTitle, Gallery } from "@patternfly/react-core";

// Users component loads the "data" variable from "userLoaderData"
// "data" will be equal to whatever "loadUsers" returns
export  function Users() {
  const data = useLoaderData();
  const navigate = useNavigate();
  function doOnClick(userId){
    navigate("/posts?userId=" + userId);
  }

  return (
    <>
    <Gallery hasGutter>
      {
      data.map(user =>
        {
          return <>
          <Card onClick={() => doOnClick(user.id)} ouiaId="SomeCard" >
            <CardTitle>
              <div>
                {user.name}
              </div>
              Username: {user.username}
            </CardTitle>
            <CardBody>
              Email: {user.email}
              <div>
                Company: {user.company.name}
              </div>
              <div>
                {user.company.catchPhrase}
              </div>
            </CardBody>
          </Card>
          </>
        })
    }
    </Gallery>
    </>)  
}