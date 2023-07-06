import Header from '../components/Header'
import contato from '../assets/contato.svg'
import styles from '../styles/pages/contato.module.css'

const Contato = () => {
  return (
    <>
      <Header title="Meus contatos" 
      image={contato} 
      />
      <main className={styles.form}>
        <form onSubmit={()=>{}}>
          <input 
          className={styles.formInput}
          type="text"
          placeholder="digite seu nome"
          onChange={()=>{}}
          value=""
          />
          <input 
          className={styles.formInput}
          type="email"
          placeholder="digite seu e-mail"
          onChange={()=>{}}
          value=""
          />
          <textarea
          className={styles.formInput}
          placeholder="digite sua mensagem"
          onChange={()=>{}}
          value=""
          />

          <button 
          className={styles.formButton}
          type="submit">Enviar Mensagem
          </button>
        </form>
      </main>
    </>
  )
}

export default Contato