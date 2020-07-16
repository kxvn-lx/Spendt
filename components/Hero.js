const Hero = (props) => (
    <div className="hero-wrapper">
        <p>This month, you've spendt</p>
        <p className="spendt-number">${props.amount}</p>

        <style jsx>{`
            .hero-wrapper {
                background: #F2F2F7;
                padding: 10px 15px;
                border-radius: 10px;
            }

            .spendt-number {
                font-size: 2em;
                font-weight: 600;
            }
        `}</style>
    </div>
)

export default Hero