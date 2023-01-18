import '../styles/globals.css';
import Header from '@common/components/elements/header/Header';
import Footer from '@common/components/elements/footer/Footer';


const layoutStyles = {
    gridTemplateRows: 'min-content 1fr min-content'
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <head />
            <body className="grid min-h-screen" style={layoutStyles}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
