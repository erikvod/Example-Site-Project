import { useLoaderData, useNavigate } from "react-router-dom";
import { Card, CardBody, CardTitle, Gallery } from "@patternfly/react-core";
import { PostLoaderData } from "../loaders";
import UserFilter from "./userFilter";
import React from "react";



export function Posts() {
  const data = useLoaderData() as PostLoaderData
  const url = new URL(window.location.href);
  const userId = parseInt(url.searchParams.get('userId'));
  const defaultFilter = [];
  if (userId){
    defaultFilter.push(userId);
  }
  const [selectedItems, setSelectedItems] = React.useState<number[]>(defaultFilter);

  const navigate = useNavigate();
  function doOnClick(postId){
    navigate("/comments?postId=" + postId);
  }

  return (
  <>
  <UserFilter users={data.users} selectedItems={selectedItems} setSelectedItems={setSelectedItems}></UserFilter>
  <Gallery hasGutter>{
    data.posts.filter(p => {
      if(selectedItems.length === 0){
        return true;
      }
      return selectedItems.includes(p.userId);
    }).map(post =>
      {
        return <>
        <Card ouiaId="SomeCard" onClick={() => doOnClick(post.id)}>
          <CardTitle>
            <div>
              {post.user.name}
            </div>
            {post.title}
          </CardTitle>
          <CardBody>
            <div>
            {post.body}
            </div>
            <br></br>
            <div>
              Total Comments: {post.comments.length}
            </div>
          </CardBody>
        </Card>
        </>
      })
  }
  </Gallery>
  </>)  
}