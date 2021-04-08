import Head from 'next/head'

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Trim - robbie.dev</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <h1 className="title">
                    Select an image
                </h1>

                <form action="/api/trim" method="post" encType="multipart/form-data">
                    <input type="file" name="image"/>
                    <input type="submit" value="Trim" />
                </form>

            </main>

            <footer>
                <p>
                    <span>Built by</span>
                    {' '}
                    <a href="https://robbie.dev">Robbie Jakob-Whitworth</a>
                    <span>.</span>
                    {' '}
                    <a href="https://github.com/robzwolf/trimmer">Source code</a>
                    {' '}
                    <span>on GitHub.</span>
                </p>
            </footer>

            {/*language=CSS*/}
            <style jsx>{`
                .container {
                    min-height: 100vh;
                    padding: 0 0.5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                main {
                    padding: 5rem 0;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                footer {
                    width: 100%;
                    height: 100px;
                    border-top: 1px solid #eaeaea;
                    text-align: center;
                    display: grid;
                    place-content: center;
                }
                
                footer a,
                footer a:visited {
                    color: black;
                }
                
                footer a:hover {
                    text-decoration: none;
                }

                .title {
                    margin: 0 0 20px;
                    line-height: 1.15;
                    font-size: 4rem;
                    text-align: center;
                }

                .logo {
                    height: 1em;
                }

                input {
                    font-size: 24px;
                }
            `}</style>

            <style jsx global>{`
              html,
              body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
              }

              * {
                box-sizing: border-box;
              }
            `}</style>
        </div>
    )
}
