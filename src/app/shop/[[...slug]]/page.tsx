// For routes like /shop/a/b/c -> slug = ['a', 'b', 'c']
import React from 'react';

const ShopDetailsPage = async ({ params }: { params: { slug: string[] } }) => {
  const { slug } = await params;

  return (
    <div>
      Shop Details Page
      <ul>
        {slug?.length > 0 &&
          slug.map((sl, index) => <li key={index}>{sl}</li>)}
      </ul>
    </div>
  );
};

export default ShopDetailsPage;
