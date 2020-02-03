
import React, {useState} from 'react';
const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setnickName] = useState('');

    const onChangeName = e => {
        setName(e.target.value)
    }

    const onChangeNickname = e => {
        setnickName(e.target.value)
    }

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickname} onChange={onChangeNickname}/>
            </div>
            <div>
                <div>
                    <b>이름:</b>{name}</div>
            </div>000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
            <div>
                <div>
                    <b>닉네임:</b>{nickname}</div>
            </div>
        </div>
    )
}

export default Info;