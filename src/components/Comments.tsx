import { useLoaderData } from "react-router-dom";
import { Card, CardBody, CardTitle, Gallery } from "@patternfly/react-core";
import React from "react";
import { CommentLoaderData } from "../loaders";
import CommentFilter from "./commentFilter";

export function Comments() {
  const data = useLoaderData() as CommentLoaderData;
  const url = new URL(window.location.href);
  const postId = parseInt(url.searchParams.get('postId'));
  const defaultFilter = [];
  if (postId){
    defaultFilter.push(postId);
  }

  const [selectedItems, setSelectedItems] = React.useState<number[]>(defaultFilter);

  return (
  <>
  <CommentFilter comments={data.comments} selectedItems={selectedItems} setSelectedItems={setSelectedItems}></CommentFilter>
  <Gallery hasGutter>{
    data.comments.filter(c => {
      if(selectedItems.length === 0){
        return true;
      }
      return selectedItems.includes(c.postId);
    }
    ).map(comment =>
      {
        return <>
        <Card ouiaId="SomeCard">
          <CardTitle>
            <div>
              {comment.name}
            </div>
            {comment.email}
          </CardTitle>
          <CardBody>
            <div>
            {comment.body}
            </div>
            <div style={{fontWeight: 'bold'}}>
              Related Posts:
            </div>
            <div>
              {comment.relatedPosts.title}
            </div>
          </CardBody>
        </Card>
        </>
      })
  }
  </Gallery>
  </>)  
}
