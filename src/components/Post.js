import React from 'react'

async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST', 
    mode: 'no-cors',  
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data)
  });
  console.log(response)
}

const developerName = "Hi Developer Enter your Name Here"


export default function Post() {
  return (
    <div>
      <button onClick = {() => { postData ('http://mockbin.org/bin/08e5560b-befa-41f3-9397-9a774b8397a9', {"position": "reactJS", "devName": developerName})}}>
         Post some data 
      </button>
    </div>
  )
}
