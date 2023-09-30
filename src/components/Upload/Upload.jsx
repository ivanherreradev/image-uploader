import styles from './Upload.module.css'
import image from '../../assets/image.svg'

function Upload () {
  const handleDrop = (e) => {
    e.preventDefault()

    const file = e.dataTransfer.files[0]
    if (file) {
      console.log(file)
    }
  }

  return (
    <main className={styles.Upload}>
      <h2>Upload your image</h2>
      <p className={styles.description}>File should be jpeg, png,...</p>
      <section
        className={styles.dragDropContainer}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <div className={styles.dragDrop}>
          <img src={image} alt="Image for upload your image" />
          <p>Drag & Drop your image here</p>
        </div>
        <p>Or</p>
      </section>
      <button>Choose your file</button>
    </main>
  )
}

export default Upload
