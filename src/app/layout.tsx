import '../styles/globals.css';
import Header from '@common/components/elements/header/Header';
import Footer from '@common/components/elements/footer/Footer';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <head />
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
