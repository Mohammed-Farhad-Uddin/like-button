import React, { useState } from 'react';
import './App.css';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

function App() {
  const[likeColor,setLikeColor]=useState("")
  // const handleLike=()=>{
  //     setLikeColor("primary")
  // }

    const handleLike=()=>{
      const color=likeColor?"":"primary"
      setLikeColor(color)
      }
      
  return (
    <div style={{textAlign:"center",position:"relative",top:"200px"}}>
        <ThumbUpAltIcon onClick={handleLike} color={likeColor}></ThumbUpAltIcon>
    </div>
  );
}

export default App;
