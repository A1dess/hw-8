export function User ({userInfo,hand}) {

    return(
        <div>
           <span>{userInfo.name}</span>
            <button onClick={hand}>more info</button>
            <p>---------------------------------</p>
        </div>
    )
}