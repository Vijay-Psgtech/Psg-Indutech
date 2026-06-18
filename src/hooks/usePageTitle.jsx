import React, { useEffect } from "react";

const usePageTitle = (title) => {
    useEffect(() => {
        if (title === "Home") {
            document.title = `PSG Indutech — COE Indutech | Industrial Textiles, Prototyping & Incubation`;
        } else {
            document.title = `${title} - PSG COE INDUTECH`;
        }
    }, [title]);
}

export default usePageTitle;
