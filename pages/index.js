import Layout from "../components/Layout";
import BlockManager from "../components/BlockManager";
import axios from 'axios';
import { getStrapiURL } from '../utils';
export default function Home({ navigation, footer, homeData }) {
  const {blocks} = homeData.data.attributes;
  console.log(blocks)
  return (
    <Layout navigation={navigation} footer={footer}>
      {blocks && <BlockManager blocks={blocks} />}
    </Layout>
  )
}
export async function getServerSideProps(context) {

  const { locale } = context
  // console.log(locale)
  let translation = undefined
  const res = await axios.get(getStrapiURL('/home?populate[blocks][populate]=image,button,games.image'))
  const data = await res.data
  if (locale === 'en') {
    const enRes = await axios.get(getStrapiURL('/home?locale=en&populate[blocks][populate]=image,button,games.image'))
    translation = await enRes.data
  }

  return {
    props: { homeData: translation ? translation : data || null },
  }
}
