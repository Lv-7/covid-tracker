import { useState } from 'react'
import styles from '../styles/Home.module.css'


const Country = () => {

    const [datas, setData] = useState("")
    const [data, setState] = useState({})

    const Fetchdata = async () => {
        const res = await fetch(`https://disease.sh/v3/covid-19/countries/${datas}`)
        const a = await res.json()
        await setState(a)
    }

    const Log = (e) => {
        e.preventDefault()
        Fetchdata()
    }

    return (
        <div className={styles.main}>

            <form onSubmit={Log}>
                <input className={styles.input} type="text" onChange={e => setData(e.target.value)} name="name" id="name" />
                <button className={styles.btn} type="submit">get</button>
            </form>

            <div className={styles.new}>
                <p className={styles.p}>Cases : <span className={styles.span}>{data.cases}</span></p>
                <p className={styles.p}>todayCases : <span className={styles.span}>{data.todayCases}</span></p>
                <p className={styles.p}>todayDeaths : <span className={styles.span}>{data.todayDeaths}</span></p>
                <p className={styles.p}>recovered : <span className={styles.span}>{data.recovered}</span></p>
                <p className={styles.p}>todayRecovered : <span className={styles.span}>{data.todayRecovered}</span></p>
                <p className={styles.p}>active : <span className={styles.span}>{data.active}</span></p>
                <p className={styles.p}>critical : <span className={styles.span}>{data.critical}</span></p>
                <p className={styles.p}>deathsPerOneMillion : <span className={styles.span}>{data.deathsPerOneMillion}</span></p>
                <p className={styles.p}>casesPerOneMillion : <span className={styles.span}>{data.casesPerOneMillion}</span></p>
            </div>




        </div>
    )
}

export default Country

















// https://disease.sh/v3/covid-19/countries/usa

