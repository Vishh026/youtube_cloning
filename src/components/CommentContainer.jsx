import React from "react";
import Comment from "./Comment";
import CommentList from "./CommentList";

const CommentContainer = () => {
  const commentsData = [
  {
    id: 1,
    user: "Aarav Sharma",
    profilePic: "https://i.pravatar.cc/150?img=1",
    text: "This tutorial was super helpful! Thanks for explaining everything clearly.",
    time: "2 hours ago",
    likes: 54,
    replies: [
      {
        id: 2,
        user: "Priya Verma",
        profilePic: "https://i.pravatar.cc/150?img=2",
        text: "Totally agree! The part about useEffect was gold 👏",
        time: "1 hour ago",
        likes: 12,
        replies: [
          {
            id: 3,
            user: "Rohan Patel",
            profilePic: "https://i.pravatar.cc/150?img=3",
            text: "Yes, and the example project made it even easier to understand.",
            time: "30 mins ago",
            likes: 3,
            replies: [],
          },
        ],
      },
      {
        id: 4,
        user: "Meera Joshi",
        profilePic: "https://i.pravatar.cc/150?img=4",
        text: "Can someone explain the difference between useEffect and useMemo?",
        time: "45 mins ago",
        likes: 8,
        replies: [],
      },
    ],
  },
  {
    id: 5,
    user: "Sahil Gupta",
    profilePic: "https://i.pravatar.cc/150?img=5",
    text: "Who else is watching this in 2025 😅?",
    time: "5 hours ago",
    likes: 89,
    replies: [
      {
        id: 6,
        user: "Kavya Singh",
        profilePic: "https://i.pravatar.cc/150?img=6",
        text: "Still relevant and super clear!",
        time: "3 hours ago",
        likes: 14,
        replies: [],
      },
    ],
  },
  {
    id: 7,
    user: "Ankit Yadav",
    profilePic: "https://i.pravatar.cc/150?img=7",
    text: "Can you make a video on React performance optimization next?",
    time: "1 day ago",
    likes: 22,
    replies: [
      {
        id: 8,
        user: "Ritika Jain",
        profilePic: "https://i.pravatar.cc/150?img=8",
        text: "That would be awesome — also cover lazy loading if possible!",
        time: "22 hours ago",
        likes: 9,
        replies: [],
      },
    ],
  },
];


  return (
    <div>
      {/* <Comment data = {commentsData[0]}/>
       */}
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
