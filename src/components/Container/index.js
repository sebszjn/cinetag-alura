import stules from './Container.module.css'

function Container({children}) {
    return (
        <section className={stules.container}>
            {children}
        </section>
    )
}

export default Container