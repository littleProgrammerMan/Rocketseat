import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/109993412?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Victor Costa</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time dateTime="">Publicado há 1h</time>
            </header>
        </article>
    )
}