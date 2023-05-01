import React, { useState, useEffect, useRef } from "react";

function useJsonPost(url, textC, met = 'POST') {
    console.log(textC);
    const fethNews = async() => {
        try {

            let response = await fetch(url, {
                method: met,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(textC)
            });

        } catch (e) {

        } finally {

        }



    }
    fethNews();


}

export default useJsonPost;