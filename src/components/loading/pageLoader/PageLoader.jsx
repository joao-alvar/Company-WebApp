import styles from './spinner.module.css'

const PageLoader = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div class={styles.loader} />
      </div>
    </>
  )
}

export default PageLoader
