import styles from './style'

const CSSTest = () => {
  return (
    <div className='container'>
      <h2>Css Global, Inline Css</h2>
      <button type='button' className='btn btn-primary'>Primary</button>
      <p style={styles.textStyle}>hello world</p>
      <hr style={styles.dashStyle}/>
    </div>
  )
}

export default CSSTest