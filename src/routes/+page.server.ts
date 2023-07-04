export async function load({fetch}){
  const pagesReq = await fetch(`https://gutendex.com/books/?languages=ja`);
  let articles = await pagesReq.json()
  console.log(articles)
  return{
    articles
  };

}