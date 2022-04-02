import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getStrapiURL } from '../../../utils';
import { getStrapiMedia } from '../../../utils';
import Link from "next/link";
export default function TestAllGame({games}) {
//    console.log(games.data)
   const game = games.data
    return (
        <div className="container row row-cols-1 row-cols-md-4 g-4 mx-auto" >

            {game.map((item, i) => {
                const image = item.attributes.image
                console.log(image)
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
