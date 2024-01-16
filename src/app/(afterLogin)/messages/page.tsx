import style from './message.module.css'
import Room from './_component/Room'

export default function Home() {
  return (
    <main className={style.main}>
      <header className={style.header}>
        <h2>쪽지</h2>
      </header>
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />

    </main>
  )
}
