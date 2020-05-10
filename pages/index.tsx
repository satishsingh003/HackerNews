import HackerNews from '../app/containers/organisms/NewsList';
import fetch from '../app/utils/serviceUtil';
import {HACKERNEWS_ENDPOINT} from '../app/constants';

export default function Index(pageProps) {
  return <HackerNews newsListData={pageProps.newsListData} />
}

Index.getInitialProps = async () => {
  const hackerNewsData = await fetch(HACKERNEWS_ENDPOINT);
  return {newsListData: hackerNewsData.data};
}