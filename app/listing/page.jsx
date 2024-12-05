 
import Home from '../component/Home';
import client from '../lib/contentful';

export default async function Homes() {
  const fetchContentfulData = async () => {
    const res = await client.getEntries({
      content_type: 'homes',
    });
    return res.items;
  };
 

  const data = await fetchContentfulData(); 


  console.log("data is: ",data);
  
 
  

  return (
    <> 
      <Home exhibitions={data} /> 
    </>
  );
}
