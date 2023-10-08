import React from "react";

interface Props {
  params: {
    id: number;
    photoId: number;
  };
}

const PhotoPage = (props: Props) => {
  return (
    <div>
      PhotoPage
      <h1> User Id: {props.params.id}</h1>
      <h1> Photo Id: {props.params.photoId}</h1>
    </div>
  );
};

export default PhotoPage;
