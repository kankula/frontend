import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getStrapiURL } from '../../../utils';
import { getStrapiMedia } from '../../../utils';
import Link from "next/link";
export default function AllGame() {
    // const [data, setData] = useState()
    const [game, setGame] = useState([])
    // const [game_en, setGame_en] = useState([])
    const router = useRouter()
    const { locale } = router
    // let translation = undefined
    // console.log(data)

    // async function gatGame() {


    //     if (locale === 'en') {
    //         const enRes = await axios.get(getStrapiURL('/games?locale=en&populate=%2A'))
    //         translation = await enRes.data
    //         setGame(translation)

    //     } else {
    //         const res = await axios.get(getStrapiURL('/games?populate=%2A'))
    //         const data = await res.data
    //         setGame(data)
    //     }
    // }
    // async function gatGame() {
    //     const [dataRes, en_dataRes] = await Promise.all([
    //         axios.get(getStrapiURL("/games?populate=%2A")),
    //         axios.get(getStrapiURL("/games?locale=en&populate=%2A"))
    //     ])
    //     const data = await dataRes.data
    //     const en_data = await en_dataRes.data

    //     setGame_en(en_data)
    //     setGame(data)
    //     if (locale === 'en') {
    //         setData(game_en)
    //     }
    //     setData(game)
    // }


    //     pageProps: { navigation: translationNav ? translationNav : navigationData || null }
    // }

    useEffect(() => {
        // gatGame()


        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };


        if (locale === 'en') {
            fetch(getStrapiURL('/games?locale=en&populate=%2A'), requestOptions)
                .then(response => response.json())
                .then(result => setGame(result.data))
        }else{
            fetch(getStrapiURL('/games?populate=%2A'), requestOptions)
            .then(response => response.json())
            .then(result => setGame(result.data))
        }




    }, [])
    return (
        <div className="container row row-cols-1 row-cols-md-4 g-4 mx-auto" >

            {game.map((item, i) => {
                const image = item.attributes.image
                // console.log(image)
                return (
                    <div className="col pe-auto" key={i}>
                        <Link href={`/game/${item.attributes.slug}`}><a><div className="card" >
                            <img src={`${getStrapiMedia(image.data.attributes.url)}`} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{item.attributes.title}</h5>
                            </div>
                        </div></a></Link>
                    </div>
                )
            }
            )}
        </div>
    )
}
