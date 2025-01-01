import FeedList from './components/Feedlist/Feedlist'

export default function App() {
  return (
    <h1>
      App.tsx
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
    </h1>
  )
}
