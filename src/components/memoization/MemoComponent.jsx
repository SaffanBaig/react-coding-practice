import React, {memo, useState, useMemo, useCallback } from 'react'

function Swatch({params, onClick}) {
    console.log("Swatch RENDERED")
    return (
        
        <div onClick={onClick} style={{margin: 2, width: 75, height: 75, backgroundColor: params.color}}>
            {params.size}
            </div>
    )
}
// This will not rerender until its values are changed but does render if previous value != current value
// Remember memo only works for shallow copy not on obj or arrays to fix this we use useMemo
// It also breaks if we have onClick or other eventlistener. For that we use useCallback
const MemoedSwatch = memo(Swatch)
const MemoApp = () => {
    const [appRenderIndex, setAppRenderIndex] = useState(0);
    const [color, setColor] = useState("red");

    // if dependency not changed it returns exact current value
    const params = useMemo(() => ({color: color, size: 12}), [color])
    const onClick = useCallback(() => {}, [])

    console.log("RENDERED")
    return(
        <>
        <div>
            <button onClick={() => setAppRenderIndex(appRenderIndex+1)}>Re Render App</button>
            <button onClick={() => setColor(color === "red"? "blue": "red")}>Change Color</button>
        <MemoedSwatch onClick={onClick} params={params}/>
        </div>
        </>
    )
}

export default MemoApp;