import React from "react";

export default function RefsArray(){
    const table = React.useRef()
    const tr = React.useRef([])

    const data = [
        ["JavaScript",100]
        ["React",150]
        ["REact",180]
        ["REact",200]
        ["REact",120]

    ]

    const onClickButton = (i) =>{
        const index = tr.current
    }
}