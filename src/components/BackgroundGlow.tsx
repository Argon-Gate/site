export function BackgroundGlow() {
    return (
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
            {/* Orb 1 — topo-direita */}
            <div
                className="absolute rounded-full"
                style={{
                    top: '5%',
                    left: '65%',
                    width: 500,
                    height: 500,
                    background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
                    opacity: 0.08,
                    filter: 'blur(120px)',
                    animation: 'drift1 40s ease-in-out infinite',
                }}
            />

            {/* Orb 2 — centro-esquerda */}
            <div
                className="absolute rounded-full"
                style={{
                    top: '40%',
                    left: '-5%',
                    width: 450,
                    height: 450,
                    background: 'conic-gradient(from 180deg, var(--color-accent), transparent, var(--color-accent))',
                    opacity: 0.06,
                    filter: 'blur(140px)',
                    animation: 'drift2 50s ease-in-out infinite',
                }}
            />

            {/* Orb 3 — inferior-direita */}
            <div
                className="absolute rounded-full"
                style={{
                    top: '75%',
                    left: '70%',
                    width: 400,
                    height: 400,
                    background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
                    opacity: 0.07,
                    filter: 'blur(130px)',
                    animation: 'drift3 60s ease-in-out infinite',
                }}
            />

            {/* Spotlight radial atrás do hero */}
            <div
                className="absolute"
                style={{
                    top: '10%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 800,
                    height: 600,
                    background: 'radial-gradient(ellipse, var(--color-accent-subtle) 0%, transparent 70%)',
                    opacity: 0.6,
                    pointerEvents: 'none',
                }}
            />

            {/* Textura noise via SVG */}
            <svg className="absolute inset-0 w-full h-full" style={{ mixBlendMode: 'overlay', opacity: 0.03 }}>
                <filter id="noise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noise)" />
            </svg>
        </div>
    );
}
