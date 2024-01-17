import React from "react";
import ProductDetail from "@/components/content/productDetail/ProductDetail";
import { Metadata } from "next";
import { headers } from "next/headers";
import { cache } from "react";
import { Suspense } from "react";

export const getItem = cache(async (id: any) => {
  const data = await fetch(
    `https://asia-south1-qwiklyfluttertest.cloudfunctions.net/itemApis-app/item-detail?itemId=${id}`
  );
  let product = await data.json();
  return product;
  // console.log('------------------',id)
});

// export async function generateMetadata({searchParams }: any): Promise<Metadata> {
//   // read route params
//   const headersList = headers();
//   const fullUrl = headersList.get("referer") || "";
//   /**
//    * below code is commented becouse now getting data from getItem
//    */

//   // fetch data
//   // const data = await fetch(
//   //   `https://asia-south1-qwiklyfluttertest.cloudfunctions.net/itemApis-app/item-detail?itemId=${id}`
//   // )
//   let product = await getItem(searchParams?.id);
//   return {
//     title: product?.name,
//     description: product?.description,
//     applicationName: "Next.js",
//     keywords: ["qwiklyfluttertest.web.app/", "findBetter", product?.name],
//     alternates: {
//       canonical: fullUrl,
//       languages: {
//         "en-US": "/en-US",
//         "de-DE": "/de-DE",
//       },
//     },
//     openGraph: {
//       title: product?.name,
//       description: "The React Framework for the Web",
//       url: fullUrl,
//       siteName: "Find Better",
//       images: [product?.itemVariants?.[0]?.media?.[0]?.url],
//       locale: "en_US",
//       type: "website",
//     },

//     // icons: {
//     //   icon: product?.itemVariants?.[0]?.media?.[0]?.url
//     // },
//   };
// }
const ProductDetailPage = async (props: any) => {
  // const id = searchParams?.id

  // console.log('searchParams',id)
  //   const headersList = headers();
  // const fullUrl = headersList.get("referer") || "";
  // const userAgent = headersList.get('user-agent');
  // console.log('help',headersList)
  // const url = new URL(fullUrl, 'http://localhost');
  // const pathArray = url.search.split("=");
  // const id = pathArray[pathArray.length - 1];
  //   console.log('full url', id)

  // const headersList = headers();
  // const referer = headersList.get("authorization");

  // console.log('-------',props);
  //  let product = await getItem(props);

  return (
    <main>
      <div>
        <Suspense fallback={null}>
          <ProductDetail />
        </Suspense>
        {/* <ProductDetail product={product} /> */}
      </div>
    </main>
  );
};

// export async function getServerSideProps(context:any) {
//   const { req } = context;

//   // Access custom "x-" headers using the req object
//   const customHeader = req.headers['x-custom-header'];

//   // Now, you can use the customHeader value in your logic
//   // ...

//   return {
//     props: {
//       // Your data to pass to the component
//       header:customHeader
//     }
//   };
// }

export default ProductDetailPage;
