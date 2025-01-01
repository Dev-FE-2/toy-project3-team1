import DetailPlayList from './components/DetailPlayList/DetailPlaylist'
import FeedList from './components/Feedlist/Feedlist'
import CompactFeedList from './components/Playlist/Playlist'

export default function App() {
  return (
    <h1>
      App.tsx
      <h1>Feedlist</h1>
      <FeedList
        image="https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=9046601&filePath=L2Rpc2sxL25ld2RhdGEvMjAxNC8yMS9DTFM2L2FzYWRhbFBob3RvXzI0MTRfMjAxNDA0MTY=&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10004"
        profileImage="https://via.placeholder.com/40"
        title="곰돌이 푸 그리고 피글렛곰돌이 푸 그리고 피글렛곰돌이 푸 그리고 피글렛"
        subtitle="곰돌이 푸와 피글렛"
        likes={284}
        comments={32}
        date="2025/1/1"
        track={6}
      />
      --
      <h1>Playlist</h1>
      <CompactFeedList
        image="https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=9046601&filePath=L2Rpc2sxL25ld2RhdGEvMjAxNC8yMS9DTFM2L2FzYWRhbFBob3RvXzI0MTRfMjAxNDA0MTY=&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10004"
        title="곰돌이 푸 그리고 피글렛고 피글렛곰돌이 푸고 피글렛곰돌이 푸 피글렛곰돌이"
        date="2024/12/30"
        likes={284}
        comments={32}
        isLocked={false}
        optionIcon="heart" // 'heart' 또는 'bookmark'
      />
      --
      <CompactFeedList
        image="https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=9046601&filePath=L2Rpc2sxL25ld2RhdGEvMjAxNC8yMS9DTFM2L2FzYWRhbFBob3RvXzI0MTRfMjAxNDA0MTY=&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10004"
        title="곰돌이 푸 그리고 피글렛고 피글렛곰돌이"
        date="2024/12/30"
        likes={150}
        comments={20}
        isLocked={true}
        optionIcon="bookmark"
      />
      --
      <CompactFeedList
        image="https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=9046601&filePath=L2Rpc2sxL25ld2RhdGEvMjAxNC8yMS9DTFM2L2FzYWRhbFBob3RvXzI0MTRfMjAxNDA0MTY=&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10004"
        title="곰돌이 푸 그리고 피글렛"
        date="2024/12/30"
        likes={150}
        comments={20}
        isLocked={true}
        optionIcon="option"
      />
      <h1>DetailPlaylist</h1>
      <DetailPlayList
        image="https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=9046601&filePath=L2Rpc2sxL25ld2RhdGEvMjAxNC8yMS9DTFM2L2FzYWRhbFBob3RvXzI0MTRfMjAxNDA0MTY=&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10004"
        title="곰돌이 푸 그리고 피글렛"
        subtitle="곰돌이 푸"
      />
      --
      <DetailPlayList
        image="https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=9046601&filePath=L2Rpc2sxL25ld2RhdGEvMjAxNC8yMS9DTFM2L2FzYWRhbFBob3RvXzI0MTRfMjAxNDA0MTY=&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10004"
        title="곰돌이 푸 그리고 피글렛곰돌이 푸 그리고 피글렛곰돌이 푸 그리고 피글렛"
        subtitle="곰돌이 푸"
      />
    </h1>
  )
}
