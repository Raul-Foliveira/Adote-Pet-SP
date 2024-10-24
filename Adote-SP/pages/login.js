import React, { useState } from 'react';
import styles from '../styles/login.module.css'; // ajuste o caminho se necessário

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    const handleBack = () => {
        // Lógica para voltar (por exemplo, redirecionar para uma página anterior)
        console.log("Voltar");
        // Aqui você pode usar o React Router ou outra lógica para navegar
    };

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src="/images/gatoLogin.jpg" alt="Imagem de fundo" className={styles.image} />
            </div>
            <div className={styles.loginContainer}>
                <h1 className={styles.welcomeTitle}>Bem vindo</h1>
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
                    <div className={styles.buttonContainer}>
                        <button className={styles.button} type="submit">Entrar</button>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.button} type="button" onClick={handleBack}>Voltar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
