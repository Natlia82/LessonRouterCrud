import React, { useState, useEffect, useRef } from "react";

function useJsonPost(url, textC) {
    //  console.log(url);
    //  console.log(textC);


    // useEffect(() => {
    const fethNews = async() => {
            let response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    content: textC
                })
            });


        }
        //   fethNews();

    //  }, []);
    fethNews();
}

export default useJsonPost;