export async function load({ params, fetch}){
  const pagesReq = await fetch(`https://gutendex.com/books/?{params.slug}`);
  let articles = await pagesReq.json()
  console.log("アーティクル:", articles)
  return{
    articles
  };

}