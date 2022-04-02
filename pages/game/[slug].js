import axios from "axios"
import Layout from "../../components/layout"
import { getStrapiURL } from "../../utils"
import { getStrapiMedia } from "../../utils"
const Game = ({ navigation, footer, gameData }) => {
    // const [game] = gameData
    const [game] = gameData.data
    const image = game.attributes.image
    // console.log(image)
    return (
        <Layout navigation={navigation} footer={footer} >
            <div className="container">
                <h1>{game.attributes.title}</h1>
                <img src={`${getStrapiMedia(image.data.attributes.url)}`} />
                <p>{game.attributes.text}</p>
            </div>
        </Layout>
    )

}
export async function getServerSideProps(context) {

    const { params } = context
    const { slug } = params
    const { locale } = context
    let translation = undefined
    const res = await axios.get(getStrapiURL(`/games?filters[slug][$eq]=${slug}&populate[image]=*`))
    const data = await res.data
    if (locale === 'en') {
        const enRes = await axios.get(getStrapiURL(`/games?locale=en&filters[slug][$eq]=${slug}&populate[image]=*`))
        translation = await enRes.data
    }
    return {
        props: { gameData: translation ? translation : data || null },
    }
}
export default Game