export const metadata = {
    title: "Programação Web - U2",
    description: "Atividades de Programação Web"
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>{children}</body>
        </html>
    );
}
