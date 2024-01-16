import Link from 'next/link'
import style from './post.module.css'
import ActionButtons from './ActionButtons'
import dayjs from 'dayjs'
import 'dayjs/locale/ko' // 한국어 로케일 추가

import relativeTime from 'dayjs/plugin/relativeTime';
import PostArticle from './PostArticle'

import { faker } from '@faker-js/faker'

dayjs.extend(relativeTime);
dayjs.locale('ko'); // 전역 로케일을 한국어로 설정

type Props = {
    noImage?: boolean
}

export default function Post({ noImage }: Props) {

    const target = {
        postId: 1,
        User: {
            id: 'changheee',
            nickname: '창히',
            image: '/duck.jpeg',
        },
        content: '클론코딩 힘들어요',
        createdAt: new Date(),
        Images: [
            {
                imageId: 1, link: faker.image.urlLoremFlickr()
            }
        ],
    }

    if (Math.random() > 0.5 && !noImage) {
        target.Images.push(
            { imageId: 1, link: faker.image.urlLoremFlickr() },
            { imageId: 2, link: faker.image.urlLoremFlickr() },
            { imageId: 3, link: faker.image.urlLoremFlickr() },
            { imageId: 4, link: faker.image.urlLoremFlickr() },
        )
    }

    return (
        <PostArticle post={target}>
            <div className={style.postWrapper}>
                <div className={style.postUserSection}>
                    <Link href={`/${target.User.id}`} className={style.postUserImage}>
                        <img src={target.User.image} alt={target.User.nickname} />
                        <div className={style.postShade} />
                    </Link>
                </div>
                <div className={style.postBody}>
                    <div className={style.postMeta}>
                        <Link href={`/${target.User.id}`}>
                            <span className={style.postUserName}>{target.User.nickname}</span>
                            &nbsp;
                            <span className={style.postUserId}>@{target.User.id}</span>
                            &nbsp;
                            ·
                            &nbsp;
                            <span className={style.postData}>{dayjs(target.createdAt).fromNow(true)}</span>
                        </Link>
                    </div>
                    <div>{target.content}</div>
                    <div className={style.postImageSection}>
                        {target.Images && target.Images.length > 0 && (
                            <Link href={`/${target.User.id}/status/${target.postId}/photo/${target.Images[0].imageId}`}
                                className={style.postImageSection}
                            >
                                <img src={target.Images[0]?.link} alt="" />
                            </Link>
                        )}
                    </div>
                    <ActionButtons />
                </div>
            </div>
        </PostArticle>
    )
}

