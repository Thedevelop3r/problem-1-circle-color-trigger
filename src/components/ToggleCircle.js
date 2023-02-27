import React, { useState } from 'react'

const initialColor = (Colors) => {
    const RandomColor = String(Math.floor((Math.random() * Colors.length)));
    return RandomColor === "0" ? "3" : RandomColor;
}

const ToggleCircle = () => {

    const Colors = ["null", "black", "red", "cyan", "blue", "lightblue", "yellow", "purple", "lime", "silver", "maroon", "green"];
    const [active, setActive] = useState(initialColor(Colors));

    const handleClick = (e) => {
        const id = e.target.id;

        active === id ? setActive("null") : setActive(id);

    }

    const Message = () => {
        return (<h1>Selected Color is <span style={{ color: `${Colors[Number(active)]}` }}>{Colors[Number(active)]}</span></h1>);
    };

    return (
        <>
            {active === "null" ? <h2>No Color Selected!</h2> : < Message />}
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                marginTop: "50px",
                flexWrap: "wrap"
            }}>

                {
                    Colors.map((circleColor, index) => {
                        if (circleColor === "null") return null;
                        return <Circle key={circleColor} id={String(index)} borderColor={circleColor} toggle={active === String(index) ? true : false} onClick={handleClick} />
                    })
                }
            </div>
        </>
    )
}

export default ToggleCircle

const Circle = (props) => {
    const { borderColor, toggle, id, onClick } = props;

    return (
        <div style={{
            border: `2px solid ${borderColor}`,
            width: "100px",
            height: "100px",
            backgroundColor: toggle ? `${borderColor}` : "",
            borderRadius: "50%",
            fontSize: "26px",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "8px",
            padding: "12px",
            color: borderColor === "black" && toggle ? "white" : "black"
        }} id={id} onClick={onClick} >
            {
                borderColor
            }
        </div>
    );
}