
import React from 'react'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
const getApi = async () => {
  try {
    const getData = await fetch("https://cdn.contentful.com/spaces/ro0789tt2xp9/entries?access_token=cLeKQSjThtm0osKpvgEou1Nb-uNO18YWTTd6R-cUSZI&content_type=article")
    if (!getData.ok) {
      console.log("fetch is failed")
      throw new Error("fetch is failed")

    }
    return getData.json()



  }
  catch (err) {
    console.log(err)


  }

}


const page = async () => {
  const get = await getApi()
  //console.log(get)  
  return (
    <div>



      {get.items.map((item: any) => (
        <>
          
            <div>{item.fields.title}</div>
            <div>{documentToReactComponents(item.fields.articleText)}</div>
            <div>{get.includes.Asset.map((elem: any) => (
              <div key={get.fields.picture.sys.id}>
                {item.fields.picture.sys.id == elem.sys.id ?
                  <Image src={"https:" + elem.fields.file.url} alt="" width="100" height="100" /> : <div></div>}
              </div>

            ))}
            </div>
          

        </>

      ))}

    </div>
  )
}

export default page
