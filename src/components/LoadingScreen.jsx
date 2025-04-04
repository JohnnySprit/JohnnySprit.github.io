import { useEffect, useState } from "react";

export const LoadingScreen = ({onComplete}) => {
    const [text, setText] = useState("");
    const fullText = "<Johnny Zheng>";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
        setText(fullText.substring(0, index));
        index++;

        if(index > fullText.length) {
            clearInterval(interval)

            setTimeout(() =>{
                onComplete();
            }, 1000);
        }
    }, 100);

    return () => clearInterval(interval);
    }, [onComplete]);


    return(

    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
        <div className="text-4xl">
            {text} 
        </div>
        </div>
    );
}