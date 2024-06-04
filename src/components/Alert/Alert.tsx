import style from "./Alert.module.css";

export default function Alert({ children } : { children: React.ReactNode }) {
  return (
    <div className={style.alert}>
        {children}
    </div>
  )
}
