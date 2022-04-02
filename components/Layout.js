import Footer from "./Footer"
import Navigation from "./Navigation"

export default function Layout({ children, navigation, footer }) {
    // console.log(footer)
    return (
        <>
            <Navigation navigation={navigation.data.attributes} />
            {children}
            <Footer footer={footer.data.attributes}/>
        </>
    )
}