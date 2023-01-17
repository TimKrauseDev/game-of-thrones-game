import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer>
        <div className="px-2 py-3 bg-slate-700">
            <div className="container px-4">
                <div className="w-full">
                    <a
                        href="https://timkrause.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm leading-relaxed inline-block py-2 text-white"
                    >
                        Copyright © 2023 | Tim Krause
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
