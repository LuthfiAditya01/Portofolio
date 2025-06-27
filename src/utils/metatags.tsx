import { Helmet } from "react-helmet-async";

export default function Metatags({title='', description='', image='', name=''}) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={window.location.href} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={name} />
            <link rel="icon" type="image/svg+xml" href={image} />

        </Helmet>
    )
}