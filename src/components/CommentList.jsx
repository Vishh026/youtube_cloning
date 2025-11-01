import React from 'react'
import Comment from './Comment'

const CommentList = ({comments}) => {
  return (
    <div>
      {comments.map((comment,index)=> (
       <div key= {index} >
         <Comment data = {comment} />
            {/* recursi */}
         <div className='pl-5 border-l-1 border-zinc-500'>
            <CommentList comments= {comment.replies}/>
         </div>
       </div>
       
      ))}
    </div>
  )
}

export default CommentList
