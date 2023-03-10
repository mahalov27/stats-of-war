import styles from "./Button.module.css"

const Button = ({name, func, id}) => {
    return (
        <button type="button" className={styles.btn} id={id} onClick={func}>{name}</button>
    )
}

export default Button;