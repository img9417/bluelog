import Head from 'next/head'
import Layout, { siteTitle } from '/components/layout'
import utilStyles from '/styles/sass/utils.module.scss'
import Link from 'next/link'
import { getSortedPostsData } from '/lib/codes'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Code({ allPostsData }) {
    return (
        <Layout code>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={"mt-8"}>
                <h1 className={"text-md text-primary dark:text-dark_primary"}>Leetcode</h1>
                <ul className={`${utilStyles.list} flex flex-wrap`}>
                    {allPostsData.filter((file) => {
                        return file.from == 'leetcode'
                    }).map(({ id, level }) => (
                        <li className={`${level} p-1 m-1.5 w-20 text-center rounded duration-300`} key={`${id}`}>
                            <Link href={`/cp/${id[0]}/${id[1]}`}>
                                <a className="text-sm">{`${id[1]}`}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
                <h1 className={"text-md text-primary dark:text-dark_primary mt-8"}>Baekjoon</h1>
                <ul className={`${utilStyles.list} flex flex-wrap`}>
                    {allPostsData.filter((file) => {
                        return file.from == 'baekjoon'
                    }).map(({ id, level }) => (
                        <li className={`${level} p-1 m-1.5 w-20 text-center rounded duration-300`} key={id}>
                            <Link href={`/cp/${id[0]}/${id[1]}`}>
                                <a className="text-sm">{`${id[1]}`}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}