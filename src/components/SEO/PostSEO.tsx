import { ArticleJsonLd, NextSeo } from "next-seo"

import { PostMetaType } from "@typing/post/meta"

import { config } from "blog.config"

function PostSEO({
    author,
    category,
    postUrl,
    update,
    preview,
    tags,
    title,
}: PostMetaType) {
    const publishedTime = new Date(update).toISOString()
    const fullPostUrl = `${config.url}${postUrl}`
    return (
        <>
            <NextSeo
                title={title}
                description={preview}
                canonical={fullPostUrl}
                openGraph={{
                    title,
                    type: "article",
                    article: {
                        publishedTime,
                        authors: [config.author.name, author],
                        tags,
                    },
                    url: fullPostUrl,
                    description: preview,
                    site_name: config.siteName,
                    locale: config.language,
                    images: [
                        {
                            url: config.author.bannerImageUrl,
                            alt: `welcome to ${config.siteName}!`,
                        },
                    ],
                }}
            />
            <ArticleJsonLd
                url={fullPostUrl}
                title={title}
                description={preview}
                authorName={config.author.name}
                publisherName={author}
                datePublished={publishedTime}
                images={[config.author.bannerImageUrl]}
                publisherLogo={config.author.logoImageUrl}
            />
        </>
    )
}

export { PostSEO }