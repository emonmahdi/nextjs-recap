/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from "react";

const FeedPage = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("done");
    }, 2000);
  });
  return <div>Feed Page</div>;
};

export default FeedPage;
