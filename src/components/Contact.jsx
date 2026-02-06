
import React from 'react';

const Contact = () => {
    return (
        <section id="contact" style={{ padding: '8rem 0' }}>
            <div className="container">
                <div style={{
                    maxWidth: '600px',
                    margin: '0 auto',
                    textAlign: 'center'
                }}>
                    <h2 style={{ marginBottom: '2rem', fontSize: '2.5rem', textTransform: 'uppercase' }}>Objednání</h2>
                    <p style={{ marginBottom: '3rem', color: 'var(--color-text-secondary)' }}>
                        Objednejte se na dentální hygienu ještě dnes. Těšíme se na Vaši návštěvu.
                    </p>

                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Jméno a Příjmení</label>
                            <input type="text" placeholder="Jan Novák" style={{
                                width: '100%',
                                padding: '1rem',
                                borderRadius: 'var(--radius-sm)',
                                border: '1px solid #DED3CE',
                                backgroundColor: '#FAFAFA',
                                fontFamily: 'var(--font-body)'
                            }} />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Telefon</label>
                            <input type="tel" placeholder="123 456 789" style={{
                                width: '100%',
                                padding: '1rem',
                                borderRadius: 'var(--radius-sm)',
                                border: '1px solid #DED3CE',
                                backgroundColor: '#FAFAFA',
                                fontFamily: 'var(--font-body)'
                            }} />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Typ ošetření</label>
                            <select style={{
                                width: '100%',
                                padding: '1rem',
                                borderRadius: 'var(--radius-sm)',
                                border: '1px solid #DED3CE',
                                backgroundColor: '#FAFAFA',
                                fontFamily: 'var(--font-body)'
                            }}>
                                <option>Dentální hygiena - dospělí</option>
                                <option>Dentální hygiena - děti</option>
                                <option>Bělení zubů</option>
                                <option>Konzultace</option>
                            </select>
                        </div>

                        <button className="btn-primary" style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}>
                            ODESLAT ŽÁDOST
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
