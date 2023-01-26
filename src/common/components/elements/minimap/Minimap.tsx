'use client'
import React, { useEffect, useRef } from 'react'

function Minimap() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const minimapRef = useRef<HTMLDivElement>(null)

    function paintMinimap() {
        const canvas = canvasRef.current;
        if(!canvas) return;
        const context = canvas.getContext('2d');
        if (!context) return;

        const rows = 25;
        const columns = 16;

        const squares = [...new Array(rows)].map((a, i) =>
            [...new Array(columns)].map((a, i) => { return { selected: false }; }));

        for(let i = 3; i <= 10; i++) {
            for(let j = 3; j <= 10; j++) {
                squares[i][j].selected = true;
            }
        }
        let width = minimapRef.current?.offsetWidth || 0;
        width = width <= 250 ? width : 250;
        let height = width / columns * rows;

        const squareWidth = Math.floor(width / columns);
        const squareHeight = Math.floor(height / rows);
        canvas.width = width;
        canvas.height = height;


        if (context) {
            context.fillStyle = 'black';
            context.fillRect(0, 0, squareWidth * columns + 1, squareHeight * rows + 1);
            squares.forEach((line, i) => {
                line.forEach((square, j) => {
                    context.fillStyle = (square.selected) ? '#334155' : '#E2E8F0';
                    context.fillRect(squareWidth * j + 1, squareWidth * i + 1, squareWidth - 1, squareWidth - 1);
                });
            });
        }
    }

    useEffect(() => {
        paintMinimap();
        window.addEventListener('resize', paintMinimap);
        return () => { window.removeEventListener('resize', paintMinimap)}
    }, [])

    return (
        <div className="minimap space-y-2" ref={minimapRef} >
            <p className="font-bold">Minimap</p>
            <canvas ref={canvasRef} className="" />
        </div>
    )
}

export default Minimap;
