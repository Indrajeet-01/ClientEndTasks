import {useRouter} from 'next/router'

function detailedNews() {
    const router = useRouter()
    const newsId = router.query.newsId
    return  <h1>
        this is detailed page of news
    </h1>
}

export default detailedNews