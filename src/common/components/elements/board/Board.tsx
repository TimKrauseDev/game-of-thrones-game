'use client'
import React, { useEffect, useRef } from 'react'

function Board() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const boardRef = useRef<HTMLDivElement>(null)

    function paintBoard() {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const context = canvas.getContext('2d');
        if (!context) return;

        const rows = 7;
        const columns = 7;

        const squares = [...new Array(rows)].map((a, i) =>
            [...new Array(columns)].map((a, i) => { return { selected: false }; }));

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                squares[i][j].selected = true;
            }
        }
        let width = boardRef.current?.offsetWidth || 0;
        width = width <= 400 ? width : 400;
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
                    context.fillStyle = (square.selected) ? 'lightgreen' : '#E2E8F0';
                    context.fillRect(squareWidth * j + 1, squareWidth * i + 1, squareWidth - 1, squareWidth - 1);
                });
            });
        }
    }

    useEffect(() => {
        paintBoard();
        window.addEventListener('resize', paintBoard);
        return () => { window.removeEventListener('resize', paintBoard) }
    }, [])

    return (
        <div className="board space-y-2" ref={boardRef} >
            <p className="font-bold">Board</p>
            <canvas ref={canvasRef} className="m-auto" />
        </div>
    )
}

export default Board;
