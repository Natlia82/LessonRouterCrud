import React, { useState, useEffect, useRef } from "react";

function useJsonPost(url, textC) {
    // const [m, setM] = useState(null);

    // const [flag, setFlag] = useState(null);
    //useEffect(() => {
    const fethNews = async() => {
        try {
            //  setFlag(true);
            let response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    content: textC
                })
            });
            //  setErr(null);
        } catch (e) {
            //  setErr(e);
        } finally {
            // setFlag(false);
        }



    }
    fethNews();
    // console.log(flag)
    //return [{ err, flag }];

}

export default useJsonPost;