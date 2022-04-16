import React from "react";
import background from "src\image\background\rectanglemultimaniabg.png"

function background() {
    return (
        <div style={{ backgroundImage: `url(${background})`}}>
            Hello world
        </div>
    )
}