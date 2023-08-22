import Head from "next/head"

export default function Blog({ title, description }) {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>
        <h1>Article</h1>
        {/* <h1 className="content">
            Env User {process.env.DB_USER} Password {process.env.DB_PASSWORD}
        </h1> */}
        <h1 className="content">
            Env Analytics {process.env.NEXT_PUBLIC_ANALYTICS_ID} 
        </h1>
    </>
  )
}


export async function getServerSideProps() {
    // const user = process.env.DB_USER
    // const password = process.env.PASSWORD
    return {
        props: {
            title: 'Article Title',
            description: 'Article Description'
        }
    }
}
