import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Argon Gate — Outsourcing de Desenvolvimento de Software';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
    return new ImageResponse(
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#08090A',
                padding: '60px',
            }}
        >
            <div
                style={{
                    width: 80,
                    height: 4,
                    backgroundColor: '#2563EB',
                    marginBottom: 40,
                    borderRadius: 2,
                }}
            />

            <div
                style={{
                    fontSize: 64,
                    fontWeight: 700,
                    color: '#F1F5F9',
                    letterSpacing: '-0.02em',
                    marginBottom: 24,
                }}
            >
                Argon Gate
            </div>

            <div
                style={{
                    fontSize: 28,
                    fontWeight: 400,
                    color: '#94A3B8',
                    textAlign: 'center',
                    maxWidth: 700,
                }}
            >
                Outsourcing de Desenvolvimento de Software
            </div>

            <div
                style={{
                    width: 80,
                    height: 4,
                    backgroundColor: '#2563EB',
                    marginTop: 40,
                    borderRadius: 2,
                }}
            />
        </div>,
        { ...size },
    );
}
