import bubbleImage from "../assets/bubble.png"
import {useState, useEffect} from 'react';

function BubbleBackground(){

    const [bubbles, setBubbles]= useState([]);

    useEffect(() => {
        generateBubbles();

        const handleResize = () => {
            generateBubbles();
        }
        window.addEventListener("resize", handleResize);

        return ()=> window.removeEventListener("resize", handleResize);
    }, []);


    function generateBubbles() {
        const numberOfBubbles = Math.floor(
            (window.innerWidth * window.innerHeight)/ 20000
        );

        const newBubbles = [];
        for(let i =0; i< numberOfBubbles; i++){
            const bubble={
                id:i,
                size: Math.random()*40+20,//tamanho da bolha entre 20 e 60px
                x: Math.random()*100,//posicao horizontal
                y:100 + Math.random()* 50, //posicao vertical comeca debaixo da tela 
                opacity: Math.random() * 0.4 + 0.3, //opacidade entre 30% e 70%
                animationDuration: Math.random() *10 +8, 
                delay:Math.random()* 5 //delay para aparecer,


            }
            newBubbles.push(bubble);
        }
        setBubbles(newBubbles);
    }

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {
                bubbles.map(bubble => {
                
                    return (<div
                    key={bubble.id}
                    className= "bubble animate-bubble-float"
                    style={{
                        width: bubble.size + "px",
                        height: bubble.size + "px",
                        left: bubble.x + "%",
                        top: bubble.y + "%",
                        opacity: bubble.opacity,
                        animationDuration: bubble.animationDuration + "s",
                        animationDelay: bubble.delay + "s",
                        backgroundImage: `url(${bubbleImage})`,
                        backgroundSize:"contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center"

                    }}
                    
                    />)
                })
            }

        </div>
    );
}

export default BubbleBackground;