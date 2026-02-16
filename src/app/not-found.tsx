import Link from 'next/link';

export default function NotFound() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                padding: '2rem',
                backgroundColor: 'var(--color-bg-primary)',
                color: 'var(--color-text-primary)',
                fontFamily: 'var(--font-body)',
                textAlign: 'center',
            }}
        >
            <h1
                style={{
                    fontSize: '2rem',
                    fontWeight: 600,
                    fontFamily: 'var(--font-heading)',
                    marginBottom: '1rem',
                }}
            >
                Página não encontrada
            </h1>

            <p
                style={{
                    fontSize: '1.05rem',
                    color: 'var(--color-text-secondary)',
                    marginBottom: '2rem',
                }}
            >
                O conteúdo que você procura não existe ou foi movido.
            </p>

            <Link href="/" className="btn-primary" style={{ textDecoration: 'none' }}>
                Voltar para o início
            </Link>
        </div>
    );
}
