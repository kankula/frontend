import Link from "next/link"
import { getStrapiMedia } from "../../../utils"
export default function Hero({image, title, subTitle, button}) {
    
    return (
        <section className="p-5 mb-4 text-white" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${getStrapiMedia(image.data.attributes.url)})`}}>
        <div className="container-fluid py-5">
         <h1 className="display-5 fw-bold">{title}</h1>
         <p className="col-md-8 fs-4">{subTitle}</p>
         {button.map((item, i) => <Link key={i} href={item.href}><button className="btn btn-primary btn-lg" type="button">{item.label}</button></Link>)}
       </div>
       </section>
    )
}
