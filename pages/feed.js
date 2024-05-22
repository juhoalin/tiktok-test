import Head from 'next/head';
import styles from '../styles/Feed.module.css';
import VideoComponent from '../Components/videoComponent';
import videoData from '../api/videoData.json';

export default function Feed() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Feed</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
            <div className={styles.feed}>
                {videoData.map((video, index) => {
                    return <VideoComponent key={index} src={video.videoMeta.downloadAddr}/>;
                })}
            </div>
            </main>

            <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
        </div>
    );
}

