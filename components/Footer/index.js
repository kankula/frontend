export default function Footer({ footer }) {
    // console.log(footer)
    return (
        <footer className="py-3 my-4">
            <div className="nav justify-content-center border-bottom pb-3 mb-3">
                <h1 className="text-center text-muted">{footer.title}</h1>
            </div>
            <p className="text-center text-muted">{footer.text}</p>
        </footer>
    )
}