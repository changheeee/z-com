'use client'
import { fakerKO as faker } from '@faker-js/faker'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ko'
import style from '../message.module.css'
import { useRouter } from 'next/navigation'

dayjs.locale('ko');
dayjs.extend(relativeTime)



export default function Room() {
    const router = useRouter();
    const user = {
        id: 'hero',
        nickname: '영웅',
        Messages: [
            { roomId: 123, content: '안녕하세요', createdAt: faker.date.recent() },
            { roomId: 123, content: '안녕히가세요', createdAt: faker.date.recent() },
        ]
    }

    const onClick = () => {
        router.push(`/messages/${user.Messages.at(-1)?.roomId}`)
    }

    return (
        <div className={style.room} onClickCapture={onClick}>
            <div className={style.roomUserImage}>
                <img src={faker.image.avatar()} alt="" />
            </div>
            <div className={style.roomChatInfo}>
                <div className={style.roomUserIfo}>
                    <b>@{user.id}</b>
                    &nbsp;
                    <span>{user.nickname}</span>
                    ・
                    &nbsp;
                    <span className={style.postDate}>
                        {dayjs(user.Messages?.at(-1)?.createdAt).fromNow(true)}
                    </span>


                </div>
                <div className={style.roomLastChat}>
                    {user.Messages?.at(-1)?.content}
                </div>
            </div>

        </div>
    )
}
