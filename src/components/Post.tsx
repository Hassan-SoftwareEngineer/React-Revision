import React from 'react';

type PostProps = {
  title : string;
  content : string;
}

const Post : React.FC <PostProps> = (props) => {
  return (
    <div className='flex flex-col gap-3 p-6 text-gray-700 bg-white rounded-md text-base w-auto max-w-sm mx-auto text-start'>
      <p> {props.title} </p>
      <p> {props.content} </p>
    </div>
  )
}

export default Post;
