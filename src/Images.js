import './App.css';
import React, { useEffect, useState } from "react";

function Images(props) {
    return (
      <div className='Images'>
        <p className='Explain'>Let's constantly click the following pictures and try to avoid the match by choosing the same one twice. Your current score and best score would be recorded at the upper right corner. So let's get started!</p>
        <ul>
          {props.randomImages.map((imageNumber) => {
            return (
              <li key="thanks">
                <img 
                  id={imageNumber}
                  src={props.src} 
                  alt={props.alt} 
                  onClick={(e) => {
                    // console.log("click1 the image %d", imageNumber);
                    // console.log("e");
                    // console.log(e.target.id);
                    props.renewal(e.target.id);
                  }}
                />
                <p>Image Number is: {imageNumber}</p>
                {/* <button onClick={(e) => {
                  console.log("click2 the image %d", imageNumber);
                  console.log("click e: %s", e.target);
                  props.renewal(imageNumber);
                }}/> */}
              </li>
            );
          })}
        </ul>
        {/* <button onClick={props.renewal}/> */}
      </div>
    );
  }

export default Images;
  