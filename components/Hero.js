const Hero = (props) => (
    <div className="hero-wrapper">
        <p>This month, you've spendt</p>
        <div className="content-wrapper">
            <p className="spendt-number">${props.amount}</p>
            <a onClick={props.onResetHandler}>Reset</a>
        </div>

        <style jsx>{`
            .hero-wrapper {
                background: #F2F2F7;
                padding: 10px 15px;
                border-radius: 10px;
            }

            .hero-wrapper p {
                margin: 0;
            }

            .spendt-number {
                font-size: 2em;
                font-weight: 600;
            }

            .content-wrapper {
                align-items: center;
                display: flex;
                justify-content: space-between;
            }
        `}</style>
    </div>
)

export default Hero