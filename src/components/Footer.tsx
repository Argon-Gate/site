export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer
            style={{
                borderTop: '1px solid var(--color-border)',
                padding: '2rem 1.5rem',
            }}
        >
            <div
                className="flex items-center justify-between flex-wrap"
                style={{
                    maxWidth: 'var(--max-width)',
                    margin: '0 auto',
                    gap: '1rem',
                }}
            >
                <span
                    style={{
                        fontSize: 'var(--text-small)',
                        color: 'var(--color-text-secondary)',
                    }}
                >
                    &copy; {year} Argon Gate. Todos os direitos reservados.
                </span>

                <nav className="flex gap-6">
                    <a href="#servicos" className="link-animated">
                        Serviços
                    </a>
                    <a href="#processo" className="link-animated">
                        Processo
                    </a>
                    <a href="#contato" className="link-animated">
                        Contato
                    </a>
                </nav>
            </div>
        </footer>
    );
}
