import React, { useState } from 'react';
import styles from '../styles/login.module.css'; // ajuste o caminho se necessário
import Link from 'next/link';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src="/images/gatoLogin.jpg" alt="Imagem de fundo" className={styles.image} />
            </div>
            <div className={styles.loginContainer}>
                <h1 className={styles.welcomeTitle}>Bem vindo!</h1>
                <h2 className={styles.title}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="email">Email:</label>
                        <input
                            className={styles.input}
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="password">Senha:</label>
                        <input
                            className={styles.input}
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <p className={styles.forgotPassword}>Esqueceu a sua senha?</p>

                    {/* Botão Entrar */}
                    <div className={styles.buttonContainer}>
                        <button className={styles.button} type="submit">Entrar</button>
                    </div>

                    {/* Botão Não possui uma conta */}
                    <div className={styles.buttonContainer}>
                        <Link href="/cadastro" passHref>
                            <button className={styles.button} type="button">Não possui uma conta?</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
